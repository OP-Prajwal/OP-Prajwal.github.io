import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Blog />
      </main>
      <Footer />
    </>
  );
}
