import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] flex items-center overflow-hidden">
      <div 
        className={`absolute inset-0 bg-[url('https://images.pexels.com/photos/5699756/pexels-photo-5699756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20`}
      ></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] leading-tight mb-4">
              Manufaktur Garmen <span className="text-[#E07A5F]">Berkualitas</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              Produksi pakaian premium dengan perhatian terhadap detail dan keahlian yang luar biasa untuk merek Anda.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-[#E07A5F] text-white rounded-lg shadow-lg hover:bg-[#D65F46] transition-all duration-300 transform hover:-translate-y-1"
              >
                Dapatkan Penawaran
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-[#1E293B] text-[#1E293B] rounded-lg hover:bg-[#1E293B] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                Layanan Kami
              </a>
            </div>
          </div>
          
          <div 
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Manufaktur Pakaian"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-medium text-gray-800">
                  <span className="text-[#E07A5F] text-xl font-bold">200+</span><br />
                  Klien Puas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};