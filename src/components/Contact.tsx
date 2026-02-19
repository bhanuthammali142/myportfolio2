import Section from "./Section";
import { Mail, Phone, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" className="bg-slate-900 text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="p-4 bg-white/10 rounded-xl text-blue-400">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Email</h3>
              <a href="mailto:bhanuthammali26012@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                bhanuthammali26012@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-4 bg-white/10 rounded-xl text-blue-400">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Phone</h3>
              <a href="tel:+916303816997" className="text-slate-300 hover:text-white transition-colors">
                +91 6303816997
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-4 bg-white/10 rounded-xl text-blue-400">
              <Linkedin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">LinkedIn</h3>
              <a href="https://linkedin.com/in/tbhanu" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                linkedin.com/in/tbhanu
              </a>
            </div>
          </div>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-500"
                placeholder="Your Name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-500"
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
            <textarea 
              id="message" 
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-500 resize-none"
              placeholder="How can I help you?"
            ></textarea>
          </div>

          <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </Section>
  );
}
