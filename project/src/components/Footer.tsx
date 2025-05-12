import React from 'react';
import { Scissors, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { name: 'Tentang Kami', href: '#about' },
      { name: 'Layanan', href: '#services' },
      { name: 'Portofolio', href: '#portfolio' },
      { name: 'Testimoni', href: '#testimonials' },
      { name: 'Kontak', href: '#contact' }
    ],
    services: [
      { name: 'Pakaian Kustom', href: '#services' },
      { name: 'Pembuatan Pola', href: '#services' },
      { name: 'Produksi Seragam', href: '#services' },
      { name: 'Kontrol Kualitas', href: '#services' },
      { name: 'Pengemasan & Pengiriman', href: '#services' }
    ],
    legal: [
      { name: 'Syarat Layanan', href: '#' },
      { name: 'Kebijakan Privasi', href: '#' },
      { name: 'Kebijakan Cookie', href: '#' }
    ]
  };

  return (
    <footer className="bg-[#1E293B] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="flex items-center space-x-2 mb-6">
              <Scissors className="w-8 h-8 text-[#E07A5F]" />
              <span className="text-xl font-bold">KONVEKSI FEMIT</span>
            </a>
            <p className="text-gray-400 mb-6">
              Layanan manufaktur pakaian premium dengan perhatian terhadap detail dan keahlian yang luar biasa untuk merek Anda.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-[#2A3C57] p-2 rounded-full hover:bg-[#E07A5F] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-[#2A3C57] p-2 rounded-full hover:bg-[#E07A5F] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-[#2A3C57] p-2 rounded-full hover:bg-[#E07A5F] transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Perusahaan</h3>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-[#E07A5F] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Layanan</h3>
            <ul className="space-y-3">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-[#E07A5F] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-[#E07A5F] mt-1 mr-3" />
                <span className="text-gray-400">info@konveksifemit.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-[#E07A5F] mt-1 mr-3" />
                <span className="text-gray-400">+62 123 456 7890</span>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {links.legal.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-[#E07A5F] transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} KONVEKSI FEMIT. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#E07A5F] text-sm transition-colors duration-300">
                Syarat Layanan
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E07A5F] text-sm transition-colors duration-300">
                Kebijakan Privasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};