import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import React from 'react';
import Section from '@/components/Section';
import SubHeading from '@/components/SubHeading';

type FAQType = {
  question: string;
  answer: string;
};

const content: FAQType[] = [
  {
    question: 'What is Domu Finance?',
    answer:
      'Domu Finance is a project aiming to allow people from all over the world invest into real estate development with cryptocurrency and fiat currencies. The main goal is to lower the barrier to entry into the real estate investment sector.',
  },
  {
    question: 'How does Domu Finance work?',
    answer:
      'Domu Finance allows people to lock in their stablecoins for a set period of time (1, 2, or 3 years). The project then uses the funds for real estate property development, ranging from buying land, getting permits, hiring construction workers, building the properties, and ultimately selling or renting them on the market. The APR is then calculated on the profit made and distributed to investors.',
  },
  {
    question: 'What is the APR?',
    answer:
      'Domu Finance is expected to generate a 15% APR. There are a lot of variables that influence this figure, mainly the speed of development and real estate market conditions.',
  },
  {
    question: 'How can I invest in real estate with Domu Finance?',
    answer:
      "Investing in real estate development with Domu Finance is fairly easy. First, you need to have stablecoins that you want to invest in. Secondly, select the property you'd like to invest in, connect your wallet, select a time period, and then deposit your desired amount of stablecoins. At the end of the year or project development you will be able to withdraw your stablecoins and any profit you may have received. Come and check on the progress from time to time.",
  },
  {
    question: 'What properties are you investing in?',
    answer:
      'Domu Finance mainly invests in developing real estate projects. This means that we are focusing on building properties from scratch instead of buying already-built properties. Additionally, Domu Finance may buy some vacation properties and rent them as AirBnBs for more consistent returns.',
  },
  {
    question: 'What currencies do you accept?',
    answer:
      'Domu Finance accepts fiat currencies (USD, EUR) and stablecoins (USDT, USDC) on the Binance Smart Chain network.',
  },
  {
    question: 'Can I invest in real estate with NFTs?',
    answer:
      'Domu Finance will allow people to invest in real estate development and projects with Domu Finance NFTs. This will allow people to buy fractionalized shares of properties and receive returns based on their shares.',
  },
  {
    question: 'How can I be sure the properties are real?',
    answer:
      'All properties Domu Finance builds or buys are real and can be visited. Most property sites will have a live feed for people to check on the progress of development. If you want to personally come and see the building site, let us know, and we will give you the details or schedule a visit.',
  },
].sort((a, b) => a.question.length - b.question.length);

export default function FAQView() {
  return (
    <Section id="faq">
      <Container className="space-y-12">
        <div>
          <Heading>Frequently Asked Questions</Heading>
          <SubHeading>Let's answer some of those questions</SubHeading>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            {content.map((item, index) => (
              <AccordionItem
                value={`item_${index}`}
                key={`faq_question_${index}`}
              >
                <AccordionTrigger className="font-bold text-lg text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}
