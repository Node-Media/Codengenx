import Link from 'next/link';

export default function ServicesPage() {
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
            <Link href="/services" className="text-primary-600 font-bold transition-colors">Services</Link>
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
             Our Expertise
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-secondary-900">
            Solutions That<br />
            <span className="text-primary-600">Scale</span> Your Business
          </h1>
          <p className="text-xl text-secondary-500 mb-8 leading-relaxed max-w-3xl mx-auto">
            From development to training, we provide comprehensive services that help your business grow
            and your team excel in the digital landscape.
          </p>
        </div>
      </section>

      {/* Development Services */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-secondary-900">Development Services</h2>
            <p className="text-xl text-secondary-500">Custom solutions built with modern technology</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-secondary-100 hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 text-primary-700 font-mono text-xl font-bold">01</div>
              <h3 className="text-2xl font-bold mb-4 text-secondary-900">Web Development</h3>
              <p className="text-secondary-500 mb-6 text-lg leading-relaxed">
                Full-stack web applications tailored to your business needs. From responsive landing pages
                to complex enterprise platforms.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-secondary-600">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Custom web applications</span>
                </div>
                <div className="flex items-center gap-3 text-secondary-600">
                   <span className="text-green-500 text-xl">✓</span>
                  <span>E-commerce solutions</span>
                </div>
                <div className="flex items-center gap-3 text-secondary-600">
                   <span className="text-green-500 text-xl">✓</span>
                  <span>Content management systems</span>
                </div>
                <div className="flex items-center gap-3 text-secondary-600">
                   <span className="text-green-500 text-xl">✓</span>
                  <span>Progressive web apps (PWA)</span>
                </div>
              </div>
              <div className="border-t border-secondary-100 pt-6">
                <div className="font-mono text-xs text-secondary-400 mb-3 uppercase tracking-wider">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-secondary-50 text-secondary-700 px-3 py-1.5 rounded-lg text-sm font-medium">React</span>
                  <span className="bg-secondary-50 text-secondary-700 px-3 py-1.5 rounded-lg text-sm font-medium">Next.js</span>
                  <span className="bg-secondary-50 text-secondary-700 px-3 py-1.5 rounded-lg text-sm font-medium">Node.js</span>
                  <span className="bg-secondary-50 text-secondary-700 px-3 py-1.5 rounded-lg text-sm font-medium">TypeScript</span>
                   <span className="bg-secondary-50 text-secondary-700 px-3 py-1.5 rounded-lg text-sm font-medium">PostgreSQL</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl border border-secondary-100 hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-700 font-mono text-xl font-bold">02</div>
              <h3 className="text-2xl font-bold mb-4 text-secondary-900">Mobile App Development</h3>
              <p className="text-secondary-500 mb-6 text-lg leading-relaxed">
                Native and cross-platform mobile applications that deliver exceptional user experiences
                on iOS and Android.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-secondary-600">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Native iOS & Android apps</span>
                </div>
                <div className="flex items-center gap-3 text-secondary-600">
                   <span className="text-green-500 text-xl">✓</span>
                  <span>Cross-platform solutions</span>
                </div>
                <div className="flex items-center gap-3 text-secondary-600">
                   <span className="text-green-500 text-xl">✓</span>
                  <span>App store optimization</span>
                </div>
                <div className="flex items-center gap-3 text-secondary-600">
                   <span className="text-green-500 text-xl">✓</span>
                  <span>Ongoing maintenance & updates</span>
                </div>
              </div>
               <div className="border-t border-secondary-100 pt-6">
                <div className="font-mono text-xs text-secondary-400 mb-3 uppercase tracking-wider">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-secondary-50 text-secondary-700 px-3 py-1.5 rounded-lg text-sm font-medium">React Native</span>
                  <span className="bg-secondary-50 text-secondary-700 px-3 py-1.5 rounded-lg text-sm font-medium">Flutter</span>
                  <span className="bg-secondary-50 text-secondary-700 px-3 py-1.5 rounded-lg text-sm font-medium">Swift</span>
                  <span className="bg-secondary-50 text-secondary-700 px-3 py-1.5 rounded-lg text-sm font-medium">Kotlin</span>
                  <span className="bg-secondary-50 text-secondary-700 px-3 py-1.5 rounded-lg text-sm font-medium">Firebase</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl border border-secondary-100 hover:shadow-2xl transition-all">
               <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-700 font-mono text-xl font-bold">03</div>
              <h3 className="text-2xl font-bold mb-4 text-secondary-900">Product Development</h3>
              <p className="text-secondary-500 mb-6 text-lg leading-relaxed">
                End-to-end product development from ideation to launch. We help you build MVPs, scale products,
                and iterate based on user feedback.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-secondary-600">
                   <span className="text-green-500 text-xl">✓</span>
                  <span>MVP development</span>
                </div>
                <div className="flex items-center gap-3 text-secondary-600">
                   <span className="text-green-500 text-xl">✓</span>
                  <span>Product strategy consulting</span>
                </div>
                <div className="flex items-center gap-3 text-secondary-600">
                   <span className="text-green-500 text-xl">✓</span>
                  <span>UX/UI design</span>
                </div>
                <div className="flex items-center gap-3 text-secondary-600">
                   <span className="text-green-500 text-xl">✓</span>
                  <span>Market validation & testing</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl border border-secondary-100 hover:shadow-2xl transition-all">
               <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-700 font-mono text-xl font-bold">04</div>
              <h3 className="text-2xl font-bold mb-4 text-secondary-900">API & Backend Development</h3>
              <p className="text-secondary-500 mb-6 text-lg leading-relaxed">
                Robust, scalable backend systems and RESTful APIs that power your applications with
                security and performance.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-secondary-600">
                   <span className="text-green-500 text-xl">✓</span>
                  <span>RESTful & GraphQL APIs</span>
                </div>
                <div className="flex items-center gap-3 text-secondary-600">
                   <span className="text-green-500 text-xl">✓</span>
                  <span>Database architecture</span>
                </div>
                <div className="flex items-center gap-3 text-secondary-600">
                   <span className="text-green-500 text-xl">✓</span>
                  <span>Cloud infrastructure setup</span>
                </div>
                <div className="flex items-center gap-3 text-secondary-600">
                   <span className="text-green-500 text-xl">✓</span>
                  <span>Microservices architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs - Main Focus */}
      <section id="training" className="py-20 px-6 bg-secondary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-secondary-900">Training Programs</h2>
            <p className="text-xl text-secondary-500">Comprehensive education that transforms careers</p>
          </div>

          {/* Long-Term Programs */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white p-12 rounded-3xl shadow-xl mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8 gap-4">
                <div>
                   <div className="text-4xl mb-4">🎓</div>
                  <h3 className="text-4xl font-bold mb-2">Long-Term Programs</h3>
                  <div className="font-mono text-sm text-primary-200">12-16 Week Intensive Bootcamps</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full font-bold border border-white/20">
                  300+ Hours
                </div>
              </div>
              <p className="text-xl text-primary-100 mb-10 leading-relaxed max-w-3xl">
                Transform from beginner to job-ready developer with our comprehensive bootcamp programs.
                Intensive hands-on training with real-world projects, mentorship, and career support.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-colors">
                  <h4 className="text-xl font-bold mb-4">Full-Stack Web Development</h4>
                  <ul className="space-y-3 text-sm text-primary-100">
                    <li>• Frontend: React, Next.js, TypeScript</li>
                    <li>• Backend: Node.js, Express, APIs</li>
                    <li>• Databases: PostgreSQL, MongoDB</li>
                    <li>• DevOps: Git, Docker, CI/CD</li>
                    <li>• 3 Major capstone projects</li>
                  </ul>
                </div>
                <div className="bg-white/10 border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-colors">
                  <h4 className="text-xl font-bold mb-4">Mobile App Development</h4>
                  <ul className="space-y-3 text-sm text-primary-100">
                    <li>• React Native fundamentals</li>
                    <li>• iOS & Android deployment</li>
                    <li>• State management & navigation</li>
                    <li>• API integration & auth</li>
                    <li>• 2 App Store-ready projects</li>
                  </ul>
                </div>
                <div className="bg-white/10 border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-colors">
                  <h4 className="text-xl font-bold mb-4">DevOps Engineering</h4>
                  <ul className="space-y-3 text-sm text-primary-100">
                    <li>• Cloud platforms (AWS, Azure)</li>
                    <li>• Container orchestration</li>
                    <li>• Infrastructure as Code</li>
                    <li>• Monitoring & logging</li>
                    <li>• Production deployment projects</li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 pt-10 border-t border-white/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-1">300+</div>
                    <div className="text-sm text-primary-200">Training Hours</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">Live</div>
                    <div className="text-sm text-primary-200">Instructor-Led</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">85%</div>
                    <div className="text-sm text-primary-200">Job Placement Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">6 Mo</div>
                    <div className="text-sm text-primary-200">Post-Course Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Short Courses */}
          <div className="mb-16">
            <div className="bg-white p-12 rounded-3xl shadow-xl border border-secondary-100 mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8 gap-4">
                <div>
                   <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-4xl font-bold mb-2 text-secondary-900">Short Courses</h3>
                  <div className="font-mono text-sm text-secondary-500">2-4 Week Focused Training</div>
                </div>
                <div className="bg-secondary-100 text-secondary-900 px-6 py-3 rounded-full font-bold">
                  40-80 Hours
                </div>
              </div>
              <p className="text-xl text-secondary-500 mb-10 leading-relaxed max-w-3xl">
                Upskill quickly with focused courses on specific technologies and skills. Perfect for professionals
                who want to add new capabilities or teams needing rapid training.
              </p>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-secondary-50 p-6 rounded-2xl hover:shadow-md transition-all">
                  <h4 className="text-lg font-bold mb-2 text-secondary-900">React Mastery</h4>
                  <p className="text-sm text-secondary-500 mb-3">Deep dive into React, hooks, and state management</p>
                  <div className="text-xs font-mono text-primary-600 font-bold">4 weeks • 60 hours</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-2xl hover:shadow-md transition-all">
                  <h4 className="text-lg font-bold mb-2 text-secondary-900">Node.js Backend</h4>
                  <p className="text-sm text-secondary-500 mb-3">Build scalable APIs and backend systems</p>
                  <div className="text-xs font-mono text-primary-600 font-bold">3 weeks • 45 hours</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-2xl hover:shadow-md transition-all">
                  <h4 className="text-lg font-bold mb-2 text-secondary-900">Mobile with Flutter</h4>
                  <p className="text-sm text-secondary-500 mb-3">Cross-platform app development</p>
                  <div className="text-xs font-mono text-primary-600 font-bold">4 weeks • 60 hours</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-2xl hover:shadow-md transition-all">
                  <h4 className="text-lg font-bold mb-2 text-secondary-900">Cloud & DevOps</h4>
                  <p className="text-sm text-secondary-500 mb-3">AWS, Docker, and deployment workflows</p>
                   <div className="text-xs font-mono text-primary-600 font-bold">3 weeks • 45 hours</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-2xl hover:shadow-md transition-all">
                  <h4 className="text-lg font-bold mb-2 text-secondary-900">TypeScript Pro</h4>
                  <p className="text-sm text-secondary-500 mb-3">Advanced typing and best practices</p>
                   <div className="text-xs font-mono text-primary-600 font-bold">2 weeks • 30 hours</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-2xl hover:shadow-md transition-all">
                  <h4 className="text-lg font-bold mb-2 text-secondary-900">Python for Data</h4>
                  <p className="text-sm text-secondary-500 mb-3">Data analysis and visualization</p>
                   <div className="text-xs font-mono text-primary-600 font-bold">3 weeks • 45 hours</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-2xl hover:shadow-md transition-all">
                  <h4 className="text-lg font-bold mb-2 text-secondary-900">UI/UX Fundamentals</h4>
                  <p className="text-sm text-secondary-500 mb-3">Design principles for developers</p>
                   <div className="text-xs font-mono text-primary-600 font-bold">2 weeks • 30 hours</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-2xl hover:shadow-md transition-all">
                  <h4 className="text-lg font-bold mb-2 text-secondary-900">GraphQL APIs</h4>
                  <p className="text-sm text-secondary-500 mb-3">Modern API development</p>
                   <div className="text-xs font-mono text-primary-600 font-bold">2 weeks • 30 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* 1-on-1 Coaching */}
          <div>
            <div className="bg-secondary-900 text-white p-12 rounded-3xl shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-900/20 blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8 gap-4">
                  <div>
                    <div className="text-4xl mb-4">✨</div>
                    <h3 className="text-4xl font-bold mb-2">1-on-1 Coaching</h3>
                    <div className="font-mono text-sm text-secondary-300">Personalized Mentorship</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full font-bold border border-white/20">
                    Flexible
                  </div>
                </div>
                <p className="text-xl text-secondary-300 mb-10 leading-relaxed max-w-3xl">
                  Get personalized guidance from senior developers. Perfect for targeted skill development,
                  code reviews, career guidance, or tackling specific technical challenges.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                    <h4 className="text-xl font-bold mb-4">Technical Mentorship</h4>
                    <ul className="space-y-3 text-sm text-secondary-300">
                      <li>• Custom learning roadmap</li>
                      <li>• Weekly 1-on-1 sessions</li>
                      <li>• Code review & feedback</li>
                      <li>• Project guidance</li>
                      <li>• Q&A support between sessions</li>
                    </ul>
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="font-mono text-xs text-primary-300">Starting at $500/month</div>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                    <h4 className="text-xl font-bold mb-4">Career Coaching</h4>
                    <ul className="space-y-3 text-sm text-secondary-300">
                      <li>• Resume & portfolio review</li>
                      <li>• Interview preparation</li>
                      <li>• Salary negotiation strategies</li>
                      <li>• Career path planning</li>
                      <li>• Industry insights & networking</li>
                    </ul>
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="font-mono text-xs text-primary-300">$150/session</div>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                    <h4 className="text-xl font-bold mb-4">Team Training</h4>
                    <ul className="space-y-3 text-sm text-secondary-300">
                      <li>• Custom corporate training</li>
                      <li>• On-site or remote delivery</li>
                      <li>• Tech stack-specific courses</li>
                      <li>• Team skill assessments</li>
                      <li>• Ongoing support packages</li>
                    </ul>
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="font-mono text-xs text-primary-300">Custom pricing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-secondary-900">Additional Services</h2>
            <p className="text-xl text-secondary-500">Specialized solutions for unique challenges</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-secondary-100 p-8 rounded-2xl hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-3 text-secondary-900">Technical Consulting</h3>
              <p className="text-secondary-500 mb-6">
                Expert advice on architecture, tech stack selection, and technical strategy for your projects.
              </p>
              <div className="text-sm font-mono text-primary-600 font-bold">From $200/hour</div>
            </div>
            <div className="border border-secondary-100 p-8 rounded-2xl hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-3 text-secondary-900">Code Audits</h3>
              <p className="text-secondary-500 mb-6">
                Comprehensive review of your codebase with actionable recommendations for improvement.
              </p>
              <div className="text-sm font-mono text-primary-600 font-bold">Custom pricing</div>
            </div>
            <div className="border border-secondary-100 p-8 rounded-2xl hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-3 text-secondary-900">Maintenance & Support</h3>
              <p className="text-secondary-500 mb-6">
                Ongoing maintenance, updates, and technical support for your applications.
              </p>
              <div className="text-sm font-mono text-primary-600 font-bold">From $2,000/month</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary-50"></div>
         <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-secondary-900">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-xl text-secondary-500 mb-10">
            Ready to start your project or training journey? Get in touch for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 text-white px-10 py-4 text-lg rounded-full shadow-xl shadow-primary-600/30 hover:bg-primary-700 transition-all font-medium">
              Request a Quote
            </button>
            <button className="bg-white border border-secondary-200 text-secondary-900 px-10 py-4 text-lg rounded-full hover:bg-secondary-50 transition-all font-medium">
              View Training Schedule
            </button>
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
