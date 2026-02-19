import Section from "./Section";
import { motion } from "motion/react";
import { ExternalLink, Github, Smartphone, Globe, Gamepad, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Thrinethra",
    subtitle: "Women's Safety App",
    description: "An offline safety app designed to function without internet connectivity. Features include self-defense tutorial videos and emergency contact storage for quick access in critical situations.",
    tags: ["Android Studio", "Java", "Mobile App"],
    icon: <Smartphone size={24} className="text-white" />,
    color: "bg-pink-500",
    link: "#"
  },
  {
    title: "Cryptocurrency Price Analysis",
    subtitle: "AI-Powered Prediction",
    description: "Utilized two AI modeling frameworks to analyze and predict price dynamics of leading cryptocurrencies (Bitcoin, Ethereum, Ripple) to enhance market trend understanding.",
    tags: ["Python", "Django", "PostgreSQL", "AI/ML"],
    icon: <TrendingUp size={24} className="text-white" />,
    color: "bg-indigo-500",
    link: "#"
  },
  {
    title: "FoxCarz Rentals",
    subtitle: "Car Rental Website",
    description: "A landing page built with WordPress and Elementor using the Blocksy theme. Provides information about rentals and pricing with direct WhatsApp integration for customer communication.",
    tags: ["WordPress", "Elementor", "Web Design"],
    icon: <Globe size={24} className="text-white" />,
    color: "bg-orange-500",
    link: "#"
  },
  {
    title: "Tic-Tac-Toe",
    subtitle: "Console Game",
    description: "A classic two-player console game implementing core game logic using C programming. Demonstrates strong understanding of algorithms and data structures.",
    tags: ["C Programming", "Game Logic", "Console"],
    icon: <Gamepad size={24} className="text-white" />,
    color: "bg-emerald-500",
    link: "#"
  }
];

export default function Projects() {
  return (
    <Section id="projects" className="bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
          >
            <div className={`h-2 ${project.color}`}></div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl ${project.color} shadow-lg shadow-${project.color}/30`}>
                  {project.icon}
                </div>
                <a href={project.link} className="text-slate-400 hover:text-blue-600 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{project.title}</h3>
              <p className="text-sm font-medium text-blue-600 mb-4">{project.subtitle}</p>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
