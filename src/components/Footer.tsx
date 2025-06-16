import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">Savoria</h3>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              Where culinary art meets exceptional experience. Join us for an 
              unforgettable dining journey that celebrates the finest in gastronomy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 hover:bg-yellow-500 hover:text-slate-900 p-3 rounded-lg transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-yellow-500 hover:text-slate-900 p-3 rounded-lg transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-yellow-500 hover:text-slate-900 p-3 rounded-lg transition-all duration-300">
                <Twitter className="w-5 h-5" />
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
                  123 Culinary Boulevard<br />
                  New York, NY 10001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-500" />
                <span className="text-slate-300 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-500" />
                <span className="text-slate-300 text-sm">info@savoria.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Operating Hours</h4>
            <div className="grid md:grid-cols-3 gap-4 text-slate-300 text-sm">
              <div>
                <span className="font-medium">Monday - Thursday</span><br />
                5:00 PM - 10:00 PM
              </div>
              <div>
                <span className="font-medium">Friday - Saturday</span><br />
                5:00 PM - 11:00 PM
              </div>
              <div>
                <span className="font-medium">Sunday</span><br />
                4:00 PM - 9:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 Savoria Restaurant. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;