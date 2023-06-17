'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import HeroImage from '../../assets/hero_image.jpg';
import { animate } from 'motion';

export default function HeroView() {
  const heroRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    animate(
      heroRef.current as HTMLImageElement,
      {
        transform: ['translateY(-1000px)', 'translateY(0px)'],
      },
      { duration: 0.7, easing: 'ease-in-out' }
    );
  }, [heroRef]);

  return (
    <section className="min-h-screen bg-primary flex">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-white">
          <h1 className="text-7xl font-bold mb-6">Main Value Proposition</h1>
          <h2 className="text-3xl mb-6">Secondary value proposition.</h2>
          <button>CTA</button>
        </div>
      </div>
      <div className="basis-[40%] relative ">
        <Image
          src={HeroImage}
          ref={heroRef}
          alt="Real estate hero image"
          className="absolute inset-0 w-full h-full object-cover translate-y-[-1000px]"
        />
      </div>
    </section>
  );
}
