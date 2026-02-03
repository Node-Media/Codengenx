import Link from 'next/link';

export default function Footer() {
  const socialLinks = ['Twitter', 'LinkedIn', 'Instagram', 'Facebook'];
  
  return (
    <footer className="bg-secondary-900 text-white pt-20 pb-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary-600 rounded flex items-center justify-center">
                <span className="text-white font-mono text-sm font-bold">CX</span>
              </div>
              <span className="font-bold text-xl">CodengenX</span>
            </div>
            <p className="text-secondary-400 max-w-sm mb-8">
              Empowering businesses with cutting-edge software solutions and shaping the future of tech talent through expert training.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={social}
                >
                  <span className="text-sm">🔗</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-secondary-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-white transition-colors">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-secondary-400">
              <li className="flex items-start gap-3">
                <span>📍</span>
                <span>123 Tech Park, Innovation Street, Digital City</span>
              </li>
              <li className="flex items-center gap-3">
                <span>📧</span>
                <a href="mailto:info@codengenx.com" className="hover:text-white transition-colors">
                  info@codengenx.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span>📞</span>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-secondary-500 text-sm">
          <p>© 2025 CodengenX. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
