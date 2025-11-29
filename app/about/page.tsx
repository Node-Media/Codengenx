import CountUp from '../components/CountUp';
import { HiSparkles } from 'react-icons/hi';
import { FaHandshake, FaBook, FaRocket } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-sm border-b border-noir/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-noir flex items-center justify-center">
              <span className="text-cream font-mono text-sm font-bold">CX</span>
            </div>
            <span className="font-bold text-xl">CodengenX</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-noir hover:text-rust transition-colors">Home</a>
            <a href="/about" className="text-rust font-bold transition-colors">About Us</a>
            <a href="/services" className="text-noir hover:text-rust transition-colors">Services</a>
            <a href="/blog" className="text-noir hover:text-rust transition-colors">Blog</a>
            <a href="/contact" className="text-noir hover:text-rust transition-colors">Contact</a>
            <button className="bg-noir text-cream px-6 py-2 hover:bg-slate transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-sand">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 border-2 border-noir">
            <span className="font-mono text-sm uppercase tracking-wider">Who We Are</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            Building the Future,<br />
            <span className="text-rust">One Line</span> at a Time
          </h1>
          <p className="text-xl text-slate mb-8 leading-relaxed max-w-3xl mx-auto">
            CodengenX is a technology partner that bridges innovation and execution. We create powerful digital
            solutions while empowering teams with the knowledge to thrive in the evolving tech landscape.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-rust text-cream p-12 border-4 border-noir">
              <div className="text-5xl font-bold mb-4">Our Mission</div>
              <p className="text-xl leading-relaxed text-cream/90">
                To empower businesses with cutting-edge technology solutions while building a community of
                skilled developers who can innovate, adapt, and lead in the digital age.
              </p>
            </div>
            <div className="bg-olive text-cream p-12 border-4 border-noir">
              <div className="text-5xl font-bold mb-4">Our Vision</div>
              <p className="text-xl leading-relaxed text-cream/90">
                A world where businesses of all sizes have access to world-class technology and every developer
                has the opportunity to reach their full potential through continuous learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">Our Story</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-rust pl-8">
              <div className="font-mono text-sm text-rust mb-2">2019 - THE BEGINNING</div>
              <p className="text-lg text-slate leading-relaxed">
                CodengenX started with a simple idea: combine excellent development services with comprehensive
                training. Our founders, experienced developers frustrated by the gap between industry needs and
                available talent, set out to create a company that could bridge both worlds.
              </p>
            </div>
            <div className="border-l-4 border-olive pl-8">
              <div className="font-mono text-sm text-olive mb-2">2020-2022 - GROWTH</div>
              <p className="text-lg text-slate leading-relaxed">
                We expanded from a small team to a full-service agency, completing over 100 projects while
                training hundreds of developers. Our dual focus on building great software and educating great
                developers proved to be a winning combination.
              </p>
            </div>
            <div className="border-l-4 border-noir pl-8">
              <div className="font-mono text-sm text-noir mb-2">2023-PRESENT - INNOVATION</div>
              <p className="text-lg text-slate leading-relaxed">
                Today, we're a trusted partner for businesses worldwide, with an expanding portfolio in web, mobile,
                and emerging technologies. Our training programs have helped launch careers for 500+ developers,
                and we continue to push the boundaries of what's possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-noir text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-sand">Principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-2 border-cream p-8">
              <div className="text-4xl mb-4"><HiSparkles className="inline-block" /></div>
              <h3 className="text-2xl font-bold mb-3">Excellence</h3>
              <p className="text-sand">
                We pursue excellence in every line of code, every training session, and every client interaction.
              </p>
            </div>
            <div className="border-2 border-cream p-8">
              <div className="text-4xl mb-4"><FaHandshake className="inline-block" /></div>
              <h3 className="text-2xl font-bold mb-3">Partnership</h3>
              <p className="text-sand">
                Your success is our success. We work as true partners, invested in your long-term growth.
              </p>
            </div>
            <div className="border-2 border-cream p-8">
              <div className="text-4xl mb-4"><FaBook className="inline-block" /></div>
              <h3 className="text-2xl font-bold mb-3">Learning</h3>
              <p className="text-sand">
                Continuous learning is at our core. We stay ahead of tech trends to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="border-2 border-cream p-8">
              <div className="text-4xl mb-4"><FaRocket className="inline-block" /></div>
              <h3 className="text-2xl font-bold mb-3">Innovation</h3>
              <p className="text-sand">
                We embrace new technologies and methodologies to solve problems in creative, efficient ways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Meet the Team</h2>
            <p className="text-xl text-slate">Passionate experts driving innovation</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cream border-4 border-noir p-8">
              <div className="w-full aspect-square bg-slate mb-6 flex items-center justify-center border-2 border-noir">
                <span className="text-6xl text-cream font-mono">AS</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Aditya Singh</h3>
              <div className="text-rust font-mono text-sm mb-4">Co-Founder & CEO</div>
              <p className="text-slate">
                Full-stack architect with 12+ years experience. Leads our technical strategy and innovation initiatives.
              </p>
            </div>
            <div className="bg-cream border-4 border-noir p-8">
              <div className="w-full aspect-square bg-olive mb-6 flex items-center justify-center border-2 border-noir">
                <span className="text-6xl text-cream font-mono">PM</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Priya Malhotra</h3>
              <div className="text-rust font-mono text-sm mb-4">Co-Founder & CTO</div>
              <p className="text-slate">
                Mobile and cloud specialist. Oversees all development projects and ensures world-class quality.
              </p>
            </div>
            <div className="bg-cream border-4 border-noir p-8">
              <div className="w-full aspect-square bg-rust mb-6 flex items-center justify-center border-2 border-noir">
                <span className="text-6xl text-cream font-mono">RK</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Rahul Kumar</h3>
              <div className="text-rust font-mono text-sm mb-4">Head of Training</div>
              <p className="text-slate">
                Educator and developer who's trained 500+ students. Creates curriculum that bridges theory and practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-sand">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">By the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-cream border-4 border-noir p-8 text-center">
              <CountUp end={150} suffix="+" className="text-5xl font-bold mb-2" />
              <div className="font-mono text-sm text-slate">Projects Delivered</div>
            </div>
            <div className="bg-cream border-4 border-noir p-8 text-center">
              <CountUp end={500} suffix="+" className="text-5xl font-bold mb-2" />
              <div className="font-mono text-sm text-slate">Developers Trained</div>
            </div>
            <div className="bg-cream border-4 border-noir p-8 text-center">
              <CountUp end={98} suffix="%" className="text-5xl font-bold mb-2" />
              <div className="font-mono text-sm text-slate">Client Satisfaction</div>
            </div>
            <div className="bg-cream border-4 border-noir p-8 text-center">
              <CountUp end={15} suffix="+" className="text-5xl font-bold mb-2" />
              <div className="font-mono text-sm text-slate">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-noir text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-sand mb-8">
            Whether you need a development partner or want to upskill your team, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-rust text-cream px-8 py-4 text-lg hover:bg-opacity-90 transition-all">
              Start a Project
            </button>
            <button className="border-2 border-cream px-8 py-4 text-lg hover:bg-cream hover:text-noir transition-all">
              Explore Training
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-cream border-t-4 border-noir">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-noir flex items-center justify-center">
                  <span className="text-cream font-mono text-sm font-bold">CX</span>
                </div>
                <span className="font-bold text-xl">CodengenX</span>
              </div>
              <p className="text-slate text-sm">
                Web & app solutions with expert training to power your digital transformation.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-slate">
                <li><a href="/services" className="hover:text-rust transition-colors">Web Development</a></li>
                <li><a href="/services" className="hover:text-rust transition-colors">Mobile Apps</a></li>
                <li><a href="/services" className="hover:text-rust transition-colors">Training Programs</a></li>
                <li><a href="/services" className="hover:text-rust transition-colors">Product Development</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate">
                <li><a href="/about" className="hover:text-rust transition-colors">About Us</a></li>
                <li><a href="/blog" className="hover:text-rust transition-colors">Blog</a></li>
                <li><a href="/contact" className="hover:text-rust transition-colors">Careers</a></li>
                <li><a href="/contact" className="hover:text-rust transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate">
                <li><a href="/blog" className="hover:text-rust transition-colors">Case Studies</a></li>
                <li><a href="/contact" className="hover:text-rust transition-colors">R&D Projects</a></li>
                <li><a href="/services" className="hover:text-rust transition-colors">Training Catalog</a></li>
                <li><a href="/contact" className="hover:text-rust transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-noir pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate text-sm font-mono">
              © 2025 CodengenX. All rights reserved.
            </p>
            <div className="flex gap-6 text-slate text-sm">
              <a href="#" className="hover:text-rust transition-colors">Privacy</a>
              <a href="#" className="hover:text-rust transition-colors">Terms</a>
              <a href="#" className="hover:text-rust transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
