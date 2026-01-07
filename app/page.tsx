import CountUp from './components/CountUp';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-secondary-900 font-display">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-secondary-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary-600/20">
              <span className="text-white font-mono text-lg font-bold">CX</span>
            </div>
            <span className="font-bold text-xl tracking-tight">CodengenX</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-secondary-600 hover:text-primary-600 font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-secondary-600 hover:text-primary-600 font-medium transition-colors">About Us</Link>
            <Link href="/services" className="text-secondary-600 hover:text-primary-600 font-medium transition-colors">Services</Link>
            <Link href="/blog" className="text-secondary-600 hover:text-primary-600 font-medium transition-colors">Blog</Link>
            <Link href="/contact" className="text-secondary-600 hover:text-primary-600 font-medium transition-colors">Contact</Link>
            <button className="bg-primary-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/25">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-secondary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Software & Ed-Tech Company
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-secondary-900">
                Transforming Ideas into <span className="text-primary-600">Digital Reality</span>
              </h1>
              <p className="text-xl text-secondary-500 leading-relaxed max-w-lg">
                We are a team of passionate experts delivering top-notch software solutions and comprehensive training programs to elevate your career and business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/20">
                  Explore Services
                </button>
                <button className="bg-white text-secondary-900 border border-secondary-200 px-8 py-4 rounded-xl text-lg font-medium hover:bg-secondary-50 transition-all">
                  View Programs
                </button>
              </div>
              
              <div className="pt-8 flex items-center gap-8 border-t border-secondary-100">
                <div>
                  <div className="flex items-baseline gap-1">
                    <CountUp end={150} suffix="+" className="text-3xl font-bold text-secondary-900" />
                  </div>
                  <div className="text-sm text-secondary-500 font-medium">Projects Delivered</div>
                </div>
                <div className="w-px h-12 bg-secondary-200"></div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <CountUp end={98} suffix="%" className="text-3xl font-bold text-secondary-900" />
                  </div>
                  <div className="text-sm text-secondary-500 font-medium">Client Satisfaction</div>
                </div>
                <div className="w-px h-12 bg-secondary-200"></div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <CountUp end={500} suffix="+" className="text-3xl font-bold text-secondary-900" />
                  </div>
                  <div className="text-sm text-secondary-500 font-medium">Trained Developers</div>
                </div>
              </div>
            </div>
            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-100 to-transparent rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-secondary-100 w-full max-w-md">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-secondary-50 rounded-xl">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary-900">Web Development</h3>
                      <p className="text-sm text-secondary-500">Modern & Scalable Solutions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-secondary-50 rounded-xl">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary-900">App Development</h3>
                      <p className="text-sm text-secondary-500">iOS & Android Native Apps</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-secondary-50 rounded-xl">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary-900">Industrial Training</h3>
                      <p className="text-sm text-secondary-500">Live Projects & Mentorship</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-secondary-500 max-w-2xl mx-auto">We believe in holistic development and professional excellence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Creative Thinking", icon: "💡", desc: "Fostering innovation and out-of-the-box solutions." },
              { title: "Career Planning", icon: "🎯", desc: "Strategic guidance for a successful professional journey." },
              { title: "Technical Excellence", icon: "⚡", desc: "Mastering the latest technologies and best practices." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-secondary-50 hover:bg-white hover:shadow-xl transition-all border border-secondary-100 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-secondary-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-6 bg-secondary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-900/20 blur-3xl rounded-full transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to CodengenX</h2>
              <p className="text-secondary-300 mb-6 leading-relaxed">
                CodengenX aims to provide an additional advantage to the field of information technology. 
                We are a team of passionate, skilled and energetic individuals collaborating to offer top-notch services.
              </p>
              <p className="text-secondary-300 mb-8 leading-relaxed">
                Recognized as a leading Ed-Tech and Software Company, we strive to transform your ideas into tangible results. 
                Our brand represents a fusion of expertise, innovation and contemporary knowledge.
              </p>
              <button className="text-primary-400 font-medium hover:text-primary-300 flex items-center gap-2">
                Learn More About Us <span aria-hidden="true">→</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary-800 p-6 rounded-2xl border border-secondary-700">
                <div className="text-3xl font-bold text-primary-400 mb-2">50+</div>
                <div className="text-sm text-secondary-400">Expert Mentors</div>
              </div>
              <div className="bg-secondary-800 p-6 rounded-2xl border border-secondary-700">
                <div className="text-3xl font-bold text-primary-400 mb-2">100%</div>
                <div className="text-sm text-secondary-400">Placement Support</div>
              </div>
              <div className="bg-secondary-800 p-6 rounded-2xl border border-secondary-700">
                <div className="text-3xl font-bold text-primary-400 mb-2">24/7</div>
                <div className="text-sm text-secondary-400">Support System</div>
              </div>
              <div className="bg-secondary-800 p-6 rounded-2xl border border-secondary-700">
                <div className="text-3xl font-bold text-primary-400 mb-2">Global</div>
                <div className="text-sm text-secondary-400">Client Base</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-secondary-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Software Services</h2>
            </div>
            <Link href="/services" className="text-primary-600 font-medium hover:text-primary-700 mt-4 md:mt-0">
              View All Services →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Web Development", desc: "Custom websites and web applications built with modern technologies." },
              { title: "Mobile Apps", desc: "Native and cross-platform mobile applications for iOS and Android." },
              { title: "Digital Marketing", desc: "SEO, SEM, and social media strategies to grow your online presence." },
              { title: "Cloud Solutions", desc: "Scalable cloud infrastructure and DevOps services." },
              { title: "UI/UX Design", desc: "User-centric design that drives engagement and conversion." },
              { title: "Consulting", desc: "Expert technical consulting to guide your digital transformation." }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-secondary-100 group">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                  <span className="text-primary-600 group-hover:text-white text-xl transition-colors">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-secondary-500 mb-4">{service.desc}</p>
                <Link href="/services" className="text-sm font-medium text-primary-600 hover:text-primary-700">Learn more</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">Education</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Training Programs</h2>
            <p className="text-secondary-500 max-w-2xl mx-auto">
              Industry-oriented training programs designed to make you job-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Data Science", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=600&fit=crop" },
              { title: "Full Stack Java", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=600&fit=crop" },
              { title: "MERN Stack", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=600&fit=crop" },
              { title: "AWS & DevOps", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=600&fit=crop" },
              { title: "Python", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=600&fit=crop" },
              { title: "Machine Learning", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop" },
              { title: "Cyber Security", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=600&fit=crop" },
              { title: "Digital Marketing", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop" }
            ].map((course, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-secondary-900 aspect-[4/5] flex items-end p-6 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                {/* Image Background */}
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

      {/* Footer */}
      <footer className="bg-secondary-900 text-white pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary-600 rounded flex items-center justify-center">
                  <span className="text-white font-mono text-sm font-bold">CX</span>
                </div>
                <span className="font-bold text-xl">CodengenX</span>
              </div>
              <p className="text-secondary-400 max-w-sm mb-8">
                Empowering businesses with cutting-edge software solutions and shaping the future of tech talent through expert training.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'Instagram', 'Facebook'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                    <span className="sr-only">{social}</span>
                    <span className="text-sm">🔗</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4 text-secondary-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/training" className="hover:text-white transition-colors">Training</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-4 text-secondary-400">
                <li className="flex items-start gap-3">
                  <span>📍</span>
                  <span>123 Tech Park, Innovation Street, Digital City</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>📧</span>
                  <a href="mailto:info@codengenx.com" className="hover:text-white transition-colors">info@codengenx.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <span>📞</span>
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-secondary-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-secondary-500 text-sm">
            <p>© 2025 CodengenX. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
