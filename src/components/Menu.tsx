import React, { useState } from 'react';
import { useMenu } from '../hooks/useMenu';
import qrImage from '../assets/qr.png'; // Import gambar QR

const Menu = () => {
  const { menuItems, loading, error, getMenuByCategory } = useMenu();
  const [activeCategory, setActiveCategory] = useState<'starters' | 'mains' | 'desserts' | 'drinks'>('starters');

  const categories = [
    { id: 'starters' as const, name: 'Menu Pembuka' },
    { id: 'mains' as const, name: 'Menu Utama' },
    { id: 'desserts' as const, name: 'Makanan Penutup' },
    { id: 'drinks' as const, name: 'Minuman' }
  ];

  if (loading) {
    return (
      <section id="menu" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Our Menu
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            </div>
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
              <p className="mt-4 text-slate-600">Loading menu...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="menu" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-red-600">Error loading menu: {error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentMenuItems = getMenuByCategory(activeCategory);

  return (
    <section id="menu" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Menu Cak Jo!
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Pilih Menu Favorit Anda dari Berbagai Kategori Kami!
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-slate-200">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 font-semibold transition-all duration-300 border-b-2 ${
                  activeCategory === category.id
                    ? 'text-yellow-600 border-yellow-500'
                    : 'text-slate-600 border-transparent hover:text-slate-800'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid gap-6 md:grid-cols-2">
            {currentMenuItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-slate-800">
                    {item.name}
                  </h3>
                  <span className="text-yellow-600 font-bold text-lg">
                    Rp.{item.price.toFixed()}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Lihat lebih banyak pilihan dan spesial kami di menu lengkap!
            </p>
            <p>
              <span className="text-yellow-600 font-bold">Scan Atau Click QR Code</span> untuk melihat menu lengkap kami.
            </p>

            {/* Ganti tombol dengan gambar QR */}
            <img
              src={qrImage}  // Menampilkan gambar QR
              alt="QR Code"
               className="mx-auto cursor-pointer rounded-lg w-32"  // Menyesuaikan ukuran gambar
              onClick={() => window.open('https://drive.google.com/drive/folders/1DeH0lcqsF9LWGhcQfCiuqZsbZ6NQFMxS', '_blank')}  // Link jika di klik
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
