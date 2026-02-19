import Section from "./Section";
import { Award, BookOpen } from "lucide-react";

const certifications = [
  {
    title: "SQL for Beginners",
    issuer: "Simplilearn",
    date: "2023"
  },
  {
    title: "JavaScript Certification",
    issuer: "Eduonix Learning Solutions",
    date: "2023"
  },
  {
    title: "Python for Everybody",
    issuer: "University of Michigan (Coursera)",
    date: "2022"
  },
  {
    title: "Smart India Hackathon",
    issuer: "Participant",
    date: "2022"
  },
  {
    title: "Pearson MePro English - Level 10",
    issuer: "Pearson (CEFR Level C2)",
    date: "2023"
  }
];

export default function Certifications() {
  return (
    <Section id="certifications" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Certifications & Education</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Certifications Column */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Award className="text-blue-600" /> Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex items-start gap-4 hover:border-blue-200 transition-colors">
                <div className="mt-1 min-w-[24px]">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{cert.title}</h4>
                  <p className="text-slate-500 text-sm">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <BookOpen className="text-blue-600" /> Education
          </h3>
          <div className="space-y-8 relative pl-8 border-l-2 border-slate-100 ml-3">
            <div className="relative">
              <div className="absolute -left-[39px] top-0 w-5 h-5 bg-white border-4 border-blue-600 rounded-full"></div>
              <h4 className="text-lg font-bold text-slate-900">B.Tech in Computer Science Engineering</h4>
              <p className="text-blue-600 font-medium">Malla Reddy College of Engineering and Technology</p>
              <p className="text-slate-500 text-sm mb-2">Aug 2019 – May 2023</p>
              <p className="text-slate-700 bg-slate-50 inline-block px-3 py-1 rounded text-sm font-medium">CGPA: 7.6 / 10</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[39px] top-0 w-5 h-5 bg-white border-4 border-slate-300 rounded-full"></div>
              <h4 className="text-lg font-bold text-slate-900">Intermediate (MPC)</h4>
              <p className="text-slate-700 font-medium">Sri Chaitanya Junior College</p>
              <p className="text-slate-500 text-sm mb-2">June 2017 – May 2019</p>
              <p className="text-slate-700 bg-slate-50 inline-block px-3 py-1 rounded text-sm font-medium">Percentage: 89.7%</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[39px] top-0 w-5 h-5 bg-white border-4 border-slate-300 rounded-full"></div>
              <h4 className="text-lg font-bold text-slate-900">Secondary School (10th)</h4>
              <p className="text-slate-700 font-medium">Indo-English High School</p>
              <p className="text-slate-500 text-sm mb-2">June 2016 – May 2017</p>
              <p className="text-slate-700 bg-slate-50 inline-block px-3 py-1 rounded text-sm font-medium">GPA: 9.0</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
