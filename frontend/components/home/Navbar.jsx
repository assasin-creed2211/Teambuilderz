import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-black text-2xl shadow-lg transition-transform group-hover:rotate-6">
            T
          </div>
          <span className={`text-2xl font-black tracking-tight transition-colors duration-500 ${scrolled ? 'text-foreground' : 'text-foreground'}`}>
            Team<span className="text-primary">Builderz</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/login" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase">
            Recruiter Login
          </Link>
          <Link href="/login" passHref>
            <Button className="h-12 px-8 rounded-xl bg-primary hover:bg-primary-hover shadow-brand transition-all hover:-translate-y-0.5 font-bold">
              Access Portal <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <button className="md:hidden text-foreground p-2" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-white p-8 flex flex-col items-center justify-center"
          >
            <button className="absolute top-8 right-8 p-2" onClick={() => setMobileMenuOpen(false)}>
              <X className="w-8 h-8" />
            </button>
            <Link href="/login" className="text-2xl font-black mb-8" onClick={() => setMobileMenuOpen(false)}>
              Recruiter Login
            </Link>
            <Link href="/login" passHref onClick={() => setMobileMenuOpen(false)}>
              <Button size="lg" className="w-full h-16 rounded-2xl text-lg font-bold">
                Access Portal
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
