import AboutView from '@/views/home/About';
import BenefitsView from '@/views/home/Benefits';
import CTAView from '@/views/home/CTA';
import FAQView from '@/views/home/FAQ';
import HeroView from '@/views/home/Hero';

export default function Home() {
  return (
    <>
      <HeroView />
      <AboutView />
      <BenefitsView />
      <FAQView />
      <CTAView />
    </>
  );
}
