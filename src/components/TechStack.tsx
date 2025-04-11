
import React from 'react';
import { Github, Bot, Database, Code, Blocks, BarChart, Wind, Puzzle, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

const TechStack: React.FC = () => {
  return (
    <section className="bg-black py-10 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <h3 className="text-center text-lg text-gray-400 mb-4">
          Desenvolvido com tecnologia de ponta
        </h3>
      </div>
      
      <div className="w-full">
        <div className="flex flex-wrap justify-center">
          <TechItem name="Lovable" icon={<Blocks className="w-8 h-8 text-kings-teal" />} />
          <TechItem name="Supabase" icon={<Database className="w-8 h-8 text-[#3ECF8E]" />} />
          <TechItem name="Python" icon={<Code className="w-8 h-8 text-[#3776AB]" />} />
          <TechItem name="GitHub" icon={<Github className="w-8 h-8 text-white" />} />
          <TechItem name="ChatGPT" icon={<Bot className="w-8 h-8 text-[#74AA9C]" />} />
          <TechItem name="React" icon={<BarChart className="w-8 h-8 text-[#61DAFB]" />} />
          <TechItem name="Tailwind" icon={<Wind className="w-8 h-8 text-[#38B2AC]" />} />
          <TechItem name="shadcn-ui" icon={<Puzzle className="w-8 h-8 text-white" />} />
          <TechItem name="Vite" icon={<Rocket className="w-8 h-8 text-[#646CFF]" />} />
        </div>
      </div>
    </section>
  );
};

interface TechItemProps {
  name: string;
  icon: React.ReactNode;
}

const TechItem: React.FC<TechItemProps> = ({ name, icon }) => {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center px-8 py-6 sm:px-12",
      "transition-transform hover:scale-110"
    )}>
      <div className="glass-card flex items-center justify-center w-20 h-20 rounded-xl mb-3">
        {icon}
      </div>
      <span className="text-sm font-light text-gray-400">{name}</span>
    </div>
  );
};

export default TechStack;
