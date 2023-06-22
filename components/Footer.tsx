import React from 'react';
import Container from './Container';
import DomuFinanceLogo from '@/assets/domu_logo_white.png';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="min-h-[420px] bg-black text-white ">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between py-8 space-y-12 md:space-y-0">
          <div className="flex-1">
            <a href="/">
              <div className="mb-4 flex gap-4 flex-col md:flex-row items-center">
                <div className="h-[50px] w-[50px]">
                  <Image src={DomuFinanceLogo} alt="Domu Logo" />
                </div>
                <div className="text-2xl font-bold">Domu Finance</div>
              </div>
            </a>
          </div>
          <div className="flex-1">
            <div className="mb-4 font-bold text-xl">Navigation</div>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Benefits', href: '#benefits' },
                { label: 'Whitepaper', href: 'https://docs.domu.finance' },
              ].map((item, index) => (
                <li key={`navigation_${index}`}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <div className="mb-4 font-bold text-xl">Legal</div>
            <ul className="space-y-2">
              {[
                'Disclaimer',
                'Cookie policy',
                'Privacy policy',
                'Terms of service',
              ].map((item, index) => (
                <li key={`legal_${index}`}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <div className="mb-4 font-bold text-xl">Social Media</div>
            <ul className="space-y-2">
              {[
                { label: 'Discord', href: 'https://discord.gg/RBjx5wQMyt' },
                { label: 'Twitter', href: 'https://twitter.com/DomuFinance' },
              ].map((item, index) => (
                <li key={`social_${index}`}>
                  <a href={item.href} target="_blank">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-8 py-8">
          <hr className="border-zinc-500" />
          <div className="mb-8">
            <p className="text-sm">
              Built with love by{' '}
              <a
                href="https://modiggo.com"
                target="_blank"
                className="underline"
              >
                Modiggo
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
