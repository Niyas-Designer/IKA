import React from 'react';
import { Section } from './ui/Section';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Last Year', amount: 25, label: '₹25 L', fill: '#94a3b8' },
  { name: 'This Year', amount: 50, label: '₹50 L', fill: '#94a3b8' },
  { name: 'Next Year (Goal)', amount: 100, label: '₹1 Crore', fill: '#FF8C42' },
];

export const Vision: React.FC = () => {
  return (
    <Section id="vision" className="bg-slate-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">The Commitment</h3>
        <h2 className="text-4xl font-bold text-slate-900">Vision & Mission</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="pl-6 border-l-4 border-brand-orange space-y-6">
            <h3 className="text-3xl md:text-4xl font-light text-slate-800 leading-snug">
              To double our economic footprint annually while maintaining a
            </h3>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              "Zero Quality Compromise"
            </h3>
            <h3 className="text-3xl md:text-4xl font-light text-slate-800">
              standard.
            </h3>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 bg-orange-50 p-6 rounded-lg border border-orange-100 flex items-start gap-4"
          >
            <div className="bg-brand-orange p-2 rounded-full text-white shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
               </svg>
            </div>
            <div>
              <h4 className="font-bold text-brand-orange text-lg">Standard of Excellence</h4>
              <p className="text-slate-600">Consistency across all sectors.</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 relative"
        >
            <div className="mb-8 text-center">
                <h4 className="text-2xl font-bold text-slate-900">Financial Growth Trajectory</h4>
                <p className="text-base text-slate-500 mt-1">Annual Income Tax Contribution (Paid)</p>
            </div>

            {/* Floating Callout from screenshot */}
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
              className="absolute top-[28%] left-[18%] md:left-[22%] z-20 bg-white shadow-xl rounded-xl p-4 border border-slate-50"
            >
              <p className="text-sm font-medium text-slate-800">Last Year</p>
              <p className="text-sm text-slate-600">amount : 25</p>
            </motion.div>

            <div className="h-[400px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 40, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#e2e8f0" />
                        <XAxis 
                          dataKey="name" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{fill: '#64748b', fontSize: 13, fontWeight: 600}} 
                          dy={15} 
                        />
                        <YAxis hide domain={[0, 110]} />
                        <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }} />
                        <Bar 
                          dataKey="amount" 
                          radius={[10, 10, 0, 0]} 
                          isAnimationActive={true}
                          animationDuration={1500}
                          animationBegin={600}
                          barSize={120}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                            <LabelList 
                              dataKey="label" 
                              position="top" 
                              fill="#1e293b" 
                              fontWeight="800" 
                              fontSize={18} 
                              dy={-15} 
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="text-center text-sm text-slate-400 mt-6 font-medium"
            >
              *Projected goal based on current expansion rate
            </motion.p>
        </motion.div>
      </div>
    </Section>
  );
};