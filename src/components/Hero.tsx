import { motion } from "motion/react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Frontend Developer";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Background Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-lg md:text-xl font-semibold text-blue-600 mb-2">Hi, I'm</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight">
            Bhanu Prakash <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Thambali
            </span>
          </h1>
          <h3 className="text-2xl md:text-3xl font-medium text-slate-600 mb-6 h-10">
            {text}<span className="animate-pulse">|</span>
          </h3>
          <p className="text-slate-600 text-lg mb-8 max-w-lg leading-relaxed">
            I build responsive, user-friendly web applications with modern technologies. 
            Passionate about creating seamless digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="px-6 py-3 bg-white text-slate-800 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all shadow-sm hover:shadow-md flex items-center gap-2">
              Contact Me <Mail size={18} />
            </a>
            <a href="/resume.pdf" download="Bhanu_Prakash_Thambali_Resume.pdf" className="px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-500/30 flex items-center gap-2">
              Resume <Download size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-white overflow-hidden relative flex items-center justify-center bg-slate-100">
               <img 
                 src="/profile.jpeg" 
                 alt="Bhanu Prakash Thambali" 
                 className="w-full h-full object-cover object-top"
                 onError={(e) => {
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.nextElementSibling?.classList.remove('hidden');
                 }}
               />
               <div className="hidden absolute inset-0 flex items-center justify-center text-slate-300">
                  <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
               </div>
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2"
            >
              <span className="text-2xl">💻</span>
              <span className="font-bold text-slate-800">Frontend</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2"
            >
              <span className="text-2xl">🚀</span>
              <span className="font-bold text-slate-800">React</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
