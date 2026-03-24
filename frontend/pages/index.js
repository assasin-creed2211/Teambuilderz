import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Menu, 
  X, 
  Users, 
  Briefcase, 
  Rocket, 
  Building2, 
  CheckCircle2, 
  Calculator, 
  Megaphone, 
  HeartPulse, 
  MonitorSmartphone,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Twitter
} from 'lucide-react';

// --- Components ---

const Button = React.forwardRef(({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-brand",
    outline: "border-2 border-input bg-background hover:bg-muted/50",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };

  const sizes = {
    md: "h-12 px-6 rounded-xl",
    lg: "h-16 px-10 text-lg rounded-2xl",
    sm: "h-10 px-4 rounded-lg",
  };

  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = 'Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl py-4 shadow-sm border-b' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-black text-2xl shadow-lg transition-transform group-hover:rotate-6">
            T
          </div>
          <span className={`text-2xl font-black tracking-tight transition-colors duration-500 ${isScrolled ? 'text-tbz-dark' : 'text-foreground'}`}>
            Team<span className="text-primary">Builderz</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/login" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase">
            Recruiter Login
          </Link>
          <Link href="/login">
            <Button size="md" className="shadow-brand transition-all hover:-translate-y-0.5">
              Access Portal <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <Link href="/login" className="block text-lg font-bold text-tbz-dark">Recruiter Login</Link>
              <Link href="/login" className="block">
                <Button className="w-full">Access Portal</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full filter blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Staffing Architects</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tight mb-8 leading-[1.1]">
            Finding a job? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">End the search.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Unlock your dream career with TeamBuilderz expert recruitment services. We connect top-tier talent with industry leaders effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/login">
              <Button size="lg" className="hover:scale-105 group">
                Get Started <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg" className="hover:bg-muted/50 transition-all">Partner With Us</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>

    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 1 }} className="mt-20 max-w-5xl mx-auto px-4">
      <div className="relative rounded-[2.5rem] border-8 border-white shadow-2xl overflow-hidden aspect-[16/9] bg-slate-100 brand-shadow">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20" />
        <div className="flex items-center justify-center h-full text-slate-400 font-display italic text-2xl">Empowering the Global Workforce</div>
      </div>
    </motion.div>
  </section>
);

const Services = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 font-display">Modern Hiring <br /><span className="text-primary">Done Right.</span></h2>
          <p className="text-lg text-muted-foreground leading-relaxed">We provide tailored staffing solutions that adapt to your business pace, ensuring every hire is a step towards greatness.</p>
        </div>
        <div className="flex items-center gap-4 text-sm font-bold text-primary bg-primary/5 px-6 py-3 rounded-2xl border border-primary/10">
          <CheckCircle2 className="w-5 h-5" /> VETTED BY INDUSTRY EXPERTS
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Temporary Staffing', icon: <Users className="w-6 h-6 text-primary" />, desc: 'Agile workforce solutions for immediate scale.', glow: 'from-blue-500/10' },
          { title: 'Contract Staffing', icon: <Briefcase className="w-6 h-6 text-accent" />, desc: 'Expert professionals delivered with flexibility.', glow: 'from-orange-500/10' },
          { title: 'Project Hiring', icon: <Rocket className="w-6 h-6 text-primary" />, desc: 'Specialized teams dedicated to your timeline.', glow: 'from-indigo-500/10' },
          { title: 'Permanent Search', icon: <Building2 className="w-6 h-6 text-accent" />, desc: 'Finding the talent that shapes your future.', glow: 'from-rose-500/10' }
        ].map((s, idx) => (
          <div key={idx} className="group p-8 rounded-[2rem] border border-border bg-card/50 hover:bg-white hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${s.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">{s.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Industries = () => (
  <section className="py-24 bg-slate-50 relative border-y border-border">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 font-display">Specialized <span className="text-accent underline decoration-accent/30 underline-offset-8">expertise</span>.</h2>
        <p className="text-lg text-muted-foreground">We understand the unique demands of each industry, ensuring we find candidates with the right mindset.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Accounting & Finance', icon: <Calculator className="w-8 h-8 text-blue-500" />, color: 'bg-blue-500' },
          { title: 'Digital Marketing', icon: <Megaphone className="w-8 h-8 text-purple-500" />, color: 'bg-purple-500' },
          { title: 'Healthcare & Medical', icon: <HeartPulse className="w-8 h-8 text-emerald-500" />, color: 'bg-emerald-500' },
          { title: 'Information Technology', icon: <MonitorSmartphone className="w-8 h-8 text-primary" />, color: 'bg-primary' }
        ].map((ind, idx) => (
          <div key={idx} className="group p-10 rounded-[2.5rem] bg-white border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden relative">
            <div className={`absolute top-0 left-0 w-2 h-full ${ind.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
            <div className="relative z-10">
              <div className={`w-16 h-16 rounded-2xl ${ind.color}/10 flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform`}>{ind.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-4 font-display">{ind.title}</h3>
              <div className="flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">Explore Jobs <ArrowRight className="w-4 h-4 ml-2" /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-tbz-dark" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight font-display">Ready to <span className="text-accent">Elevate</span> Your Hiring?</h2>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">Join industry leaders who trust TeamBuilderz to find the best talent and build dream careers.</p>
        <div className="flex justify-center">
          <Link href="/login">
            <Button size="lg" className="bg-accent hover:bg-accent-hover text-white transition-all hover:scale-105 active:scale-95">Access the Network Now</Button>
          </Link>
        </div>
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-white/10">
          {[
            { val: '259+', label: 'Jobs Offered' },
            { val: '17+', label: 'Industries' },
            { val: '126+', label: 'Open Positions' },
            { val: '98%', label: 'Success Rate' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-black text-accent mb-2">{stat.val}</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-50 pt-24 pb-12 overflow-hidden relative">
    <div className="container mx-auto px-4 divide-y divide-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-black">T</div>
            <span className="text-xl font-black">TeamBuilderz LLC</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-medium">We build high-performance teams. Scaling with speed and precision.</p>
          <div className="flex items-center gap-3">
            {[Linkedin, Facebook, Twitter].map((Icon, i) => (
              <button key={i} className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-widest mb-6">Explore</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-500">
            {['Our Process', 'Career Opportunities', 'Service Terms', 'Privacy Policy'].map((l, i) => (
              <li key={i}><Link href="/" className="hover:text-primary transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-widest mb-6">Industries</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-500">
            {['Finance & Fintech', 'Digital Marketing', 'Healthcare', 'Deep Tech'].map((l, i) => (
              <li key={i}><Link href="/" className="hover:text-primary transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-widest mb-6">Contact</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-500">
            <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary" /> connect@teambuilderz.us</li>
            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary" /> +1 (XXX) XXX-XXXX</li>
            <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-primary" /> Houston, TX</li>
          </ul>
        </div>
      </div>
      <div className="pt-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">© 2026 TeamBuilderz LLC. Built for Excellence.</p>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[10px] font-black uppercase tracking-tighter text-slate-500 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Backend Services Operational
        </div>
      </div>
    </div>
  </footer>
);

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden selection:bg-primary selection:text-white">
      <Head>
        <title>TeamBuilderz LLC – Staffing Architects</title>
        <meta name="description" content="Unlock your dream job or find top-tier talent with TeamBuilderz expert recruitment services." />
        <meta name="keywords" content="staffing, recruitment, jobs, talent acquisition, teambuilderz" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Industries />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
