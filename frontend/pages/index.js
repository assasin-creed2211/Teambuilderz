import React from 'react';
import Head from 'next/head';
import Navbar from '../components/home/Navbar';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Industries from '../components/home/Industries';
import CTA from '../components/home/CTA';
import Footer from '../components/home/Footer';

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

