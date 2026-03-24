import React from 'react';
import { Megaphone, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-4 divide-y divide-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-black">
                T
              </div>
              <span className="text-xl font-black">TeamBuilderz LLC</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-medium">
              We build high-performance teams. Our staffing solutions help organizations scale with speed and precision.
            </p>
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
              <li><Link href="/" className="hover:text-primary transition-colors">Our Process</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Career Opportunities</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Service Terms</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-6">Industries</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><Link href="/" className="hover:text-primary transition-colors">Finance & Fintech</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Healthcare & Wellness</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Deep Technology</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" /> connect@teambuilderz.us
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" /> +1 (XXX) XXX-XXXX
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" /> Houston, TX
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} TeamBuilderz LLC. Built for Excellence.
          </p>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[10px] font-black uppercase tracking-tighter text-slate-500 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Backend Services Operational
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
