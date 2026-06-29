import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import logo2 from "../assets/logo2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src={logo2}
                alt="Coffee Haven Logo"
                className="h-10 w-10 rounded-full ring-2 ring-pink-400 transition-transform hover:scale-110"
              />
              <span className="text-2xl font-display font-bold">Coffee Haven</span>
            </Link>
            <p className="text-white/70 text-sm">
              Crafting perfect moments since 2015. Your neighborhood coffee sanctuary.
            </p>
          </div>

          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-pink-300">Contact Info</h4>
            <address className="not-italic text-white/70 text-sm">
              <p>123 Coffee Street</p>
              <p>Brewville, CA 90210</p>
              <p className="mt-2">
                <a
                  href="tel:+15551234567"
                  className="hover:text-pink-300 transition-colors duration-200"
                  aria-label="Call us"
                >
                  (555) 123-4567
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@coffeehaven.com"
                  className="hover:text-pink-300 transition-colors duration-200"
                  aria-label="Email us"
                >
                  hello@coffeehaven.com
                </a>
              </p>
            </address>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4 text-pink-300">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/70 hover:text-pink-300 transition transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-pink-300 transition transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-pink-300 transition transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/50 text-sm">
          <p>  All rights reserved &copy; Noha Ahmed {currentYear}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;