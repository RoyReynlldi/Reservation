import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Visit Us
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Located in the heart of downtown, Savoria is easily accessible 
              and ready to welcome you for an exceptional dining experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-500 p-3 rounded-lg">
                      <MapPin className="text-slate-800 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Address</h4>
                      <p className="text-slate-600">
                        123 Culinary Boulevard<br />
                        Downtown District<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-500 p-3 rounded-lg">
                      <Phone className="text-slate-800 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Phone</h4>
                      <p className="text-slate-600">
                        Reservations: (555) 123-4567<br />
                        Private Events: (555) 123-4568
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-500 p-3 rounded-lg">
                      <Mail className="text-slate-800 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
                      <p className="text-slate-600">
                        info@savoria.com<br />
                        reservations@savoria.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-500 p-3 rounded-lg">
                      <Clock className="text-slate-800 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Hours</h4>
                      <div className="text-slate-600 space-y-1">
                        <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                        <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                        <p>Sunday: 4:00 PM - 9:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-slate-800 text-white p-3 rounded-lg hover:bg-slate-700 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-slate-800 text-white p-3 rounded-lg hover:bg-slate-700 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-slate-800 text-white p-3 rounded-lg hover:bg-slate-700 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-12">
                <iframe
                  title="Savoria Location"
                  src="https://www.google.com/maps?q=-6.976237,107.762399&hl=es;z=14&output=embed"
                  className="w-full h-96 border-0"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="text-center mt-4">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=-6.9629753030250265, 107.7791089596535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500 text-slate-800 px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h4 className="font-semibold text-slate-800 mb-2">Parking</h4>
              <p className="text-slate-600 text-sm">
                Complimentary valet parking available during dinner service
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h4 className="font-semibold text-slate-800 mb-2">Accessibility</h4>
              <p className="text-slate-600 text-sm">
                Fully accessible with wheelchair-friendly entrance and restrooms
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h4 className="font-semibold text-slate-800 mb-2">Transportation</h4>
              <p className="text-slate-600 text-sm">
                Located 2 blocks from Central Metro Station and major bus routes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
