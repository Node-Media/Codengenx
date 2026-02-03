'use client';

import { useEffect, useRef, useState } from 'react';

const values = [
  {
    title: 'Creative Thinking',
    description: 'We foster innovation and out-of-the-box solutions that transform challenges into opportunities.',
    icon: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    stat1: '150+',
    stat1Label: 'Projects',
    stat2: '98%',
    stat2Label: 'Satisfaction',
    bgGradient: 'from-secondary-900 to-secondary-800',
    iconBg: 'bg-white/10 backdrop-blur-sm',
    iconColor: 'text-primary-400',
    textColor: 'text-white',
    descColor: 'text-secondary-300',
    statColor: 'text-primary-400',
  },
  {
    title: 'Career Planning',
    description: 'Strategic guidance for your professional journey with personalized roadmaps tailored to your goals.',
    icon: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    bgGradient: 'from-primary-50 to-blue-50',
    iconBg: 'bg-primary-600',
    iconColor: 'text-white',
    textColor: 'text-secondary-900',
    descColor: 'text-secondary-600',
  },
  {
    title: 'Technical Excellence',
    description: 'Mastering cutting-edge technologies and industry best practices to deliver exceptional results.',
    icon: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    bgGradient: 'from-white to-white',
    iconBg: 'bg-primary-600',
    iconColor: 'text-white',
    textColor: 'text-secondary-900',
    descColor: 'text-secondary-600',
    border: 'border-2 border-primary-600',
  },
];

export default function CoreValuesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = scrollRef.current.offsetWidth * 0.85 + 16; // 85vw + gap
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(index);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth * 0.85 + 16;
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-secondary-50 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-8 sm:mb-16">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-xs sm:text-sm">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-2 mb-4 text-secondary-900 max-w-2xl">
            Building Success Through Our Core Principles
          </h2>
        </div>

        {/* Mobile: Horizontal Scroll Carousel */}
        <div className="md:hidden">
          <div className="relative">
            {/* Swipeable Cards */}
            <div 
              ref={scrollRef}
              className="overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-4 pb-6 -mx-4 px-4"
            >
              {values.map((value, i) => (
                <div
                  key={i}
                  className={`flex-shrink-0 w-[85vw] bg-gradient-to-br ${value.bgGradient} ${value.border || ''} rounded-3xl p-6 snap-center shadow-lg active:scale-[0.98] transition-transform duration-200`}
                >
                  <div className="flex flex-col h-full min-h-[340px]">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${value.iconBg} rounded-2xl mb-5 shadow-sm`}>
                      <div className={value.iconColor}>{value.icon}</div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <h3 className={`text-2xl font-bold ${value.textColor} leading-tight`}>
                        {value.title}
                      </h3>
                      <p className={`text-sm ${value.descColor} leading-relaxed`}>
                        {value.description}
                      </p>
                    </div>

                    {/* Stats for first card */}
                    {value.stat1 && (
                      <div className="flex items-center gap-6 pt-5 mt-5 border-t border-white/20">
                        <div className="flex-1">
                          <div className={`text-2xl font-bold ${value.statColor}`}>{value.stat1}</div>
                          <div className="text-xs text-secondary-400">{value.stat1Label}</div>
                        </div>
                        <div className="w-px h-12 bg-white/20"></div>
                        <div className="flex-1">
                          <div className={`text-2xl font-bold ${value.statColor}`}>{value.stat2}</div>
                          <div className="text-xs text-secondary-400">{value.stat2Label}</div>
                        </div>
                      </div>
                    )}

                    {/* Arrow indicator for other cards */}
                    {!value.stat1 && (
                      <div className={`flex items-center ${value.textColor} font-medium text-sm mt-4 pt-4 border-t ${i === 0 ? 'border-white/20' : 'border-secondary-200'}`}>
                        <span>Learn more</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {values.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToCard(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex 
                      ? 'w-8 h-2.5 bg-primary-600' 
                      : 'w-2.5 h-2.5 bg-secondary-300 hover:bg-secondary-400'
                  }`}
                  aria-label={`View slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Stats */}
          <div className="mt-8 bg-white rounded-3xl p-6 shadow-lg border border-secondary-100">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">50+</div>
                <div className="text-xs text-secondary-500 font-medium">Expert Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">100%</div>
                <div className="text-xs text-secondary-500 font-medium">Placement Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">24/7</div>
                <div className="text-xs text-secondary-500 font-medium">Support System</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">500+</div>
                <div className="text-xs text-secondary-500 font-medium">Trained Developers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Bento Box Layout */}
        <div className="hidden md:grid md:grid-cols-12 gap-6">
          {/* Large Feature - Creative Thinking */}
          <div className="md:col-span-7 md:row-span-2 bg-gradient-to-br from-secondary-900 to-secondary-800 text-white rounded-3xl p-8 lg:p-12 relative overflow-hidden group min-h-[450px] flex flex-col justify-between shadow-xl">
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="space-y-4 flex-1">
                <h3 className="text-3xl lg:text-4xl font-bold">Creative Thinking</h3>
                <p className="text-secondary-300 text-lg leading-relaxed max-w-lg">
                  We foster innovation and out-of-the-box solutions that transform challenges into opportunities, pushing boundaries in everything we do.
                </p>
              </div>
              <div className="flex items-center gap-8 pt-6 mt-4">
                <div>
                  <div className="text-3xl font-bold text-primary-400">150+</div>
                  <div className="text-sm text-secondary-400">Innovative Projects</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <div className="text-3xl font-bold text-primary-400">98%</div>
                  <div className="text-sm text-secondary-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Career Planning */}
          <div className="md:col-span-5 bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-primary-100/50">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold mb-3 text-secondary-900">Career Planning</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Strategic guidance for a successful professional journey with personalized roadmaps tailored to your goals.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Excellence */}
          <div className="md:col-span-5 bg-white border-2 border-primary-600 rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold mb-3 text-secondary-900">Technical Excellence</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Mastering cutting-edge technologies and industry best practices to deliver exceptional results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar - Desktop Only */}
        <div className="hidden md:block mt-12 bg-white rounded-3xl p-8 shadow-lg border border-secondary-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-sm text-secondary-500 font-medium">Expert Mentors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-sm text-secondary-500 font-medium">Placement Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-sm text-secondary-500 font-medium">Support System</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-sm text-secondary-500 font-medium">Trained Developers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
