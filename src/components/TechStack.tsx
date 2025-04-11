
import React from 'react';
import { Github, Bot, Database, Code, Blocks, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';

const TechStack: React.FC = () => {
  return (
    <section className="bg-black py-10 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <h3 className="text-center text-lg text-gray-400 mb-4">
          Desenvolvido com tecnologia de ponta
        </h3>
      </div>
      
      <div className="tech-scroll relative w-full overflow-hidden">
        <div className="flex animate-scroll-infinite">
          {/* First set of icons */}
          <TechItem name="Lovable" icon={<Blocks className="w-8 h-8 text-kings-teal" />} />
          <TechItem name="Supabase" icon={<Database className="w-8 h-8 text-[#3ECF8E]" />} />
          <TechItem name="Python" icon={<Code className="w-8 h-8 text-[#3776AB]" />} />
          <TechItem name="GitHub" icon={<Github className="w-8 h-8 text-white" />} />
          <TechItem name="ChatGPT" icon={<Bot className="w-8 h-8 text-[#74AA9C]" />} />
          <TechItem name="React" icon={<BarChart className="w-8 h-8 text-[#61DAFB]" />} />
          
          {/* Duplicated set for seamless infinite scrolling */}
          <TechItem name="Lovable" icon={<Blocks className="w-8 h-8 text-kings-teal" />} />
          <TechItem name="Supabase" icon={<Database className="w-8 h-8 text-[#3ECF8E]" />} />
          <TechItem name="Python" icon={<Code className="w-8 h-8 text-[#3776AB]" />} />
          <TechItem name="GitHub" icon={<Github className="w-8 h-8 text-white" />} />
          <TechItem name="ChatGPT" icon={<Bot className="w-8 h-8 text-[#74AA9C]" />} />
          <TechItem name="React" icon={<BarChart className="w-8 h-8 text-[#61DAFB]" />} />
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
      "flex flex-col items-center justify-center px-16 py-6",
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
