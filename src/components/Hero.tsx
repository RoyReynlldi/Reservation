import React from 'react';
import bgImage from '../assets/bg.jpg';

const Hero = () => {
  const scrollToReservations = () => {
    const element = document.getElementById('reservations');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
<div className="absolute inset-0 z-0">
  <img 
    src={bgImage}  // Menggunakan gambar yang diimport
    alt="Restaurant Interior"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
</div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Cak Jo
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light opacity-90 animate-fade-in-delayed">
          Halo Warga Cak Jo!<br />
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
          <button 
            onClick={scrollToReservations}
            className="block w-full md:w-auto bg-yellow-500 hover:bg-red-400 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Booking Sekarang
          </button>
          <button 
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="block w-full md:w-auto border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300"
          >
            Lihat Menu
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;