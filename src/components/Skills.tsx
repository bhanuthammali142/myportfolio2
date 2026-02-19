import Section from "./Section";
import { motion } from "motion/react";
import { Code, Database, Layout, Smartphone, Terminal, Cpu, Globe, Layers, Command } from "lucide-react";

export default function Skills() {
  return (
    <Section id="skills" className="bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Arsenal</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          A curated collection of technologies I use to build digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
        
        {/* 1. React - The Hero Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-8 text-white relative overflow-hidden group shadow-lg"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:rotate-12 duration-500">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="12" cy="12" r="2" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="bg-white/20 w-fit p-2 rounded-lg mb-4 backdrop-blur-sm">
                <Cpu size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Modern Frontend</h3>
              <p className="text-blue-100 text-lg">Building interactive UIs with React ecosystem.</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-8">
              {["React", "Tailwind CSS", "Framer Motion", "Responsive Design"].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm backdrop-blur-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 2. JavaScript & Logic */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-1 bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
        >
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-yellow-100 text-yellow-600 rounded-lg group-hover:scale-110 transition-transform">
                <Code size={24} />
              </div>
              <span className="text-slate-400 text-xs font-bold uppercase">Core</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">JavaScript</h3>
            <p className="text-slate-500 text-sm mb-4 flex-grow">
              ES6+, Async/Await, DOM Manipulation, and modern patterns.
            </p>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-yellow-400 h-full w-[85%]"></div>
            </div>
          </div>
        </motion.div>

        {/* 3. Python & Backend */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-1 bg-slate-900 rounded-3xl p-6 text-slate-300 shadow-sm hover:shadow-md transition-shadow group"
        >
           <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-slate-800 text-green-400 rounded-lg group-hover:scale-110 transition-transform">
                <Terminal size={24} />
              </div>
              <span className="text-slate-600 text-xs font-bold uppercase">Backend</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Python</h3>
            <div className="space-y-2 mt-auto">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span> Django
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> PostgreSQL
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span> SQL
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. CMS & No-Code */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-1 md:row-span-1 bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
              <Layout size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-800">CMS</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 bg-slate-50 rounded-lg">
              <span className="font-medium text-slate-700">WordPress</span>
              <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">85%</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-slate-50 rounded-lg">
              <span className="font-medium text-slate-700">Elementor</span>
              <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">90%</span>
            </div>
          </div>
        </motion.div>

        {/* 5. Web Fundamentals */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-2 bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl p-6 border border-orange-100 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 h-full">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-orange-200 text-orange-700 rounded-lg">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Web Fundamentals</h3>
              </div>
              <p className="text-slate-600 text-sm">
                Deep understanding of semantic HTML5 and modern CSS3 layout techniques including Flexbox and Grid.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-2 text-orange-600 font-bold text-xl">
                  90%
                </div>
                <span className="text-xs font-bold text-slate-500">HTML</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-2 text-blue-600 font-bold text-xl">
                  85%
                </div>
                <span className="text-xs font-bold text-slate-500">CSS</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 6. Other Tools */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:col-span-1 bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Command size={20} className="text-slate-400" />
            Tools & Others
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Git", "Android Studio", "C Lang", "MS Excel", "VS Code"].map((tool) => (
              <span key={tool} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md hover:bg-slate-200 transition-colors cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
