import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Section from '@/components/Section';
import SubHeading from '@/components/SubHeading';
import Image from 'next/image';
import BenefitsImage from '../../assets/benefits_image.jpg';

import { FC } from 'react';
import { BsFillBuildingsFill, BsHousesFill } from 'react-icons/bs';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { RxMargin } from 'react-icons/rx';
import { TbBarrierBlockOff, TbPigMoney } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';

type ContentType = {
  title?: string | null;
  description?: string | null;
  Icon?: JSX.Element | null;
  reverse?: boolean;
};

const content: ContentType[] = [
  {
    Icon: <FaRegMoneyBillAlt />,
    title: 'Lower-risk investment',
    description:
      "Real estate is often considered a low-risk investment. You won't have to worry about insane volatility because you will be dealing with stable coins and real estate.",
  },
  {
    Icon: <RxMargin />,
    title: 'Fractionalized shares & ownership',
    description:
      "Most investors don't have the means to acquire real estate properties. Domu Finance helps them by allowing for fractionalized shares through NFTs.",
  },
  {
    Icon: <BsHousesFill />,
    title: 'Real, tangible assets',
    description:
      'No memecoins or virtual currencies without value. Domu Finance is focusing on acquiring real, tangible assets - real estate, vacation properties, yachts, and more.',
  },
  {
    Icon: <TbBarrierBlockOff />,
    title: 'Lower barrier of entry',
    description:
      'No more worrying about not having enough for a real estate property. Domu Finance allows for fractionalized shares of real estate development. Start making changes with as little as $100.',
  },
  {
    Icon: <BsFillBuildingsFill />,
    title: 'Focus on development & building',
    description:
      'Domu Finance is not just about buying and selling real estate properties. No, we are going the other route. We focus on actually building and developing real estate properties from scratch. From blueprints, certifications, acquiring materials, working with construction companies, building, and selling.',
  },
  {
    Icon: <TbPigMoney />,
    title: 'Solid returns',
    description:
      'Even though Domu Finance is not a memecoin or a virtual asset without real value, we expect to generate up to 15% APR through developing real estate properties.',
  },
];

const BenefitBlock: FC<ContentType> = ({
  title,
  description,
  Icon,
  reverse = false,
}) => (
  <div className="animate--fly-in">
    <div
      className={twMerge(
        'flex gap-4 items-center mb-4 border-b pb-4',
        reverse ? 'md:flex-row-reverse' : 'flex-row'
      )}
    >
      <div className="bg-sky-500 rounded-full p-5 text-white text-xl">
        {Icon ? Icon : null}
      </div>
      <span className="text-xl font-bold">{title}</span>
    </div>
    <div>{description}</div>
  </div>
);

export default function BenefitsView() {
  return (
    <Section id="benefits">
      <Container>
        <div className="mb-12">
          <Heading className="animate--fly-in">Tangible & Proven</Heading>
          <SubHeading className="animate--fly-in">
            No longer do you have to worry about crazy volatility and made-up
            utility
          </SubHeading>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="basis-[33.3%] space-y-12">
            {content?.slice(0, content.length / 2).map((item, index) => (
              <BenefitBlock {...item} key={`benefits_1_${index}`} />
            ))}
          </div>
          <div className="h-[320px] md:h-auto md:basis-[33.3%] relative">
            <Image
              src={BenefitsImage}
              alt="Real estate about image"
              className="absolute inset-0 w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="basis-[33.3%] space-y-12">
            {content?.slice(content.length / 2).map((item, index) => (
              <BenefitBlock {...item} key={`benefits_2_${index}`} reverse />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
