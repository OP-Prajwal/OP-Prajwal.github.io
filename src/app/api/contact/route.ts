import { NextResponse } from "next/server";
import { Resend } from "resend";
import { headers } from "next/headers";

// Initialize Resend with the API key
const resend = new Resend(process.env.RESEND_API_KEY);

// --- In-Memory Rate Limiter ---
const RATE_LIMIT_MAX = 3;           // max 3 emails
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // per 15-minute window

const rateLimitMap = new Map<string, number[]>();

// Clean up stale entries every 30 minutes to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of rateLimitMap.entries()) {
    const valid = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (valid.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, valid);
    }
  }
}, 30 * 60 * 1000);

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Keep only timestamps within the current window
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX) {
    return true;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

export async function POST(req: Request) {
  try {
    // Get client IP for rate limiting
    const headersList = await headers();
    const forwarded = headersList.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || headersList.get("x-real-ip") || "unknown";

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Input length limits
    if (name.length > 100) {
      return NextResponse.json(
        { error: "Name is too long (max 100 characters)" },
        { status: 400 }
      );
    }
    if (email.length > 254) {
      return NextResponse.json(
        { error: "Email is too long" },
        { status: 400 }
      );
    }
    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long (max 5000 characters)" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["prajwalgaonkar24@gmail.com"],
      subject: `New Transmission from ${name.substring(0, 100)}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { message: "Transmission successful", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Transmission Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
