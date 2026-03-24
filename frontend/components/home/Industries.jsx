import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Megaphone, HeartPulse, MonitorSmartphone, ArrowRight } from 'lucide-react';

const industries = [
  { 
    title: 'Accounting & Finance', 
    icon: <Calculator className="w-8 h-8 text-blue-500" />, 
    color: 'bg-blue-500/10' 
  },
  { 
    title: 'Digital Marketing', 
    icon: <Megaphone className="w-8 h-8 text-purple-500" />, 
    color: 'bg-purple-500/10' 
  },
  { 
    title: 'Healthcare & Medical', 
    icon: <HeartPulse className="w-8 h-8 text-emerald-500" />, 
    color: 'bg-emerald-500/10' 
  },
  { 
    title: 'Information Technology', 
    icon: <MonitorSmartphone className="w-8 h-8 text-primary" />, 
    color: 'bg-primary/10' 
  }
];

const Industries = () => {
  return (
    <section className="py-24 bg-slate-50 relative border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 font-display">
            Specialized <span className="text-accent underline decoration-accent/30 underline-offset-8">expertise</span>.
          </h2>
          <p className="text-lg text-muted-foreground">
            We understand the unique demands of each industry, ensuring we find candidates 
            who don’t just have the skills, but the right mindset.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="group p-10 rounded-[2.5rem] bg-white border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden relative"
            >
              <div className={`absolute top-0 left-0 w-2 h-full ${ind.color.replace('/10', '')} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${ind.color} flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform`}>
                  {ind.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 font-display">
                  {ind.title}
                </h3>
                <div className="flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Explore Jobs <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
