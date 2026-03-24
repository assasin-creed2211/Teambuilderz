import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Rocket, Building2, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Temporary Staffing',
    description: 'Agile workforce solutions for immediate scale and special projects.',
    icon: <Users className="w-6 h-6 text-primary" />,
    gradient: 'from-blue-500/10 to-transparent'
  },
  {
    title: 'Contract Staffing',
    description: 'Expert professionals delivered with flexibility and precision.',
    icon: <Briefcase className="w-6 h-6 text-accent" />,
    gradient: 'from-orange-500/10 to-transparent'
  },
  {
    title: 'Project Hiring',
    description: 'Specialized teams dedicated to delivering results on your timeline.',
    icon: <Rocket className="w-6 h-6 text-primary" />,
    gradient: 'from-indigo-500/10 to-transparent'
  },
  {
    title: 'Permanent Search',
    description: 'Finding the leadership and talent that shapes your future.',
    icon: <Building2 className="w-6 h-6 text-accent" />,
    gradient: 'from-rose-500/10 to-transparent'
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 font-display">
              Modern Hiring <br />
              <span className="text-primary">Done Right.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide tailored staffing solutions that adapt to your business pace, 
              ensuring every hire is a step towards greatness.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm font-bold text-primary bg-primary/5 px-6 py-3 rounded-2xl border border-primary/10">
            <CheckCircle2 className="w-5 h-5" />
            VETTED BY INDUSTRY EXPERTS
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-[2rem] border border-border bg-card/50 hover:bg-white hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
