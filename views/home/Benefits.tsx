import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Section from '@/components/Section';
import SubHeading from '@/components/SubHeading';
import React from 'react';

export default function BenefitsView() {
  return (
    <Section id="benefits">
      <Container>
        <div>
          <Heading>Benefits</Heading>
          <SubHeading>Secondary value proposition.</SubHeading>
        </div>
      </Container>
    </Section>
  );
}
