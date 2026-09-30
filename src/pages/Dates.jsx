import React from 'react';
import { CalendarDays, Clock } from 'lucide-react';

const ImportantDates = () => {
  const dates = [
    { title: "Paper Submission Opening", date: "TBD, 2027", icon: <Clock /> },
    { title: "Submission Deadline", date: "TBD, 2027", icon: <Clock /> },
    { title: "Acceptance Notification", date: "TBD, 2027", icon: <Clock /> },
    { title: "Registration Opening", date: "TBD, 2027", icon: <Clock /> },
    { title: "Registration Closing", date: "TBD, 2027", icon: <Clock /> },
    { title: "Conference Dates", date: "19th - 20th Feb, 2027", icon: <CalendarDays className="text-secondary-500" /> },
  ];

  return (
    <section id="dates" className="section-container bg-slate-50">
      <h2 className="section-title">Important Dates</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-primary-200 ml-3 md:ml-6">
          {dates.map((item, index) => (
            <div key={index} className="mb-10 ml-8 md:ml-12 relative">
              <div className="absolute -left-[41px] md:-left-[57px] bg-white border-2 border-primary-500 rounded-full w-10 h-10 flex items-center justify-center text-primary-600 shadow-md">
                {item.icon}
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-primary-600 font-semibold">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
