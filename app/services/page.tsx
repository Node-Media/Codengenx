import { FaGraduationCap } from 'react-icons/fa';
import { HiLightningBolt, HiSparkles } from 'react-icons/hi';

export default function ServicesPage() {
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
            <a href="/services" className="text-rust font-bold transition-colors">Services</a>
            <a href="/blog" className="text-noir hover:text-rust transition-colors">Blog</a>
            <a href="/contact" className="text-noir hover:text-rust transition-colors">Contact</a>
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
            <span className="font-mono text-sm uppercase tracking-wider">Our Services</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            Solutions That<br />
            <span className="text-rust">Scale</span> Your Business
          </h1>
          <p className="text-xl text-sand mb-8 leading-relaxed max-w-3xl mx-auto">
            From development to training, we provide comprehensive services that help your business grow
            and your team excel in the digital landscape.
          </p>
        </div>
      </section>

      {/* Development Services */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Development Services</h2>
            <p className="text-xl text-slate">Custom solutions built with modern technology</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-cream border-4 border-noir p-10">
              <div className="text-4xl mb-4 font-mono">01</div>
              <h3 className="text-3xl font-bold mb-4">Web Development</h3>
              <p className="text-slate mb-6 text-lg leading-relaxed">
                Full-stack web applications tailored to your business needs. From responsive landing pages
                to complex enterprise platforms.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-olive text-xl">✓</span>
                  <span>Custom web applications</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-olive text-xl">✓</span>
                  <span>E-commerce solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-olive text-xl">✓</span>
                  <span>Content management systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-olive text-xl">✓</span>
                  <span>Progressive web apps (PWA)</span>
                </div>
              </div>
              <div className="border-t-2 border-noir pt-4">
                <div className="font-mono text-xs text-slate mb-2">TECH STACK</div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-noir text-cream px-3 py-1 text-sm">React</span>
                  <span className="bg-noir text-cream px-3 py-1 text-sm">Next.js</span>
                  <span className="bg-noir text-cream px-3 py-1 text-sm">Node.js</span>
                  <span className="bg-noir text-cream px-3 py-1 text-sm">TypeScript</span>
                  <span className="bg-noir text-cream px-3 py-1 text-sm">PostgreSQL</span>
                </div>
              </div>
            </div>

            <div className="bg-cream border-4 border-noir p-10">
              <div className="text-4xl mb-4 font-mono">02</div>
              <h3 className="text-3xl font-bold mb-4">Mobile App Development</h3>
              <p className="text-slate mb-6 text-lg leading-relaxed">
                Native and cross-platform mobile applications that deliver exceptional user experiences
                on iOS and Android.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-rust text-xl">✓</span>
                  <span>Native iOS & Android apps</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-rust text-xl">✓</span>
                  <span>Cross-platform solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-rust text-xl">✓</span>
                  <span>App store optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-rust text-xl">✓</span>
                  <span>Ongoing maintenance & updates</span>
                </div>
              </div>
              <div className="border-t-2 border-noir pt-4">
                <div className="font-mono text-xs text-slate mb-2">TECH STACK</div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-noir text-cream px-3 py-1 text-sm">React Native</span>
                  <span className="bg-noir text-cream px-3 py-1 text-sm">Flutter</span>
                  <span className="bg-noir text-cream px-3 py-1 text-sm">Swift</span>
                  <span className="bg-noir text-cream px-3 py-1 text-sm">Kotlin</span>
                  <span className="bg-noir text-cream px-3 py-1 text-sm">Firebase</span>
                </div>
              </div>
            </div>

            <div className="bg-cream border-4 border-noir p-10">
              <div className="text-4xl mb-4 font-mono">03</div>
              <h3 className="text-3xl font-bold mb-4">Product Development</h3>
              <p className="text-slate mb-6 text-lg leading-relaxed">
                End-to-end product development from ideation to launch. We help you build MVPs, scale products,
                and iterate based on user feedback.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-olive text-xl">✓</span>
                  <span>MVP development</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-olive text-xl">✓</span>
                  <span>Product strategy consulting</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-olive text-xl">✓</span>
                  <span>UX/UI design</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-olive text-xl">✓</span>
                  <span>Market validation & testing</span>
                </div>
              </div>
            </div>

            <div className="bg-cream border-4 border-noir p-10">
              <div className="text-4xl mb-4 font-mono">04</div>
              <h3 className="text-3xl font-bold mb-4">API & Backend Development</h3>
              <p className="text-slate mb-6 text-lg leading-relaxed">
                Robust, scalable backend systems and RESTful APIs that power your applications with
                security and performance.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-rust text-xl">✓</span>
                  <span>RESTful & GraphQL APIs</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-rust text-xl">✓</span>
                  <span>Database architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-rust text-xl">✓</span>
                  <span>Cloud infrastructure setup</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-rust text-xl">✓</span>
                  <span>Microservices architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs - Main Focus */}
      <section id="training" className="py-20 px-6 bg-sand">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Training Programs</h2>
            <p className="text-xl text-slate">Comprehensive education that transforms careers</p>
          </div>

          {/* Long-Term Programs */}
          <div className="mb-16">
            <div className="bg-rust text-cream p-12 border-4 border-noir mb-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-4xl mb-2"><FaGraduationCap className="inline-block" /></div>
                  <h3 className="text-4xl font-bold mb-2">Long-Term Programs</h3>
                  <div className="font-mono text-sm text-cream/80">12-16 Week Intensive Bootcamps</div>
                </div>
                <div className="bg-cream text-noir px-4 py-2 font-bold">
                  300+ Hours
                </div>
              </div>
              <p className="text-xl text-cream/90 mb-8 leading-relaxed">
                Transform from beginner to job-ready developer with our comprehensive bootcamp programs.
                Intensive hands-on training with real-world projects, mentorship, and career support.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-cream/10 border-2 border-cream p-6">
                  <h4 className="text-xl font-bold mb-3">Full-Stack Web Development</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Frontend: React, Next.js, TypeScript</li>
                    <li>• Backend: Node.js, Express, APIs</li>
                    <li>• Databases: PostgreSQL, MongoDB</li>
                    <li>• DevOps: Git, Docker, CI/CD</li>
                    <li>• 3 Major capstone projects</li>
                  </ul>
                </div>
                <div className="bg-cream/10 border-2 border-cream p-6">
                  <h4 className="text-xl font-bold mb-3">Mobile App Development</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• React Native fundamentals</li>
                    <li>• iOS & Android deployment</li>
                    <li>• State management & navigation</li>
                    <li>• API integration & auth</li>
                    <li>• 2 App Store-ready projects</li>
                  </ul>
                </div>
                <div className="bg-cream/10 border-2 border-cream p-6">
                  <h4 className="text-xl font-bold mb-3">DevOps Engineering</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Cloud platforms (AWS, Azure)</li>
                    <li>• Container orchestration</li>
                    <li>• Infrastructure as Code</li>
                    <li>• Monitoring & logging</li>
                    <li>• Production deployment projects</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t-2 border-cream/30">
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-1">300+</div>
                    <div className="text-sm text-cream/80">Training Hours</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">Live</div>
                    <div className="text-sm text-cream/80">Instructor-Led</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">85%</div>
                    <div className="text-sm text-cream/80">Job Placement Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">6 Mo</div>
                    <div className="text-sm text-cream/80">Post-Course Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Short Courses */}
          <div className="mb-16">
            <div className="bg-olive text-cream p-12 border-4 border-noir mb-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-4xl mb-2"><HiLightningBolt className="inline-block" /></div>
                  <h3 className="text-4xl font-bold mb-2">Short Courses</h3>
                  <div className="font-mono text-sm text-cream/80">2-4 Week Focused Training</div>
                </div>
                <div className="bg-cream text-noir px-4 py-2 font-bold">
                  40-80 Hours
                </div>
              </div>
              <p className="text-xl text-cream/90 mb-8 leading-relaxed">
                Upskill quickly with focused courses on specific technologies and skills. Perfect for professionals
                who want to add new capabilities or teams needing rapid training.
              </p>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-cream/10 border-2 border-cream p-6">
                  <h4 className="text-lg font-bold mb-2">React Mastery</h4>
                  <p className="text-sm text-cream/80 mb-3">Deep dive into React, hooks, and state management</p>
                  <div className="text-xs font-mono">4 weeks • 60 hours</div>
                </div>
                <div className="bg-cream/10 border-2 border-cream p-6">
                  <h4 className="text-lg font-bold mb-2">Node.js Backend</h4>
                  <p className="text-sm text-cream/80 mb-3">Build scalable APIs and backend systems</p>
                  <div className="text-xs font-mono">3 weeks • 45 hours</div>
                </div>
                <div className="bg-cream/10 border-2 border-cream p-6">
                  <h4 className="text-lg font-bold mb-2">Mobile with Flutter</h4>
                  <p className="text-sm text-cream/80 mb-3">Cross-platform app development</p>
                  <div className="text-xs font-mono">4 weeks • 60 hours</div>
                </div>
                <div className="bg-cream/10 border-2 border-cream p-6">
                  <h4 className="text-lg font-bold mb-2">Cloud & DevOps</h4>
                  <p className="text-sm text-cream/80 mb-3">AWS, Docker, and deployment workflows</p>
                  <div className="text-xs font-mono">3 weeks • 45 hours</div>
                </div>
                <div className="bg-cream/10 border-2 border-cream p-6">
                  <h4 className="text-lg font-bold mb-2">TypeScript Pro</h4>
                  <p className="text-sm text-cream/80 mb-3">Advanced typing and best practices</p>
                  <div className="text-xs font-mono">2 weeks • 30 hours</div>
                </div>
                <div className="bg-cream/10 border-2 border-cream p-6">
                  <h4 className="text-lg font-bold mb-2">Python for Data</h4>
                  <p className="text-sm text-cream/80 mb-3">Data analysis and visualization</p>
                  <div className="text-xs font-mono">3 weeks • 45 hours</div>
                </div>
                <div className="bg-cream/10 border-2 border-cream p-6">
                  <h4 className="text-lg font-bold mb-2">UI/UX Fundamentals</h4>
                  <p className="text-sm text-cream/80 mb-3">Design principles for developers</p>
                  <div className="text-xs font-mono">2 weeks • 30 hours</div>
                </div>
                <div className="bg-cream/10 border-2 border-cream p-6">
                  <h4 className="text-lg font-bold mb-2">GraphQL APIs</h4>
                  <p className="text-sm text-cream/80 mb-3">Modern API development</p>
                  <div className="text-xs font-mono">2 weeks • 30 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* 1-on-1 Coaching */}
          <div>
            <div className="bg-slate text-cream p-12 border-4 border-noir">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-4xl mb-2"><HiSparkles className="inline-block" /></div>
                  <h3 className="text-4xl font-bold mb-2">1-on-1 Coaching</h3>
                  <div className="font-mono text-sm text-cream/80">Personalized Mentorship</div>
                </div>
                <div className="bg-cream text-noir px-4 py-2 font-bold">
                  Flexible
                </div>
              </div>
              <p className="text-xl text-cream/90 mb-8 leading-relaxed">
                Get personalized guidance from senior developers. Perfect for targeted skill development,
                code reviews, career guidance, or tackling specific technical challenges.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-cream/10 border-2 border-cream p-6">
                  <h4 className="text-xl font-bold mb-4">Technical Mentorship</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Custom learning roadmap</li>
                    <li>• Weekly 1-on-1 sessions</li>
                    <li>• Code review & feedback</li>
                    <li>• Project guidance</li>
                    <li>• Q&A support between sessions</li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-cream/30">
                    <div className="font-mono text-xs">Starting at $500/month</div>
                  </div>
                </div>
                <div className="bg-cream/10 border-2 border-cream p-6">
                  <h4 className="text-xl font-bold mb-4">Career Coaching</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Resume & portfolio review</li>
                    <li>• Interview preparation</li>
                    <li>• Salary negotiation strategies</li>
                    <li>• Career path planning</li>
                    <li>• Industry insights & networking</li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-cream/30">
                    <div className="font-mono text-xs">$150/session</div>
                  </div>
                </div>
                <div className="bg-cream/10 border-2 border-cream p-6">
                  <h4 className="text-xl font-bold mb-4">Team Training</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Custom corporate training</li>
                    <li>• On-site or remote delivery</li>
                    <li>• Tech stack-specific courses</li>
                    <li>• Team skill assessments</li>
                    <li>• Ongoing support packages</li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-cream/30">
                    <div className="font-mono text-xs">Custom pricing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-6 bg-noir text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-sand">Specialized solutions for unique challenges</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-cream p-8">
              <h3 className="text-2xl font-bold mb-3">Technical Consulting</h3>
              <p className="text-sand mb-4">
                Expert advice on architecture, tech stack selection, and technical strategy for your projects.
              </p>
              <div className="text-sm font-mono">From $200/hour</div>
            </div>
            <div className="border-2 border-cream p-8">
              <h3 className="text-2xl font-bold mb-3">Code Audits</h3>
              <p className="text-sand mb-4">
                Comprehensive review of your codebase with actionable recommendations for improvement.
              </p>
              <div className="text-sm font-mono">Custom pricing</div>
            </div>
            <div className="border-2 border-cream p-8">
              <h3 className="text-2xl font-bold mb-3">Maintenance & Support</h3>
              <p className="text-sand mb-4">
                Ongoing maintenance, updates, and technical support for your applications.
              </p>
              <div className="text-sm font-mono">From $2,000/month</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-xl text-slate mb-8">
            Ready to start your project or training journey? Get in touch for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-rust text-cream px-8 py-4 text-lg hover:bg-opacity-90 transition-all">
              Request a Quote
            </button>
            <button className="border-2 border-noir px-8 py-4 text-lg hover:bg-noir hover:text-cream transition-all">
              View Training Schedule
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
