'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

const services = [
  {
    title: 'Web Development',
    category: 'Build',
    description: 'Custom websites and web applications built with modern technologies.',
    preview: 'Full-stack solutions with React, Next.js, and Node.js. From MVPs to enterprise platforms.',
    accentColor: '#3b82f6',
    slug: 'web-development',
  },
  {
    title: 'Mobile Apps',
    category: 'Build',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    preview: 'React Native and Flutter apps that deliver native performance and user experience.',
    accentColor: '#06b6d4',
    slug: 'mobile-apps',
  },
  {
    title: 'UI/UX Design',
    category: 'Design',
    description: 'User-centric design that drives engagement and conversion.',
    preview: 'Design systems, prototypes, and interfaces that users love. Research-backed decisions.',
    accentColor: '#a855f7',
    slug: 'ui-ux-design',
  },
  {
    title: 'Digital Marketing',
    category: 'Scale',
    description: 'SEO, SEM, and social media strategies to grow your online presence.',
    preview: 'Data-driven campaigns that increase visibility, traffic, and conversions across channels.',
    accentColor: '#22c55e',
    slug: 'digital-marketing',
  },
  {
    title: 'Cloud Solutions',
    category: 'Scale',
    description: 'Scalable cloud infrastructure and DevOps services.',
    preview: 'AWS, Azure, and GCP deployment. CI/CD pipelines, monitoring, and infrastructure as code.',
    accentColor: '#ef4444',
    slug: 'cloud-solutions',
  },
  {
    title: 'Consulting',
    category: 'Guide',
    description: 'Expert technical consulting to guide your digital transformation.',
    preview: 'Strategic technology planning, architecture review, and team mentorship for growth.',
    accentColor: '#f59e0b',
    slug: 'consulting',
  },
];

export default function ServicesSection() {
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-secondary-900">Our Services</h2>
          </div>
          <Link
            href="/services"
            className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center gap-2"
          >
            View All Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-fr relative">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-secondary-200 p-6 flex flex-col justify-between transition-all duration-500 h-full cursor-default"
              style={{
                transitionDelay: `${i * 50}ms`,
              }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={(e) => {
                setCursorPos({
                  x: e.clientX,
                  y: e.clientY,
                });
              }}
            >
              {/* Accent Edge - grows into frame */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-4 group-hover:border-transparent"
                style={{
                  backgroundColor: service.accentColor,
                  boxShadow: `inset 0 0 0 0 ${service.accentColor}`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    border: `3px solid ${service.accentColor}`,
                    borderRadius: '1rem',
                  }}
                />
              </div>

              {/* Ghost Text Background */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none overflow-hidden"
                style={{
                  fontSize: '5rem',
                  fontWeight: '900',
                  lineHeight: '1',
                  color: service.accentColor,
                }}
              >
                {service.title.split(' ')[0]}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-xs font-bold uppercase tracking-wider mb-3 transition-colors duration-300" style={{ color: service.accentColor }}>
                  {service.category}
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Cursor-following tooltip */}
              {hoveredCard === i && (
                <div
                  className="fixed z-50 pointer-events-none bg-white rounded-lg shadow-2xl p-4 max-w-xs border-2 transition-opacity duration-200"
                  style={{
                    left: `${cursorPos.x + 20}px`,
                    top: `${cursorPos.y + 20}px`,
                    borderColor: service.accentColor,
                  }}
                >
                  <p className="text-sm font-medium text-secondary-800 leading-relaxed">
                    {service.preview}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {services.map((service, i) => {
            const isExpanded = expandedMobile === i;
            return (
              <div
                key={i}
                onClick={() => setExpandedMobile(isExpanded ? null : i)}
                className="relative overflow-hidden rounded-2xl border border-secondary-200 transition-all duration-300 cursor-pointer"
                style={{
                  borderLeftColor: service.accentColor,
                  borderLeftWidth: '4px',
                }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: service.accentColor }}>
                        {service.category}
                      </div>
                      <h3 className="text-lg font-bold text-secondary-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-secondary-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Toggle Icon */}
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
                      style={{
                        backgroundColor: isExpanded ? service.accentColor : '#f1f5f9',
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      <svg
                        className="w-5 h-5"
                        style={{ color: isExpanded ? '#ffffff' : service.accentColor }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isExpanded ? '200px' : '0',
                      opacity: isExpanded ? 1 : 0,
                    }}
                  >
                    <div className="pt-4 mt-4 border-t border-secondary-200">
                      <p className="text-secondary-700 text-sm font-medium leading-relaxed">
                        {service.preview}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
