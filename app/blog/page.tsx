import { FaMobileAlt, FaShoppingCart, FaDumbbell, FaBook, FaHome, FaCar, FaMusic } from 'react-icons/fa';

export default function BlogPage() {
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
            <a href="/blog" className="text-rust font-bold transition-colors">Blog</a>
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
            <span className="font-mono text-sm uppercase tracking-wider">Insights & Case Studies</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            Product Dev<br />
            <span className="text-rust">Stories</span> & Insights
          </h1>
          <p className="text-xl text-slate mb-8 leading-relaxed max-w-3xl mx-auto">
            Real projects, real challenges, real solutions. Explore our product development case studies
            and technical insights from building web and mobile applications.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-6 bg-cream border-b-2 border-noir">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-noir text-cream px-6 py-2 font-bold">All Posts</button>
            <button className="border-2 border-noir px-6 py-2 hover:bg-noir hover:text-cream transition-all">Web Development</button>
            <button className="border-2 border-noir px-6 py-2 hover:bg-noir hover:text-cream transition-all">Mobile Apps</button>
            <button className="border-2 border-noir px-6 py-2 hover:bg-noir hover:text-cream transition-all">Case Studies</button>
            <button className="border-2 border-noir px-6 py-2 hover:bg-noir hover:text-cream transition-all">Technical Guides</button>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-rust text-cream border-4 border-noir p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4 px-3 py-1 bg-cream text-rust font-mono text-xs">
                  FEATURED CASE STUDY
                </div>
                <h2 className="text-4xl font-bold mb-4">
                  Building a Fintech App: From MVP to 100K Users in 6 Months
                </h2>
                <p className="text-cream/90 mb-6 text-lg leading-relaxed">
                  How we helped a fintech startup build a secure, scalable mobile banking application
                  and grow to 100,000+ active users. Deep dive into architecture decisions, security
                  implementations, and scaling challenges.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-cream text-rust px-3 py-1 text-sm font-mono">React Native</span>
                  <span className="bg-cream text-rust px-3 py-1 text-sm font-mono">Node.js</span>
                  <span className="bg-cream text-rust px-3 py-1 text-sm font-mono">AWS</span>
                  <span className="bg-cream text-rust px-3 py-1 text-sm font-mono">PostgreSQL</span>
                </div>
                <div className="flex items-center gap-4 text-sm mb-6">
                  <span className="font-mono">12 min read</span>
                  <span className="font-mono">Mar 15, 2025</span>
                </div>
                <button className="bg-cream text-rust px-8 py-3 hover:bg-sand transition-all font-bold">
                  Read Case Study →
                </button>
              </div>
              <div className="bg-cream/10 border-2 border-cream aspect-video flex items-center justify-center">
                <FaMobileAlt className="text-6xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Product Development Case Studies</h2>
            <p className="text-xl text-slate">Real projects, measurable results</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-sand border-4 border-noir">
              <div className="bg-olive aspect-video flex items-center justify-center border-b-4 border-noir">
                <FaShoppingCart className="text-6xl text-cream" />
              </div>
              <div className="p-8">
                <div className="font-mono text-xs text-olive mb-2">E-COMMERCE • WEB</div>
                <h3 className="text-2xl font-bold mb-3">Multi-Vendor Marketplace Platform</h3>
                <p className="text-slate mb-4">
                  Built a scalable e-commerce platform handling 10K+ daily transactions with real-time
                  inventory management and seller dashboards.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-mono bg-noir text-cream px-2 py-1">Next.js</span>
                  <span className="text-xs font-mono bg-noir text-cream px-2 py-1">Stripe</span>
                  <span className="text-xs font-mono bg-noir text-cream px-2 py-1">Redis</span>
                </div>
                <div className="pt-4 border-t-2 border-noir">
                  <div className="flex justify-between text-sm">
                    <span className="font-mono">8 min read</span>
                    <span className="text-rust font-bold">Read More →</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-sand border-4 border-noir">
              <div className="bg-rust aspect-video flex items-center justify-center border-b-4 border-noir">
                <FaDumbbell className="text-6xl text-cream" />
              </div>
              <div className="p-8">
                <div className="font-mono text-xs text-rust mb-2">HEALTH & FITNESS • MOBILE</div>
                <h3 className="text-2xl font-bold mb-3">AI-Powered Fitness Coach App</h3>
                <p className="text-slate mb-4">
                  iOS and Android app with ML-based workout recommendations, achieving 200K+ downloads
                  and 4.8★ rating in first quarter.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-mono bg-noir text-cream px-2 py-1">React Native</span>
                  <span className="text-xs font-mono bg-noir text-cream px-2 py-1">TensorFlow</span>
                  <span className="text-xs font-mono bg-noir text-cream px-2 py-1">Firebase</span>
                </div>
                <div className="pt-4 border-t-2 border-noir">
                  <div className="flex justify-between text-sm">
                    <span className="font-mono">10 min read</span>
                    <span className="text-rust font-bold">Read More →</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-sand border-4 border-noir">
              <div className="bg-slate aspect-video flex items-center justify-center border-b-4 border-noir">
                <FaBook className="text-6xl text-cream" />
              </div>
              <div className="p-8">
                <div className="font-mono text-xs text-slate mb-2">EDTECH • WEB APP</div>
                <h3 className="text-2xl font-bold mb-3">Interactive Learning Management System</h3>
                <p className="text-slate mb-4">
                  Enterprise LMS platform supporting 50K+ concurrent users with video streaming, live
                  classes, and progress tracking.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-mono bg-noir text-cream px-2 py-1">React</span>
                  <span className="text-xs font-mono bg-noir text-cream px-2 py-1">WebRTC</span>
                  <span className="text-xs font-mono bg-noir text-cream px-2 py-1">MongoDB</span>
                </div>
                <div className="pt-4 border-t-2 border-noir">
                  <div className="flex justify-between text-sm">
                    <span className="font-mono">12 min read</span>
                    <span className="text-rust font-bold">Read More →</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="bg-sand border-4 border-noir">
              <div className="bg-olive aspect-video flex items-center justify-center border-b-4 border-noir">
                <FaHome className="text-6xl text-cream" />
              </div>
              <div className="p-8">
                <div className="font-mono text-xs text-olive mb-2">REAL ESTATE • MOBILE</div>
                <h3 className="text-2xl font-bold mb-3">Property Search & Virtual Tour App</h3>
                <p className="text-slate mb-4">
                  Mobile app with AR-powered virtual tours and AI property matching, serving 5M+ property
                  listings across 50 cities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-mono bg-noir text-cream px-2 py-1">Flutter</span>
                  <span className="text-xs font-mono bg-noir text-cream px-2 py-1">ARCore</span>
                  <span className="text-xs font-mono bg-noir text-cream px-2 py-1">GraphQL</span>
                </div>
                <div className="pt-4 border-t-2 border-noir">
                  <div className="flex justify-between text-sm">
                    <span className="font-mono">9 min read</span>
                    <span className="text-rust font-bold">Read More →</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 5 */}
            <div className="bg-sand border-4 border-noir">
              <div className="bg-rust aspect-video flex items-center justify-center border-b-4 border-noir">
                <FaCar className="text-6xl text-cream" />
              </div>
              <div className="p-8">
                <div className="font-mono text-xs text-rust mb-2">TRANSPORTATION • WEB + MOBILE</div>
                <h3 className="text-2xl font-bold mb-3">Fleet Management Dashboard</h3>
                <p className="text-slate mb-4">
                  Real-time tracking and analytics platform for logistics companies, managing 10K+ vehicles
                  with predictive maintenance.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-mono bg-noir text-cream px-2 py-1">Vue.js</span>
                  <span className="text-xs font-mono bg-noir text-cream px-2 py-1">Socket.io</span>
                  <span className="text-xs font-mono bg-noir text-cream px-2 py-1">TimescaleDB</span>
                </div>
                <div className="pt-4 border-t-2 border-noir">
                  <div className="flex justify-between text-sm">
                    <span className="font-mono">11 min read</span>
                    <span className="text-rust font-bold">Read More →</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 6 */}
            <div className="bg-sand border-4 border-noir">
              <div className="bg-slate aspect-video flex items-center justify-center border-b-4 border-noir">
                <FaMusic className="text-6xl text-cream" />
              </div>
              <div className="p-8">
                <div className="font-mono text-xs text-slate mb-2">ENTERTAINMENT • MOBILE</div>
                <h3 className="text-2xl font-bold mb-3">Music Streaming App with Offline Mode</h3>
                <p className="text-slate mb-4">
                  Cross-platform music streaming app with smart playlists, social features, and seamless
                  offline playback for 1M+ songs.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-mono bg-noir text-cream px-2 py-1">React Native</span>
                  <span className="text-xs font-mono bg-noir text-cream px-2 py-1">CDN</span>
                  <span className="text-xs font-mono bg-noir text-cream px-2 py-1">DRM</span>
                </div>
                <div className="pt-4 border-t-2 border-noir">
                  <div className="flex justify-between text-sm">
                    <span className="font-mono">7 min read</span>
                    <span className="text-rust font-bold">Read More →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Guides */}
      <section className="py-20 px-6 bg-noir text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Technical Guides & Insights</h2>
            <p className="text-xl text-sand">Deep dives into web and mobile development</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-cream p-8 hover:bg-cream hover:text-noir transition-all group">
              <div className="font-mono text-xs text-rust group-hover:text-rust mb-2">WEB DEVELOPMENT</div>
              <h3 className="text-2xl font-bold mb-3">Building Scalable Next.js Applications</h3>
              <p className="text-sand group-hover:text-slate mb-4">
                Best practices for structuring large-scale Next.js apps with optimal performance, SEO,
                and developer experience. Covers App Router, RSC, and deployment strategies.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-mono">15 min read • Mar 10, 2025</span>
                <span className="group-hover:text-rust">→</span>
              </div>
            </div>

            <div className="border-2 border-cream p-8 hover:bg-cream hover:text-noir transition-all group">
              <div className="font-mono text-xs text-rust group-hover:text-rust mb-2">MOBILE DEVELOPMENT</div>
              <h3 className="text-2xl font-bold mb-3">React Native Performance Optimization</h3>
              <p className="text-sand group-hover:text-slate mb-4">
                Complete guide to building 60fps mobile apps. Memory management, list optimization, native
                modules, and profiling techniques that make apps feel native.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-mono">18 min read • Mar 8, 2025</span>
                <span className="group-hover:text-rust">→</span>
              </div>
            </div>

            <div className="border-2 border-cream p-8 hover:bg-cream hover:text-noir transition-all group">
              <div className="font-mono text-xs text-rust group-hover:text-rust mb-2">ARCHITECTURE</div>
              <h3 className="text-2xl font-bold mb-3">Microservices vs Monolith: When to Choose What</h3>
              <p className="text-sand group-hover:text-slate mb-4">
                Real-world decision framework for choosing the right architecture. Case studies showing when
                microservices helped and when they created unnecessary complexity.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-mono">12 min read • Mar 5, 2025</span>
                <span className="group-hover:text-rust">→</span>
              </div>
            </div>

            <div className="border-2 border-cream p-8 hover:bg-cream hover:text-noir transition-all group">
              <div className="font-mono text-xs text-rust group-hover:text-rust mb-2">DEVOPS</div>
              <h3 className="text-2xl font-bold mb-3">Zero-Downtime Deployment Strategies</h3>
              <p className="text-sand group-hover:text-slate mb-4">
                Implementing blue-green deployments, canary releases, and feature flags. How we deploy
                updates to production apps without affecting users.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-mono">10 min read • Mar 1, 2025</span>
                <span className="group-hover:text-rust">→</span>
              </div>
            </div>

            <div className="border-2 border-cream p-8 hover:bg-cream hover:text-noir transition-all group">
              <div className="font-mono text-xs text-rust group-hover:text-rust mb-2">API DESIGN</div>
              <h3 className="text-2xl font-bold mb-3">Designing RESTful APIs That Scale</h3>
              <p className="text-sand group-hover:text-slate mb-4">
                API design patterns, versioning strategies, authentication methods, and documentation
                practices that create developer-friendly APIs.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-mono">14 min read • Feb 28, 2025</span>
                <span className="group-hover:text-rust">→</span>
              </div>
            </div>

            <div className="border-2 border-cream p-8 hover:bg-cream hover:text-noir transition-all group">
              <div className="font-mono text-xs text-rust group-hover:text-rust mb-2">SECURITY</div>
              <h3 className="text-2xl font-bold mb-3">Web App Security: From Auth to Deployment</h3>
              <p className="text-sand group-hover:text-slate mb-4">
                Comprehensive security guide covering authentication, authorization, XSS prevention,
                CSRF protection, and secure deployment practices.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-mono">16 min read • Feb 25, 2025</span>
                <span className="group-hover:text-rust">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-sand">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-slate mb-8">
            Get our latest case studies, technical guides, and product development insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 border-2 border-noir px-6 py-4 text-lg focus:outline-none focus:border-rust"
            />
            <button className="bg-rust text-cream px-8 py-4 text-lg hover:bg-opacity-90 transition-all font-bold whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-slate mt-4 font-mono">
            Join 2,000+ developers and founders. No spam, unsubscribe anytime.
          </p>
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
