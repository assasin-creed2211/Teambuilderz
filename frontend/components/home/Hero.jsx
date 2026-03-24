import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full filter blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-widest">
                Staffing Architects
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tight mb-8 leading-[1.1]">
              Finding a job? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                End the search.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Unlock your dream career with TeamBuilderz expert recruitment services. 
              We connect top-tier talent with industry leaders effortlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/login" passHref>
                <Button size="lg" className="h-16 px-10 text-lg font-bold rounded-2xl shadow-brand-lg transition-all hover:scale-105 active:scale-95 group">
                  Get Started 
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/login" passHref>
                <Button variant="outline" size="lg" className="h-16 px-10 text-lg font-bold rounded-2xl border-2 hover:bg-muted/50 transition-all">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Image/Graphic Placeholder or Micro-animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-20 max-w-5xl mx-auto px-4"
      >
        <div className="relative rounded-[2.5rem] border-8 border-white shadow-2xl overflow-hidden aspect-[16/9] bg-slate-100 brand-shadow">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20" />
          <div className="flex items-center justify-center h-full text-slate-400 font-display italic text-2xl">
            Empowering the Global Workforce
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
