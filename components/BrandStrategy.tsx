import React from 'react';
import { Section } from './ui/Section';
import { Heart, Target, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

export const BrandStrategy: React.FC = () => {
  return (
    <Section id="brand" className="bg-slate-50">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">Emotion-Based Equity</h3>
        <h2 className="text-4xl font-bold text-slate-900">Ika Brand Strategy</h2>
      </motion.div>

      <div className="relative w-full max-w-6xl mx-auto h-auto md:h-[600px] flex flex-col md:block">
        
        {/* Center Hub - The IKA ball centre */}
        <div className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20 mx-auto mb-12 md:mb-0 w-48 h-48 flex items-center justify-center">
             {/* Radiating Ring */}
             <motion.div 
                className="absolute inset-0 bg-slate-200 rounded-full z-0"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut" }}
            />
            
            {/* Main Ball */}
            <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-slate-900 rounded-full shadow-2xl border-4 border-slate-800"
            >
                {/* Heartbeat Content */}
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="flex flex-col items-center"
                >
                    <h2 className="text-4xl font-black text-white tracking-widest">IKA</h2>
                    <span className="text-xs text-slate-400 uppercase tracking-wide mt-1">Brand Equity</span>
                </motion.div>
            </motion.div>
        </div>

        {/* Lines (The Frame) - Animated Drawing Effect */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0" style={{overflow: 'visible'}}>
            {/* Top Left Line */}
            <motion.line 
                x1="50%" y1="50%" x2="20%" y2="20%" 
                stroke="#cbd5e1" strokeWidth="3" strokeDasharray="8 8"
                initial={{ pathLength: 0, opacity: 0 }} 
                whileInView={{ pathLength: 1, opacity: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }} 
            />
            {/* Top Right Line */}
            <motion.line 
                x1="50%" y1="50%" x2="80%" y2="20%" 
                stroke="#cbd5e1" strokeWidth="3" strokeDasharray="8 8"
                initial={{ pathLength: 0, opacity: 0 }} 
                whileInView={{ pathLength: 1, opacity: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }} 
            />
            {/* Bottom Left Line */}
            <motion.line 
                x1="50%" y1="50%" x2="20%" y2="80%" 
                stroke="#cbd5e1" strokeWidth="3" strokeDasharray="8 8"
                initial={{ pathLength: 0, opacity: 0 }} 
                whileInView={{ pathLength: 1, opacity: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }} 
            />
            {/* Bottom Right Line */}
            <motion.line 
                x1="50%" y1="50%" x2="80%" y2="80%" 
                stroke="#cbd5e1" strokeWidth="3" strokeDasharray="8 8"
                initial={{ pathLength: 0, opacity: 0 }} 
                whileInView={{ pathLength: 1, opacity: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }} 
            />
        </svg>

        {/* Top Left: Design */}
        <motion.div 
            initial={{ opacity: 0, x: 20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="md:absolute md:top-[10%] md:left-[5%] w-full md:w-80 bg-white p-6 rounded-xl shadow-md border-t-4 border-green-400 mb-6 md:mb-0"
        >
            <div className="flex items-center gap-3 mb-4">
                <Palette className="w-5 h-5 text-green-500" />
                <h4 className="font-bold text-slate-900">Design Strategy</h4>
            </div>
            <ul className="text-sm text-slate-600 space-y-2">
                <li><span className="font-semibold text-slate-800">Partnership:</span> Collaboration with specialized design agency.</li>
                <li><span className="font-semibold text-slate-800">Value Creation:</span> Seasonal product ranges to build brand exclusivity.</li>
            </ul>
        </motion.div>

        {/* Top Right: Narrative */}
        <motion.div 
            initial={{ opacity: 0, x: -20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="md:absolute md:top-[10%] md:right-[5%] w-full md:w-80 bg-white p-6 rounded-xl shadow-md border-t-4 border-pink-400 mb-6 md:mb-0"
        >
            <div className="flex items-center gap-3 mb-4">
                <Heart className="w-5 h-5 text-pink-500" />
                <h4 className="font-bold text-slate-900">Narrative & Emotion</h4>
            </div>
            <ul className="text-sm text-slate-600 space-y-2">
                <li><span className="font-semibold text-slate-800">Storytelling:</span> Shifting from transactional to emotion-based selling.</li>
                <li><span className="font-semibold text-slate-800">Connection:</span> Creating deep bonds with parents & children.</li>
            </ul>
        </motion.div>

        {/* Bottom Left: Resource */}
        <motion.div 
            initial={{ opacity: 0, x: 20, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="md:absolute md:bottom-[10%] md:left-[5%] w-full md:w-80 bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-400 mb-6 md:mb-0"
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-white text-xs font-bold">%</div>
                <h4 className="font-bold text-slate-900">Resource Allocation</h4>
            </div>
            <ul className="text-sm text-slate-600 space-y-2">
                <li><span className="font-semibold text-slate-800">Dedicated Capacity:</span> 5 machines exclusively for Ika retail.</li>
                <li><span className="font-semibold text-slate-800">Zero Conflict:</span> Production insulated from external job work deadlines.</li>
            </ul>
        </motion.div>

        {/* Bottom Right: Target */}
        <motion.div 
            initial={{ opacity: 0, x: -20, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="md:absolute md:bottom-[10%] md:right-[5%] w-full md:w-80 bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-400"
        >
            <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-blue-500" />
                <h4 className="font-bold text-slate-900">Target: Gen Alpha</h4>
            </div>
            <ul className="text-sm text-slate-600 space-y-2">
                <li><span className="font-semibold text-slate-800">Segment:</span> Ages 3–14 years.</li>
                <li><span className="font-semibold text-slate-800">Style:</span> "Lounge-Street" apparel blending comfort & style.</li>
                <li><span className="font-semibold text-slate-800">Channels:</span> Myntra, Ajio, Amazon, Flipkart, Shopify.</li>
            </ul>
        </motion.div>

      </div>
    </Section>
  );
};