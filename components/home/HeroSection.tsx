import Image from 'next/image';
import Button from '@/components/ui/Button';
import StatCard from '@/components/ui/StatCard';

export default function HeroSection() {
  return (
    <section className="pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 bg-gradient-to-b from-secondary-50 to-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Software & Ed-Tech Company
            </div> */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-secondary-900">
              Transforming Ideas into{' '}
              <span className="text-primary-600">Digital Reality</span>
            </h1>
            <p className="text-xl text-secondary-500 leading-relaxed max-w-lg">
              We are a team of passionate experts delivering top-notch software solutions and
              comprehensive training programs to elevate your career and business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary">Explore Services</Button>
              <Button variant="secondary">View Programs</Button>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-4 sm:gap-8 border-t border-secondary-100">
              <StatCard end={150} suffix="+" label="Projects Delivered" />
              <div className="hidden sm:block w-px h-12 bg-secondary-200 mx-auto"></div>
              <StatCard end={98} suffix="%" label="Client Satisfaction" />
              <div className="hidden sm:block w-px h-12 bg-secondary-200 mx-auto"></div>
              <StatCard end={500} suffix="+" label="Trained Developers" />
            </div>
          </div>
          <div className="hidden lg:flex relative h-64 sm:h-80 lg:h-[400px] w-full lg:w-[600px] items-center justify-center">
            <div className="relative w-full h-full rounded-3xl overflow-hidden transform rotate-3 bg-gradient-to-br p-4 sm:p-8">
              <Image
                src="/assets/hero_img.webp"
                alt="Hero Image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
