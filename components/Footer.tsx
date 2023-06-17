import React from 'react';

export default function Footer() {
  return (
    <footer className="min-h-[320px] bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between p-12 md:p-0 md:pt-12">
        <div className="flex-1 mb-12">
          <div className="mb-4">Domu Finance Logo</div>
          <div>
            <div className="mb-4 font-bold text-xl">Social</div>
            <div>Twitter</div>
            <div>Discord</div>
          </div>
        </div>
        <div className="flex-1 mb-12">
          <div className="mb-4 font-bold text-xl">Navigation</div>
          <ul className="[&>li]:mb-2">
            {['Home', 'About', 'FAQ', 'Benefits'].map((item, index) => (
              <li key={`navigation_${index}`}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 mb-12">
          <div className="mb-4 font-bold text-xl">Legal</div>
          <ul className="[&>li]:mb-2">
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
    </footer>
  );
}
