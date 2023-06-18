import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Section from '@/components/Section';
import React from 'react';

export default function CTAView() {
  return (
    <Section id="cta">
      <Container>
        <div className="bg-primary flex items-center justify-center p-24 ">
          <div className="text-white text-center space-y-8">
            <Heading>Final CTA Proposition</Heading>
            <button>CTA</button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
