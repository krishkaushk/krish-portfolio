import { PERSONAL_INFO } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-text-secondary tracking-wide">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}
        </p>
        <div className="flex items-center gap-6">
          <a href={PERSONAL_INFO.github}  target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors duration-200">
            GitHub
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors duration-200">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
