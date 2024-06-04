import Account from '@/components/Account';
import CallToAction from '@/components/CallToAction';
import Feature from '@/components/Feature';
import Hero from '@/components/Hero';
import Review from '@/components/Review';

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Account />
      <CallToAction />
      <Review />
    </main>
  );
}
