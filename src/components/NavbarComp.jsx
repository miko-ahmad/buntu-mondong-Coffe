import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Logo from '../assets/img/LOGO.png';

export default function NavbarComp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5); // kalau scroll > 5px, aktifkan efek
    };

    handleScroll(); // Cek saat pertama render
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // cleanup
  }, []);

  return (
    <nav
      className={`p-4 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/60 backdrop-blur-lg text-amber-900 rounded-xl pl-4' : 'bg-amber-900 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#">
          <img
            src={Logo}
            alt="Logo BMC"
            className="h-8"
          />
        </a>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={24} />
        </button>
        <ul className="hidden md:flex gap-4">
          <li><a href="#home" className="hover:underline">HOME</a></li>
          <li><a href="#products" className="hover:underline">PRODUK</a></li>
          <li><a href="#contact" className="hover:underline">CONTACT</a></li>
        </ul>
      </div>
      {menuOpen && (
        <ul className="flex flex-col gap-2 mt-4 md:hidden">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#products" className="hover:underline">Produk</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
