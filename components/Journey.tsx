import React from 'react';
import { Section } from './ui/Section';
import { Factory, Truck, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    year: '2023',
    title: 'Foundation',
    icon: <Factory className="w-8 h-8 text-white" />,
    description: 'Founded with 5 machines, establishing core operational standards and initial client base.',
  },
  {
    year: 'Expansion',
    title: 'Reinvestment',
    icon: <Truck className="w-8 h-8 text-white" />,
    description: 'Scaled to 9 machines. Reinvested 40-50% of export profits directly into infrastructure.',
  },
  {
    year: 'Present',
    title: 'Rapid Scale',
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    description: 'Launched new 20-machine facility. Operational capacity doubled to meet high-volume demand.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const Journey: React.FC = () => {
  return (
    <Section id="journey">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h3 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">The Growth Story</h3>
        <h2 className="text-4xl font-bold text-slate-900">About Our Journey</h2>
      </motion.div>

      <div className="relative">
        {/* Connection Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-12 left-0 w-full h-1 bg-slate-200 hidden md:block -z-10 origin-left" 
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center group">
              <div className="mb-4 bg-white p-2 rounded-full shadow-sm z-10">
                 <span className="font-bold text-slate-500 uppercase tracking-wide text-sm px-4 py-1 border rounded-full border-slate-200 inline-block bg-white mb-4">
                    {step.year}
                 </span>
                 <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-orange to-orange-400 flex items-center justify-center shadow-lg mx-auto"
                 >
                    {step.icon}
                 </motion.div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};