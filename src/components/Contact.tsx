import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Kunjungi Kami
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Terletak di kota bekasi jawabarat, cak joe dapat diakses dengan mudah melalui 
 dan siap menyambut Anda untuk pengalaman bersantap yang luar biasa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Hubungi
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-500 p-3 rounded-lg">
                      <MapPin className="text-slate-800 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Address</h4>
                      <p className="text-slate-600">
                        Jl. KH. Agus Salim No.7, RT.05/ RW08/RW.008<br />
                        Bekasi Jaya, Kec. Bekasi Timur<br />
                        Kota Bks, Jawa Barat 17112
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
                        Reservations: 085133060332<br />
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
                         Tansucakjo@gmail.com<br />
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
                        <p>Selasa - Minggu: 17.00 - 00.30 </p>
                        <p>Senin Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/waroengcakjo/" className="bg-slate-800 text-white p-3 rounded-lg hover:bg-slate-700 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://wa.me/085133060332" className="bg-slate-800 text-white p-3 rounded-lg hover:bg-slate-700 transition-colors">
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
  <div className="aspect-w-16 aspect-h-12">
    <iframe
      title="cak jo Location"
      src="https://www.google.com/maps?q=-6.224460,107.028850&hl=es;z=14&output=embed"
      className="w-full h-96 border-0"
      loading="lazy"
      allowFullScreen
    ></iframe>
  </div>
  <div className="text-center mt-4">
    <a
      href="https://www.google.com/maps/dir/?api=1&destination=-6.224460,107.028850"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-yellow-500 text-slate-800 px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
    >
      Dapatkan Rute
    </a>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
