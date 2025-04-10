
import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-kings-teal/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold font-spaceGrotesk">
                <span className="text-kings-teal">K1</span>
                <span className="text-kings-gold">n</span>
                <span className="text-kings-teal">Gs</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Data Mining & Artificial Intelligence
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-kings-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-kings-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-kings-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-kings-teal transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-kings-teal transition-colors">Início</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-kings-teal transition-colors">Produtos</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-kings-teal transition-colors">Sobre</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-kings-teal transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-kings-teal transition-colors">K1nGs Investimentos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-kings-teal transition-colors">NutriVita Plan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-kings-teal transition-colors">Legal Oracle</a></li>
              <li><a href="#" className="text-gray-400 hover:text-kings-teal transition-colors">Eco Flow</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="text-kings-teal" />
                <span>contato@kings.com.br</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} className="text-kings-teal" />
                <span>(00) 0000-0000</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={16} className="text-kings-teal mt-1" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-kings-teal/20 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} K1nGs Data Mining & Artificial Intelligence. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
