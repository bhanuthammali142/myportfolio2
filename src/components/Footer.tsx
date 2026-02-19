import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Bhanu Prakash Thambali. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="https://linkedin.com/in/tbhanu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="mailto:bhanuthammali26012@gmail.com" className="hover:text-white transition-colors">
            Email
          </a>
          <button 
            onClick={scrollToTop}
            className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
