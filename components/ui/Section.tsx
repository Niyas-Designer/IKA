import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`min-h-screen w-full py-20 px-6 md:px-12 lg:px-24 flex flex-col justify-center relative overflow-hidden ${dark ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-7xl mx-auto h-full"
      >
        {children}
      </motion.div>
    </section>
  );
};