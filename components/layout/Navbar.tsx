'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-secondary-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary-600/20">
            <span className="text-white font-mono text-lg font-bold">CX</span>
          </div>
          <span className="font-bold text-xl tracking-tight">CodengenX</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-secondary-600 hover:text-primary-600 font-medium transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-secondary-600 hover:text-primary-600 font-medium transition-colors">
            About Us
          </Link>
          <Link href="/services" className="text-secondary-600 hover:text-primary-600 font-medium transition-colors">
            Services
          </Link>
          <Link href="/blog" className="text-secondary-600 hover:text-primary-600 font-medium transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-secondary-600 hover:text-primary-600 font-medium transition-colors">
            Contact
          </Link>
          <button className="bg-primary-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/25">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-secondary-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-secondary-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-secondary-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-secondary-100">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link href="/" className="text-secondary-600 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-secondary-600 hover:text-primary-600 font-medium transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-secondary-600 hover:text-primary-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/blog" className="text-secondary-600 hover:text-primary-600 font-medium transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-secondary-600 hover:text-primary-600 font-medium transition-colors">
              Contact
            </Link>
            <button className="bg-primary-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/25">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
