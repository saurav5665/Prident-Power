"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  ShieldCheck, 
  Zap, 
  IndianRupee, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  ClipboardList,
  Wrench,
  HelpCircle
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const HousingSubsidy = () => {
  const currentYear = new Date().getFullYear();

  const steps = [
    { id: "01", title: "Registration", desc: "Register on the PM Surya Ghar or UPNEDA portal with your electricity consumer number." },
    { id: "02", title: "Technical Feasibility", desc: "Wait for DISCOM approval. Prident handles the technical site survey for you." },
    { id: "03", title: "Installation", desc: "Our certified engineers install your plant using BIS-certified solar modules." },
    { id: "04", title: "Inspection & Subsidy", desc: "After net-metering and inspection, your subsidy is credited within 30 days." }
  ];

  const faq = [
    { q: "What is the maximum capacity for residential subsidy?", a: "Subsidies are available for systems up to 10 kW for residential consumers." },
    { q: "How long does it take for the subsidy to be credited?", a: "Once the commissioning report is generated, the subsidy is typically received within 30 days." },
    { q: "Is net-metering mandatory for the subsidy?", a: "Yes, systems must be grid-connected to avail both net-metering benefits and government subsidies." }
  ];

  return (
    <main className="w-full bg-white">
      {/* SECTION 1: HERO HEADER */}
      <section className="relative h-[60vh] md:h-[75vh] flex items-center bg-blue-950 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-12 gap-12 items-center h-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 py-12"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Zap className="w-4 h-4 fill-blue-600" />
              UP State & Central Schemes {currentYear}
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              RESIDENTIAL <br /> <span className="text-blue-500">SOLAR SUBSIDY.</span>
            </h1>
            <p className="text-blue-100/70 text-lg md:text-xl font-medium border-l-4 border-blue-500 pl-6 max-w-xl">
              Empowering Uttar Pradesh homeowners with up to ₹1,08,000 in combined subsidies through PM Surya Ghar Yojana.
            </p>
            <Link href={'/subsidy-help'}>
              <Button className="mt-10 bg-blue-600 hover:bg-blue-500 text-white px-10 py-8 rounded-2xl font-black text-lg shadow-xl shadow-blue-950/20">
                Check Your Eligibility
              </Button>
            </Link>
          </motion.div>
          <div className="lg:col-span-5 relative h-full hidden lg:block">
            <Image 
              src="/narendra-modi.png" 
              alt="Hon'ble Prime Minister" 
              fill 
              className="object-contain object-bottom" 
              priority
            />
          </div>
        </div>
        {/* Visual Decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]" />
      </section>

      {/* SECTION 2: SUBSIDY SLABS (MATRIX) */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">Financial Support Matrix</h2>
            <p className="text-slate-500 font-medium">Clear subsidy slabs for residential solar panel registration in Uttar Pradesh.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border-t-8 border-blue-500 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Slab 01: Up to 2 kW</p>
                <h3 className="text-4xl font-black text-slate-900 mb-2">₹30,000 / kW</h3>
                <p className="text-blue-600 font-black text-sm uppercase tracking-wider">+ ₹15,000 UP State Top-up</p>
              </div>
              <p className="text-slate-400 text-xs mt-8 font-medium italic">Highest support for small residential homes.</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border-t-8 border-blue-600 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Slab 02: 2 kW to 3 kW</p>
                <h3 className="text-4xl font-black text-slate-900 mb-2">₹18,000 / kW</h3>
                <p className="text-blue-600 font-black text-sm uppercase tracking-wider">Additional Capacity Support</p>
              </div>
              <p className="text-slate-400 text-xs mt-8 font-medium italic">Maximum reach for typical 3-bedroom houses.</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border-t-8 border-slate-900 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Slab 03: Above 3 kW</p>
                <h3 className="text-4xl font-black text-slate-900 mb-2">₹78,000</h3>
                <p className="text-slate-400 font-black text-sm uppercase tracking-wider">Total Central Subsidy Cap</p>
              </div>
              <p className="text-slate-400 text-xs mt-8 font-medium italic">Fixed maximum benefit for large-scale rooftops.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: NET METERING & SMART ENERGY */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight uppercase">
              Smart Energy: <span className="text-blue-600">Net-Metering.</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              Feed excess electricity back to the grid and earn credits. With net-metering in UP, your solar installation often pays for itself in just 4 to 6 years.
            </p>
            <div className="space-y-4">
              {[
                "Credits carry forward for up to 12 months", 
                "Bi-directional meter installed by local DISCOM", 
                "Available for valid Domestic electricity connections",
                "System capacity up to 10 kW for residential users"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-slate-50">
             <Image src="/modi.png" alt="Solar Benefits" fill className="object-cover" />
             <div className="absolute bottom-10 left-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
               <p className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-1">Expert Commissioning</p>
               <p className="text-slate-900 font-bold text-lg">150MW+ Installation Track Record</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: STEP-BY-STEP PROCESS */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight uppercase mb-6">How to Apply</h2>
            <p className="text-slate-500 font-medium">Simplified 4-step process for solar panel subsidy in Uttar Pradesh.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative p-10 bg-white rounded-[3rem] shadow-sm border border-slate-100 group hover:shadow-2xl transition-all h-full flex flex-col">
                <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 font-black text-2xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {step.id}
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed flex-grow">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQS & CONTACT */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-12">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {faq.map((item, i) => (
                <div key={i} className="border-b border-slate-100 pb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <HelpCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                    <h4 className="text-lg font-black text-slate-900 leading-snug">{item.q}</h4>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed ml-10 font-medium">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-blue-950 p-12 rounded-[4rem] text-white shadow-3xl relative overflow-hidden h-full flex flex-col justify-center">
              <h3 className="text-3xl font-black mb-6">Need Assistance?</h3>
              <p className="text-blue-100/60 mb-10 text-lg leading-relaxed">
                As a professionally managed company with 10+ years of sector experience, Prident Power Solutions simplifies the entire subsidy journey for you.
              </p>
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center"><Wrench className="w-5 h-5 text-blue-400" /></div>
                  <p className="text-sm font-bold">Free Site Survey & Feasibility Audit</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center"><ClipboardList className="w-5 h-5 text-blue-400" /></div>
                  <p className="text-sm font-bold">End-to-end Subsidy Documentation</p>
                </div>
              </div>
              <Link href={'/contact'}>
              <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white h-20 rounded-2xl font-black text-lg uppercase tracking-widest shadow-2xl transition-transform hover:scale-105 active:scale-95">
                Start My Application <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              </Link>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CALL-OUT */}
      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-6 lg:px-12 text-center text-white">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.4em]">
            Prident Power Solutions — Standardizing Global Excellence Since 2017
          </p>
        </div>
      </section>
    </main>
  )
}

export default HousingSubsidy