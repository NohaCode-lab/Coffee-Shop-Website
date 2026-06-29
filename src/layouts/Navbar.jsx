import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo2 from "../assets/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Menu', id: 'menu' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Celebrate', id: 'celebrate' },
     { name: 'Reservation', id: 'reservation' },
    { name: 'Contact', id: 'contact' },
  ];

  // دالة موحدة لكل الـ Links
  const handleNavClick = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");
       setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-blue-900/80 backdrop-blur-md border-b border-blue-300/20 shadow-lg">
      
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group"
        >
          <img
            src={logo2} alt="Coffee Haven Logo"
            className="h-12 w-12 rounded-full ring-2 ring-pink-400 transition group-hover:scale-105"
          />
          <span className="text-2xl font-display font-bold text-white tracking-tight">
            Coffee Haven
          </span>
        </button>

        {/* Mobile Button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className="relative text-white/80 hover:text-pink-300 transition duration-200 font-medium group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-300 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-blue-800/95 backdrop-blur-md lg:hidden shadow-xl"
            >
              <ul className="flex flex-col items-center py-4 gap-3">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => {
                        handleNavClick(link.id);
                        setIsOpen(false);
                      }}
                      className="block py-2 px-4 text-white/80 hover:text-pink-300 rounded-lg transition"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};

export default Navbar;