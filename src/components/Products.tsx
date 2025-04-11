
import React from 'react';
import { ChevronRight, BarChart3, Apple, Scale, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Products = () => {
  const products = [
    {
      id: 1,
      title: "K1nGs Investimentos",
      description: "Rastreamento inteligente de portfólios cripto. Cadastre seus ativos cripto, analise e acompanhe sua evolução e invista automaticamente com um Robô de Investimento!",
      icon: <BarChart3 size={28} className="text-kings-teal" />,
      gradient: "from-[#00BFA6]/20 to-transparent",
    },
    {
      id: 2,
      title: "NutriVita Plan",
      description: "Acompanhamento e planejamento alimentar para nutricionistas; controla agenda de consultas, dados físicos, evolução, avaliações e gerador de dietas",
      icon: <Apple size={28} className="text-kings-teal" />,
      gradient: "from-[#00BFA6]/20 to-transparent",
    },
    {
      id: 3,
      title: "Legal Oracle",
      description: "Seu assistente jurídico pessoal; com buscador de buscador de jurisprudências, você simplesmente conversa e ele te responde!",
      icon: <Scale size={28} className="text-kings-teal" />,
      gradient: "from-[#00BFA6]/20 to-transparent",
    },
    {
      id: 4,
      title: "Eco Flow",
      description: "Voltado a empresas do ramo ambiental, possui controle de resíduos, descarte, acompanhamento contratual e financeiro",
      icon: <Leaf size={28} className="text-kings-teal" />,
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
                  <div className="p-3 bg-kings-teal/10 rounded-lg">
                    {product.icon}
                  </div>
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
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-kings-teal text-kings-teal hover:bg-kings-teal/10"
          >
            Ver todos os produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
