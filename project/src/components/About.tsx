import React from 'react';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

export const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8 text-[#E07A5F]" />, value: '200+', label: 'Klien' },
    { icon: <Award className="w-8 h-8 text-[#E07A5F]" />, value: '15+', label: 'Tahun Pengalaman' },
    { icon: <Clock className="w-8 h-8 text-[#E07A5F]" />, value: '5000+', label: 'Proyek Selesai' },
  ];

  const values = [
    { title: 'Keahlian Berkualitas', description: 'Kami bangga dengan setiap jahitan, memastikan standar tertinggi dalam semua produk kami.' },
    { title: 'Kepuasan Pelanggan', description: 'Visi dan kepuasan Anda adalah prioritas utama kami selama proses produksi.' },
    { title: 'Produksi Etis', description: 'Kami menjaga praktik kerja yang adil dan proses manufaktur yang ramah lingkungan.' },
    { title: 'Pengiriman Tepat Waktu', description: 'Kami menghormati tenggat waktu Anda dan memastikan pengiriman tepat waktu tanpa mengorbankan kualitas.' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">Tentang Kami</h2>
          <div className="w-24 h-1 bg-[#E07A5F] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pelajari lebih lanjut tentang perjalanan kami dan komitmen terhadap manufaktur pakaian berkualitas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4620624/pexels-photo-4620624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Tentang KONVEKSI FEMIT"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 flex space-x-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-lg shadow-lg"
                  style={{ transform: `translateY(${index * 10}px)` }}
                >
                  {stat.icon}
                  <p className="text-3xl font-bold text-[#1E293B] mt-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Cerita Kami</h3>
            <p className="text-gray-700 mb-6">
              Didirikan pada tahun 2008, KONVEKSI FEMIT telah berkembang dari bengkel kecil milik keluarga menjadi salah satu produsen garmen terkemuka di wilayah ini. Dengan pengalaman lebih dari 15 tahun, kami telah menyempurnakan keahlian kami dan membangun hubungan yang kuat dengan merek-merek di berbagai industri.
            </p>
            <p className="text-gray-700 mb-8">
              Tim ahli kami menggabungkan keahlian tradisional dengan teknik manufaktur modern untuk menghasilkan garmen berkualitas tinggi yang memenuhi standar tertinggi. Kami menghargai inovasi, keberlanjutan, dan praktik produksi yang etis dalam segala hal yang kami lakukan.
            </p>

            <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Nilai-Nilai Kami</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#E07A5F] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#1E293B] mb-1">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};