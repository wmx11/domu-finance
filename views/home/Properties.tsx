import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import PropertyOne from '../../assets/property_1.jpg';
import PropertyTwo from '../../assets/property_2.jpg';
import PropertyThree from '../../assets/property_3.jpg';

const Properties = () => {
  return (
    <Section id="properties">
      <Container>
        <div className="mb-12">
          <Heading className="animate--fly-in">Explore Our Properties</Heading>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Card className="flex-1 md:basis-[33.3%]">
            <CardHeader>
              <Image
                src={PropertyOne}
                alt="Property One"
                className="rounded-md"
              />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <p className="font-bold">Name:</p>
                <p>Suburb Passion</p>
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <p className="font-bold">Status:</p>
                <p>Building</p>
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <p className="font-bold">Funded:</p>
                <p>$200,000 / $200,000</p>
              </div>

              <Progress value={100} className="h-2" />
            </CardContent>
            <CardFooter className="flex justify-between gap-4 flex-col md:flex-row">
              <Button disabled variant="secondary">
                View Property
              </Button>
              <Button disabled variant="default">
                Connect Wallet
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex-1 md:basis-[33.3%]">
            <CardHeader>
              <Image
                src={PropertyTwo}
                alt="Property One"
                className="rounded-md"
              />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <p className="font-bold">Name:</p>
                <p>Sunset Villa</p>
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <p className="font-bold">Status:</p>
                <p>Funding</p>
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <p className="font-bold">Funded:</p>
                <p>$100,000 / $320,000</p>
              </div>

              <Progress value={31} className="h-2" />
            </CardContent>
            <CardFooter className="flex justify-between gap-4 flex-col md:flex-row">
              <Button disabled variant="secondary">
                View Property
              </Button>
              <Button disabled variant="default">
                Connect Wallet
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex-1 md:basis-[33.3%]">
            <CardHeader>
              <Image
                src={PropertyThree}
                alt="Property One"
                className="rounded-md"
              />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <p className="font-bold">Name:</p>
                <p>Family Triplex</p>
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <p className="font-bold">Status:</p>
                <p>Funding</p>
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <p className="font-bold">Funded:</p>
                <p>$80,000 / $400,000</p>
              </div>

              <Progress value={20} className="h-2" />
            </CardContent>
            <CardFooter className="flex justify-between gap-4 flex-col md:flex-row">
              <Button disabled variant="secondary">
                View Property
              </Button>
              <Button disabled variant="default">
                Connect Wallet
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default Properties;
