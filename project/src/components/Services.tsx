import React, { useEffect, useRef } from 'react';
import { Shirt, Users, Timer, Sparkles, Scissors, Package } from 'lucide-react';

export const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Shirt className="w-10 h-10 text-[#E07A5F] mb-4" />,
      title: 'Pakaian Kustom',
      description: 'Desain dan produksi pakaian yang disesuaikan dengan spesifikasi merek Anda.'
    },
    {
      icon: <Scissors className="w-10 h-10 text-[#E07A5F] mb-4" />,
      title: 'Pembuatan Pola',
      description: 'Layanan pembuatan dan penyesuaian pola yang ahli untuk ukuran yang sempurna.'
    },
    {
      icon: <Users className="w-10 h-10 text-[#E07A5F] mb-4" />,
      title: 'Produksi Seragam',
      description: 'Pembuatan seragam berkualitas tinggi untuk bisnis, sekolah, dan organisasi.'
    },
    {
      icon: <Timer className="w-10 h-10 text-[#E07A5F] mb-4" />,
      title: 'Pengerjaan Cepat',
      description: 'Proses produksi yang efisien menjamin pengiriman tepat waktu tanpa mengorbankan kualitas.'
    },
    {
      icon: <Sparkles className="w-10 h-10 text-[#E07A5F] mb-4" />,
      title: 'Kontrol Kualitas',
      description: 'Jaminan kualitas yang ketat di setiap tahap proses manufaktur.'
    },
    {
      icon: <Package className="w-10 h-10 text-[#E07A5F] mb-4" />,
      title: 'Pengemasan & Pengiriman',
      description: 'Solusi pengemasan khusus dan pengiriman yang andal ke lokasi yang Anda tentukan.'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">Layanan Kami</h2>
          <div className="w-24 h-1 bg-[#E07A5F] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Solusi manufaktur pakaian lengkap untuk mewujudkan desain Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-[#1E293B] mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};