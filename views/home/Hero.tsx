import Heading from '@/components/Heading';
import Image from 'next/image';
import HeroImage from '../../assets/hero_image.jpg';
import SubHeading from '@/components/SubHeading';
import { Button } from '@/components/ui/button';

export default function HeroView() {
  return (
    <section className="min-h-screen bg-primary flex">
      <div className="flex-1 flex items-center justify-center p-24 relative z-10">
        <div className="text-white space-y-8 z-10">
          <Heading className="text-8xl">Bridge the Real Estate Gap</Heading>
          <SubHeading>
            Earn <span className="underline font-bold">up to 15% APR</span> by funding new
            real estate development through crypto!
          </SubHeading>
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
      <div className="basis-[50%] relative ">
        <Image
          src={HeroImage}
          alt="Real estate hero image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
