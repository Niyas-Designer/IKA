import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-900 text-white flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="ika.jpeg" 
          alt="Factory Floor" 
          className="w-full h-full object-cover"
        />
        {/* Navy Overlay at 20% opacity */}
        <div className="absolute inset-0 bg-slate-900/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          {/* Decorative Line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-2 bg-brand-orange mb-8 shadow-lg"
          />

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-tight drop-shadow-2xl">
            Ika Manufacturing <br />
            <span className="text-brand-orange drop-shadow-md">& Retail</span>
          </h1>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-wide drop-shadow-xl">
              Scaling Manufacturing <span className="font-semibold text-white">Excellence</span>
            </h2>
            <h3 className="text-xl md:text-3xl font-light text-slate-100 tracking-wider uppercase drop-shadow-lg">
              The Journey to <span className="text-brand-orange font-bold drop-shadow-md">₹1 Crore</span>
            </h3>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#journey" className="block p-2 cursor-pointer hover:text-brand-orange text-white/50 transition-colors" aria-label="Scroll down">
          <ChevronDown className="w-10 h-10 drop-shadow-lg" />
        </a>
      </motion.div>
    </div>
  );
};