import React from 'react';

const Committee = () => {
  return (
    <section id="committee" className="section-container bg-slate-50">
      <h2 className="section-title">Organizing Committee</h2>
      
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Core Committee */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
            <h4 className="text-secondary-600 font-bold uppercase tracking-wider text-sm mb-2">Chief Patron</h4>
            <p className="font-semibold text-slate-800 text-lg">Prof. N.V. Ramaana Rao</p>
            <p className="text-slate-500 text-sm">Director, NIT Raipur</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
            <h4 className="text-secondary-600 font-bold uppercase tracking-wider text-sm mb-2">Chairperson</h4>
            <p className="font-semibold text-slate-800 text-lg">Dr. Sachin Jain</p>
            <p className="text-slate-500 text-sm">Head EED, NIT Raipur</p>
          </div>
        </div>

        {/* Patrons */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h4 className="text-center text-primary-600 font-bold uppercase tracking-wider text-sm mb-6">Patrons</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div>
              <p className="font-semibold text-slate-800">Dr. Shubhrata Gupta</p>
              <p className="text-slate-500 text-sm">Dean (Academics), NIT Raipur</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">Dr. Guru Prasad Subas Chandra Mishra</p>
              <p className="text-slate-500 text-sm">Dean (RnC), NIT Raipur</p>
            </div>
          </div>
        </div>

        {/* Organizing Secretaries */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -z-10"></div>
          <h4 className="text-center text-primary-600 font-bold uppercase tracking-wider text-sm mb-6">Organizing Secretaries / Coordinators</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              "Dr. Baidyanath Bag",
              "Dr. S. Venu",
              "Dr. Ramya Selvaraj",
              "Dr. Chilaka Ranga"
            ].map((name, i) => (
              <div key={i}>
                <p className="font-semibold text-slate-800">{name}</p>
                <p className="text-slate-500 text-xs mt-1">NIT Raipur</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committee;
