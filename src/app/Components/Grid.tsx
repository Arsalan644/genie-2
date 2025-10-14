'use client'
import React from 'react';

// --- SVG ICON COMPONENTS ---

const AppleLogo = () => (
    <svg className="w-12 h-12 text-white mb-4" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.91,18.53a6.83,6.83,0,0,1-3.69,6.18,6.13,6.13,0,0,1-6.38-1.5,23.38,23.38,0,0,1-2.22-3.15,10,10,0,0,1-3.56,3.22,7.1,7.1,0,0,1-5-6.19,13.73,13.73,0,0,1,4.42-10A7.1,7.1,0,0,1,16,5.33a6.66,6.66,0,0,1,4.72,2.25,4.72,4.72,0,0,0-3.32,5.22,4.86,4.86,0,0,0,4.81,4.86,4.69,4.69,0,0,0,.68-0.07A6.83,6.83,0,0,1,26.91,18.53ZM17,4.2a6.47,6.47,0,0,1,4.55-1.89,6.6,6.6,0,0,1,4.65,7,7.1,7.1,0,0,1-4.71,6.58A6.41,6.41,0,0,1,17,14.2,6.53,6.53,0,0,1,17,4.2Z"/>
    </svg>
);

const BatteryIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-2">
        <rect x="4" y="16" width="50" height="32" rx="6" stroke="#36c555" strokeWidth="4"/>
        <rect x="54" y="24" width="6" height="16" rx="3" fill="#36c555"/>
        <rect x="10" y="22" width="38" height="20" rx="3" fill="#36c555"/>
    </svg>
);

const ZeroWasteArrows = () => (
    <svg viewBox="0 0 100 50" className="absolute top-0 left-0 w-full h-full opacity-80">
        <path d="M20,40 C0,30 15,5 35,15" stroke="#36c555" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35 15 L28 10 M35 15 L42 18" stroke="#36c555" fill="none" strokeWidth="4" strokeLinecap="round"/>
        <path d="M80,10 C100,20 85,45 65,35" stroke="#36c555" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M65 35 L72 40 M65 35 L58 32" stroke="#36c555" fill="none" strokeWidth="4" strokeLinecap="round"/>
    </svg>
);

const ForestTrees = () => (
    <svg viewBox="0 0 100 50" className="absolute top-0 right-0 w-1/2 h-full opacity-80">
        <path d="M10 40 L20 20 L30 40 Z M20 40 L20 45" stroke="#36c555" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 30 L20 10 L30 30 Z" stroke="#36c555" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 40 L50 20 L60 40 Z M50 40 L50 45" stroke="#36c555" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 30 L50 10 L60 30 Z" stroke="#36c555" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const RecycleIcon = () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#36c555]">
        <path d="M8.59,4.58C9.28,4.21,10.12,4,11,4A9,9,0,0,1,18.3,16.59" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19,12V17H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.41,19.42C14.72,19.79,13.88,20,13,20A9,9,0,0,1,5.7,7.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5,8V3H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const TwentyThirtyCircle = () => (
    <svg viewBox="0 0 100 60" className="absolute inset-0 w-full h-full opacity-90">
        <path d="M95,30 C95,49.33 79.33,65 60,65 C40.67,65 25,49.33 25,30 C25,10.67 40.67,-5 60,-5 C79.33,-5 95,10.67 95,30 Z" 
        transform="rotate(15 60 30)"
        stroke="#36c555" fill="none" strokeWidth="5" strokeLinecap="round"/>
    </svg>
);

const ChargingIcon = () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#36c555] mb-2">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3"/>
    </svg>
);

// --- REUSABLE CARD COMPONENT ---

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-[#1d1d1f] rounded-3xl p-4 sm:p-5 flex flex-col text-white font-sans overflow-hidden ${className}`}>
    {children}
  </div>
);

// --- MAIN APP COMPONENT ---

export default function Grid() {
  return (
    <div className="min-h-screen bg-transparent my-36 mx-36 flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:auto-rows-[190px]">
          
          <Card className="items-center justify-center text-center bg-gray-100 te">
            <BatteryIcon />
            <p className="text-2xl  font-medium text-neutral-600 leading-tight">Compatibility Scoring</p>
          </Card>
          
          <Card className="items-center justify-center text-center relative bg-[#18453b]">
            <ZeroWasteArrows/>
            <h2 className="text-3xl font-black tracking-tighter z-10">Science-Backed </h2>
            <p className="text-xs text-neutral-400 mt-2 z-10"> Psychology</p>
          </Card>

          <Card className="justify-center text-center relative bg-gray-200">
            {/* <ForestTrees/> */}
            <p className="text-sm text-neutral-600">Modern</p>
            <h3 className="text-2xl font-black text-[#36c555] tracking-tight leading-tight"> Voice Experience </h3>
          </Card>

          <Card className="md:row-span-2 relative p-0">
            <img src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=500" alt="Printed Circuit Board" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-[#18453b] bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
              <h2 className="text-6xl font-bold">100%</h2>
              <p className="font-semibold text-neutral-200 mt-2">Match Guarantee </p>
            </div>
          </Card>

          <Card className="md:row-span-2 col-span-2 md:col-span-1 p-0 relative ">
            <img src="https://picsum.photos/seed/airpodsbox/400/800" alt="AirPods Pro box" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gray-100 bg-opacity-40 flex items-start justify-center pt-6">
                <p className="font-semibold text-neutral-200 text-3xl px-4 my-auto mx-auto text-neutral-600 text-center">No <span className=''>Borders</span>, No Limits</p>
            </div>
          </Card>

          <Card className="md:col-span-2 md:row-span-2 p-0 relative flex items-center justify-center bg-gray-50  shadow-md">
            {/* <img src="https://images.unsplash.com/photo-1510130148434-6667504a72d3?q=80&w=800" alt="Abstract background" className="w-full h-full object-cover absolute"/> */}
            <div className="z-10 text-center flex flex-col items-center">
              {/* <AppleLogo /> */}
              <h1 className="text-5xl font-semibold text-[#18453b] ">Continuous Learning AI</h1>
              {/* <p className="text-base font-semibold text-neutral-200 mt-4 max-w-sm">100% recycled rare earth elements in all magnets</p> */}
            </div>
          </Card>

          <Card className="items-center justify-center text-center relative bg-gray-100">
             {/* <TwentyThirtyCircle/> */}
             <h2 className="text-5xl font-bold z-10 text-[#36c555]">Elevated </h2>
             <p className="text-3xl text-neutral-700 mt-2 z-10 t"> Profiles</p>
          </Card>
          
          <Card className="items-center justify-center text-center bg-gray-100 ">
            {/* <RecycleIcon /> */}
            <p className="text-2xl font-medium text-[#18453b] mt-2">Compliments & Genie Advice</p>
          </Card>

          <Card className="justify-center items-center text-center bg-[#18453b]">
            <h3 className="text-2xl font-bold text-gray-200 leading-tight tracking-tight">Privacy-First   </h3>
            <h3 className="text-2xl font-bold text-gray-200 leading-tight tracking-tight">Design</h3>
            {/* <h3 className="text-2xl font-black text-[#36c555] leading-tight tracking-tight">NO beryllium</h3> */}
            {/* <h3 className="text-2xl font-black text-[#36c555] leading-tight tracking-tight">NO BFR</h3> */}
          </Card>

          <Card className="p-0 relative  bg-gray-100">
            {/* <img src="https://picsum.photos/seed/airpodscase/400/400" alt="AirPods Pro case" className="w-full h-full object-cover"/> */}
            <div className="my-auto mx-auto text-neutral-600 p-4 pt-8 text-center">
                <p className="text-2xl font-semibold text-[#18453b]">Multi-Language Support </p>
            </div>
          </Card>

          <Card className="items-center justify-center text-center  bg-[#18453b]">
            {/* <ChargingIcon /> */}
            <p className="text-2xl font-bold text-neutral-300 leading-tight">Community Impact</p>
          </Card>

        </div>
      </div>
    </div>
  );
}
