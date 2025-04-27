import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/img/LOGO.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navContainerRef = useRef(null);
  const navWrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'contact'];
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
          }
        }
      });

      // Navbar background blur effect
      if (scrollY > 5) {
        navContainerRef.current?.classList.add('bg-white/40', 'backdrop-blur-lg', 'rounded-xl');
        navWrapperRef.current?.classList.add('pl-4');
      } else {
        navContainerRef.current?.classList.remove('bg-white/40', 'backdrop-blur-lg', 'rounded-xl');
        navWrapperRef.current?.classList.remove('pl-4');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run first time

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Product' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header>
      <nav
        ref={navContainerRef}
        className="nav__container fixed inset-x-0 top-0 z-50 mx-auto h-full max-h-14 max-w-[1440px] px-[60px] transition-all duration-300"
      >
        <div
          ref={navWrapperRef}
          className="nav__wrapper flex h-full max-h-14 items-center justify-between gap-4 transition-all duration-300"
        >
          <a href="#home">
            <img src={Logo} alt="logo-bmc" className="h-8 logo-bmc" />
          </a>

          {/* Icon Hamburger */}
          <div className="lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {/* Menu */}
          <ul
            className={`lg:flex gap-[30px] ${
              isMenuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-white py-4 px-4' : 'hidden'
            } lg:flex`}
          >
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`relative font-medium py-2 px-4 ${
                  activeSection === item.id
                    ? 'before:w-full text-[#5A4FCF]'
                    : 'before:w-0 hover:before:w-full'
                } before:absolute before:-bottom-1 before:left-0 before:h-[3px] before:rounded-full before:bg-[#5A4FCF] before:transition-all before:duration-300`}
              >
                <a href={`#${item.id}`} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
