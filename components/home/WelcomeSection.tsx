const stats = [
  { value: '50+', label: 'Expert Mentors' },
  { value: '100%', label: 'Placement Support' },
  { value: '24/7', label: 'Support System' },
  { value: 'Global', label: 'Client Base' },
];

export default function WelcomeSection() {
  return (
    <section className="py-20 px-6 bg-secondary-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-900/20 blur-3xl rounded-full transform translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to CodengenX</h2>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              CodengenX aims to provide an additional advantage to the field of information
              technology. We are a team of passionate, skilled and energetic individuals
              collaborating to offer top-notch services.
            </p>
            <p className="text-secondary-300 mb-8 leading-relaxed">
              Recognized as a leading Ed-Tech and Software Company, we strive to transform your
              ideas into tangible results. Our brand represents a fusion of expertise, innovation
              and contemporary knowledge.
            </p>
            <button className="text-primary-400 font-medium hover:text-primary-300 flex items-center gap-2">
              Learn More About Us <span aria-hidden="true">→</span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-secondary-800 p-6 rounded-2xl border border-secondary-700"
              >
                <div className="text-3xl font-bold text-primary-400 mb-2">{stat.value}</div>
                <div className="text-sm text-secondary-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
