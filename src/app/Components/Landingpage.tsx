"use client";

import { useState, useEffect, useRef } from "react";
import React from "react";
import "./Landingpage.css";
import "./Footer.css";
import Image from "next/image";
import WhyJoin from "./WhyJoin";
import TextLoop from "./textloop.js";
import WorldMapProfiles from "./Map.jsx";
import {CaseStudiesAnimated} from './SectionFeatures';
import Grid from "./Grid";
import { Footerdemo } from "./Ui/footer-section";

// --- Header ---
const GenieLogo: React.FC = () => (
  <div className="flex items-center">
    <span className="text-4xl font-extrabold tracking-tighter text-[#18453B]">
      Genie
    </span>
    <div className="w-2 h-2 bg-astro-green rounded-full ml-1"></div>
  </div>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);

  // Close on click outside and on Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target) && toggleBtnRef.current && !toggleBtnRef.current.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("mousedown", handleClick);
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("mousedown", handleClick);
      window.removeEventListener("keydown", handleKey);
    };
  }, [isMobileMenuOpen]);

  // Auto-close when resizing to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setIsMobileMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return (
    <header className="py-6">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <GenieLogo />
          <nav className="hidden lg:flex items-center gap-8 text-gray-600 font-medium">
            <a href="#" className="hover:text-black transition-colors">
              Why Genie
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Genie Users
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-flex bg-[#18453B] text-white font-bold py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all">
              Join Beta
            </button>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-controls="mobile-nav"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              ref={toggleBtnRef}
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-astro-green/40"
            >
              {isMobileMenuOpen ? (
                // X icon
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>
              ) : (
                // Hamburger icon
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path fillRule="evenodd" d="M3.75 5.25A.75.75 0 0 1 4.5 4.5h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 7.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 6.75a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z" clipRule="evenodd" /></svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile nav */}
        <div
          id="mobile-nav"
          className={`${isMobileMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} lg:hidden grid transition-[grid-template-rows,opacity] duration-300 ease-out`}
          ref={menuRef}
        >
          <div className="overflow-hidden">
            <div className="mt-4 rounded-xl border border-gray-200 bg-white/80 backdrop-blur p-4 shadow-sm">
              <div className="flex flex-col gap-3 text-gray-700 font-medium">
                <a href="#" className="hover:text-black transition-colors">Why Genie</a>
                <a href="#" className="hover:text-black transition-colors">Genie Users</a>
              </div>
              <button className="mt-4 w-full bg-[#18453B] text-white font-bold py-2.5 px-4 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all">
                Join Beta
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// wsiadjiwej fiojwefjpej fija09erjf cwu0f9wejjf09auc09ejfc0e0few foihewohf09hweoiaofh0heafoisdanovha9hrfnfofhfhashlfflahhashfslhlhsdofhohfhsohdflshlhfhslkflawhowhfksfhlhsfhshdflhasfhhdfhohfhhffhehfhsdfhshdfhs8rhoshefhsdlfhosdhofhsdlfhshfohwehflhsodhfhsldcnsdhdohfoihdhflhsdalhfhodfhlsdhflhsdrehihksdhflhsodhfohsfhksdhklfhsdhfshafhashosiahfisahklfhaslhsofhhfaehhrhefhhdfdhhdghhgjdsshdfhashfhashhhsdfahfhdsfhasdhdhfaeehhaffhwefhdfawfhsdfkdndhfhfehrhfhhhweihrehihdfhsldkahflhasdafhsdhfahhsdhfsdhhsdhfsdhfhdslahfldkshaflhasdfhoewhksfhsldkhfhsdofhsdflsdlahfhsdhfsdnflohanlfhohsdofsdfoshfhdsnxe8eaopupowaprweuguhsawqaqhdkhofawqwpgdhxdsfhdfhfhhfhf

// --- Hero Component ---
const Hero: React.FC = () => {
  return (
    <section className="pt-20 text-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200/80 rounded-full px-4 py-2 mb-6 shadow-sm">
          <span className="world text-sm font-medium text-gray-700 flex items-center gap-2">
            <img className="bird w-5 h-5" src="./bird.webp" alt="bird" />
            Worldwide Conversational Matchmaking
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
          Hi, I&apos;m <span className="text-[#ad9437]">Genie</span>, the first
          AI-powered
          <br />
          matchmaker for Muslims globally.
        </h1>
        <p className="mt-6 text-gray-500 text-lg max-w-3xl mx-auto italic">
          The future of matchmaking is here. Genie uses Voice AI in 10 major
          languages, validated psychological frameworks, and advanced algorithmic
          matching to create meaningful values-based connections for Muslims
          globally.
        </p>
        <div className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow w-full px-5 py-3.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-astro-green/50 transition-shadow"
            aria-label="Email address"
          />
          <button className="bg-[#18453B] text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg flex-shrink-0">
            Join Beta
          </button>
        </div>

        <div className="hero-media relative w-5/6 h-auto flex mx-auto justify-center">
          <img
            src="/mobile.123.png"
            alt="Hero Image"
            className="w-full h-auto mt-16"
          />
        </div>
      </div>
    </section>
  );
};

// --- Features Component ---
interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  rotation: string;
  translateY: string;
  grayscale?: boolean;
}

const features: FeatureCardProps[] = [
  {
    title: "AI Matchmaking",
    description: "Our AI finds matches on deep compatibility, not just swipes.",
    image:
      "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=300&auto=format&fit=crop&q=60",
    rotation: "-rotate-6",
    translateY: "translate-y-0",
  },
  {
    title: "Voice AI Connections",
    description: "Connect authentically using our Voice AI in 10+ languages.",
    image:
      "https://images.unsplash.com/photo-1554200876-56c2f25224fa?w=300&auto=format&fit=crop&q=60",
    rotation: "rotate-3",
    translateY: "translate-y-4",
  },
  {
    title: "Values-Based",
    description: "Find someone who truly shares your core values and life goals.",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&auto=format&fit=crop&q=60",
    rotation: "-rotate-2",
    translateY: "translate-y-6",
  },
  {
    title: "Psychological Frameworks",
    description:
      "Matches rooted in validated principles for lasting connections.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=300&auto=format&fit=crop&q=60",
    rotation: "rotate-3",
    translateY: "translate-y-4",
  },
  {
    title: "Global Community",
    description:
      "Join a diverse community of Muslims seeking real relationships.",
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=300&auto=format&fit=crop&q=60",
    rotation: "rotate-6",
    translateY: "translate-y-0",
  },
];

const Clip: React.FC = () => (
  <div className="absolute -top-[1.1rem] left-1/2 -translate-x-1/2 w-8 h-8 bg-[#ad9437] rounded-lg z-20 flex justify-center items-start pt-1.5 shadow-sm">
    <div className="w-2 h-2 bg-white/40 rounded-full shadow-inner"></div>
  </div>
);

const FeatureCard: React.FC<Omit<FeatureCardProps, "translateY">> = ({
  image,
  title,
  description,
  rotation,
  grayscale,
}) => {
  return (
    <div
      className={`relative p-3 bg-white rounded-2xl shadow-lg transform ${rotation} hover:scale-105 hover:!rotate-0 transition-transform duration-300 w-80 flex-shrink-0`}
    >
      {/* <Clip /> */}
      <div className="rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-48 object-cover ${grayscale ? "grayscale" : ""}`}
        />
      </div>
      <div className="pt-4 pb-2 px-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-16 w-[120rem] h-[120rem] border-t-2 border-gray-300/80 rounded-full" />
      <div
        className="group relative py-12"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <style>
          {`
            @keyframes scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-100%); }
            }
            .animate-scroll {
              animation: scroll 40s linear infinite;
            }
          `}
        </style>
        <div className="flex gap-16 animate-scroll group-hover:[animation-play-state:paused]">
          {[...features, ...features].map((feature, index) => (
            <div key={index} className={`transform ${feature.translateY} pt-6`}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-container">
      <button className="bg-[#18453B] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-all mb-6">
        Join Beta
      </button>
      <p className="footer-text">Available on Android and iOS starting 2026.</p>
      <div className="store-buttons flex justify-center gap-4 mt-4">
        <Image src="/playStore.png" alt="Google Play Store" width={190} height={50} />
        <Image src="/apple.png" alt="Apple Store" width={150} height={50} />
      </div>
    </div>
  </footer>
);

// --- Main App Component ---
const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FCFDF5] text-gray-800 font-sans">
      <div className="background-gradient" />
      <Header />
      <main>
        <Hero />
        {/* <TextLoop /> */}
        {/* <Grid /> */}
        {/* <CaseStudiesAnimated /> */}
        {/* <Features /> */}
        {/* <WhyJoin /> */}
        {/* <WorldMapProfiles/> */}
      </main>
      {/* <Footer />
      <Footerdemo /> */}
    </div>
  );
};

export default LandingPage;
