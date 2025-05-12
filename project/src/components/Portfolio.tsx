import React, { useState } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Seragam Korporat',
      category: 'uniforms',
      image: 'https://images.pexels.com/photos/6567739/pexels-photo-6567739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Seragam korporat yang dirancang untuk kenyamanan dan penampilan profesional.'
    },
    {
      id: 2,
      title: 'Koleksi Kasual',
      category: 'casual',
      image: 'https://images.pexels.com/photos/6567583/pexels-photo-6567583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Pakaian kasual modern dengan perhatian pada gaya dan kenyamanan untuk penggunaan sehari-hari.'
    },
    {
      id: 3,
      title: 'Lini Pakaian Olahraga',
      category: 'sportswear',
      image: 'https://images.pexels.com/photos/6311662/pexels-photo-6311662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Pakaian olahraga yang dirancang dengan bahan canggih untuk kenyamanan maksimal.'
    },
    {
      id: 4,
      title: 'Seragam Sekolah',
      category: 'uniforms',
      image: 'https://images.pexels.com/photos/8460131/pexels-photo-8460131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Seragam sekolah yang tahan lama dan nyaman dirancang untuk bertahan lama.'
    },
    {
      id: 5,
      title: 'Koleksi Fashion',
      category: 'fashion',
      image: 'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Busana fashion trendi yang dirancang dengan gaya terkini.'
    },
    {
      id: 6,
      title: 'Kaos Kustom',
      category: 'casual',
      image: 'https://images.pexels.com/photos/6952423/pexels-photo-6952423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Kaos cetak kustom dengan bahan dan teknik pencetakan berkualitas tinggi.'
    }
  ];

  const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'uniforms', label: 'Seragam' },
    { id: 'casual', label: 'Kasual' },
    { id: 'sportswear', label: 'Olahraga' },
    { id: 'fashion', label: 'Fashion' }
  ];

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">Portofolio Kami</h2>
          <div className="w-24 h-1 bg-[#E07A5F] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Jelajahi hasil kerja kami dan lihat kualitas manufaktur garmen kami.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#E07A5F] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              onClick={() => openModal(item)}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-200 text-sm">
                      {categories.find(cat => cat.id === item.category)?.label}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80" onClick={closeModal}>
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-auto"
                />
                <button
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
                  onClick={closeModal}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1E293B] mb-2">{selectedItem.title}</h3>
                <p className="text-[#E07A5F] mb-4">
                  {categories.find(cat => cat.id === selectedItem.category)?.label}
                </p>
                <p className="text-gray-600">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};