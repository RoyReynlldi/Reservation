import React, { useState } from 'react';
import { useMenu } from '../hooks/useMenu';

const Menu = () => {
  const { menuItems, loading, error, getMenuByCategory } = useMenu();
  const [activeCategory, setActiveCategory] = useState<'starters' | 'mains' | 'desserts' | 'drinks'>('starters');

  const categories = [
    { id: 'starters' as const, name: 'Starters' },
    { id: 'mains' as const, name: 'Main Courses' },
    { id: 'desserts' as const, name: 'Desserts' },
    { id: 'drinks' as const, name: 'Beverages' }
  ];

  if (loading) {
    return (
      <section id="menu\" className="py-20 bg-slate-50">
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
              Our Menu
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Discover our carefully curated menu featuring seasonal ingredients 
              and innovative culinary techniques
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
                    ${item.price.toFixed(2)}
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
              Please inform us of any dietary restrictions or allergies
            </p>
            <button className="bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors duration-300">
              Download Full Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;