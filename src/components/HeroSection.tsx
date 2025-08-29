import React from 'react';
import { ColorTokens } from "../theme/colors";
import Image from 'next/image';


const HeroSection = () => (
  <section className="relative flex flex-col md:flex-row items-center justify-between px-8 pt-16 pb-0 bg-white min-h-[70vh] overflow-hidden" style={{ marginBottom: 0 }}>
    <div className="flex-1 max-w-xl z-10">
      <div className="mb-4">
        <span className="inline-block bg-lightBlue text-blue text-xs font-semibold px-3 py-1 rounded-full border border-blue mb-2">Your Travel Companion</span>
      </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-darkGray leading-tight mb-4">
          NOMAGO<br />
          Hey there Digital Explorer
        </h1>
      <p className="text-lg text-gray mb-6 max-w-md">Find your next home, coworking spot, or adventure with the platform built for digital nomads.</p>
      <div className="flex gap-4 mb-8">
        <a href="#" className="inline-block">
          <Image src="/appstore.png" alt="App Store" width={120} height={40} className="h-12 w-auto" priority />
        </a>
        <a href="#" className="inline-block">
          <Image src="/playstore.png" alt="Google Play" width={120} height={40} className="h-12 w-auto" priority />
        </a>
      </div>
    </div>
    <div className="flex-1 flex justify-center items-center relative mt-10 md:mt-0 z-10">
      <Image
        src="/35.jpg"
        alt="App Screenshot"
        width={650}
        height={400}
        className="w-full h-[55vh] max-w-[650px] object-cover shadow-2xl rounded-3xl border border-lightGray bg-white"
        priority
      />
    </div>
    <div className="absolute left-0 right-0 top-0 min-w-full h-[340px] md:h-[560px] pointer-events-none z-0 overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 1440 560" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block" style={{ display: 'block' }}>
  <path d="M0 160C360 320 1080 0 1440 160V560H0V160Z" fill={ColorTokens.purple} fillOpacity="0.12"/>
      </svg>
    </div>
  </section>
);

export default HeroSection;
