"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Poppins, Inter } from "next/font/google";
import "./WhyJoin.css";

gsap.registerPlugin(ScrollTrigger);

const poppins = Poppins({ subsets: ["latin"], weight: ["600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

const sampleData = [
  {
    title: "Faith-Centered",
    description:
      "Connect with like-minded Muslims who share your values and beliefs, ensuring relationships rooted in faith.",
  },
  {
    title: "AI-Powered",
    description:
      "Genie uses Voice AI, psychological frameworks, and smart algorithms to create meaningful, long-term matches.",
  },
  {
    title: "Global Community",
    description:
      "Access a trusted worldwide Muslim network with support for 10 major languages, making connections easier than ever.",
  },
  {
    title: "Privacy First",
    description:
      "Your data and conversations are kept secure with advanced encryption and privacy protection at every step.",
  },
  {
    title: "Citizen Genie",
    description:
      "Join a movement, not just an app. Genie commits a share of every dollar to building lasting institutions that elevate Muslims worldwide for generations to come.",
  },
  {
    title: "Matched or You Don’t Pay",
    description:
      "We stand by what we believe in. You don’t find your match, you won’t pay.",
  },
  {
    title: "Elevating Muslims Globally",
    description:
      "Beyond matchmaking, Genie is on a mission to uplift Muslim voices, values, and visibility on the world stage.",
  },
];

const WhyJoin = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    const totalWidth = cards.scrollWidth - section.offsetWidth;

    // ✅ Animate horizontal scroll of cards, NOT the title
    gsap.to(cards, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 2,
        pin: true,
        anticipatePin: 1,
        markers: false, // turn true if you want to debug
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="whyjoin"
      ref={sectionRef}
      className={`bg-[#FCFDF5] relative overflow-hidden h-screen flex items-center ${inter.className}`}
    >
      {/* Fixed Title */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center z-10">
        <h2
          className={`${poppins.className} text-4xl font-bold text-gray-800 mb-2`}
        >
          Why Join <span className="text-[#ad9437]">Genie?</span>
        </h2>
        <p className="text-gray-600">
          A values-based matchmaking platform built for Muslims worldwide.
        </p>
      </div>

      {/* Horizontally scrolling cards */}
      <div ref={cardsRef} className="flex gap-8 px-20">
        {sampleData.map((item, index) => (
          <div
            key={index}
            className="min-w-[350px] bg-white rounded-2xl p-6 flex flex-col justify-between border-2 border-transparent shadow-md transition-all duration-300 hover:border-[#d4af37] hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] hover:scale-105"
          >
            <h3
              className={`${poppins.className} text-xl font-semibold text-[#18453B] mb-3 text-center`}
            >
              {item.title}
            </h3>
            <p className="text-gray-600 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyJoin;
