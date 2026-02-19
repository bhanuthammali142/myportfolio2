import Section from "./Section";

export default function About() {
  return (
    <Section id="about" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 opacity-10"></div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm relative z-10">
             <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I am a <span className="font-semibold text-blue-600">Computer Science graduate</span> and passionate Frontend Developer with a strong foundation in building responsive web applications.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              My journey involves mastering <span className="font-semibold text-slate-900">JavaScript, Python, and SQL</span>, along with modern web tools. I thrive on solving complex problems and creating user-friendly interfaces that provide seamless digital experiences.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Currently, I'm focused on developing scalable solutions and continuously learning new technologies to stay ahead in the ever-evolving tech landscape.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Problem Solver</h3>
              <p className="text-slate-600">Strong logical thinking skills with a knack for debugging and optimizing code.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-cyan-100 text-cyan-600 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Detail Oriented</h3>
              <p className="text-slate-600">Focused on writing clean, maintainable code and ensuring pixel-perfect designs.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Team Player</h3>
              <p className="text-slate-600">Comfortable working in collaborative environments and adapting to team needs.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
