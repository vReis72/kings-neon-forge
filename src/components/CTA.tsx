
import React from 'react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-kings-dark to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-kings-teal/10 to-transparent opacity-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-kings-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-kings-gold/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pronto para levar sua operação para o <span className="gold-text">futuro</span>?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Transforme sua empresa com nossas soluções de inteligência artificial e desenvolvimento web.
            Entre em contato agora para uma demonstração personalizada.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-kings-teal text-white hover:bg-kings-teal/90 px-8 py-6 text-lg rounded-md"
              size="lg"
            >
              Entre em contato
            </Button>
            
            <Button 
              variant="outline" 
              className="border-kings-gold text-kings-gold hover:bg-kings-gold/10 px-8 py-6 text-lg rounded-md"
              size="lg"
            >
              Solicite uma demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
