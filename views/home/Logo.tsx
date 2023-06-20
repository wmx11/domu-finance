import Container from '@/components/Container';
import Section from '@/components/Section';
import React from 'react';

const Logo = () => {
  return (
    <Section className="py-0">
      <Container className="flex items-center justify-center">
        <div className="bg-red-200 h-[200px] w-[200px]"></div>
      </Container>
    </Section>
  );
};

export default Logo;
