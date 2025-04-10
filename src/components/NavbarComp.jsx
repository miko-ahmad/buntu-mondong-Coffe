import { useState } from 'react';
import { Menu } from 'lucide-react'; // Mengimpor Menu dari lucide-react

export default function NavbarComp() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-amber-900 text-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">BMC</h1>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={24} /> {/* Ikon hamburger */}
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
