import React from 'react';
import { Section } from './ui/Section';
import { Award, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Export: React.FC = () => {
  return (
    <Section id="export" className="bg-white">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center md:text-left"
        >
            <h3 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">The Profit Engine</h3>
            <h2 className="text-4xl font-bold text-slate-900">Export Category</h2>
        </motion.div>

        <div className="relative w-full max-w-5xl mx-auto min-h-[500px] flex flex-col md:flex-row items-center justify-between">
            {/* Background Map Placeholder */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                 <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900 fill-current">
                    <circle cx="50" cy="50" r="40" />
                 </svg>
            </motion.div>

            {/* Left Card */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="z-10 bg-white p-6 rounded-xl shadow-lg border-l-4 border-slate-800 w-full md:w-80 mb-8 md:mb-0"
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-slate-100 p-2 rounded-lg">
                        <Award className="w-6 h-6 text-slate-800" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">Official Registration</h4>
                        <p className="text-xs text-slate-500">Textiles Committee</p>
                    </div>
                </div>
                <div className="bg-slate-50 p-2 rounded border border-slate-200 text-center">
                    <p className="text-xs font-mono text-slate-600">RC No: #TC-2023-REG</p>
                </div>
            </motion.div>

            {/* Connecting Line (Dotted) */}
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="hidden md:block absolute top-1/2 left-0 border-t-2 border-dashed border-slate-200 -z-0" 
            />
            
            {/* Center Check */}
            <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
                className="z-10 bg-white p-4 rounded-full shadow-xl border-4 border-green-50 mb-8 md:mb-0"
            >
                <ShieldCheck className="w-12 h-12 text-green-500" />
            </motion.div>

            {/* Right Card */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="z-10 bg-white p-6 rounded-xl shadow-lg border-r-4 border-green-500 w-full md:w-80"
            >
                <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-slate-900">Margin Analysis</h4>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-5xl font-bold text-green-600 mb-2">40-50%</div>
                <p className="text-sm text-slate-500 mb-4">Net Profitability on Export Orders</p>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">High Yield</span>
            </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center"
        >
            {['High-Ticket Orders', 'Quality Assured', 'Lower Risk Operations'].map((txt, i) => (
                <div key={i} className="flex items-center justify-center gap-2 text-slate-600 font-medium bg-slate-50 py-3 rounded-lg">
                    <div className="w-2 h-2 bg-slate-400 rounded-full" /> {txt}
                </div>
            ))}
        </motion.div>
    </Section>
  );
};