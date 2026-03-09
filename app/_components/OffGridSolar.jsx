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
  Layout,
  RefreshCw,
  Activity,
  Award,
  Building2
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const OffGridSolar = () => {
  const priceData = [
    { cap: "1 kW", price: "₹85,000 - ₹1,00,000" },
    { cap: "2 kW", price: "₹1,70,000 - ₹2,00,000" },
    { cap: "3 kW", price: "₹2,55,000 - ₹3,00,000" },
    { cap: "5 kW", price: "₹4,25,000 - ₹5,00,000" },
  ];

  const components = [
    { title: "Solar Panels", desc: "Monocrystalline or Bifacial modules trap sunlight and convert it to DC electricity.", icon: Sun },
    { title: "Battery Bank", icon: BatteryCharging, desc: "Stores extra units generated during the day to power your house at night." },
    { title: "Charge Controller", icon: Cpu, desc: "MPPT technology regulates charge to protect batteries from overcharging." },
    { title: "Off-Grid Inverter", icon: Zap, desc: "The heart of the system; converts stored DC power into usable AC for appliances." }
  ];

  return (
    <main className="w-full bg-white">
      {/* SECTION 1: HERO SPOTLIGHT */}
      <section className="relative min-h-[70vh] flex items-center bg-blue-950 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="w-4 h-4" /> Standalone Energy Independence
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              OFF-GRID <br /> <span className="text-blue-500">SOLAR POWER.</span>
            </h1>
            <p className="text-blue-100/70 text-lg md:text-xl font-medium border-l-4 border-blue-500 pl-6 max-w-xl leading-relaxed">
              Complete energy autonomy for remote areas and regions with unreliable grids. Power your world without the utility line.
            </p>
            <Button className="mt-10 bg-blue-600 hover:bg-blue-500 text-white px-10 py-8 rounded-2xl font-black text-lg shadow-xl shadow-blue-950/20">
              Request Technical Audit
            </Button>
          </motion.div>
          <div className="relative h-[500px] hidden lg:block">
            <Image 
              src="/img/off-grid.png" 
              alt="Off-Grid Solar System" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* SECTION 2: TECHNICAL COMPONENTS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 uppercase">System Architecture</h2>
            <p className="text-slate-500 font-medium">A careful set-up of synchronized components working in tandem to produce grid-free electricity.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {components.map((item, i) => (
              <div key={i} className="group p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-blue-950 transition-all duration-500">
                <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-white transition-colors">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-blue-100/60 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PRICING MATRIX */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none uppercase">Price Guide <span className="text-blue-600">2026.</span></h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed">
                Off-grid systems require a higher initial investment due to battery banks, but provide 100% security against power cuts.
              </p>
              <div className="bg-white rounded-[3rem] p-8 shadow-2xl border border-slate-200">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b border-slate-100">
                      <th className="pb-4 font-black uppercase text-[10px] text-slate-400 tracking-widest">Capacity</th>
                      <th className="pb-4 font-black uppercase text-[10px] text-slate-400 tracking-widest">Approx. Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceData.map((row, i) => (
                      <tr key={i} className="border-b border-slate-50 last:border-0">
                        <td className="py-4 font-bold text-slate-900">{row.cap}</td>
                        <td className="py-4 font-black text-blue-600">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-[10px] text-slate-400 font-bold uppercase text-center tracking-widest">
                    *Prices include modules, batteries, inverter, and structures.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-950 p-12 rounded-[4rem] text-white shadow-3xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-8 uppercase tracking-tight">The Reality of Off-Grid</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0"><CheckCircle2 className="text-blue-400" /></div>
                    <p className="text-blue-100/70 text-sm"><strong>Zero Power Cuts:</strong> Your house remains lit even during total grid failure.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0"><CheckCircle2 className="text-blue-400" /></div>
                    <p className="text-blue-100/70 text-sm"><strong>Remote Freedom:</strong> The only viable solution for farmhouses and hilly terrains without grid access.</p>
                  </div>
                  <div className="flex gap-4 pt-6 border-t border-blue-900">
                    <div className="h-10 w-10 bg-red-500/20 rounded-xl flex items-center justify-center shrink-0"><AlertCircle className="text-red-400" /></div>
                    <p className="text-blue-100/70 text-sm"><strong>ROI Insight:</strong> Payback period is 6-7 years due to high battery costs.</p>
                  </div>
                </div>
                <Link href={'/contact'}>
                <Button className="w-full mt-10 bg-blue-600 hover:bg-blue-500 text-white py-8 rounded-2xl font-black uppercase tracking-widest shadow-2xl">
                  Consult our Engineers
                </Button>
                </Link>
              </div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TECHNICAL WORKFLOW */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
             <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase">Technical Workflow</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
             {[
               { s: "1", t: "Absorption", d: "Solar panels trap sunlight and convert it into DC electricity through PV cells." },
               { s: "2", t: "Regulation", d: "Charge controller ensures batteries are charged at optimal MPPT sweet spots." },
               { s: "3", t: "Conversion", d: "Off-grid inverter transforms stored DC into pure sine-wave AC for home delivery." }
             ].map((step, i) => (
               <div key={i} className="text-center space-y-4">
                 <div className="h-20 w-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto text-3xl font-black shadow-inner">
                   {step.s}
                 </div>
                 <h4 className="text-xl font-black text-slate-900 uppercase tracking-wider">{step.t}</h4>
                 <p className="text-slate-500 text-sm leading-relaxed font-medium">{step.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: TRUST CALLOUT */}
      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="flex items-center gap-4">
             <ShieldCheck size={48} className="text-blue-200" />
             <div>
                <p className="text-2xl font-black">ISO 9001:2015 Certified EPC</p>
                <p className="text-blue-100 font-bold uppercase tracking-widest text-[10px]">10+ Years of Sector Excellence</p>
             </div>
          </div>
          <div className="flex gap-4">
          <Link href={'/projects'}>
            <Button variant="outline" className="border-white text-blue-900 hover:bg-white hover:text-blue-600 rounded-xl px-8 py-6 font-black uppercase tracking-widest">
              View Portfolio
            </Button>
          </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default OffGridSolar