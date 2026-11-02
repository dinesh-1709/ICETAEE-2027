import React from 'react';

const Acknowledgement = () => {
  return (
    <section id="acknowledgement" className="py-12 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold font-display text-primary-900 mb-4 tracking-tight">
          Acknowledgement
        </h3>
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/80">
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Acknowledgement;
