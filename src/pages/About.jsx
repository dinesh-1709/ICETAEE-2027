import React from 'react';
import { Building2, GraduationCap, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container bg-slate-50 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      
      <div className="relative z-10">
        <h2 className="section-title">About ETAEE 2027</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Institute */}
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-primary-900/5 hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
            <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="text-primary-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">About the Institute</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              National Institute of Technology Raipur (Formerly Government Engineering College Raipur) was established in 1956 and acquired the status of National Institute of Technology on 1st December 2005. The institute is committed to developing technical education by preparing seasoned graduates in engineering and technology. Its core values are Integrity, Excellence, Transparency, and Accountability.
            </p>
          </div>

          {/* Department */}
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-primary-900/5 hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
            <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center mb-6">
              <GraduationCap className="text-secondary-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">About the Department</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Electrical Engineering is one of the significant branches of NIT Raipur, contributing since its inception in 1958. The Department aims to impart state-of-the-art knowledge and skills to students, thereby developing them into excellent Electrical Engineers, Entrepreneurs, Scientists, and Academicians.
            </p>
          </div>

          {/* Conference */}
          <div className="bg-gradient-to-br from-primary-900 to-secondary-900 p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 text-white md:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">About the Conference</h3>
            <p className="text-slate-200 leading-relaxed text-sm">
              The Fourth International Conference on Emerging Technologies and Applications in Electrical Engineering provides a platform for researchers, academicians and industry professionals to exchange innovative research and explore emerging technologies shaping the future of electrical power systems. The conference emphasizes renewable energy integration, artificial intelligence, automation and cybersecurity.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
