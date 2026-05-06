import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Prajwal",
  description: "Prajwal's professional resume",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-6 flex flex-col items-center bg-background">
      <div className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="font-heading text-3xl md:text-5xl font-bold uppercase text-text-primary">
          [Resume]
        </h1>
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 border border-border bg-accent text-background font-mono font-bold uppercase tracking-widest hover:bg-accent-dark transition-colors"
        >
          Download PDF
        </a>
      </div>
      <div className="w-full max-w-5xl h-[80vh] border border-border bg-surface overflow-hidden relative group">
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none md:hidden">
          <p className="font-mono text-sm text-text-primary uppercase bg-surface/80 p-4 border border-border">
            Pinch to zoom / Use PDF controls
          </p>
        </div>
        <iframe
          src="/resume.pdf"
          className="w-full h-full border-none"
          title="Prajwal Resume"
        />
      </div>
    </main>
  );
}
