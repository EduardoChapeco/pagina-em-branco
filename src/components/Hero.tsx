import React from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles, Code2, Rocket } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 text-white px-4">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-slate-300">O futuro do desenvolvimento chegou</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
          Cirius AI
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed">
          Sua nova plataforma de <span className="text-purple-400 font-semibold">vibecoding</span>. 
          Transforme ideias em código na velocidade do pensamento, com a fluidez que você merece.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white text-black hover:bg-slate-200 transition-all px-8 py-6 text-lg rounded-full">
            Começar a criar
            <Rocket className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 px-8 py-6 text-lg rounded-full">
            <Code2 className="mr-2 h-5 w-5" />
            Ver Documentação
          </Button>
        </div>
      </div>

      {/* Floating Elements Decor */}
      <div className="absolute bottom-10 left-10 animate-bounce duration-[3000ms]">
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-white/5 backdrop-blur-sm" />
      </div>
      <div className="absolute top-20 right-20 animate-pulse">
        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-500/10 to-transparent border border-white/5 backdrop-blur-sm" />
      </div>
    </div>
  );
};
