import React from 'react';
import { Section } from './ui/Section';
import { Scissors, Truck, RefreshCw, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const JobWork: React.FC = () => {
  return (
    <Section id="job-work">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">Sector 1: Stability</h3>
        <h2 className="text-4xl font-bold text-slate-900">Permanent Job Work</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Cycle Visualization - Scaled down on mobile */}
        <div className="relative h-[350px] md:h-[400px] w-full flex items-center justify-center scale-75 md:scale-100 origin-center">
          {/* Dashed Circle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute inset-0 m-auto w-[300px] h-[300px] rounded-full border-2 border-dashed border-orange-300 animate-spin-slow"
          />

          {/* Central Text */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="absolute inset-0 m-auto flex flex-col items-center justify-center text-center"
          >
            <h4 className="text-2xl font-bold text-slate-200">24/7</h4>
            <span className="text-slate-400 text-xs tracking-widest uppercase">Continuous Loop</span>
          </motion.div>
          
          {/* Nodes */}
          {[
            { Icon: Scissors, label: "ORDER", sub: "Weekly Allocation", pos: "top-[50px] left-1/2 -translate-x-1/2", delay: 0.4 },
            { Icon: Truck, label: "DELIVERY", sub: "Scheduled Dispatch", pos: "bottom-[80px] left-[10%]", delay: 0.6 },
            { Icon: RefreshCw, label: "PRODUCTION", sub: "Zero Downtime", pos: "bottom-[80px] right-[10%]", delay: 0.8 }
          ].map((node, i) => (
             <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: node.delay }}
                className={`absolute ${node.pos} bg-white p-4 rounded-xl shadow-lg flex flex-col items-center w-32`}
             >
                <div className="bg-orange-100 p-2 rounded-full mb-2 text-orange-600">
                   <node.Icon className="w-5 h-5" />
                </div>
                <span className="font-bold text-xs">{node.label}</span>
                <span className="text-[10px] text-slate-500">{node.sub}</span>
             </motion.div>
          ))}
        </div>

        {/* Right: Info Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-orange-100 relative overflow-hidden"
        >
             <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -z-0" />
             
             <div className="mb-8">
                <h4 className="text-orange-600 font-bold uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
                    <TrendingUpIcon /> Target Weekly Profit
                </h4>
                <div className="text-4xl font-bold text-slate-900">
                    ₹20k - ₹30k
                </div>
                <p className="text-slate-500 text-sm mt-1">Steady cash flow baseline for operations</p>
             </div>

             <div className="space-y-6">
                <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <div>
                        <h5 className="font-bold text-slate-900">Guaranteed Rotation</h5>
                        <p className="text-sm text-slate-600 mt-1">Fixed weekly slots for partners like Dixi & Prithvi ensure capacity is always utilized.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <div>
                        <h5 className="font-bold text-slate-900">Risk Mitigation</h5>
                        <p className="text-sm text-slate-600 mt-1">Consistent operational volume covers fixed overheads independently of market fluctuations.</p>
                    </div>
                </div>
             </div>
        </motion.div>
      </div>
    </Section>
  );
};

const TrendingUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
)