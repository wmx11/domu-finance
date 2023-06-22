'use client';

import AboutView from '@/views/home/About';
import BenefitsView from '@/views/home/Benefits';
import CTAView from '@/views/home/CTA';
import FAQView from '@/views/home/FAQ';
import HeroView from '@/views/home/Hero';
import Logo from '@/views/home/Logo';
import Properties from '@/views/home/Properties';
import { animate, inView, stagger } from 'motion';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    inView(
      'section',
      (info) => {
        animate(
          info.target.querySelectorAll('.animate--fly-in'),
          {
            opacity: [0, 1],
            transform: ['translateY(-100px)', 'translateY(0px)'],
          },
          {
            duration: 1,
            delay: stagger(0.2),
          }
        );
      },
      {
        margin: '-25%',
      }
    );
  }, []);

  return (
    <>
      <HeroView />
      <Properties />
      <AboutView />
      <BenefitsView />
      <FAQView />
      <CTAView />
      <Logo />
    </>
  );
}
