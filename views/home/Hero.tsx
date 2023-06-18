import Heading from '@/components/Heading';
import Image from 'next/image';
import HeroImage from '../../assets/hero_image.jpg';
import SubHeading from '@/components/SubHeading';

export default function HeroView() {
  return (
    <section className="min-h-screen bg-primary flex">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-white">
          <Heading className="text-7xl">Bridge the real estate gap</Heading>
          <SubHeading>Secondary value proposition.</SubHeading>
        </div>
      </div>
      <div className="basis-[40%] relative ">
        <Image
          src={HeroImage}
          alt="Real estate hero image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
