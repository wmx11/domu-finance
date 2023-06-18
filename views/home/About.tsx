import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Section from '@/components/Section';
import SubHeading from '@/components/SubHeading';
import React from 'react';

export default function AboutView() {
  return (
    <Section id="about">
      <Container>
        <div>
          <Heading>About</Heading>
          <SubHeading>Secondary value proposition.</SubHeading>
        </div>
      </Container>
    </Section>
  );
}
