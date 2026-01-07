import Link from 'next/link';
import CountUp from '../components/CountUp';

export default function AboutPage() {
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
            <Link href="/about" className="text-primary-600 font-bold transition-colors">About Us</Link>
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
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Who We Are
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-secondary-900">
            Building the Future,<br />
            <span className="text-primary-600">One Line</span> at a Time
          </h1>
          <p className="text-xl text-secondary-500 mb-8 leading-relaxed max-w-3xl mx-auto">
            CodengenX is a technology partner that bridges innovation and execution. We create powerful digital
            solutions while empowering teams with the knowledge to thrive in the evolving tech landscape.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-xl border border-secondary-100 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-8 text-3xl">🚀</div>
              <div className="text-3xl font-bold mb-4 text-secondary-900">Our Mission</div>
              <p className="text-xl leading-relaxed text-secondary-500">
                To empower businesses with cutting-edge technology solutions while building a community of
                skilled developers who can innovate, adapt, and lead in the digital age.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-xl border border-secondary-100 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-8 text-3xl">👁️</div>
              <div className="text-3xl font-bold mb-4 text-secondary-900">Our Vision</div>
              <p className="text-xl leading-relaxed text-secondary-500">
                 A world where businesses of all sizes have access to world-class technology and every developer
                has the opportunity to reach their full potential through continuous learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-secondary-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-secondary-900">Our Story</h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-secondary-300 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-secondary-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-2xl shadow-lg border border-secondary-100">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-secondary-900">The Beginning</div>
                  <time className="font-mono text-sm text-primary-600">2019</time>
                </div>
                <p className="text-secondary-500">
                  CodengenX started with a simple idea: combine excellent development services with comprehensive
                  training. Our founders set out to create a company that could bridge both worlds.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-secondary-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                 <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-2xl shadow-lg border border-secondary-100">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-secondary-900">Rapid Growth</div>
                  <time className="font-mono text-sm text-green-600">2020-2022</time>
                </div>
                <p className="text-secondary-500">
                  We expanded from a small team to a full-service agency, completing over 100 projects while
                  training hundreds of developers. Our dual focus proved to be a winning combination.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-secondary-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                 <div className="w-3 h-3 bg-secondary-900 rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-2xl shadow-lg border border-secondary-100">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-secondary-900">Innovation Era</div>
                  <time className="font-mono text-sm text-secondary-900">2023-Present</time>
                </div>
                <p className="text-secondary-500">
                  Today, we&apos;re a trusted partner for businesses worldwide. Our training programs have helped launch
                   careers for 500+ developers, and we continue to push boundaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-secondary-900">By the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-secondary-50 p-8 rounded-2xl text-center shadow-lg border border-secondary-100">
              <CountUp end={150} suffix="+" className="text-5xl font-bold mb-2 text-primary-600 block" />
              <div className="font-mono text-sm text-secondary-500">Projects Delivered</div>
            </div>
            <div className="bg-secondary-50 p-8 rounded-2xl text-center shadow-lg border border-secondary-100">
              <CountUp end={500} suffix="+" className="text-5xl font-bold mb-2 text-primary-600 block" />
              <div className="font-mono text-sm text-secondary-500">Developers Trained</div>
            </div>
            <div className="bg-secondary-50 p-8 rounded-2xl text-center shadow-lg border border-secondary-100">
              <CountUp end={98} suffix="%" className="text-5xl font-bold mb-2 text-primary-600 block" />
              <div className="font-mono text-sm text-secondary-500">Client Satisfaction</div>
            </div>
            <div className="bg-secondary-50 p-8 rounded-2xl text-center shadow-lg border border-secondary-100">
              <CountUp end={15} suffix="+" className="text-5xl font-bold mb-2 text-primary-600 block" />
              <div className="font-mono text-sm text-secondary-500">Countries Served</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team CTA */}
      <section className="py-20 px-6 bg-secondary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-primary-900/20 blur-3xl rounded-full transform -translate-x-1/2"></div>
         <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8">Join Our Journey</h2>
          <p className="text-xl text-secondary-300 mb-10">
             We are always looking for passionate individuals to join our team or partner with us on exciting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/20">
              Work With Us
            </Link>
             <Link href="/contact" className="bg-transparent border border-secondary-700 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-secondary-800 transition-all">
              See Open Roles
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-secondary-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-mono text-sm font-bold">CX</span>
                </div>
                <span className="font-bold text-xl text-secondary-900">CodengenX</span>
              </div>
              <p className="text-secondary-500 text-sm">
                Web & app solutions with expert training to power your digital transformation.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-secondary-900">Services</h4>
              <ul className="space-y-2 text-secondary-500">
                <li><Link href="/services" className="hover:text-primary-600 transition-colors">Web Development</Link></li>
                <li><Link href="/services" className="hover:text-primary-600 transition-colors">Mobile Apps</Link></li>
                <li><Link href="/services" className="hover:text-primary-600 transition-colors">Training Programs</Link></li>
                <li><Link href="/services" className="hover:text-primary-600 transition-colors">Product Development</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-secondary-900">Company</h4>
               <ul className="space-y-2 text-secondary-500">
                <li><Link href="/about" className="hover:text-primary-600 transition-colors">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-primary-600 transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-primary-600 transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-primary-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-secondary-900">Resources</h4>
               <ul className="space-y-2 text-secondary-500">
                <li><Link href="/blog" className="hover:text-primary-600 transition-colors">Case Studies</Link></li>
                <li><Link href="/contact" className="hover:text-primary-600 transition-colors">R&D Projects</Link></li>
                <li><Link href="/services" className="hover:text-primary-600 transition-colors">Training Catalog</Link></li>
                <li><Link href="/contact" className="hover:text-primary-600 transition-colors">Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-400 text-sm font-mono">
              © 2025 CodengenX. All rights reserved.
            </p>
            <div className="flex gap-6 text-secondary-400 text-sm">
              <a href="#" className="hover:text-primary-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary-600 transition-colors">Terms</a>
              <a href="#" className="hover:text-primary-600 transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
