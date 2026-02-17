import React from 'react';
import { Section } from './ui/Section';
import { Briefcase, ShoppingBag, Globe, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const portfolios = [
  {
    title: 'Permanent Job Work',
    tag: 'Stability',
    icon: <Briefcase className="w-6 h-6 text-blue-500" />,
    companies: ['DIXI', 'PRITHVI'],
    description: 'Guaranteed weekly rotation ensuring steady cash flow. Partners provide long-term consistency.',
    color: 'border-l-blue-500',
    iconBg: 'bg-blue-50'
  },
  {
    title: 'Merchant Orders',
    tag: 'Scale',
    icon: <ShoppingBag className="w-6 h-6 text-red-500" />,
    companies: ['ZUDIO', 'SNITCH'],
    description: 'High-volume execution for fast-fashion leaders. Processing 6,000+ pieces/week with specialized cut-to-pack services.',
    color: 'border-l-red-500',
    iconBg: 'bg-red-50'
  },
  {
    title: 'Export Category',
    tag: 'Profit',
    icon: <Globe className="w-6 h-6 text-orange-500" />,
    companies: ['Textiles Committee Registered'],
    description: 'Targeting 40-50% profitability. High-ticket international orders with rigorous quality standards.',
    color: 'border-l-orange-500',
    iconBg: 'bg-orange-50'
  },
  {
    title: 'Ika Brand',
    tag: 'Equity',
    icon: <Star className="w-6 h-6 text-slate-800" />,
    companies: ['IKA'],
    description: 'Direct-to-Consumer "Lounge-Street" apparel. Building long-term brand value and emotional connection.',
    color: 'border-l-slate-800',
    iconBg: 'bg-slate-100'
  }
];

export const Portfolios: React.FC = () => {
  return (
    <Section id="portfolios" className="bg-slate-50">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">Diversification Strategy</h3>
        <h2 className="text-4xl font-bold text-slate-900">Strategic Client Portfolios</h2>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {portfolios.map((item, idx) => (
          <motion.div 
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            className={`bg-white rounded-xl p-8 shadow-md transition-all duration-300 border border-slate-100 relative overflow-hidden group`}
          >
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${item.color.replace('border-l-', 'bg-')}`} />
            
            <div className="flex justify-between items-start mb-6">
               <div className="flex items-center gap-4">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 rounded-lg ${item.iconBg}`}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
               </div>
               <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded">
                 {item.tag}
               </span>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
                {item.companies.map((co, cIdx) => (
                    <span key={cIdx} className={`px-3 py-1 text-sm font-bold border-2 rounded ${
                        item.companies[0] === 'IKA' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-200'
                    }`}>
                        {co}
                    </span>
                ))}
            </div>

            <p className="text-slate-600 leading-relaxed text-sm">
                {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, type: "spring" }}
        className="mt-12 text-center"
      >
        <span className="inline-block px-4 py-2 rounded-full bg-orange-500 text-white font-semibold text-sm shadow-lg">
            Risk-Balanced Model
        </span>
      </motion.div>
    </Section>
  );
};