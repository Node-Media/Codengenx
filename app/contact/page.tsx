import { FaMicroscope } from 'react-icons/fa';

export default function ContactPage() {
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
            <a href="/about" className="text-noir hover:text-rust transition-colors">About Us</a>
            <a href="/services" className="text-noir hover:text-rust transition-colors">Services</a>
            <a href="/blog" className="text-noir hover:text-rust transition-colors">Blog</a>
            <a href="/contact" className="text-rust font-bold transition-colors">Contact</a>
            <button className="bg-noir text-cream px-6 py-2 hover:bg-slate transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-noir text-cream">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 border-2 border-cream">
            <span className="font-mono text-sm uppercase tracking-wider">Get In Touch</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            Let's Start<br />
            <span className="text-rust">Building</span> Together
          </h1>
          <p className="text-xl text-sand mb-8 leading-relaxed max-w-3xl mx-auto">
            Whether you have a project in mind, need training for your team, or want to explore R&D opportunities,
            we're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-slate mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              <form className="space-y-6">
                <div>
                  <label className="block font-bold mb-2">Your Name *</label>
                  <input
                    type="text"
                    className="w-full border-2 border-noir p-4 focus:outline-none focus:border-rust transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full border-2 border-noir p-4 focus:outline-none focus:border-rust transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full border-2 border-noir p-4 focus:outline-none focus:border-rust transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">I'm Interested In *</label>
                  <select className="w-full border-2 border-noir p-4 focus:outline-none focus:border-rust transition-colors bg-cream">
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
                  <label className="block font-bold mb-2">Project Budget</label>
                  <select className="w-full border-2 border-noir p-4 focus:outline-none focus:border-rust transition-colors bg-cream">
                    <option>Under $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000 - $50,000</option>
                    <option>$50,000 - $100,000</option>
                    <option>$100,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold mb-2">Tell Us About Your Project *</label>
                  <textarea
                    className="w-full border-2 border-noir p-4 focus:outline-none focus:border-rust transition-colors min-h-[150px]"
                    placeholder="Describe your project, goals, timeline, or any specific requirements..."
                  ></textarea>
                </div>

                <button className="w-full bg-rust text-cream px-8 py-4 text-lg hover:bg-opacity-90 transition-all font-bold">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & R&D */}
            <div className="space-y-8">
              <div className="bg-sand border-4 border-noir p-8">
                <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <div className="font-mono text-sm text-slate mb-1">EMAIL</div>
                    <a href="mailto:hello@codengenx.com" className="text-xl hover:text-rust transition-colors">hello@codengenx.com</a>
                  </div>
                  <div>
                    <div className="font-mono text-sm text-slate mb-1">PHONE</div>
                    <a href="tel:+15551234567" className="text-xl hover:text-rust transition-colors">+1 (555) 123-4567</a>
                  </div>
                  <div>
                    <div className="font-mono text-sm text-slate mb-1">ADDRESS</div>
                    <p className="text-xl">123 Tech Boulevard<br />San Francisco, CA 94102<br />United States</p>
                  </div>
                  <div>
                    <div className="font-mono text-sm text-slate mb-1">OFFICE HOURS</div>
                    <p className="text-xl">Monday - Friday<br />9:00 AM - 6:00 PM PST</p>
                  </div>
                </div>
              </div>

              <div className="bg-olive text-cream border-4 border-noir p-8">
                <div className="text-4xl mb-3"><FaMicroscope className="inline-block" /></div>
                <h3 className="text-3xl font-bold mb-4">Research & Development</h3>
                <p className="text-cream/90 mb-6 leading-relaxed">
                  Interested in exploring cutting-edge technologies or building innovative solutions?
                  Our R&D team works on emerging tech and experimental projects.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-cream text-xl">→</span>
                    <span>AI/ML integration projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cream text-xl">→</span>
                    <span>Blockchain & Web3 development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cream text-xl">→</span>
                    <span>IoT & embedded systems</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cream text-xl">→</span>
                    <span>AR/VR experiences</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cream text-xl">→</span>
                    <span>Custom research partnerships</span>
                  </div>
                </div>
                <a href="mailto:rd@codengenx.com" className="inline-block bg-cream text-olive px-6 py-3 hover:bg-sand transition-all font-bold">
                  Contact R&D Team
                </a>
              </div>

              <div className="bg-cream border-4 border-noir p-8">
                <h3 className="text-2xl font-bold mb-4">Career Opportunities</h3>
                <p className="text-slate mb-4">
                  We're always looking for talented developers, designers, and trainers to join our team.
                </p>
                <a href="mailto:careers@codengenx.com" className="text-rust font-bold hover:underline">
                  View Open Positions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Projects Showcase */}
      <section className="py-20 px-6 bg-noir text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">R&D Projects</h2>
            <p className="text-xl text-sand">Exploring tomorrow's technology today</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-cream p-8">
              <div className="font-mono text-sm text-rust mb-2">ACTIVE PROJECT</div>
              <h3 className="text-2xl font-bold mb-3">AI Code Assistant</h3>
              <p className="text-sand mb-4">
                Developing an intelligent code completion and review system powered by machine learning.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs font-mono bg-cream text-noir px-2 py-1">Python</span>
                <span className="text-xs font-mono bg-cream text-noir px-2 py-1">TensorFlow</span>
                <span className="text-xs font-mono bg-cream text-noir px-2 py-1">NLP</span>
              </div>
            </div>
            <div className="border-2 border-cream p-8">
              <div className="font-mono text-sm text-rust mb-2">RESEARCH</div>
              <h3 className="text-2xl font-bold mb-3">Decentralized Learning</h3>
              <p className="text-sand mb-4">
                Building a blockchain-based platform for verified skill certification and credential sharing.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs font-mono bg-cream text-noir px-2 py-1">Solidity</span>
                <span className="text-xs font-mono bg-cream text-noir px-2 py-1">IPFS</span>
                <span className="text-xs font-mono bg-cream text-noir px-2 py-1">Web3</span>
              </div>
            </div>
            <div className="border-2 border-cream p-8">
              <div className="font-mono text-sm text-rust mb-2">PROTOTYPE</div>
              <h3 className="text-2xl font-bold mb-3">AR Training Platform</h3>
              <p className="text-sand mb-4">
                Immersive augmented reality environment for hands-on technical training and simulations.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs font-mono bg-cream text-noir px-2 py-1">Unity</span>
                <span className="text-xs font-mono bg-cream text-noir px-2 py-1">ARKit</span>
                <span className="text-xs font-mono bg-cream text-noir px-2 py-1">C#</span>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-sand mb-6">
              Want to collaborate on cutting-edge research or have an innovative idea?
            </p>
            <a href="mailto:rd@codengenx.com" className="inline-block border-2 border-cream px-8 py-4 text-lg hover:bg-cream hover:text-noir transition-all">
              Partner With Our R&D Team
            </a>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-6 bg-sand">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Our Locations</h2>
            <p className="text-xl text-slate">Global presence, local expertise</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cream border-4 border-noir p-8">
              <div className="font-mono text-sm text-rust mb-2">HEADQUARTERS</div>
              <h3 className="text-2xl font-bold mb-3">San Francisco</h3>
              <p className="text-slate mb-2">123 Tech Boulevard</p>
              <p className="text-slate mb-4">San Francisco, CA 94102</p>
              <a href="tel:+15551234567" className="text-noir hover:text-rust">+1 (555) 123-4567</a>
            </div>
            <div className="bg-cream border-4 border-noir p-8">
              <div className="font-mono text-sm text-rust mb-2">DEVELOPMENT CENTER</div>
              <h3 className="text-2xl font-bold mb-3">Bangalore</h3>
              <p className="text-slate mb-2">456 Innovation Park</p>
              <p className="text-slate mb-4">Bangalore, KA 560001</p>
              <a href="tel:+918012345678" className="text-noir hover:text-rust">+91 80 1234 5678</a>
            </div>
            <div className="bg-cream border-4 border-noir p-8">
              <div className="font-mono text-sm text-rust mb-2">TRAINING HUB</div>
              <h3 className="text-2xl font-bold mb-3">Austin</h3>
              <p className="text-slate mb-2">789 Learning Lane</p>
              <p className="text-slate mb-4">Austin, TX 78701</p>
              <a href="tel:+15129876543" className="text-noir hover:text-rust">+1 (512) 987-6543</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div className="border-2 border-noir p-6">
              <h3 className="text-xl font-bold mb-2">What's your typical project timeline?</h3>
              <p className="text-slate">
                Projects typically range from 8-16 weeks depending on complexity. We provide detailed timelines
                during our discovery phase and maintain transparent communication throughout.
              </p>
            </div>
            <div className="border-2 border-noir p-6">
              <h3 className="text-xl font-bold mb-2">Do you work with startups?</h3>
              <p className="text-slate">
                Absolutely! We've helped dozens of startups build MVPs and scale their products. We offer
                flexible engagement models to work with various budgets.
              </p>
            </div>
            <div className="border-2 border-noir p-6">
              <h3 className="text-xl font-bold mb-2">Can you help with existing codebases?</h3>
              <p className="text-slate">
                Yes, we offer code audits, refactoring, and feature additions for existing projects. We work
                with all modern tech stacks.
              </p>
            </div>
            <div className="border-2 border-noir p-6">
              <h3 className="text-xl font-bold mb-2">What training formats do you offer?</h3>
              <p className="text-slate">
                We offer in-person, remote, and hybrid training options. Our programs include live instructor-led
                sessions, recorded content, hands-on projects, and ongoing support.
              </p>
            </div>
            <div className="border-2 border-noir p-6">
              <h3 className="text-xl font-bold mb-2">How do I get started with R&D collaboration?</h3>
              <p className="text-slate">
                Email our R&D team at rd@codengenx.com with your idea or challenge. We'll schedule a call
                to discuss feasibility, timeline, and partnership options.
              </p>
            </div>
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
