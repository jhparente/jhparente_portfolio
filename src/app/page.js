"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, AppWindow, Play, Blocks, CheckCircle, Database, Server, Smartphone, MonitorSmartphone, Code2, Layers, Wrench, Menu, X } from "lucide-react";

const GithubIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* Navigation Pill */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto max-w-sm md:max-w-none"
      >
        <div className="bg-white/80 border border-slate-200 rounded-full px-6 py-3 flex items-center justify-between md:justify-center gap-8 backdrop-blur-md shadow-lg">
          
          {/* Mobile Menu Button & Logo */}
          <div className="md:hidden flex items-center justify-between w-full">
            <span className="text-slate-900 font-semibold cursor-pointer">jhparente</span>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 focus:outline-none flex items-center">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <span className="text-slate-900 font-semibold cursor-pointer">about</span>
            <span className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer">education</span>
            <span className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer">experience</span>
          </div>
          
          {/* Desktop Nav Icons */}
          <div className="hidden md:flex items-center gap-4 text-slate-500 border-l border-slate-300 pl-6">
            <a href="https://github.com/jhparente" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
              <GithubIcon className="w-4 h-4 cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/johnrel-parente/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
              <LinkedinIcon className="w-4 h-4 cursor-pointer" />
            </a>
            <a href="mailto:parentejohnrel98@gmail.com" className="hover:text-slate-900 transition-colors">
              <Mail className="w-4 h-4 cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[60px] left-0 w-full bg-white/95 border border-slate-200 rounded-2xl p-5 shadow-xl flex flex-col gap-4 md:hidden backdrop-blur-xl"
            >
              <div className="flex flex-col gap-4 text-sm font-medium text-slate-600">
                <span className="hover:text-slate-900 cursor-pointer transition-colors px-2">about</span>
                <span className="hover:text-slate-900 cursor-pointer transition-colors px-2">education</span>
                <span className="hover:text-slate-900 cursor-pointer transition-colors px-2">experience</span>
              </div>
              <div className="flex items-center gap-6 pt-4 border-t border-slate-100 px-2 text-slate-500">
                <a href="https://github.com/jhparente" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
                  <GithubIcon className="w-5 h-5 cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/in/johnrel-parente/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
                  <LinkedinIcon className="w-5 h-5 cursor-pointer" />
                </a>
                <a href="mailto:parentejohnrel98@gmail.com" className="hover:text-slate-900 transition-colors">
                  <Mail className="w-5 h-5 cursor-pointer" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main className="max-w-[1200px] mx-auto px-6 pb-20">
        
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-32 pb-20"
        >
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-7 tracking-tight">
              Hi, I'm Johnrel Parente
            </h1>
            <p className="text-slate-600 leading-relaxed mb-10 text-lg">
              I am an Information Technology student at PLV who balances a passion for software development with a strong enthusiasm in technical support and networking. From writing scalable codes for applications to configuring secure connections and troubleshooting complex systems, I focus on building reliable, user-centric technology. I treat every challenge as an opportunity to deliver adaptable engineering and practical solutions that work seamlessly.
            </p>
            <div className="flex items-center gap-6">
              <button className="bg-slate-900 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-md">
                Download CV
              </button>
              <a href="#" className="text-sm text-purple-600 hover:text-purple-500 transition-colors flex items-center gap-2 font-medium">
                New experiences
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-slate-200 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden relative shadow-xl flex justify-center items-end">
               <div className="w-full h-full bg-cover bg-center absolute inset-0 opacity-90 mix-blend-multiply" style={{backgroundImage: "url('/img/profile-pic.png')"}}></div>
               <div className="z-10 bg-white/60 backdrop-blur-md px-4 py-2 rounded-lg mb-8 text-xs font-mono text-slate-800 border border-slate-200/50 shadow-sm font-medium">
                 {"<Code />"}
               </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-40 flex flex-col items-start gap-12 pt-20"
        >
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">Projects I've been developed</h2>
          </div>
          
          <div className="relative w-full">
            {/* Scroll Indicator */}
            <div className="absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-10 flex justify-end items-center pr-2 md:hidden">
               <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 opacity-70"><path d="m9 18 6-6-6-6"/></svg>
               </motion.div>
            </div>
            
            <div className="w-full overflow-x-auto pb-8 hide-scrollbar">
              <div className="flex items-center gap-6 min-w-max px-2 py-4">
                
                {/* Project 1 */}
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-[#D1E8E2] w-80 h-64 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden shadow-lg border border-slate-200 group cursor-pointer"
                >
                   <div className="w-full h-full flex items-center justify-center p-4">
                     <img src="/img/projects_developed_icon/silag.png" alt="Silag" className="w-auto h-24 object-contain group-hover:scale-110 transition-transform duration-300" />
                   </div>
                   <h3 className="font-semibold text-xl text-slate-800 text-center mt-2">Silag</h3>
                </motion.div>

                {/* Project 2 */}
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-slate-800 w-80 h-64 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden shadow-lg border border-slate-700 group cursor-pointer"
                >
                   <div className="w-full h-full flex items-center justify-center p-4">
                     <img src="/img/projects_developed_icon/OVERSEER LOGO(1).png" alt="Overseer" className="w-auto h-28 object-contain group-hover:scale-110 transition-transform duration-300" />
                   </div>
                   <h3 className="font-semibold text-xl text-white text-center mt-2">Overseer</h3>
                </motion.div>

                {/* Project 3 */}
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-emerald-900 w-80 h-64 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden shadow-lg border border-emerald-500 group cursor-pointer"
                >
                   <div className="w-full h-full flex items-center justify-center p-4">
                     <img src="/img/projects_developed_icon/VnB Logo1.png" alt="VnB Fixtures" className="w-auto h-24 object-contain group-hover:scale-110 transition-transform duration-300" />
                   </div>
                   <h3 className="font-semibold text-lg text-white text-center mt-2 leading-tight">VnB Fixtures Fabrication Display</h3>
                </motion.div>

              </div>
              
            </div>
          </div>
        </motion.section>

        {/* Tech Stack Grid */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-40 pt-10"
        >
          <h2 className="text-3xl md:text-4xl font-light text-slate-600 mb-16 max-w-md">
            These are the<br />
            <span className="font-semibold text-slate-900">technologies I've been using</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Programming Box */}
            <motion.div 
              whileHover={{ y: -6 }} 
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col gap-6"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                  <Code2 size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Programming</h3>
                  <p className="text-xs text-slate-500 font-medium">Core Languages</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-7 h-7 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center font-bold text-xs">C#</div>
                  C#
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-7 h-7 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center font-bold text-xs">JV</div>
                  Java
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-7 h-7 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold text-xs">PY</div>
                  Python
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-7 h-7 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center font-bold text-xs">PH</div>
                  PHP
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-7 h-7 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center font-bold text-xs">JS</div>
                  Javascript
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-7 h-7 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center font-bold text-[10px]">H5</div>
                  HTML
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700 font-medium col-span-1 sm:col-span-2">
                  <div className="w-7 h-7 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center font-bold text-[10px]">C3</div>
                  CSS
                </li>
              </ul>
            </motion.div>

            {/* Frameworks Box */}
            <motion.div 
              whileHover={{ y: -6 }} 
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col gap-6"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                  <Layers size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Frameworks</h3>
                  <p className="text-xs text-slate-500 font-medium">Libraries & Frameworks</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-7 h-7 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center font-bold text-[10px]">FA</div>
                  FastAPI
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-7 h-7 bg-red-50 text-red-600 rounded-lg flex items-center justify-center font-bold text-[10px]">LV</div>
                  Laravel
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-7 h-7 bg-cyan-50 text-cyan-600 rounded-lg flex items-center justify-center font-bold text-[10px]">TW</div>
                  Tailwind
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-7 h-7 bg-violet-50 text-violet-600 rounded-lg flex items-center justify-center font-bold text-[10px]">NE</div>
                  ASP.NET
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700 font-medium col-span-1 sm:col-span-2">
                  <div className="w-7 h-7 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center font-bold text-[10px]">FL</div>
                  Flutter
                </li>
              </ul>
            </motion.div>

            {/* Software Tools Box */}
            <motion.div 
              whileHover={{ y: -6 }} 
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col gap-6"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600">
                  <Wrench size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Software Tools</h3>
                  <p className="text-xs text-slate-500 font-medium">Productivity & Utilities</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-7 h-7 bg-red-50 text-red-600 rounded-lg flex items-center justify-center font-bold text-[10px]">MS</div>
                  Microsoft Office
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-7 h-7 bg-green-50 text-green-600 rounded-lg flex items-center justify-center font-bold text-[10px]">CP</div>
                  Cisco Packet Tracer
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-7 h-7 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold text-[10px]">GW</div>
                  Google Workspace
                </li>
              </ul>
            </motion.div>

          </div>
        </motion.section>

        {/* Awards Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10">My Awards</h2>
          
          <motion.div 
            whileHover={{ y: -4 }}
            className="w-full bg-white border border-slate-200 rounded-3xl md:rounded-full p-4 md:px-6 md:py-4 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-center justify-between gap-4"
          >
             <div className="flex items-center gap-5 w-full md:w-auto">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center shrink-0 shadow-inner">
                  <img src="/img/projects_developed_icon/OVERSEER LOGO(1).png" alt="Overseer" className="w-10 h-10 object-contain" />
                </div>
                <div>
                   <h3 className="font-bold text-slate-900 text-lg md:text-xl">People's Choice Award – Overseer Game</h3>
                </div>
             </div>
             <div className="text-slate-500 font-semibold text-sm bg-slate-50 px-5 py-2 rounded-full border border-slate-100 whitespace-nowrap">
                February 2026
             </div>
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        className="pb-10 pt-10 border-t border-slate-200 mt-10 relative"
      >
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-center px-6 relative">
          
          <div className="absolute left-6 text-xs text-slate-500 hidden md:block">
            jhparente © 2026
          </div>
          
          <div className="bg-white border border-slate-200 rounded-full px-6 py-3 flex items-center gap-8 w-full max-w-[400px] justify-between shadow-sm">
            <span className="text-slate-600 text-sm font-medium">Follow me</span>
            <div className="flex items-center gap-4 text-purple-600">
              <a href="https://github.com/jhparente" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800 transition-colors">
                <GithubIcon className="w-4 h-4 cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/johnrel-parente/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800 transition-colors">
                <LinkedinIcon className="w-4 h-4 cursor-pointer" />
              </a>
              <a href="mailto:parentejohnrel98@gmail.com" className="hover:text-purple-800 transition-colors">
                <Mail className="w-4 h-4 cursor-pointer" />
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-xs text-slate-500 md:hidden">
            jhparente © 2026
          </div>
          
        </div>
      </motion.footer>
      
      {/* CSS specific overrides */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
