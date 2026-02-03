import Link from 'next/link';
import { FaMobileAlt, FaShoppingCart, FaDumbbell, FaBook, FaHome, FaCar, FaMusic } from 'react-icons/fa';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-secondary-900 font-display">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-secondary-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6">
             <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Case Studies
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-secondary-900">
            Product Dev<br />
            <span className="text-primary-600">Stories</span> & Insights
          </h1>
          <p className="text-xl text-secondary-500 mb-8 leading-relaxed max-w-3xl mx-auto">
            Real projects, real challenges, real solutions. Explore our product development case studies
            and technical insights from building web and mobile applications.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-4 px-6 border-b border-secondary-100 flex justify-center sticky top-[72px] z-40 bg-white/80 backdrop-blur-md">
        <div className="bg-secondary-100/50 p-1.5 rounded-xl inline-flex flex-wrap justify-center gap-1">
          <button className="bg-white text-primary-600 px-6 py-2 rounded-lg font-bold shadow-sm">All Posts</button>
          <button className="text-secondary-600 hover:text-primary-600 hover:bg-white/50 px-6 py-2 rounded-lg transition-all font-medium">Web Development</button>
          <button className="text-secondary-600 hover:text-primary-600 hover:bg-white/50 px-6 py-2 rounded-lg transition-all font-medium">Mobile Apps</button>
          <button className="text-secondary-600 hover:text-primary-600 hover:bg-white/50 px-6 py-2 rounded-lg transition-all font-medium">Case Studies</button>
          <button className="text-secondary-600 hover:text-primary-600 hover:bg-white/50 px-6 py-2 rounded-lg transition-all font-medium">Technical Guides</button>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-3xl overflow-hidden shadow-2xl relative">
             <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-3xl rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="p-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-bold tracking-wide">
                  FEATURED CASE STUDY
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Building a Fintech App: From MVP to 100K Users in 6 Months
                </h2>
                <p className="text-primary-50 mb-6 text-lg leading-relaxed">
                  How we helped a fintech startup build a secure, scalable mobile banking application
                  and grow to 100,000+ active users. Deep dive into architecture decisions, security
                  implementations, and scaling challenges.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">React Native</span>
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">Node.js</span>
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">AWS</span>
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">PostgreSQL</span>
                </div>
                <div className="flex items-center gap-4 text-sm mb-8 text-primary-100">
                  <span>12 min read</span>
                  <span>•</span>
                  <span>Mar 15, 2025</span>
                </div>
                <button className="bg-white text-primary-700 px-8 py-3.5 rounded-xl hover:bg-primary-50 transition-all font-bold shadow-lg">
                  Read Case Study →
                </button>
              </div>
              <div className="bg-white/10 aspect-video rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-inner">
                <FaMobileAlt className="text-6xl text-white drop-shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-6 bg-secondary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-secondary-900">Product Development Case Studies</h2>
            <p className="text-xl text-secondary-500">Real projects, measurable results</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-2xl shadow-xl shadow-secondary-200/50 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-amber-100 aspect-video flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <FaShoppingCart className="text-6xl text-amber-600" />
              </div>
              <div className="p-8">
                <div className="font-mono text-xs text-amber-600 mb-2 uppercase tracking-bold font-semibold">E-COMMERCE • WEB</div>
                <h3 className="text-xl font-bold mb-3 text-secondary-900 group-hover:text-primary-600 transition-colors">Multi-Vendor Marketplace Platform</h3>
                <p className="text-secondary-500 mb-6 text-sm leading-relaxed">
                  Built a scalable e-commerce platform handling 10K+ daily transactions with real-time
                  inventory management and seller dashboards.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-mono bg-secondary-100 text-secondary-600 px-2 py-1 rounded">Next.js</span>
                  <span className="text-xs font-mono bg-secondary-100 text-secondary-600 px-2 py-1 rounded">Stripe</span>
                  <span className="text-xs font-mono bg-secondary-100 text-secondary-600 px-2 py-1 rounded">Redis</span>
                </div>
                <div className="pt-4 border-t border-secondary-100">
                  <div className="flex justify-between text-sm items-center">
                    <span className="text-secondary-400">8 min read</span>
                    <span className="text-primary-600 font-bold group-hover:translate-x-1 transition-transform">Read More →</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-2xl shadow-xl shadow-secondary-200/50 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-rose-100 aspect-video flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <FaDumbbell className="text-6xl text-rose-600" />
              </div>
              <div className="p-8">
                <div className="font-mono text-xs text-rose-600 mb-2 uppercase tracking-bold font-semibold">HEALTH & FITNESS • MOBILE</div>
                <h3 className="text-xl font-bold mb-3 text-secondary-900 group-hover:text-primary-600 transition-colors">AI-Powered Fitness Coach App</h3>
                <p className="text-secondary-500 mb-6 text-sm leading-relaxed">
                  iOS and Android app with ML-based workout recommendations, achieving 200K+ downloads
                  and 4.8★ rating in first quarter.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-mono bg-secondary-100 text-secondary-600 px-2 py-1 rounded">React Native</span>
                  <span className="text-xs font-mono bg-secondary-100 text-secondary-600 px-2 py-1 rounded">TensorFlow</span>
                  <span className="text-xs font-mono bg-secondary-100 text-secondary-600 px-2 py-1 rounded">Firebase</span>
                </div>
                <div className="pt-4 border-t border-secondary-100">
                  <div className="flex justify-between text-sm items-center">
                    <span className="text-secondary-400">10 min read</span>
                    <span className="text-primary-600 font-bold group-hover:translate-x-1 transition-transform">Read More →</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-2xl shadow-xl shadow-secondary-200/50 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-blue-100 aspect-video flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <FaBook className="text-6xl text-blue-600" />
              </div>
              <div className="p-8">
                <div className="font-mono text-xs text-blue-600 mb-2 uppercase tracking-bold font-semibold">EDTECH • WEB APP</div>
                <h3 className="text-xl font-bold mb-3 text-secondary-900 group-hover:text-primary-600 transition-colors">Interactive Learning Management System</h3>
                <p className="text-secondary-500 mb-6 text-sm leading-relaxed">
                  Enterprise LMS platform supporting 50K+ concurrent users with video streaming, live
                  classes, and progress tracking.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-mono bg-secondary-100 text-secondary-600 px-2 py-1 rounded">React</span>
                  <span className="text-xs font-mono bg-secondary-100 text-secondary-600 px-2 py-1 rounded">WebRTC</span>
                  <span className="text-xs font-mono bg-secondary-100 text-secondary-600 px-2 py-1 rounded">MongoDB</span>
                </div>
                <div className="pt-4 border-t border-secondary-100">
                  <div className="flex justify-between text-sm items-center">
                    <span className="text-secondary-400">12 min read</span>
                    <span className="text-primary-600 font-bold group-hover:translate-x-1 transition-transform">Read More →</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="bg-white rounded-2xl shadow-xl shadow-secondary-200/50 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-green-100 aspect-video flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <FaHome className="text-6xl text-green-600" />
              </div>
              <div className="p-8">
                <div className="font-mono text-xs text-green-600 mb-2 uppercase tracking-bold font-semibold">REAL ESTATE • MOBILE</div>
                <h3 className="text-xl font-bold mb-3 text-secondary-900 group-hover:text-primary-600 transition-colors">Property Search & Virtual Tour App</h3>
                <p className="text-secondary-500 mb-6 text-sm leading-relaxed">
                  Mobile app with AR-powered virtual tours and AI property matching, serving 5M+ property
                  listings across 50 cities.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-mono bg-secondary-100 text-secondary-600 px-2 py-1 rounded">Flutter</span>
                  <span className="text-xs font-mono bg-secondary-100 text-secondary-600 px-2 py-1 rounded">ARCore</span>
                  <span className="text-xs font-mono bg-secondary-100 text-secondary-600 px-2 py-1 rounded">GraphQL</span>
                </div>
                <div className="pt-4 border-t border-secondary-100">
                  <div className="flex justify-between text-sm items-center">
                    <span className="text-secondary-400">9 min read</span>
                    <span className="text-primary-600 font-bold group-hover:translate-x-1 transition-transform">Read More →</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 5 */}
            <div className="bg-white rounded-2xl shadow-xl shadow-secondary-200/50 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-orange-100 aspect-video flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <FaCar className="text-6xl text-orange-600" />
              </div>
              <div className="p-8">
                <div className="font-mono text-xs text-orange-600 mb-2 uppercase tracking-bold font-semibold">TRANSPORTATION • WEB + MOBILE</div>
                <h3 className="text-xl font-bold mb-3 text-secondary-900 group-hover:text-primary-600 transition-colors">Fleet Management Dashboard</h3>
                <p className="text-secondary-500 mb-6 text-sm leading-relaxed">
                  Real-time tracking and analytics platform for logistics companies, managing 10K+ vehicles
                  with predictive maintenance.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-mono bg-secondary-100 text-secondary-600 px-2 py-1 rounded">Vue.js</span>
                  <span className="text-xs font-mono bg-secondary-100 text-secondary-600 px-2 py-1 rounded">Socket.io</span>
                  <span className="text-xs font-mono bg-secondary-100 text-secondary-600 px-2 py-1 rounded">TimescaleDB</span>
                </div>
                <div className="pt-4 border-t border-secondary-100">
                  <div className="flex justify-between text-sm items-center">
                    <span className="text-secondary-400">11 min read</span>
                    <span className="text-primary-600 font-bold group-hover:translate-x-1 transition-transform">Read More →</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 6 */}
            <div className="bg-white rounded-2xl shadow-xl shadow-secondary-200/50 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-purple-100 aspect-video flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <FaMusic className="text-6xl text-purple-600" />
              </div>
              <div className="p-8">
                <div className="font-mono text-xs text-purple-600 mb-2 uppercase tracking-bold font-semibold">ENTERTAINMENT • MOBILE</div>
                <h3 className="text-xl font-bold mb-3 text-secondary-900 group-hover:text-primary-600 transition-colors">Music Streaming App</h3>
                <p className="text-secondary-500 mb-6 text-sm leading-relaxed">
                  Cross-platform music streaming app with smart playlists, social features, and seamless
                  offline playback for 1M+ songs.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-mono bg-secondary-100 text-secondary-600 px-2 py-1 rounded">React Native</span>
                  <span className="text-xs font-mono bg-secondary-100 text-secondary-600 px-2 py-1 rounded">CDN</span>
                  <span className="text-xs font-mono bg-secondary-100 text-secondary-600 px-2 py-1 rounded">DRM</span>
                </div>
                <div className="pt-4 border-t border-secondary-100">
                  <div className="flex justify-between text-sm items-center">
                    <span className="text-secondary-400">7 min read</span>
                    <span className="text-primary-600 font-bold group-hover:translate-x-1 transition-transform">Read More →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Guides */}
      <section className="py-20 px-6 bg-secondary-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Guides & Insights</h2>
            <p className="text-xl text-secondary-400">Deep dives into web and mobile development</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer">
              <div className="font-mono text-xs text-primary-400 group-hover:text-primary-300 mb-3 uppercase tracking-wider font-bold">WEB DEVELOPMENT</div>
              <h3 className="text-2xl font-bold mb-3">Building Scalable Next.js Applications</h3>
              <p className="text-secondary-300 group-hover:text-white mb-6">
                Best practices for structuring large-scale Next.js apps with optimal performance, SEO,
                and developer experience. Covers App Router, RSC, and deployment strategies.
              </p>
              <div className="flex justify-between items-center text-sm text-secondary-400">
                <span className="font-mono">15 min read • Mar 10, 2025</span>
                <span className="text-primary-400 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer">
              <div className="font-mono text-xs text-primary-400 group-hover:text-primary-300 mb-3 uppercase tracking-wider font-bold">MOBILE DEVELOPMENT</div>
              <h3 className="text-2xl font-bold mb-3">React Native Performance Optimization</h3>
              <p className="text-secondary-300 group-hover:text-white mb-6">
                Complete guide to building 60fps mobile apps. Memory management, list optimization, native
                modules, and profiling techniques that make apps feel native.
              </p>
              <div className="flex justify-between items-center text-sm text-secondary-400">
                <span className="font-mono">18 min read • Mar 8, 2025</span>
                <span className="text-primary-400 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer">
              <div className="font-mono text-xs text-primary-400 group-hover:text-primary-300 mb-3 uppercase tracking-wider font-bold">ARCHITECTURE</div>
              <h3 className="text-2xl font-bold mb-3">Microservices vs Monolith: When to Choose What</h3>
              <p className="text-secondary-300 group-hover:text-white mb-6">
                Real-world decision framework for choosing the right architecture. Case studies showing when
                microservices helped and when they created unnecessary complexity.
              </p>
              <div className="flex justify-between items-center text-sm text-secondary-400">
                <span className="font-mono">12 min read • Mar 5, 2025</span>
                <span className="text-primary-400 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer">
              <div className="font-mono text-xs text-primary-400 group-hover:text-primary-300 mb-3 uppercase tracking-wider font-bold">DEVOPS</div>
              <h3 className="text-2xl font-bold mb-3">Zero-Downtime Deployment Strategies</h3>
              <p className="text-secondary-300 group-hover:text-white mb-6">
                Implementing blue-green deployments, canary releases, and feature flags. How we deploy
                updates to production apps without affecting users.
              </p>
              <div className="flex justify-between items-center text-sm text-secondary-400">
                <span className="font-mono">10 min read • Mar 1, 2025</span>
                <span className="text-primary-400 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer">
              <div className="font-mono text-xs text-primary-400 group-hover:text-primary-300 mb-3 uppercase tracking-wider font-bold">API DESIGN</div>
              <h3 className="text-2xl font-bold mb-3">Designing RESTful APIs That Scale</h3>
              <p className="text-secondary-300 group-hover:text-white mb-6">
                API design patterns, versioning strategies, authentication methods, and documentation
                practices that create developer-friendly APIs.
              </p>
              <div className="flex justify-between items-center text-sm text-secondary-400">
                <span className="font-mono">14 min read • Feb 28, 2025</span>
                <span className="text-primary-400 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer">
              <div className="font-mono text-xs text-primary-400 group-hover:text-primary-300 mb-3 uppercase tracking-wider font-bold">SECURITY</div>
              <h3 className="text-2xl font-bold mb-3">Web App Security: From Auth to Deployment</h3>
              <p className="text-secondary-300 group-hover:text-white mb-6">
                Comprehensive security guide covering authentication, authorization, XSS prevention,
                CSRF protection, and secure deployment practices.
              </p>
              <div className="flex justify-between items-center text-sm text-secondary-400">
                <span className="font-mono">16 min read • Feb 25, 2025</span>
                <span className="text-primary-400 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-gradient-to-br from-secondary-100 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-secondary-900">Stay Updated</h2>
          <p className="text-xl text-secondary-500 mb-8">
            Get our latest case studies, technical guides, and product development insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 border border-secondary-200 rounded-xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
            />
            <button className="bg-primary-600 text-white px-8 py-4 text-lg rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/30 font-bold whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-secondary-400 mt-4 font-mono">
            Join 2,000+ developers and founders. No spam, unsubscribe anytime.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
