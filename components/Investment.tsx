import React from 'react';
import { Section } from './ui/Section';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot, LabelList } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { year: 'Last Year', value: 25 },
  { year: 'This Year', value: 50 },
  { year: 'Next Year (Goal)', value: 100 },
];

const CustomDot = (props: any) => {
    const { cx, cy, stroke, payload, value } = props;
    if (payload.year === 'Next Year (Goal)') {
      return (
        <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="white" stroke="#FF8C42" strokeWidth="3">
          <circle cx="10" cy="10" r="8" />
        </svg>
      );
    }
    return (
      <circle cx={cx} cy={cy} r={6} stroke={stroke} strokeWidth={2} fill="white" />
    );
  };

export const Investment: React.FC = () => {
  return (
    <Section id="invest" dark className="bg-slate-900 text-white">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h3 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">The Vision</h3>
        <h2 className="text-4xl font-bold text-white">Why Invest?</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-800 p-6 rounded-lg border-l-4 border-slate-500"
            >
                <h4 className="flex items-center gap-2 font-bold text-xl mb-2 text-slate-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Proven Scaling
                </h4>
                <p className="text-slate-400">
                    We have demonstrated consistent growth, doubling our tax contribution from ₹25 Lakhs to ₹50 Lakhs through disciplined reinvestment.
                </p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-brand-orange to-orange-600 p-8 rounded-xl shadow-2xl"
            >
                <h3 className="text-2xl font-bold text-white mb-4">The Catalyst</h3>
                <p className="text-white/90 leading-relaxed">
                    Your investment is the fuel. It will directly catalyze the infrastructure and capacity expansion needed to jump to a <br/>
                    <span className="font-bold text-white text-xl">₹1 Crore tax contribution next year.</span>
                </p>
            </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-xl p-8 text-slate-900 shadow-xl"
        >
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h4 className="font-bold text-xl">Tax Contribution Trajectory</h4>
                    <p className="text-sm text-slate-500">Income Tax Paid (in Lakhs)</p>
                </div>
                <div className="text-right">
                    <span className="block text-3xl font-bold text-brand-orange">2x</span>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Yearly Growth</span>
                </div>
            </div>

            <motion.div 
                className="h-[300px] w-full"
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            >
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 50, right: 30, left: 20, bottom: 10 }}>
                        <defs>
                            <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FF8C42" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#FF8C42" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="year" tick={{fontSize: 12, fontWeight: 600}} axisLine={false} tickLine={false} dy={10} />
                        <YAxis hide />
                        <Tooltip contentStyle={{borderRadius: '8px', border:'none', boxShadow:'0 4px 6px -1px rgba(0,0,0,0.1)'}} />
                        <Area 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#FF8C42" 
                            strokeWidth={4} 
                            fillOpacity={1} 
                            fill="url(#colorVal)" 
                            dot={<CustomDot />}
                            isAnimationActive={false}
                        >
                            <LabelList dataKey="value" position="top" formatter={(val: number) => `₹${val} L`} fill="#1e293b" fontWeight="bold" dy={-10} />
                        </Area>
                    </AreaChart>
                </ResponsiveContainer>
            </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};