import React from 'react';
import { Calendar, MapPin, ChevronRight, Zap, Shield, Cpu, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-2/3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 border border-primary-200 text-primary-800 mb-6 shadow-sm">
            <span className="animate-pulse w-2 h-2 rounded-full bg-secondary-500"></span>
            <span className="text-sm font-semibold tracking-wide uppercase">Fourth International Conference</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6 font-display">
            Emerging Technologies & Applications in <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Electrical Engineering</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl font-light">
            Theme: <span className="font-semibold text-primary-700">Transforming Power Grids</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mb-10 md:justify-start justify-center">
            <div className="flex items-center gap-3 text-slate-800">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center border border-primary-200 text-primary-600">
                <Calendar size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Date</p>
                <p className="font-bold text-sm">19th - 20th Feb 2027</p>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-slate-200"></div>

            <div className="flex items-center gap-3 text-slate-800">
              <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center border border-secondary-200 text-secondary-600">
                <MapPin size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Mode</p>
                <p className="font-bold text-sm">Online Conference</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/registration" className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-primary-600/30">
              Register Now <ChevronRight size={20} />
            </Link>
            <Link to="/topics" className="px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-lg font-semibold flex items-center justify-center transition-all shadow-sm">
              Call for Papers
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/3 mt-16 md:mt-0 flex justify-center md:justify-end">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <RefreshCw size={28}/>, label: 'Renewable Integration' },
              { icon: <Cpu size={28}/>, label: 'AI in Electrical' },
              { icon: <Zap size={28}/>, label: 'Automation' },
              { icon: <Shield size={28}/>, label: 'Cybersecurity' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 shadow-sm hover:shadow-md hover:border-primary-200 transition-all group">
                <div className="text-primary-600 bg-primary-50 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <p className="text-slate-700 text-sm font-semibold">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
