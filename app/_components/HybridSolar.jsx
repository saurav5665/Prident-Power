"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Zap, 
  BatteryCharging, 
  Sun, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  IndianRupee,
  Cpu,
  Activity,
  Award,
  Building2,
  RefreshCw
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const HybridSolar = () => {
  const benefits = [
    { 
      title: "Uninterrupted Power", 
      desc: "Automatically switches between solar, battery, and grid to ensure zero blackouts.", 
      icon: Zap 
    },
    { 
      title: "Smart Savings", 
      desc: "Prioritizes self-consumption of stored energy during peak grid tariff hours to lower bills.", 
      icon: IndianRupee 
    },
    { 
      title: "Grid Feedback", 
      desc: "Supports net-metering, allowing you to sell excess power back to the grid for credits.", 
      icon: RefreshCw 
    },
    { 
      title: "Full Backup", 
      desc: "Unlike on-grid systems, your house stays lit even during total grid failure.", 
      icon: BatteryCharging 
    }
  ];

  return (
    <main className="w-full bg-white">
      {/* SECTION 1: HERO SPOTLIGHT */}
      <section className="relative min-h-[75vh] py-4 flex items-center bg-blue-950 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <RefreshCw className="w-4 h-4 animate-spin-slow" /> Grid-Tied Efficiency
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              HYBRID <br /> <span className="text-blue-500">SOLAR SOLUTIONS.</span>
            </h1>
            <p className="text-blue-100/70 text-lg md:text-xl font-medium border-l-4 border-blue-500 pl-6 max-w-xl leading-relaxed">
            Experience the best of both worlds – the reliability of grid connectivity combined with the independence of battery backup.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href={'/contact'}>
              <Button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-8 rounded-2xl font-black text-lg shadow-xl shadow-blue-950/20 transition-transform hover:scale-105">
                Consult an Engineer
              </Button>
              </Link>
            </div>
          </motion.div>
          <div className="relative h-[550px] hidden lg:block">
            <Image 
              src="/img/civil.png" 
              alt="Prident Structural Engineering" 
              fill 
              className="object-contain opacity-80"
              priority
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* SECTION 2: THE HYBRID ADVANTAGE */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">Why Choose Hybrid?</h2>
            <p className="text-slate-500 font-medium">Standardized for homes requiring 24/7 reliability and grid integration.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, i) => (
              <div key={i} className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: TECHNICAL INTEGRATION */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight uppercase">
              Smart Flow <br /> <span className="text-blue-600">Technology.</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              Prident Hybrid Inverters act as the system's brain, intelligently managing power 
              between the panels, the grid, and your battery bank.
            </p>
            <div className="space-y-6">
               <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0"><Activity size={18} /></div>
                  <p className="text-slate-700 font-bold">Automatic Switchover: Under 10ms transfer time during grid failures.</p>
               </div>
               <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0"><ShieldCheck size={18} /></div>
                  <p className="text-slate-700 font-bold">Battery Life Management: Deep-discharge protection for battery banks.</p>
               </div>
            </div>
          </div>
          <div className="relative aspect-6/4 rounded-[4rem] overflow-hidden shadow-3xl border-8 border-slate-50">
             <Image src="/img/hybrid.jpeg" alt="Battery Integration" fill className="object-cover" />
             <div className="absolute inset-0 bg-blue-900/10 hover:bg-transparent transition-all" />
          </div>
        </div>
      </section>

      {/* SECTION 4: ROI & ROI INSIGHTS */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tight">The Hybrid ROI Outlook</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
               <h3 className="text-5xl font-black text-blue-400 mb-2">4-6 Yrs</h3>
               <p className="text-xs font-bold uppercase tracking-widest text-blue-100/50">Payback Period</p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
               <h3 className="text-5xl font-black text-blue-400 mb-2">10-12 Yrs</h3>
               <p className="text-xs font-bold uppercase tracking-widest text-blue-100/50">Inverter Life</p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
               <h3 className="text-5xl font-black text-blue-400 mb-2">₹1.17L+</h3>
               <p className="text-xs font-black uppercase tracking-widest text-blue-100/50">Potential Subsidy</p>
            </div>
          </div>
          <p className="mt-12 text-blue-100/60 max-w-2xl mx-auto text-sm italic font-medium">
            *Payback depends on local grid tariffs and battery type.
          </p>
        </div>
      </section>

      {/* SECTION 5: TRUSTED EPC PARTNER */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-6">
             <div className="h-20 w-20 bg-blue-50 rounded-[2rem] flex items-center justify-center text-blue-600"><Award size={40} /></div>
             <div>
                <p className="text-3xl font-black text-slate-900 tracking-tight leading-none mb-1">CERTIFIED EPC</p>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Nationwide Service Network</p>
             </div>
          </div>
          <Link href={'/contact'}>
          <Button className="bg-blue-950 text-white px-12 py-8 rounded-2xl font-black text-lg uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
            Get A Hybrid Audit
          </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default HybridSolar;