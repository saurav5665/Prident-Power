"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  Facebook, 
  Youtube, 
  ArrowUpRight,
  Send,
  ShieldCheck,
  Zap,
  Globe,
  MessageCircle,
  Instagram,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const galleryImages = [
    '/img/img2.jpg', '/img/img5.jpg', '/img/img10.jpg',
    '/img/img11.jpg', '/img/img15.jpg', '/img/img18.jpg'
  ];

  return (
    <footer className="bg-blue-950 text-blue-50/70 pt-16 md:pt-24 pb-8 md:pb-12 relative overflow-hidden">
      
      {/* 1. Mobile-Only Floating WhatsApp Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <Link 
          href="https://wa.me/919540263662" 
          target="_blank"
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce"
        >
          <MessageCircle className="w-6 h-6" />
        </Link>
      </div>

      {/* Premium Visual Backdrop - Hidden on Mobile */}
      <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Section: Brand Identity & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 mb-12 md:mb-20 border-b border-blue-900/30 pb-12 md:pb-20">
          
          <div className="lg:col-span-5 space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <h2 className="text-white text-3xl md:text-4xl font-black tracking-tighter uppercase">
                PRIDENT <span className="text-blue-500">POWER SOLUTIONS</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
                A professionally managed solar energy company delivering high-quality, reliable, and cost-effective solar power solutions across India.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
               <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-blue-400">
                  <ShieldCheck className="w-3.5 h-3.5" /> 150MW+ Installed
               </div>
               <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-blue-400">
                  <Zap className="w-3.5 h-3.5" /> Engineering Excellence
               </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 text-center md:text-left">
              <h5 className="text-white text-sm font-black uppercase tracking-[0.2em] md:border-l-2 md:border-blue-500 md:pl-4">Contact Gateway</h5>
              <div className="space-y-4 flex flex-col items-center md:items-start">
                <a href="tel:+919540263662" className="group flex items-center gap-4 hover:text-white transition-all">
                  <div className="h-10 w-10 rounded-xl bg-blue-900 flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-sm">
                    <Phone className="w-4 h-4 text-blue-400 group-hover:text-white" />
                  </div>
                  <span className="font-bold">+91 9540263662</span>
                </a>
                <a href="mailto:gaurav.sharma@pridentpowersolutions.com" className="group flex items-center gap-4 hover:text-white transition-all">
                  <div className="h-10 w-10 rounded-xl bg-blue-900 flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-sm">
                    <Mail className="w-4 h-4 text-blue-400 group-hover:text-white" />
                  </div>
                  <span className="font-bold truncate max-w-[250px] md:max-w-none">gaurav.sharma@pridentpowersolutions.com</span>
                </a>
                <div className="group flex items-start gap-4 transition-all">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-blue-900 flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-sm">
                  <MapPin className="w-4 h-4 text-blue-400 group-hover:text-white" />
                </div>

                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase text-blue-500 tracking-widest mb-1">
                    Reg. Office
                  </span>
                  <address className="not-italic font-bold text-blue-50/90 leading-relaxed text-xs md:text-sm group-hover:text-white transition-colors">
                    Ground Floor, M – 171, Jaitpur Pusta Road, <br />
                    Hari Nagar Extension, South East Delhi, 110044
                  </address>
                </div>
              </div>
              </div>
            </div>
            
            <div className="space-y-6 text-center md:text-left">
              <h5 className="text-white text-sm font-black uppercase tracking-[0.2em] md:border-l-2 md:border-blue-500 md:pl-4">Digital Presence</h5>
              <div className="flex justify-center md:justify-start gap-4">
                <Link href="#" target="_blank" 
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white border border-white/10 transition-all hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" target="_blank" 
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white border border-white/10 transition-all hover:scale-110">
                  <Youtube className="w-5 h-5" />
                </Link>
                
                <Link 
                  href="#" 
                  target="_blank" 
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white border border-white/10 transition-all hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Sitemap & Recent Works */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 md:mb-20">
          
          <div className="lg:col-span-3 space-y-8 text-center md:text-left">
            <h5 className="text-white text-xs font-black uppercase tracking-[0.2em]">Our Focus</h5>
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Core Mission</p>
                <p className="text-xs font-medium leading-relaxed">Delivering end-to-end solar solutions with engineering excellence.</p>
              </div>
              <div className="space-y-3">
                <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Consulting</p>
                <p className="text-xs font-medium leading-relaxed">Strategic business development and PPA facilitation.</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block lg:col-span-3 space-y-8">
            <h5 className="text-white text-xs font-black uppercase tracking-[0.2em]">Sitemap</h5>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-y-4">
              {['Home', 'About Us', 'Our Services', 'Projects', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-xs font-bold hover:text-blue-400 transition-colors uppercase tracking-wider flex items-center gap-2 group"
                  >
                    <ArrowUpRight className="w-3 h-3 text-blue-950 group-hover:text-blue-500 transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block lg:col-span-3 space-y-8">
            <h5 className="text-white text-xs font-black uppercase tracking-[0.2em]">Recent Works</h5>
            <div className="grid grid-cols-3 gap-4"> 
              {galleryImages.map((src, index) => (
                <div 
                  key={index} 
                  className="aspect-4/3 relative rounded-xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl transition-all duration-300 hover:border-blue-500/50"
                >
                  <Image 
                    src={src} 
                    alt={`Solar Project ${index + 1}`} 
                    fill 
                    quality={95} 
                    sizes="(max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-all" />
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block lg:col-span-3 space-y-8">
            <h5 className="text-white text-xs font-black uppercase tracking-[0.2em]">Join Revolution</h5>
            <div className="p-8 rounded-[2rem] bg-blue-900/30 border border-blue-800/50 space-y-6">
              <p className="text-xs font-medium leading-relaxed italic text-blue-100/50">
                "Let the Sun Save for You."
              </p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter email" 
                  className="w-full bg-blue-950/50 border border-blue-800/50 rounded-xl py-4 pl-5 text-[10px] uppercase font-bold tracking-widest text-white focus:outline-none focus:border-blue-500"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-all text-white shadow-lg">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-900/30 pt-10 mt-12 text-center flex justify-center items-center text-[10px] md:text-xs font-black text-blue-500/40 uppercase tracking-[0.2em]">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <p className="whitespace-nowrap">
              &copy; {currentYear} PRIDENT POWER SOLUTIONS, ALL RIGHTS RESERVED
            </p>
            <span className="hidden sm:inline opacity-30">|</span>
            <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors whitespace-nowrap">
              Privacy Policy
              <span className="hidden sm:inline opacity-30"> | </span>
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;