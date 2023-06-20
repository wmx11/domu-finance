import AboutView from '@/views/home/About';
import BenefitsView from '@/views/home/Benefits';
import CTAView from '@/views/home/CTA';
import FAQView from '@/views/home/FAQ';
import HeroView from '@/views/home/Hero';
import Logo from '@/views/home/Logo';
import Properties from '@/views/home/Properties';

export default function Home() {
  return (
    <>
      <HeroView />
      <Properties />
      <AboutView />
      <BenefitsView />
      <FAQView />
      <CTAView />
      <Logo />
    </>
  );
}
