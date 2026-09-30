import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800 relative overflow-hidden mt-auto">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900 rounded-full filter blur-[100px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 font-display">ETAEE <span className="text-secondary-500">2027</span></h3>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-400">
              Fourth International Conference on Emerging Technologies & Applications in Electrical Engineering. Transforming Power Grids for a sustainable future.
            </p>
            <p className="text-sm">
              <strong>19th - 20th February 2027</strong> <br/>
              Online Conference
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-secondary-400 transition-colors">About</Link></li>
              <li><Link to="/topics" className="hover:text-secondary-400 transition-colors">Call for Papers</Link></li>
              <li><Link to="/registration" className="hover:text-secondary-400 transition-colors">Registration</Link></li>
              <li><Link to="/committee" className="hover:text-secondary-400 transition-colors">Committee</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            
            <div className="space-y-6">
              <div>
                <p className="text-white font-medium text-sm mb-2">Dr. Baidyanath Bag</p>
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-1">
                  <Mail size={14} className="text-secondary-400" />
                  <a href="mailto:bbag.ee@nitrr.ac.in" className="hover:text-white">bbag.ee@nitrr.ac.in</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Phone size={14} className="text-secondary-400" />
                  <span>+91-8950045927</span>
                </div>
              </div>
              
              <div>
                <p className="text-white font-medium text-sm mb-2">Dr. Chilaka Ranga</p>
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-1">
                  <Mail size={14} className="text-secondary-400" />
                  <a href="mailto:cranga.ee@nitrr.ac.in" className="hover:text-white">cranga.ee@nitrr.ac.in</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Phone size={14} className="text-secondary-400" />
                  <span>+91-9882444187</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; 2027 ETAEE - NIT Raipur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
