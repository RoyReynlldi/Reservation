import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">cak jo</h3>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
             Di mana seni kuliner berpadu dengan pengalaman yang luar biasa. Bergabunglah bersama kami dalam perjalanan bersantap tak terlupakan yang merayakan gastronomi terbaik.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/waroengcakjo/" className="bg-slate-800 hover:bg-yellow-500 hover:text-slate-900 p-3 rounded-lg transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/085133060332" className="bg-slate-800 hover:bg-yellow-500 hover:text-slate-900 p-3 rounded-lg transition-all duration-300">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-yellow-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-yellow-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-yellow-400 transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-yellow-400 transition-colors"
                >
                  Reservations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-yellow-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-yellow-500" />
                <span className="text-slate-300 text-sm">
                  Jl. KH. Agus Salim No.7, RT.05/ RW08/RW.008, Bekasi Jaya, Kec. Bekasi Tim., Kota Bks, Jawa Barat 17112
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-500" />
                <span className="text-slate-300 text-sm">085133060332</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-500" />
                <span className="text-slate-300 text-sm">Tansucakjo@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 cak jo Restaurant. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm">
            Designed by @rrynald_i
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;