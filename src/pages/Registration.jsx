import React from 'react';
import { CreditCard, AlertCircle } from 'lucide-react';

const Registration = () => {
  return (
    <section id="registration" className="section-container bg-slate-50 relative overflow-hidden">
      <h2 className="section-title !mb-4">Registration Fees</h2>
      
      <div className="text-center mb-12">
        <p className="text-slate-600 max-w-2xl mx-auto">
          Registration is mandatory for at least one author of an accepted paper to appear in the proceedings.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-5 px-6 font-bold text-slate-800 uppercase tracking-wider">Category</th>
                  <th className="py-5 px-6 font-bold text-slate-800 uppercase tracking-wider">Fee (INR) / USD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-700">Research Scholars / Students</td>
                  <td className="py-4 px-6 text-primary-700 font-semibold">6000 INR <span className="text-sm font-normal text-slate-500">(GST inclusive)</span> / 80 USD</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-700">Academics / Faculties / Scientists</td>
                  <td className="py-4 px-6 text-primary-700 font-semibold">8000 INR <span className="text-sm font-normal text-slate-500">(GST Inculsive)</span> / 100 USD</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-700">Industry Persons</td>
                  <td className="py-4 px-6 text-primary-700 font-semibold">8000 INR <span className="text-sm font-normal text-slate-500">(GST Inculsive)</span> / 100 USD</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-primary-50 p-6 sm:p-8 border-t border-primary-100">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h4 className="flex items-center gap-2 font-bold text-primary-900 mb-4">
                  <CreditCard size={20} /> Payment Details
                </h4>
                <p className="text-slate-700 mb-2">Registration fee is payable by <strong>Any Online Mode</strong> in favor of the account of:</p>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-sm">
                  <p><span className="text-slate-500 w-24 inline-block">Account Name:</span> <strong className="text-slate-800">Director, NIT Raipur</strong></p>
                  <p><span className="text-slate-500 w-24 inline-block">A/C No.:</span> <strong className="text-slate-800">30042955244</strong></p>
                  <p><span className="text-slate-500 w-24 inline-block">IFSC Code:</span> <strong className="text-slate-800">SBIN0002852</strong></p>
                  <p><span className="text-slate-500 w-24 inline-block">Branch:</span> <strong className="text-slate-800">GCET Branch, Raipur (C.G)</strong></p>
                </div>
              </div>
              
              <div className="flex-1">
                <h4 className="flex items-center gap-2 font-bold text-primary-900 mb-4">
                  <AlertCircle size={20} /> Important Notes
                </h4>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-500 mt-2 flex-shrink-0"></span>
                    <span>Registration fee is non-refundable under any circumstances.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-500 mt-2 flex-shrink-0"></span>
                    <span>One single Registration includes presenting one accepted paper.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
