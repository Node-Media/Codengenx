import Image from 'next/image';

const courses = [
  {
    title: 'Data Science',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=600&fit=crop',
  },
  {
    title: 'Full Stack Java',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=600&fit=crop',
  },
  {
    title: 'MERN Stack',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=600&fit=crop',
  },
  {
    title: 'AWS & DevOps',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=600&fit=crop',
  },
  {
    title: 'Python',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=600&fit=crop',
  },
  {
    title: 'Machine Learning',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop',
  },
  {
    title: 'Cyber Security',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=600&fit=crop',
  },
  {
    title: 'Digital Marketing',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop',
  },
];

export default function TrainingSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Training Programs</h2>
          <p className="text-secondary-500 max-w-2xl mx-auto">
            Industry-oriented training programs designed to make you job-ready.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-secondary-900 aspect-[4/5] flex items-end p-6 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <Image
                src={course.img}
                alt={course.title}
                fill
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="relative z-20 w-full">
                <h3 className="text-white text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-secondary-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                  Placement Guaranteed Program
                </p>
                <button className="text-white text-sm font-medium border-b border-white/30 pb-1 hover:border-white transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
