import React from 'react';
import { Hero } from './components/Hero';
import { Journey } from './components/Journey';
import { Vision } from './components/Vision';
import { Portfolios } from './components/Portfolios';
import { JobWork } from './components/JobWork';
import { MerchantOrders } from './components/MerchantOrders';
import { Export } from './components/Export';
import { BrandStrategy } from './components/BrandStrategy';
import { Investment } from './components/Investment';

const App: React.FC = () => {
  return (
    <main className="w-full relative">
      <Hero />
      <Journey />
      <Vision />
      <Portfolios />
      <JobWork />
      <MerchantOrders />
      <Export />
      <BrandStrategy />
      <Investment />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-500 py-12 text-center border-t border-slate-800">
        <p className="mb-2 uppercase tracking-widest text-xs font-bold">Confidential Investor Deck</p>
        <p className="text-sm">© 2026 Ika Manufacturing & Retail. All Rights Reserved.</p>
      </footer>
    </main>
  );
};

export default App;