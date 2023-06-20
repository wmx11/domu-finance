import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function CTAView() {
  return (
    <Section id="cta">
      <Container>
        <div className="bg-primary flex items-center justify-center p-24 rounded-md">
          <div className="text-white text-center space-y-8">
            <Heading>Can't Wait to Start Building?</Heading>
            <Button
              disabled
              variant="secondary"
              size="lg"
              className="p-8 font-bold text-lg"
            >
              Explore Properties
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
