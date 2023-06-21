import Heading from '@/components/Heading';
import Image from 'next/image';
import HeroImage from '../../assets/hero_image.jpg';
import SubHeading from '@/components/SubHeading';
import { Button } from '@/components/ui/button';

export default function HeroView() {
  return (
    <section className="min-h-screen bg-primary flex flex-col-reverse lg:flex-row">
      <div className="flex-1 flex items-center justify-center p-10 lg:p-24 relative z-10">
        <div className="text-white space-y-8 z-10">
          <Heading className="md:text-8xl animate--fly-in">
            Bridge the Real Estate Gap
          </Heading>
          <SubHeading className="animate--fly-in">
            Earn <span className="underline font-bold">up to 15% APR</span> by
            funding new real estate development through crypto!
          </SubHeading>
          <Button
            variant="secondary"
            size="lg"
            className="p-8 font-bold text-lg animate--fly-in"
          >
            Explore Properties
          </Button>
        </div>
      </div>
      <div className="h-[320px] lg:h-auto lg:basis-[50%] relative">
        <Image
          src={HeroImage}
          alt="Real estate hero image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
