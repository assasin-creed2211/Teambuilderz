import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Briefcase, 
  Users, 
  Rocket, 
  Calculator, 
  Megaphone, 
  HeartPulse, 
  MonitorSmartphone,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Index() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    {
      title: 'Temporary Staffing',
      description: 'Business needs shift. Projects scale up. Employees go on leave. When workforce gaps arise, TeamBuilderz USA delivers fully vetted temporary professionals.',
      icon: <Users className="w-8 h-8 text-tbz-blue" />
    },
    {
      title: 'Contract Staffing',
      description: 'Today’s businesses need agility without compromising talent quality. We offer Contract Staffing solutions designed to give you expert professionals.',
      icon: <Briefcase className="w-8 h-8 text-tbz-orange" />
    },
    {
      title: 'Project-Based Hiring',
      description: 'Some projects demand more than internal bandwidth—they demand specialized professionals who can deliver results within defined timelines.',
      icon: <Rocket className="w-8 h-8 text-tbz-blue" />
    },
    {
      title: 'Permanent Staffing',
      description: 'Permanent hires shape the core of your company’s future. Whether building your leadership bench or expanding operational teams, we find the right fit.',
      icon: <Building2 className="w-8 h-8 text-tbz-orange" />
    }
  ];

  const industries = [
    { title: 'Accounting & Finance', icon: <Calculator className="w-10 h-10 mb-4" />, color: 'bg-blue-600' },
    { title: 'Digital Marketing', icon: <Megaphone className="w-10 h-10 mb-4" />, color: 'bg-purple-600' },
    { title: 'Health Care & Medical', icon: <HeartPulse className="w-10 h-10 mb-4" />, color: 'bg-emerald-600' },
    { title: 'Information Technology', icon: <MonitorSmartphone className="w-10 h-10 mb-4" />, color: 'bg-tbz-blue' }
  ];

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden selection:bg-tbz-blue selection:text-white">
      <Head>
        <title>TeamBuilderz LLC – Staffing Architects</title>
        <meta name="description" content="Unlock your dream job or find top-tier talent with TeamBuilderz expert recruitment services." />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-tbz-blue to-tbz-orange flex items-center justify-center text-white font-bold text-xl shadow-lg">
              T
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tbz-dark to-tbz-blue">
              TeamBuilderz
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="hidden sm:inline-flex text-tbz-dark hover:text-tbz-blue">
                Recruiter Login
              </Button>
            </Link>
            <Link href="/login">
              <Button className="bg-tbz-blue hover:bg-tbz-dark text-white shadow-brand-lg transition-all hover:-translate-y-0.5">
                Access Portal <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-orange-50/50" />
          <motion.div 
            animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 -right-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-tbz-blue text-sm font-semibold mb-6 tracking-wide">
                Staffing Architects
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
                Finding a job? <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-tbz-blue to-tbz-orange">
                  End the search today.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Unlock your dream job with our expert recruitment services connecting you with top employers. 
                We also help companies elevate their workforce with top-tier talent effortlessly.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/login">
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-tbz-blue hover:bg-tbz-dark text-white rounded-xl shadow-brand-lg transition-transform hover:-translate-y-1">
                    Get Started <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-tbz-orange font-semibold tracking-wide uppercase mb-2">Solutions We Provide</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Smart Hiring Solutions for Every Business Need</h2>
            <p className="text-slate-600 text-lg">Our expertise ensures you get the right talent, at the right time, to drive success and growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-ios hover:shadow-ios-lg transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-gray-300" />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Setion */}
      <section className="py-24 bg-slate-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-tbz-blue font-semibold tracking-wide uppercase mb-2">Service Areas</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Specialized Industries</h2>
            <p className="text-slate-600 text-lg">We specialize in recruiting top talent across diverse industries to drive innovation.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${ind.color} rounded-3xl p-8 text-white relative overflow-hidden group cursor-pointer`}
              >
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  {ind.icon}
                  <h3 className="text-xl font-bold mb-2">{ind.title}</h3>
                  <div className="flex items-center text-sm font-medium opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                    Explore Jobs <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Stats / CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-tbz-dark" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Elevate Your Hiring Process?</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Join hundreds of companies that trust TeamBuilderz for their staffing solutions and candidates finding their dream careers.
          </p>
          <Link href="/login">
            <Button size="lg" className="h-14 px-8 text-lg bg-tbz-orange hover:bg-orange-600 text-white rounded-xl shadow-lg transition-transform hover:scale-105">
              Access the Network
            </Button>
          </Link>
          
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-white/10">
            <div>
              <div className="text-4xl font-bold text-tbz-orange mb-2">259+</div>
              <div className="text-sm font-medium text-gray-400 tracking-wider">JOBS OFFERED</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-tbz-orange mb-2">17+</div>
              <div className="text-sm font-medium text-gray-400 tracking-wider">INDUSTRY COMPANIES</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-tbz-orange mb-2">126+</div>
              <div className="text-sm font-medium text-gray-400 tracking-wider">JOB OPENINGS</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-tbz-orange mb-2">98%</div>
              <div className="text-sm font-medium text-gray-400 tracking-wider">SUCCESS RATE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100 text-center sm:text-left">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-tbz-blue to-tbz-orange flex items-center justify-center text-white font-bold shadow-md">
              T
            </div>
            <span className="font-bold text-slate-900">TeamBuilderz LLC</span>
          </div>
          <div className="text-sm text-slate-500 flex flex-col sm:flex-row sm:items-center gap-4">
            <a href="mailto:connect@teambuilderz.us" className="hover:text-tbz-blue flex items-center gap-2 justify-center">
              <Megaphone className="w-4 h-4" /> connect@teambuilderz.us
            </a>
            <span className="hidden sm:inline-block">•</span>
            <span>&copy; {new Date().getFullYear()} TeamBuilderz. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
