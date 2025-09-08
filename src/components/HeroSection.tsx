'use client';

import React from 'react';
import { ColorTokens } from "../theme/colors";
import Image from 'next/image';

// Dummy translation function (replace with your i18n solution)
const t = (key: string) => {
  const translations: Record<string, string> = {
    'hero.bgText': 'Nomago • Hey there Digital Explorer • ',
    'hero.tagline': 'Your Travel Companion',
    'hero.title1': 'NOMAGO',
    'hero.title2': 'Hey there Digital Explorer',
    'hero.desc': 'Find your next home, coworking spot, or adventure with the platform built for digital nomads.',
    'hero.appstoreAlt': 'App Store',
    'hero.playstoreAlt': 'Google Play',
  };
  return translations[key] || key;
};

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between px-2 sm:px-4 md:px-8 pt-0 pb-0 min-h-[80vh] overflow-x-hidden overflow-y-hidden top-0"
      style={{
        marginBottom: 0,
        background: `linear-gradient(180deg, ${ColorTokens.purple} 0%, #2B1A5A 100%)`,
      }}
    >
      {/* Multiple scrolling background text lines for a denser effect */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden flex flex-col justify-center gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`w-full whitespace-nowrap overflow-hidden ${i % 2 === 0 ? '' : 'opacity-80'}`} style={{ top: `${10 + i * 18}%` }}>
            <div className={`animate-marquee flex items-center`}>
              {Array.from({ length: 2 }).map((_, idx) => (
                <span key={idx} className="text-[6vw] sm:text-[4vw] md:text-[3vw] font-extrabold text-white/10 mx-2 sm:mx-4 md:mx-8 tracking-tight">
                  {Array(12).fill(t('hero.bgText')).join('')}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Main content */}
  <div className="flex-1 w-full max-w-xs sm:max-w-md md:max-w-xl z-10 mt-16 md:mt-0">
        <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20 mb-4 backdrop-blur-sm">
          {t('hero.tagline')}
        </span>
  <h1 className="text-3xl sm:text-4xl md:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
          {t('hero.title1')}<br />
          {t('hero.title2')}
        </h1>
  <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xs sm:max-w-md">
          {t('hero.desc')}
        </p>
  <div className="flex gap-2 sm:gap-4 mb-8">
          <a href="#" className="inline-block">
            <span className="inline-flex items-center bg-white rounded-xl shadow-md px-2 py-1">
              <Image src="/appstore.png" alt={t('hero.appstoreAlt')} width={120} height={40} className="h-12 w-auto" priority />
            </span>
          </a>
          <a href="#" className="inline-block">
            <span className="inline-flex items-center bg-white rounded-xl shadow-md px-2 py-1">
              <Image src="/playstore.png" alt={t('hero.playstoreAlt')} width={120} height={40} className="h-12 w-auto" priority />
            </span>
          </a>
        </div>
      </div>

      {/* App screenshot image, original style */}
      <div className="flex-1 flex justify-center items-center relative mt-10 md:mt-0 z-10 w-full max-w-xs sm:max-w-md md:max-w-lg">
        <Image
          src="/35.jpg"
          alt="App Screenshot"
          width={400}
          height={250}
          className="w-full h-[35vh] sm:h-[45vh] md:h-[55vh] max-w-xs sm:max-w-md md:max-w-lg object-cover shadow-2xl rounded-3xl border border-lightGray bg-white"
          priority
        />
      </div>
    </section>
  );

    {/* App screenshot image, original style */}
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
};

export default HeroSection;
