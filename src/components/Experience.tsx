import Section from "./Section";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <Section id="experience" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Work Experience</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>

        <div className="relative pl-8 md:pl-24 pb-12">
          {/* Timeline Dot */}
          <div className="absolute left-[-5px] md:left-[27px] top-0 w-3 h-3 bg-blue-600 rounded-full ring-4 ring-blue-100"></div>
          
          <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Frontend Developer</h3>
                <p className="text-blue-600 font-medium text-lg">SyntaEdge Global</p>
              </div>
              <div className="flex items-center text-slate-500 text-sm font-medium bg-white px-3 py-1 rounded-full border border-slate-200 w-fit">
                <Briefcase size={14} className="mr-2" />
                Sep 2025 – Feb 2026
              </div>
            </div>
            
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 text-blue-500">
                  <svg className="w-2 h-2 fill-current" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4"/></svg>
                </span>
                Developed responsive web interfaces ensuring high-quality user experiences across devices.
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 text-blue-500">
                  <svg className="w-2 h-2 fill-current" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4"/></svg>
                </span>
                Built reusable UI components to streamline development and maintain consistency.
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 text-blue-500">
                  <svg className="w-2 h-2 fill-current" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4"/></svg>
                </span>
                Integrated APIs with backend systems to fetch and display dynamic data.
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 text-blue-500">
                  <svg className="w-2 h-2 fill-current" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4"/></svg>
                </span>
                Fixed bugs and optimized performance for faster load times and smoother interactions.
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 text-blue-500">
                  <svg className="w-2 h-2 fill-current" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4"/></svg>
                </span>
                Ensured cross-browser compatibility and adhered to web accessibility standards.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
