'use client';

const stats = [
  { 
    value: '50+', 
    label: 'Expert Mentors',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  { 
    value: '100%', 
    label: 'Placement Support',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    value: '24/7', 
    label: 'Support System',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    value: 'Global', 
    label: 'Client Base',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
];

export default function WelcomeSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-secondary-900 via-secondary-900 to-secondary-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <span className="inline-block px-3 sm:px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary-600/30">
                About CodengenX
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Transforming Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">Digital Excellence</span>
              </h2>
              <div className="space-y-4 sm:space-y-5">
                <p className="text-secondary-200 text-sm sm:text-base lg:text-lg leading-relaxed">
                  We are a team of passionate, skilled and energetic individuals collaborating to deliver innovative software solutions and comprehensive training programs.
                </p>
                <p className="text-secondary-300 text-sm sm:text-base leading-relaxed">
                  Recognized as a leading Ed-Tech and Software Company, we blend expertise with innovation to help businesses and individuals achieve their digital aspirations.
                </p>
              </div>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="text-center p-3 sm:p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-400 mb-1">150+</div>
                <div className="text-xs text-secondary-400">Projects</div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border-l border-r border-white/10">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-400 mb-1">98%</div>
                <div className="text-xs text-secondary-400">Success Rate</div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-400 mb-1">500+</div>
                <div className="text-xs text-secondary-400">Students</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/50 flex items-center justify-center sm:justify-start gap-2 group text-sm sm:text-base">
                Explore Our Story
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 text-sm sm:text-base">
                View Services
              </button>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-0">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group relative bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-primary-600/50 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-600/10"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 to-blue-600/0 group-hover:from-primary-600/5 group-hover:to-blue-600/5 rounded-2xl sm:rounded-3xl transition-all duration-300"></div>
                
                <div className="relative flex flex-col h-full">
                  <div className="w-12 h-12 bg-primary-600/20 rounded-2xl flex items-center justify-center text-primary-400 mb-4 group-hover:scale-110 group-hover:bg-primary-600/30 transition-all duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-secondary-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/10">
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-x-12 text-secondary-300 text-xs sm:text-sm">
            <div className="flex items-center gap-3 group cursor-default">
              <div className="w-10 h-10 bg-primary-600/20 rounded-full flex items-center justify-center group-hover:bg-primary-600/30 transition-colors flex-shrink-0">
                <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="font-medium">Trusted by Industry Leaders</span>
            </div>
            <div className="flex items-center gap-3 group cursor-default">
              <div className="w-10 h-10 bg-primary-600/20 rounded-full flex items-center justify-center group-hover:bg-primary-600/30 transition-colors flex-shrink-0">
                <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">ISO Certified Excellence</span>
            </div>
            <div className="flex items-center gap-3 group cursor-default">
              <div className="w-10 h-10 bg-primary-600/20 rounded-full flex items-center justify-center group-hover:bg-primary-600/30 transition-colors flex-shrink-0">
                <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">Award-Winning Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
