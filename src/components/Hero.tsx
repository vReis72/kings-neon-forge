
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center">
          <div className="space-y-8 animate-fade-in max-w-3xl mx-auto text-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Transformamos dados em <span className="gradient-text">decisões</span>. 
                <br />
                <span className="gold-text">Inovação</span> em cada linha de código.
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                Desenvolvemos soluções avançadas em Web e Inteligência Artificial para impulsionar o futuro do seu negócio.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
