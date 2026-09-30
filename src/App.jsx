import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Topics from './pages/Topics';
import Dates from './pages/Dates';
import Registration from './pages/Registration';
import Committee from './pages/Committee';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-sans selection:bg-primary-200 selection:text-primary-900 bg-slate-50">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/dates" element={<Dates />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/committee" element={<Committee />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
