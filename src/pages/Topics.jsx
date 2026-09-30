import React from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';
import { topics } from '../data/topics';

const Topics = () => {
  return (
    <section id="topics" className="section-container">
      <h2 className="section-title">Topics for Submission</h2>
      
      <div className="mb-12 max-w-4xl mx-auto text-center">
        <p className="text-slate-600 leading-relaxed">
          The conference encompasses power electronics and renewable energy, advanced semiconductor technologies, drives, energy storage, optics and photonics, smart sensing and control, power system protection and automation, and high-voltage engineering. It also welcomes research on AI/ML, digitalization and cybersecurity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {topics.map((topic, index) => (
          <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-primary-300 hover:shadow-md transition-all group">
            <CheckCircle className="text-secondary-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
            <span className="text-slate-700 font-medium text-sm">{topic}</span>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-primary-50 rounded-2xl p-8 max-w-4xl mx-auto border border-primary-100 text-center">
        <BookOpen className="mx-auto text-primary-500 mb-4" size={40} />
        <h3 className="text-xl font-bold text-primary-900 mb-4">Submission & Review Process</h3>
        <ul className="text-left text-slate-700 space-y-3 max-w-2xl mx-auto text-sm">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></span>
            <span>Papers must be submitted in PDF format through the online submission portal.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></span>
            <span>All submissions will be checked for plagiarism using Turnitin.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></span>
            <span>Papers with less than 20% similarity index will be forwarded for formal peer review.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-500 mt-2 flex-shrink-0"></span>
            <span className="font-semibold text-primary-900">Accepted papers may be published in Scopus indexed "LNEE Book Series" subject to its approval from Springer.</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Topics;
