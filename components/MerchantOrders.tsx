import React, { useEffect, useRef } from 'react';
import { Section } from './ui/Section';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { Scissors, CheckCircle } from 'lucide-react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const data = [
  { name: 'Stitching Only', profit: 8 },
  { name: 'Cut-to-Pack (Integrated)', profit: 11 },
];

const AnimatedCounter = ({ from, to }: { from: number; to: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 2, ease: "circOut" });
    }
  }, [inView, from, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export const MerchantOrders: React.FC = () => {
  return (
    <Section id="merchant-orders" className="bg-slate-50">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">Sector 2: Scale</h3>
        <h2 className="text-4xl font-bold text-slate-900">Merchant Orders</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ staggerChildren: 0.2 }}
        >
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-8"
            >
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Weekly Volume</p>
                <div className="text-5xl font-bold text-slate-900 mb-4">
                    <AnimatedCounter from={0} to={6000} />+ <span className="text-xl text-slate-500 font-normal">pieces</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    <Scissors className="w-4 h-4" /> Specialized Cut-to-Pack
                </div>
            </motion.div>

            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-slate-700 leading-relaxed mb-8"
            >
                We leverage operational efficiency to maximize margins on high-volume merchant orders. Our integrated approach moves beyond basic stitching to comprehensive fulfillment.
            </motion.p>

            <ul className="space-y-3">
                {[
                    'End-to-end processing control',
                    'Reduced rejection rates (<1%)',
                    'Preferred vendor for Zudio & Snitch'
                ].map((item, i) => (
                    <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                        className="flex items-center gap-3"
                    >
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-800 font-medium">{item}</span>
                    </motion.li>
                ))}
            </ul>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
        >
             <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-slate-900">Profit Margin Analysis (Per Piece)</h4>
                <div className="flex gap-4 text-xs">
                    <span className="flex items-center gap-1"><div className="w-3 h-3 bg-slate-300 rounded-sm"></div> Standard</span>
                    <span className="flex items-center gap-1"><div className="w-3 h-3 bg-brand-orange rounded-sm"></div> Integrated</span>
                </div>
             </div>
             
             <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                        <XAxis dataKey="name" tick={{fontSize: 12, fontWeight: 600}} axisLine={false} tickLine={false} dy={10} />
                        <YAxis hide />
                        <Tooltip cursor={{fill: 'transparent'}} />
                        <Bar dataKey="profit" radius={[6, 6, 0, 0]} barSize={80}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index === 1 ? '#FF8C42' : '#cbd5e1'} />
                            ))}
                            <LabelList dataKey="profit" position="top" formatter={(val: number) => `₹${val}`} fill="#1e293b" fontWeight="bold" fontSize={18} dy={-5} />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
             </div>
             <p className="text-center text-xs text-slate-500 mt-6 italic">
                "Cut-to-Pack integration yields 37.5% higher margins compared to stitching-only services."
             </p>
        </motion.div>
      </div>
    </Section>
  );
};