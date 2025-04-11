
import React from 'react';
import { Brain, Code, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-kings-dark to-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sobre a <span className="text-kings-teal">K1</span>
            <span className="text-kings-gold">n</span>
            <span className="text-kings-teal">Gs</span>
          </h2>
          
          <p className="text-xl leading-relaxed">
            A K1nGs é uma empresa de tecnologia especializada no desenvolvimento de soluções web e 
            inteligência artificial. Criamos produtos sob medida que ajudam empresas e profissionais 
            a automatizar tarefas, gerar insights e escalar resultados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="glass-card p-8 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,191,166,0.3)] group">
            <div className="w-16 h-16 rounded-full bg-kings-teal/20 flex items-center justify-center mb-6 group-hover:bg-kings-teal/30 transition-colors">
              <Brain size={32} className="text-kings-teal" />
            </div>
            <h3 className="text-xl font-bold mb-3">Tecnologia de IA</h3>
            <p className="text-gray-400">
              Desenvolvemos soluções baseadas nas mais recentes soluções de inteligência artificial que existem no mercado, garantindo soluções únicas e eficientes.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="glass-card p-8 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,191,166,0.3)] group">
            <div className="w-16 h-16 rounded-full bg-kings-teal/20 flex items-center justify-center mb-6 group-hover:bg-kings-teal/30 transition-colors">
              <Code size={32} className="text-kings-teal" />
            </div>
            <h3 className="text-xl font-bold mb-3">Produtos multiplataforma</h3>
            <p className="text-gray-400">
              Nossas soluções funcionam em qualquer dispositivo e se adaptam a qualquer formato de tela, garantindo uma experiência única e consistente em todos os ambientes.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="glass-card p-8 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,191,166,0.3)] group">
            <div className="w-16 h-16 rounded-full bg-kings-teal/20 flex items-center justify-center mb-6 group-hover:bg-kings-teal/30 transition-colors">
              <Zap size={32} className="text-kings-teal" />
            </div>
            <h3 className="text-xl font-bold mb-3">Foco em UX e desempenho</h3>
            <p className="text-gray-400">
              Priorizamos a experiência do usuário e a performance, criando interfaces intuitivas e de alta velocidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
