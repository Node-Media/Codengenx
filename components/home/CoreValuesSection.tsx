import Card from '@/components/ui/Card';

const coreValues = [
  {
    title: 'Creative Thinking',
    icon: '💡',
    description: 'Fostering innovation and out-of-the-box solutions.',
  },
  {
    title: 'Career Planning',
    icon: '🎯',
    description: 'Strategic guidance for a successful professional journey.',
  },
  {
    title: 'Technical Excellence',
    icon: '⚡',
    description: 'Mastering the latest technologies and best practices.',
  },
];

export default function CoreValuesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-secondary-500 max-w-2xl mx-auto">
            We believe in holistic development and professional excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {coreValues.map((item, i) => (
            <Card key={i} className="bg-secondary-50 hover:bg-white group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-secondary-500">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
