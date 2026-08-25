"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowUpRight, Video, Code, Terminal, MonitorPlay, Settings, Palette, Cpu, Mail } from "lucide-react";
import { ReactLenis } from "lenis/react";
import { useRef, useState, useEffect } from "react";

// This is the data for your projects. We can change these later!

const Github = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Youtube = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 7.1C2.4 8.7 2 10.3 2 12s.4 3.3.5 4.9c.1 1.7.5 3 2.1 3.2 2.5.3 5.1.5 7.4.5s4.9-.2 7.4-.5c1.6-.2 2-1.5 2.1-3.2.1-1.6.5-3.2.5-4.9s-.4-3.3-.5-4.9c-.1-1.7-.5-3-2.1-3.2C16.9 3.5 14.3 3.3 12 3.3s-4.9.2-7.4.5C3 4.1 2.6 5.4 2.5 7.1z" />
    <path d="m10 8 6 4-6 4z" />
  </svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const PROJECTS = [
  {
    title: "Gacha Game Edits",
    category: "Video Production",
    description: "High-impact smooth transition montages for anime & gacha communities.",
    icon: <Video className="w-5 h-5 mb-4 text-[#888888]" />,
  },
  {
    title: "Custom Discord Bots",
    category: "Engineering",
    description: "JavaScript-based community bots hosted via GitHub, Render, & Supabase.",
    icon: <Terminal className="w-5 h-5 mb-4 text-[#888888]" />,
  },
  {
    title: "Server Infrastructure",
    category: "Community Architecture",
    description: "Complete layouts, welcome templates, and role hierarchies for GALAX SMP & The ViGi.",
    icon: <Code className="w-5 h-5 mb-4 text-[#888888]" />,
  },
];

const CAPABILITIES = [
  {
    title: "Video Architecture",
    skills: ["Premiere Pro", "After Effects", "Color Grading", "Motion Graphics"],
    icon: <MonitorPlay className="w-5 h-5 text-white" />
  },
  {
    title: "Bot Development",
    skills: ["JavaScript", "Discord.js", "Render", "Supabase"],
    icon: <Cpu className="w-5 h-5 text-white" />
  },
  {
    title: "Community Ops",
    skills: ["Server Layouts", "Role Hierarchies", "Rule Frameworks", "Moderation"],
    icon: <Settings className="w-5 h-5 text-white" />
  },
  {
    title: "Asset Creation",
    skills: ["Live Wallpapers", "Custom Banners", "Card Design", "Typography"],
    icon: <Palette className="w-5 h-5 text-white" />
  }
];

const ARTWORKS = [
  {
    title: "Graphite Portraits",
    category: "Traditional Art",
    description: "Detailed pencil sketches focusing on realism and character portraits.",
    icon: <Palette className="w-5 h-5 mb-4 text-[#888888]" />,
  }
];

const EXPERIENCE = [
  {
    year: "2024 — Present",
    role: "Creative Developer & Community Architect",
    company: "Freelance",
    description: "Designing custom Discord bots, managing server infrastructure (GALAX SMP, The ViGi), and developing web assets."
  },
  {
    year: "2023 — Present",
    role: "B.Tech Engineering Student",
    company: "BPUT",
    description: "Pursuing an engineering degree, focusing on technical problem-solving, mathematical derivations, and full-stack logic."
  },
  {
    year: "2022 — Present",
    role: "Video Editor & Asset Creator",
    company: "VodiX Editz",
    description: "Producing high-impact transition montages, edits, and live wallpapers for gaming communities (Genshin, Honkai, Wuthering Waves)."
  },
  {
    year: "2020 — Present",
    role: "Pencil Sketch Artist",
    company: "Freelance",
    description: "Creating detailed graphite portraits and traditional artwork, focusing on realism and character illustration."
  }
];

const MARQUEE_TEXT = [
  "VIDEO PRODUCTION",
  "•",
  "DISCORD ARCHITECTURE",
  "•",
  "FRONTEND ENGINEERING",
  "•",
  "COMMUNITY OPS",
  "•",
  "ASSET CREATION",
  "•"
];

// Reusable component for advanced scroll animations
function FadeInView({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Custom Web Developer Cursor
function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over a link, button, or our project cards (which have the 'group' class)
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.group')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#888888] pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isHovering ? 1.5 : 1,
        backgroundColor: isHovering ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
        borderColor: isHovering ? "rgba(255,255,255,0)" : "rgba(136,136,136,1)",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
}

export default function Home() {
  const containerRef = useRef(null);
  
  // This tracks your scroll to create the 3D parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  // The image will move slower than the page as you scroll down
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <ReactLenis root>
      <CustomCursor />
      <main ref={containerRef} className="min-h-screen bg-[#111111] text-white selection:bg-white selection:text-black font-sans cursor-none">
      
      {/* 1. TOP MINIMAL NAVIGATION */}
      <header className="w-full border-b border-[#222222] px-6 py-5 md:px-12 flex items-center justify-between sticky top-0 bg-[#111111]/80 backdrop-blur-md z-50">
        <span className="text-xs uppercase tracking-[0.25em] text-white font-mono font-bold">
          NIKHIL // ARCHIVE
        </span>
        
        {/* Navigation Links (Anchor Tags for smooth scrolling) */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-[#888888]">
             <a href="#work" className="hover:text-white transition-colors">Work</a>
             <a href="#stack" className="hover:text-white transition-colors">Stack</a>
             <a href="#experience" className="hover:text-white transition-colors">Experience</a>
             <a href="#art" className="hover:text-white transition-colors">Artwork</a>
        </nav>

        <div className="flex items-center gap-6 text-xs uppercase tracking-widest font-semibold">
          <Link href="https://github.com/VODXNIKHON" target="_blank" className="hover:text-[#999999] transition-colors flex items-center gap-2">
            <Github className="w-4 h-4"/> <span className="hidden sm:block">VodXNikhon</span>
          </Link>
          <Link href="https://www.youtube.com/channel/UCpCsToU_hKUTaQI8nQGaA-g" target="_blank" className="hover:text-[#999999] transition-colors hidden sm:block"><Youtube className="w-4 h-4"/></Link>
          <Link href="https://discord.gg/QGKpqq3QrU" target="_blank" className="hover:text-[#999999] transition-colors"><Terminal className="w-4 h-4"/></Link>
          <Link href="https://www.instagram.com/vod_x_nikhon/?hl=en" target="_blank" className="hover:text-[#999999] transition-colors hidden sm:block"><Instagram className="w-4 h-4"/></Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
        
        {/* 2. HERO / BILLBOARD SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-16 md:py-24 border-b border-[#222222]"
        >
          <div className="mb-8">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#888888] mb-4 font-mono">
              Soumya Ranjan Ghadai // Nikhil
            </p>
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] font-[family-name:var(--font-bebas)]">
              Creative <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#cccccc] to-[#555555]">
                Developer.
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#222222] bg-[#161616]">
            {/* Portrait Photo with 3D Parallax */}
            <div className="lg:col-span-5 relative aspect-[4/5] w-full overflow-hidden bg-[#202020] border-b lg:border-b-0 lg:border-r border-[#222222]">
              <motion.div style={{ y: imageY }} className="w-full h-[120%] -mt-[10%] relative">
                {/* Standard img tag bypasses Next.js image corruption errors */}
                <img
                  src="/nikhil.png"
                  alt="Soumya Ranjan Ghadai (Nikhil)"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                />
              </motion.div>
            </div>

            {/* Description & Links */}
            <div className="lg:col-span-7 flex flex-col justify-between p-6 md:p-10 space-y-8">
              <div>
                <span className="inline-block px-3 py-1 bg-[#222222] text-[#aaaaaa] text-[11px] font-mono uppercase tracking-widest mb-6">
                  Full-Stack &amp; Content Architecture
                </span>
                <p className="text-xl md:text-2xl text-[#cccccc] font-light leading-relaxed">
                  Specializing in high-impact video editing, custom server applications, and community infrastructure. Bridging design, engineering, and digital media.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-y border-[#222222] py-6 text-xs font-mono uppercase">
                <div>
                  <span className="text-[#666666] block mb-1">Discord Identity</span>
                  <span className="text-white font-semibold">@mrtuff_is_live</span>
                </div>
                <div>
                  <span className="text-[#666666] block mb-1">Channel</span>
                  <span className="text-white font-semibold">VodiX Editz</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a href="mailto:ghadaisoumyaranjan29@gmail.com" className="px-8 py-4 bg-white text-black font-semibold text-xs uppercase tracking-widest rounded-full hover:scale-95 transition-transform duration-200 flex items-center gap-2">
                  Send An Email <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="https://discord.gg/QGKpqq3QrU" target="_blank" className="px-8 py-4 bg-[#111111] text-white font-semibold text-xs uppercase tracking-widest rounded-full border border-[#333333] hover:bg-[#222222] hover:scale-95 transition-all duration-200">
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 3. SELECTED WORKS (PROJECTS) */}
        <section id="work" className="py-16 md:py-24">
          <FadeInView>
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-[family-name:var(--font-bebas)]">
                Selected Works
              </h2>
              <span className="text-xs uppercase tracking-widest text-[#666666] font-mono pb-2 hidden sm:block">
                [ 03 Projects ]
              </span>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                 <div className="group border border-[#222222] bg-[#161616] p-8 hover:bg-[#1a1a1a] transition-colors cursor-pointer flex flex-col justify-between min-h-[300px] h-full">
                  <div>
                    {project.icon}
                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-white text-[#dddddd] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-[#666666] font-mono mb-6">
                      {project.category}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-[#999999] leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="w-full h-[1px] bg-[#333333] group-hover:bg-white transition-colors relative">
                      <span className="absolute right-0 -top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                        <ArrowUpRight className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </section>

        {/* 3.5 ARTWORK & YOUTUBE SHOWCASE */}
        <section id="art" className="py-16 md:py-24 border-t border-[#222222]">
          <FadeInView>
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-[family-name:var(--font-bebas)]">
                Artwork & Media
              </h2>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Artwork Block */}
            {ARTWORKS.map((art, index) => (
              <FadeInView key={index} delay={0.1}>
                 <div className="group border border-[#222222] bg-[#161616] p-8 hover:bg-[#1a1a1a] transition-colors cursor-pointer flex flex-col justify-between h-full min-h-[250px]">
                  <div>
                    {art.icon}
                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-white text-[#dddddd] transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-[#666666] font-mono mb-6">
                      {art.category}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#999999] leading-relaxed mb-6">
                      {art.description}
                    </p>
                  </div>
                </div>
              </FadeInView>
            ))}

            {/* YouTube Channel Block */}
             <FadeInView delay={0.2}>
                 <a href="https://www.youtube.com/channel/UCpCsToU_hKUTaQI8nQGaA-g" target="_blank" className="group border border-[#222222] bg-[#161616] p-8 hover:bg-[#1a1a1a] transition-colors cursor-pointer flex flex-col justify-between h-full min-h-[250px]">
                  <div>
                    <Youtube className="w-5 h-5 mb-4 text-[#888888] group-hover:text-white transition-colors" />
                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-white text-[#dddddd] transition-colors">
                      VodiX Editz
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-[#666666] font-mono mb-6">
                      YouTube Channel Archive
                    </p>
                  </div>
                  <div>
                    <div className="grid grid-cols-3 gap-2 border-t border-[#333333] pt-4 mt-2">
                       <div>
                          <span className="text-[10px] text-[#666666] block uppercase font-mono">Platform</span>
                          <span className="text-xs text-white uppercase font-bold">YouTube</span>
                       </div>
                       <div>
                          <span className="text-[10px] text-[#666666] block uppercase font-mono">Focus</span>
                          <span className="text-xs text-white uppercase font-bold">Montages</span>
                       </div>
                       <div className="text-right">
                          <ArrowUpRight className="w-4 h-4 inline-block text-[#888888] group-hover:text-white transition-colors" />
                       </div>
                    </div>
                  </div>
                </a>
              </FadeInView>
          </div>
        </section>

      </div>

      {/* 5. EXPERIENCE & TIMELINE */}
        <section id="experience" className="py-16 md:py-24 border-t border-[#222222]">
           <FadeInView>
            <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex items-end justify-between mb-12">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-[family-name:var(--font-bebas)]">
                Experience
              </h2>
            </div>
          </FadeInView>

          <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col">
            {EXPERIENCE.map((item, index) => (
               <FadeInView key={index} delay={index * 0.1}>
                <div className="group flex flex-col md:flex-row md:items-baseline justify-between border-b border-[#222222] py-8 hover:bg-[#161616] transition-colors cursor-default px-4 -mx-4">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <span className="text-xs uppercase tracking-widest text-[#666666] font-mono">
                      {item.year}
                    </span>
                  </div>
                  
                  <div className="md:w-3/4 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold uppercase tracking-tight text-[#dddddd] group-hover:text-white transition-colors">
                        {item.role}
                      </h3>
                      <span className="text-sm text-[#888888] mt-1 block">
                        {item.company}
                      </span>
                    </div>
                    
                    <div className="md:w-1/2">
                      <p className="text-sm text-[#999999] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </section>

      {/* 4. CAPABILITIES & TECH STACK */}
        <section id="stack" className="py-16 md:py-24 border-t border-[#222222]">
          <FadeInView>
            <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex items-end justify-between mb-12">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-[family-name:var(--font-bebas)]">
                Core Stack
              </h2>
            </div>
          </FadeInView>

          <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CAPABILITIES.map((cap, index) => (
               <FadeInView key={index} delay={index * 0.1}>
                <div className="border border-[#222222] bg-[#161616] p-6 hover:border-[#444444] transition-colors h-full">
                  <div className="w-10 h-10 rounded-full bg-[#222222] flex items-center justify-center mb-6">
                    {cap.icon}
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-4 text-[#dddddd]">
                    {cap.title}
                  </h3>
                  <ul className="space-y-2">
                    {cap.skills.map((skill, i) => (
                      <li key={i} className="text-xs uppercase tracking-widest text-[#888888] font-mono flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#444444] rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
            ))}
          </div>
        </section>

        {/* 6. INFINITE SCROLL MARQUEE */}
      <section className="py-8 border-y border-[#222222] overflow-hidden bg-[#161616] flex relative">
        <motion.div
          className="flex whitespace-nowrap items-center gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {/* We duplicate the array 4 times to ensure seamless infinite scrolling */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-8 items-center">
              {MARQUEE_TEXT.map((text, index) => (
                <span
                  key={index}
                  className={`text-2xl md:text-4xl font-black uppercase tracking-widest font-[family-name:var(--font-bebas)] ${
                    text === "•" ? "text-[#444444]" : "text-[#dddddd]"
                  }`}
                >
                  {text}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* EXPANDED FOOTER (Based on your SHOPNEST Reference) */}
      <footer className="border-t border-[#222222] bg-[#111111] pt-16 pb-8 px-6 md:px-12 text-sm text-[#888888]">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand/Logo Section */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-4">NIKHIL</h4>
            <p className="max-w-xs leading-relaxed">
              The digital foundation for creative projects — from video production and community architecture to frontend development and traditional art.
            </p>
            
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-4 text-xs">Explore</h4>
            <ul className="space-y-3 font-mono text-xs uppercase">
              <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
              <li><a href="#stack" className="hover:text-white transition-colors">Core Stack</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#art" className="hover:text-white transition-colors">Artwork</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-4 text-xs">Contact</h4>
            <a href="mailto:ghadaisoumyaranjan29@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors mb-4">
              <Mail className="w-4 h-4" /> ghadaisoumyaranjan29@gmail.com
            </a>
            <p className="text-xs leading-relaxed max-w-xs">
              Reach out for collaborations, freelance opportunities, or to discuss custom infrastructure and design projects.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto w-full border-t border-[#222222] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase">
           <p>© {new Date().getFullYear()} NIKHIL. ALL RIGHTS RESERVED.</p>
           
           <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              BACK TO TOP <ArrowUpRight className="w-3 h-3" />
           </button>
        </div>
      </footer>

      
    </main>
    </ReactLenis>
  );
}