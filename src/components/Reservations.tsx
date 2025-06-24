import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useReservations } from '../hooks/useReservations';

const Reservations = () => {
  const { createReservation } = useReservations();
  const [formData, setFormData] = useState({
    reservation_date: '',
    reservation_time: '',
    party_size: 2,
    customer_name: '',
    customer_phone: '',
    customer_email: '',
    special_requests: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const timeSlots = [
    '17:00', '17:30', '18:00', '18:30', '19:00', 
    '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const formatTimeForDisplay = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'number' ? parseInt(e.target.value) : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await createReservation(formData);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          reservation_date: '',
          reservation_time: '',
          party_size: 2,
          customer_name: '',
          customer_phone: '',
          customer_email: '',
          special_requests: ''
        });
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create reservation');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="reservations\" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 rounded-lg p-12">
              <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Reservation Confirmed!
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Thank you for choosing cak jo. Your reservation has been successfully saved 
                to our system and you should receive a confirmation email shortly.
              </p>
              <p className="text-slate-600">
                We look forward to providing you with an exceptional dining experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
               Booking Sekarang!
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Pesan meja Anda untuk pengalaman kuliner yang tak terlupakan. 
              Kami menyarankan Anda untuk melakukan reservasi terlebih dahulu untuk mendapatkan waktu yang Anda inginkan.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <div>
              {error && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
                  <AlertCircle className="text-red-500 w-5 h-5 flex-shrink-0" />
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">
                      <Calendar className="inline w-4 h-4 mr-2" />
                      Tanggal pemesanan
                    </label>
                    <input
                      type="date"
                      name="reservation_date"
                      value={formData.reservation_date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">
                      <Clock className="inline w-4 h-4 mr-2" />
                      Waktu Pemesanan
                    </label>
                    <select
                      name="reservation_time"
                      value={formData.reservation_time}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{formatTimeForDisplay(time)}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    <Users className="inline w-4 h-4 mr-2" />
                    Jumlah Tamu
                  </label>
                  <select
                    name="party_size"
                    value={formData.party_size}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    {[1,2,3,4,5,6,7,8].map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    <User className="inline w-4 h-4 mr-2" />
                    Nama
                  </label>
                  <input
                    type="text"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">
                      <Phone className="inline w-4 h-4 mr-2" />
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      name="customer_phone"
                      value={formData.customer_phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="08XXXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      name="customer_email"
                      value={formData.customer_email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="special_requests"
                    value={formData.special_requests}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Meja nya di satuin min!, Minta Asbak Min..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() => window.open('https://wa.me/085133060332', '_blank')}
                  className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:bg-yellow-300 disabled:cursor-not-allowed text-black font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {isSubmitting ? 'Creating Reservation...' : 'Konfirmasi Pemesanan'}
                </button>
              </form>
            </div>

            {/* Restaurant Info */}
            <div className="space-y-8">
              <div className="bg-slate-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Informasi Booking
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Jam Operasional</h4>
                    <div className="text-slate-600 space-y-1">
                      <p>Selasa : 15.00  - 00.30 </p>
                      <p>Rabu   : 15.00  - 00.30 </p>
                      <p>Kamis  : 15.00  - 00.30 </p>
                      <p>Jumat  : 15.00  - 00.30 </p>
                      <p>Sabtu  : 15.00  - 00.30 </p>
                      <p>Minggu  : 15.00  - 00.30 </p>
                      <p>Senin  : Tutup </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Policies</h4>
                    <div className="text-slate-600 space-y-1 text-sm">
                      <p>• Melakukan pembatalan, uang dp akan hangus</p>
                      <p>• setelah mengisi form. konfirmasi pembayaran ke whatsapp</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Contact</h4>
                    <div className="text-slate-600 space-y-1">
                      <p>Phone: 085133060332</p>
                      <p>Email: Tansucakjo@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Event Spesial</h3>
                <p className="mb-4 text-slate-200">
                  Akan ada event sarapan pagi di cak jo di hari sabtu minggu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;