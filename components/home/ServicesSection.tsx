import Link from 'next/link';
import Card from '@/components/ui/Card';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
  },
  {
    title: 'Digital Marketing',
    description: 'SEO, SEM, and social media strategies to grow your online presence.',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and DevOps services.',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric design that drives engagement and conversion.',
  },
  {
    title: 'Consulting',
    description: 'Expert technical consulting to guide your digital transformation.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-secondary-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Software Services</h2>
          </div>
          <Link
            href="/services"
            className="text-primary-600 font-medium hover:text-primary-700 mt-4 md:mt-0"
          >
            View All Services →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Card key={i} className="group">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                <span className="text-primary-600 group-hover:text-white text-xl transition-colors">
                  ⚡
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-secondary-500 mb-4">{service.description}</p>
              <Link
                href="/services"
                className="text-sm font-medium text-primary-600 hover:text-primary-700"
              >
                Learn more
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
