import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import CoreValuesSection from '@/components/home/CoreValuesSection';
import WelcomeSection from '@/components/home/WelcomeSection';
import ServicesSection from '@/components/home/ServicesSection';
import TrainingSection from '@/components/home/TrainingSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-secondary-900 font-display">
      <Navbar />
      <HeroSection />
      <CoreValuesSection />
      <WelcomeSection />
      <ServicesSection />
      <TrainingSection />
      <Footer />
    </main>
  );
}
