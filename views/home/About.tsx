import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Section from '@/components/Section';
import SubHeading from '@/components/SubHeading';
import React from 'react';
import AboutImage from '../../assets/about_image.jpg';
import Image from 'next/image';

export default function AboutView() {
  return (
    <Section id="about">
      <Container>
        <div className="mb-12">
          <Heading>New Approach to Old Opportunity</Heading>
          <SubHeading>
            Real estate investment is as old as it gets. We're lowering the
            barrier of entry by mixing it with crypto
          </SubHeading>
        </div>

        <div className="flex min-h-[500px]">
          <div className="flex-1 relative">
            <Image
              src={AboutImage}
              alt="Real estate about image"
              className="absolute inset-0 w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex-1 p-10 space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                The good old investment
              </h3>
              <div>
                We're not trying to reinvent the wheel. Our main focus is on the
                good old investment of real estate. Why? Because of its proven
                reliability and abundance.
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Lowering the barrier of entry
              </h3>
              <div>
                Not everyone has the funds and ability to invest in real estate.
                It involves buying properties and renting them out. Domu Finance
                aims to make it possible for anyone to invest in real estate for
                as much as they want.
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Real, tangible assets</h3>
              <div>
                No more digital assets without value. Domu Finance is developing
                real estate projects, building properties, and providing
                real-life value to other people.
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Transparency and integrity
              </h3>
              <div>
                The world of crypto is a wild west. Domu Finance solves this
                problem by investing in real, tangible assets. All building
                sites will have a real-time live feed for anyone to see the
                progress of their investments.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
