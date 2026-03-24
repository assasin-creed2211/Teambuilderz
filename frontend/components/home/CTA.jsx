import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-tbz-dark" />
      
      {/* Abstract Design Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full text-white">
          <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="20" strokeDasharray="40 20" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight font-display">
              Ready to <span className="text-accent">Elevate</span> Your Hiring Process?
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of industry leaders who trust TeamBuilderz to find 
              the best talent and candidates building their dream careers.
            </p>
            
            <div className="flex justify-center">
              <Link href="/login" passHref>
                <Button size="lg" className="h-16 px-12 text-lg font-bold bg-accent hover:bg-accent-hover text-white rounded-2xl shadow-ios-lg transition-all hover:scale-105 active:scale-95">
                  Access the Network Now
                </Button>
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-white/10">
              <div className="text-center">
                <div className="text-4xl font-black text-accent mb-2">259+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Jobs Offered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-accent mb-2">17+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-accent mb-2">126+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Open Positions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-accent mb-2">98%</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
