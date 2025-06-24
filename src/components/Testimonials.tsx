import React from 'react';
import { Star, Quote } from 'lucide-react';
import pfpImage from '../assets/pfp.webp';  // Import gambar lokal
import wpfpImage from '../assets/gpfp.png';  // Import gambar lokal
import ppfpImage from '../assets/ppfp.jpg';  // Import gambar lokal

const Testimonials = () => {
  const testimonials = [
    {
      name: "AIM TV",
      role: "",
      content: "Dimsum kuahnya mantap, wajib coba, pancongnya ga bikin eneg..",
      rating: 5,
      image: wpfpImage  // Menggunakan gambar lokal
    },
    {
      name: "Aku Siapa",
      role: "",
      content: "10/10 makanannya enak2 bgttt kalian wajib ke sni pkonya🤩🫵🏻✨",
      rating: 5,
      image: pfpImage  // Menggunakan gambar lokal
    },
    {
      name: "Risma Shakii",
      role: "",
      content: "Beberapa foto aja cukup mewakili nikmatnya nongkrong d waroeng cak jo. Kalo lu mau tau, dateng aja. Ga bakal nyesel sumpah",
      rating: 5,
      image: ppfpImage  // Menggunakan gambar lokal
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Apa yang Dikatakan Tamu Kami  
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Jangan hanya percaya pada kata-kata kami. Inilah yang dikatakan oleh tamu-tamu kami tentang pengalaman mereka di cak joe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 relative shadow-xl">
                <Quote className="text-yellow-500 w-8 h-8 mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 w-5 h-5 fill-current" />
                  ))}
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <img 
                    src={testimonial.image}  // Menggunakan gambar lokal
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-slate-500 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 text-yellow-500">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-white text-lg font-semibold">4.4/5</span>
              <span className="text-slate-300">dari 117+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
