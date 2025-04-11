
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-kings-dark/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold font-montserrat tracking-tight mr-2">
              <span className="text-kings-teal">K</span>
              <span className="text-kings-gold">1</span>
              <span className="text-kings-teal">nGs</span>
            </span>
            <span className="hidden md:inline text-sm opacity-80 font-light tracking-wide">Data Mining & Artificial Intelligence Agents</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-kings-teal transition-colors font-light tracking-wide">Início</a>
          <a href="#products" className="hover:text-kings-teal transition-colors font-light tracking-wide">Produtos</a>
          <a href="#about" className="hover:text-kings-teal transition-colors font-light tracking-wide">Sobre</a>
          <a href="#contact" className="hover:text-kings-teal transition-colors font-light tracking-wide">Contato</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-kings-white hover:bg-kings-teal/20"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-kings-dark/95 backdrop-blur-lg border-t border-kings-teal/20 animate-fade-in">
          <nav className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <a 
              href="#home" 
              className="py-2 px-4 hover:bg-kings-teal/20 rounded-md transition-colors font-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Início
            </a>
            <a 
              href="#products" 
              className="py-2 px-4 hover:bg-kings-teal/20 rounded-md transition-colors font-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Produtos
            </a>
            <a 
              href="#about" 
              className="py-2 px-4 hover:bg-kings-teal/20 rounded-md transition-colors font-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#contact" 
              className="py-2 px-4 hover:bg-kings-teal/20 rounded-md transition-colors font-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
