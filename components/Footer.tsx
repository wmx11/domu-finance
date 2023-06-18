import React from 'react';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="min-h-[320px] bg-black text-white ">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between p-12 md:p-0 md:pt-12 space-y-12 md:space-y-0 mb-8">
          <div className="flex-1">
            <div className="mb-4">Domu Finance Logo</div>
            <div className="space-y-2">
              <div className="mb-4 font-bold text-xl">Social</div>
              <div>Twitter</div>
              <div>Discord</div>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-4 font-bold text-xl">Navigation</div>
            <ul className="space-y-2">
              {['Home', 'About', 'FAQ', 'Benefits'].map((item, index) => (
                <li key={`navigation_${index}`}>
                  <a href="#">{item}</a>
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
        </div>
        <div className="space-y-8">
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
