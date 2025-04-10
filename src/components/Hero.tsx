
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Transformamos dados em <span className="gradient-text">decisões</span>. 
                <br />
                <span className="gold-text">Inovação</span> em cada linha de código.
              </h1>
              <p className="text-xl text-gray-300 max-w-xl">
                Desenvolvemos soluções avançadas em Web e Inteligência Artificial para impulsionar o futuro do seu negócio.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-kings-teal text-white hover:bg-kings-teal/90 px-8 py-6 text-lg rounded-md"
                size="lg"
              >
                Conheça nossos produtos
              </Button>
              
              <Button 
                variant="outline" 
                className="border-kings-gold text-kings-gold hover:bg-kings-gold/10 px-8 py-6 text-lg rounded-md"
                size="lg"
              >
                Fale conosco
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-kings-teal/20 rounded-full blur-3xl animate-pulse opacity-30"></div>
              {/* Robot illustration placeholder */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-kings-teal/30 to-transparent rounded-full flex items-center justify-center border border-kings-teal/30 animate-glow">
                <div className="text-7xl md:text-8xl font-spaceGrotesk font-bold text-kings-white opacity-90">K1</div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-2xl gold-text font-spaceGrotesk">AI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
