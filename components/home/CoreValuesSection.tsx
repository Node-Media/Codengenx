'use client';

import { useEffect, useRef, useState } from 'react';

const values = [
  {
    number: '01',
    title: 'Creative Thinking',
    description: 'We foster innovation and out-of-the-box solutions that transform challenges into opportunities.',
  },
  {
    number: '02',
    title: 'Career Planning',
    description: 'Strategic guidance for your professional journey with personalized roadmaps tailored to your goals.',
  },
  {
    number: '03',
    title: 'Technical Excellence',
    description: 'Mastering cutting-edge technologies and industry best practices to deliver exceptional results.',
  },
];

export default function CoreValuesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const valueRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll-based expansion on mobile
  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const containerCenter = containerRect.top + containerRect.height / 2;
      
      // If section is above viewport (scrolled past), keep third card open
      if (containerRect.bottom < viewportHeight * 0.3) {
        setExpandedIndex(2);
        return;
      }
      
      // If section is below viewport (not reached yet), keep first card open
      if (containerRect.top > viewportHeight * 0.7) {
        setExpandedIndex(0);
        return;
      }

      // While in viewport, find closest card to center
      let closestIndex = 0;
      let closestDistance = Infinity;

      valueRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportHeight / 2);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setExpandedIndex(closestIndex);
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const toggleExpand = (index: number) => {
    if (!isMobile) return;
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">
            Core Values
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-secondary-900 max-w-2xl">
            What Drives Our Success
          </h2>
        </div>

        {/* Values Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-12 mb-20">
          {values.map((value, i) => (
            <div key={i} className="flex flex-col group">
              <div className="mb-6 pb-6 border-b-2 border-primary-600">
                <span className="text-5xl md:text-6xl font-bold text-primary-600/20 group-hover:text-primary-600 transition-colors duration-300">
                  {value.number}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary-900">
                {value.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed flex-grow">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Values Accordion - Mobile */}
        <div 
          ref={containerRef} 
          className="md:hidden mb-20"
          style={{
            height: '480px', // Fixed height: 2 collapsed (120px each) + 1 expanded (240px)
          }}
        >
          <div className="flex flex-col h-full">
            {values.map((value, i) => {
              const isExpanded = expandedIndex === i;
              return (
                <div
                  key={i}
                  ref={(el) => {
                    valueRefs.current[i] = el;
                  }}
                  onClick={() => toggleExpand(i)}
                  className={`rounded-2xl border-2 transition-all duration-500 ease-in-out cursor-pointer overflow-hidden ${
                    isExpanded
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-secondary-100 bg-white hover:border-secondary-200'
                  } ${i > 0 ? 'mt-4' : ''}`}
                  style={{
                    height: isExpanded ? '240px' : '120px',
                    transition: 'height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div className="p-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 flex-shrink-0">
                      <div className="flex-1">
                        <div
                          className="text-3xl font-bold mb-2 transition-all duration-500 ease-in-out"
                          style={{
                            color: isExpanded ? '#2563eb' : 'rgba(37, 99, 235, 0.3)',
                            transform: isExpanded ? 'scale(1.1)' : 'scale(1)',
                          }}
                        >
                          {value.number}
                        </div>
                        <h3 className="text-lg font-bold text-secondary-900 transition-all duration-500">
                          {value.title}
                        </h3>
                      </div>

                      {/* Toggle Icon */}
                      <div
                        className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center transition-all duration-500 ease-in-out"
                        style={{
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <div className="flex-1 flex items-end overflow-hidden">
                      <p
                        className="text-secondary-600 leading-relaxed text-sm transition-all duration-500 ease-in-out"
                        style={{
                          opacity: isExpanded ? 1 : 0,
                          transform: isExpanded ? 'translateY(0)' : 'translateY(16px)',
                          transitionDelay: isExpanded ? '0.15s' : '0s',
                        }}
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="pt-0 md:pt-20 md:border-t md:border-secondary-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">150+</div>
              <p className="text-secondary-600 font-medium text-sm sm:text-base">Projects Delivered</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">98%</div>
              <p className="text-secondary-600 font-medium text-sm sm:text-base">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">50+</div>
              <p className="text-secondary-600 font-medium text-sm sm:text-base">Expert Team Members</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">500+</div>
              <p className="text-secondary-600 font-medium text-sm sm:text-base">Trained Developers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
