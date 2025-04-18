
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Products = () => {
  const products = [
    {
      id: 1,
      title: "SmartCrypto AI",
      description: "Rastreamento inteligente de portfólios cripto. Cadastre seus ativos cripto, acompanhe sua evolução e use nosso Robô de Investimento!",
      image: "/lovable-uploads/14c93ba1-028b-4770-87b9-3d989faa595a.png",
      gradient: "from-[#00BFA6]/20 to-transparent",
    },
    {
      id: 2,
      title: "NutriVita Plan AI",
      description: "Acompanhamento e planejamento alimentar para nutricionistas; controla agenda de consultas, dados físicos, evolução, avaliações e gerador de dietas",
      image: "/lovable-uploads/c37f7b4f-6e66-44c5-8dda-cf94905f98c2.png",
      gradient: "from-[#00BFA6]/20 to-transparent",
    },
    {
      id: 3,
      title: "Legal Oracle AI",
      description: "Seu assistente jurídico pessoal; com buscador de jurisprudências, você simplesmente conversa e ele te responde!",
      image: "/lovable-uploads/4ef0db56-1abb-4294-896c-9e4b044a5738.png",
      gradient: "from-[#00BFA6]/20 to-transparent",
    },
    {
      id: 4,
      title: "Eco Flow AI",
      description: "Voltado a empresas do ramo ambiental, possui controle de resíduos, descarte, acompanhamento contratual e financeiro",
      image: "/lovable-uploads/55be0252-ebaa-4a36-aac1-a0647de86875.png",
      gradient: "from-[#00BFA6]/20 to-transparent",
    },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-black to-kings-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="gradient-text">Produtos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Soluções inovadoras desenvolvidas para transformar o seu negócio através da tecnologia e inteligência artificial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,191,166,0.3)] group"
            >
              <div className={`h-2 bg-gradient-to-r ${product.gradient}`}></div>
              <div className="p-8">
                <div className="flex items-start gap-4">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-36 h-auto object-contain" 
                    />
                  ) : (
                    <div className="p-3 bg-kings-teal/10 rounded-lg flex items-center justify-center" style={{ minWidth: '48px', minHeight: '48px' }}>
                      {/* Removed reference to product.icon as it no longer exists */}
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-gray-400 mb-4">{product.description}</p>
                    <Button 
                      variant="link" 
                      className="p-0 text-kings-teal hover:text-kings-teal/80 flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                    >
                      Saiba mais <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Removed the "Ver todos os produtos" button as requested */}
      </div>
    </section>
  );
};

export default Products;
