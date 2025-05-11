
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cosmo-blue-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">COSMO<span className="text-cosmo-blue-light">LAB</span></span>
            </Link>
            <p className="text-sm text-gray-300 mb-6 max-w-xs">
              Pioneering Intelligence Amplification (IA) and the 4th Cultural Time Perception Shift (4th CTPS) for ethical, mission-ready innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-cosmo-blue-light transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-cosmo-blue-light transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-cosmo-blue-light transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-cosmo-blue-light transition-colors">About Us</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-cosmo-blue-light transition-colors">Solutions</Link></li>
              <li><Link to="/industries" className="text-gray-300 hover:text-cosmo-blue-light transition-colors">Industries</Link></li>
              <li><Link to="/insights" className="text-gray-300 hover:text-cosmo-blue-light transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cosmo-blue-light transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-cosmo-blue-light transition-colors">Intelligence Amplification</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cosmo-blue-light transition-colors">4th CTPS Technology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cosmo-blue-light transition-colors">Real-time Synchronization</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cosmo-blue-light transition-colors">Ethical Innovation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-3">
              <p>123 Innovation Drive</p>
              <p>Palo Alto, CA 94304</p>
              <p className="pt-2">
                <a href="tel:+18005551234" className="hover:text-cosmo-blue-light transition-colors">+1 (800) 555-1234</a>
              </p>
              <p>
                <a href="mailto:info@cosmolab.com" className="hover:text-cosmo-blue-light transition-colors">connect@cosmolab.cc</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Cosmo Lab. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-cosmo-blue-light transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cosmo-blue-light transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-cosmo-blue-light transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
