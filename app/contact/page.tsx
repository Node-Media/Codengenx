import Link from 'next/link';

export default function ContactPage() {
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
            <Link href="/contact" className="text-primary-600 font-bold transition-colors">Contact</Link>
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
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-secondary-900">
            Let&apos;s Start<br />
            <span className="text-primary-600">Building</span> Together
          </h1>
          <p className="text-xl text-secondary-500 mb-8 leading-relaxed max-w-3xl mx-auto">
            Whether you have a project in mind, need training for your team, or want to explore R&D opportunities,
            we&apos;re here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-secondary-100">
              <h2 className="text-3xl font-bold mb-4 text-secondary-900">Send Us a Message</h2>
              <p className="text-secondary-500 mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

              <form className="space-y-6">
                <div>
                  <label className="block font-medium mb-2 text-secondary-700">Your Name *</label>
                  <input
                    type="text"
                    className="w-full bg-secondary-50 border border-secondary-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2 text-secondary-700">Email Address *</label>
                  <input
                    type="email"
                    className="w-full bg-secondary-50 border border-secondary-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2 text-secondary-700">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-secondary-50 border border-secondary-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2 text-secondary-700">I&apos;m Interested In *</label>
                  <select className="w-full bg-secondary-50 border border-secondary-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all">
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>Product Development</option>
                    <option>Training Programs</option>
                    <option>R&D Partnership</option>
                    <option>Technical Consulting</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium mb-2 text-secondary-700">Project Budget</label>
                  <select className="w-full bg-secondary-50 border border-secondary-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all">
                    <option>Under $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000 - $50,000</option>
                    <option>$50,000 - $100,000</option>
                    <option>$100,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium mb-2 text-secondary-700">Tell Us About Your Project *</label>
                  <textarea
                    className="w-full bg-secondary-50 border border-secondary-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all min-h-[150px]"
                    placeholder="Describe your project, goals, timeline, or any specific requirements..."
                  ></textarea>
                </div>

                <button className="w-full bg-primary-600 text-white px-8 py-4 text-lg rounded-xl shadow-lg shadow-primary-600/30 hover:bg-primary-700 transition-all font-medium">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & R&D */}
            <div className="space-y-8">
              <div className="bg-secondary-50 p-8 rounded-3xl border border-secondary-100">
                <h3 className="text-2xl font-bold mb-6 text-secondary-900">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <div className="font-mono text-xs text-secondary-400 mb-1 uppercase tracking-wider">Email</div>
                    <a href="mailto:hello@codengenx.com" className="text-xl text-primary-600 hover:text-primary-700 transition-colors font-medium">hello@codengenx.com</a>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-secondary-400 mb-1 uppercase tracking-wider">Phone</div>
                    <a href="tel:+15551234567" className="text-xl text-primary-600 hover:text-primary-700 transition-colors font-medium">+1 (555) 123-4567</a>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-secondary-400 mb-1 uppercase tracking-wider">Address</div>
                    <p className="text-xl text-secondary-700">123 Tech Boulevard<br />San Francisco, CA 94102<br />United States</p>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-secondary-400 mb-1 uppercase tracking-wider">Office Hours</div>
                    <p className="text-xl text-secondary-700">Monday - Friday<br />9:00 AM - 6:00 PM PST</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10">
                    <div className="text-4xl mb-3">🔬</div>
                    <h3 className="text-2xl font-bold mb-4">Research & Development</h3>
                    <p className="text-green-50 mb-6 leading-relaxed">
                    Interested in exploring cutting-edge technologies or building innovative solutions?
                    Our R&D team works on emerging tech and experimental projects.
                    </p>
                    <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                        <span className="text-green-200 text-xl">→</span>
                        <span className="text-green-50">AI/ML integration projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-green-200 text-xl">→</span>
                        <span className="text-green-50">Blockchain & Web3 development</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-green-200 text-xl">→</span>
                        <span className="text-green-50">IoT & embedded systems</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-green-200 text-xl">→</span>
                        <span className="text-green-50">AR/VR experiences</span>
                    </div>
                    </div>
                    <a href="mailto:rd@codengenx.com" className="inline-block bg-white text-green-700 px-6 py-3 rounded-xl hover:bg-green-50 transition-all font-bold shadow-lg">
                    Contact R&D Team
                    </a>
                </div>
              </div>

              <div className="bg-white border border-secondary-100 p-8 rounded-3xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-secondary-900">Career Opportunities</h3>
                <p className="text-secondary-500 mb-4">
                  We&apos;re always looking for talented developers, designers, and trainers to join our team.
                </p>
                <a href="mailto:careers@codengenx.com" className="text-primary-600 font-bold hover:underline flex items-center gap-2">
                  View Open Positions <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Projects Showcase */}
      <section className="py-20 px-6 bg-secondary-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">R&D Projects</h2>
            <p className="text-xl text-secondary-400">Exploring tomorrow&apos;s technology today</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="font-mono text-xs text-primary-400 mb-3 uppercase tracking-wider">Active Project</div>
              <h3 className="text-2xl font-bold mb-3">AI Code Assistant</h3>
              <p className="text-secondary-300 mb-6">
                Developing an intelligent code completion and review system powered by machine learning.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs font-mono bg-white/10 text-white px-2 py-1 rounded">Python</span>
                <span className="text-xs font-mono bg-white/10 text-white px-2 py-1 rounded">TensorFlow</span>
                <span className="text-xs font-mono bg-white/10 text-white px-2 py-1 rounded">NLP</span>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="font-mono text-xs text-green-400 mb-3 uppercase tracking-wider">Research</div>
              <h3 className="text-2xl font-bold mb-3">Decentralized Learning</h3>
              <p className="text-secondary-300 mb-6">
                Building a blockchain-based platform for verified skill certification and credential sharing.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs font-mono bg-white/10 text-white px-2 py-1 rounded">Solidity</span>
                <span className="text-xs font-mono bg-white/10 text-white px-2 py-1 rounded">IPFS</span>
                <span className="text-xs font-mono bg-white/10 text-white px-2 py-1 rounded">Web3</span>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="font-mono text-xs text-purple-400 mb-3 uppercase tracking-wider">Prototype</div>
              <h3 className="text-2xl font-bold mb-3">AR Training Platform</h3>
              <p className="text-secondary-300 mb-6">
                Immersive augmented reality environment for hands-on technical training and simulations.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs font-mono bg-white/10 text-white px-2 py-1 rounded">Unity</span>
                <span className="text-xs font-mono bg-white/10 text-white px-2 py-1 rounded">ARKit</span>
                <span className="text-xs font-mono bg-white/10 text-white px-2 py-1 rounded">C#</span>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-secondary-300 mb-6">
              Want to collaborate on cutting-edge research or have an innovative idea?
            </p>
            <a href="mailto:rd@codengenx.com" className="inline-block bg-primary-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20 font-medium">
              Partner With Our R&D Team
            </a>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-6 bg-secondary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-secondary-900">Our Locations</h2>
            <p className="text-xl text-secondary-500">Global presence, local expertise</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-secondary-100 text-center">
               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">🇺🇸</div>
              <div className="font-mono text-xs text-primary-600 mb-2 uppercase tracking-wider font-bold">Headquarters</div>
              <h3 className="text-2xl font-bold mb-3 text-secondary-900">San Francisco</h3>
              <p className="text-secondary-500 mb-1">123 Tech Boulevard</p>
              <p className="text-secondary-500 mb-4">San Francisco, CA 94102</p>
              <a href="tel:+15551234567" className="text-primary-600 font-medium hover:text-primary-700">+1 (555) 123-4567</a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-secondary-100 text-center">
               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">🇮🇳</div>
              <div className="font-mono text-xs text-orange-600 mb-2 uppercase tracking-wider font-bold">Development Center</div>
              <h3 className="text-2xl font-bold mb-3 text-secondary-900">Bangalore</h3>
              <p className="text-secondary-500 mb-1">456 Innovation Park</p>
              <p className="text-secondary-500 mb-4">Bangalore, KA 560001</p>
              <a href="tel:+918012345678" className="text-primary-600 font-medium hover:text-primary-700">+91 80 1234 5678</a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-secondary-100 text-center">
               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">🇺🇸</div>
              <div className="font-mono text-xs text-red-600 mb-2 uppercase tracking-wider font-bold">Training Hub</div>
              <h3 className="text-2xl font-bold mb-3 text-secondary-900">Austin</h3>
              <p className="text-secondary-500 mb-1">789 Learning Lane</p>
              <p className="text-secondary-500 mb-4">Austin, TX 78701</p>
              <a href="tel:+15129876543" className="text-primary-600 font-medium hover:text-primary-700">+1 (512) 987-6543</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-secondary-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div className="border border-secondary-200 p-6 rounded-2xl hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold mb-2 text-secondary-900">What&apos;s your typical project timeline?</h3>
              <p className="text-secondary-500">
                Projects typically range from 8-16 weeks depending on complexity. We provide detailed timelines
                during our discovery phase and maintain transparent communication throughout.
              </p>
            </div>
            <div className="border border-secondary-200 p-6 rounded-2xl hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold mb-2 text-secondary-900">Do you work with startups?</h3>
              <p className="text-secondary-500">
                Absolutely! We&apos;ve helped dozens of startups build MVPs and scale their products. We offer
                flexible engagement models to work with various budgets.
              </p>
            </div>
            <div className="border border-secondary-200 p-6 rounded-2xl hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold mb-2 text-secondary-900">Can you help with existing codebases?</h3>
              <p className="text-secondary-500">
                Yes, we offer code audits, refactoring, and feature additions for existing projects. We work
                with all modern tech stacks.
              </p>
            </div>
            <div className="border border-secondary-200 p-6 rounded-2xl hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold mb-2 text-secondary-900">What training formats do you offer?</h3>
              <p className="text-secondary-500">
                We offer in-person, remote, and hybrid training options. Our programs include live instructor-led
                sessions, recorded content, hands-on projects, and ongoing support.
              </p>
            </div>
            <div className="border border-secondary-200 p-6 rounded-2xl hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold mb-2 text-secondary-900">How do I get started with R&D collaboration?</h3>
              <p className="text-secondary-500">
                Email our R&D team at rd@codengenx.com with your idea or challenge. We&apos;ll schedule a call
                to discuss feasibility, timeline, and partnership options.
              </p>
            </div>
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
