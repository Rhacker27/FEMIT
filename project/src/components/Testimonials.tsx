import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
  stars: number;
}

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'Fashion Forward',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'KONVEKSI FEMIT telah menjadi mitra manufaktur kami selama lebih dari 3 tahun. Perhatian mereka terhadap detail dan komitmen terhadap kualitas tidak tertandingi. Kami telah melihat pertumbuhan yang signifikan dalam kepuasan pelanggan sejak bermitra dengan mereka.',
      stars: 5
    },
    {
      id: 2,
      name: 'David Chen',
      position: 'Pendiri',
      company: 'Urban Threads',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'Bekerja sama dengan KONVEKSI FEMIT telah mengubah proses produksi kami. Tim mereka responsif, efisien, dan selalu memberikan kualitas yang luar biasa setiap saat. Sangat merekomendasikan layanan mereka!',
      stars: 5
    },
    {
      id: 3,
      name: 'Amira Patel',
      position: 'Direktur Kreatif',
      company: 'StyleCraft',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'Keahlian dan perhatian terhadap detail dari KONVEKSI FEMIT sangat luar biasa. Mereka telah membantu kami mewujudkan desain kami dengan presisi dan kepedulian. Pelanggan kami menyadari perbedaan dalam kualitas.',
      stars: 4
    }
  ];

  useEffect(() => {
    let interval: number;
    
    if (!isPaused) {
      interval = window.setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [testimonials.length, isPaused]);

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
    setIsPaused(true);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
    setIsPaused(true);
  };

  const renderStars = (count: number) => {
    return Array(count).fill(0).map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-[#E07A5F] text-[#E07A5F]" />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-[#1E293B] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#E07A5F]"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-[#E07A5F]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Klien Kami</h2>
          <div className="w-24 h-1 bg-[#E07A5F] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Jangan hanya percaya kata-kata kami. Dengarkan langsung dari klien yang puas.
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-xl p-8 text-gray-800">
                    <div className="flex flex-col md:flex-row md:items-center mb-6">
                      <div className="mb-4 md:mb-0 md:mr-6">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-[#E07A5F]"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1E293B]">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                        <div className="flex mt-2">
                          {renderStars(testimonial.stars)}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white text-[#1E293B] rounded-full p-2 shadow-lg hover:bg-[#E07A5F] hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label="Testimonial sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white text-[#1E293B] rounded-full p-2 shadow-lg hover:bg-[#E07A5F] hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label="Testimonial selanjutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsPaused(true);
                }}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-[#E07A5F]' : 'bg-gray-400'
                } transition-colors duration-300`}
                aria-label={`Menuju testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};