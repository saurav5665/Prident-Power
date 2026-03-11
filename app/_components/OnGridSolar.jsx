"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  IndianRupee, 
  ClipboardCheck,
  BarChart3,
  RefreshCw,
  Sun,
  Activity,
  Award,
  Building2
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const OnGridSolar = () => {
  const subsidyData = [
    { size: "1 kWp", central: "₹30,000", upState: "₹10,000", total: "₹40,000" },
    { size: "2 kWp", central: "₹60,000", upState: "₹20,000", total: "₹80,000" },
    { size: "3 kWp+", central: "₹78,000", upState: "₹30,000", total: "₹1,08,000" },
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
              ON-GRID <br /> <span className="text-blue-500">SOLAR SOLUTIONS.</span>
            </h1>
            <p className="text-blue-100/70 text-lg md:text-xl font-medium border-l-4 border-blue-500 pl-6 max-w-xl leading-relaxed">
              The most affordable solar choice for urban homes. Zero battery maintenance, massive government subsidies, and the power to sell electricity back to the grid.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href={'/contact'}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-8 rounded-2xl font-black text-lg shadow-xl shadow-blue-950/20">
                Book Site Survey
              </Button>
              </Link>
              <Link href={'/subsidy-help'}>
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white px-10 py-8 rounded-2xl font-black text-lg transition-all">
                Check Subsidy
              </Button>
              </Link>
            </div>
          </motion.div>
          <div className="relative h-[550px] hidden lg:block">
            <Image 
              src="/img/on-grid.png" 
              alt="Prident On-Grid Solar System" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* SECTION 2: THE "UP" ADVANTAGE (SUBSIDY) */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none uppercase">
                The <span className="text-blue-600">UP State</span> <br /> Subsidy Edge.
              </h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed">
                Prident Power Solutions helps you maximize financial benefits. In Uttar Pradesh, homeowners receive an **additional state top-up** on top of the PM Surya Ghar central subsidy.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <IndianRupee className="text-blue-600 w-8 h-8" />
                  <div>
                    <p className="font-black text-slate-900 leading-none">₹1,08,000</p>
                    <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mt-1">Max Subsidy in UP</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="bg-blue-950 rounded-[3rem] p-8 md:p-12 shadow-3xl overflow-hidden relative">
                <table className="w-full text-white">
                  <thead>
                    <tr className="text-left border-b border-white/10">
                      <th className="pb-6 font-black uppercase text-[10px] text-blue-500 tracking-widest">System Size</th>
                      <th className="pb-6 font-black uppercase text-[10px] text-slate-400 tracking-widest hidden md:table-cell">Central</th>
                      <th className="pb-6 font-black uppercase text-[10px] text-slate-400 tracking-widest hidden md:table-cell">UP State</th>
                      <th className="pb-6 font-black uppercase text-[10px] text-blue-500 tracking-widest">Total Support</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {subsidyData.map((row, i) => (
                      <tr key={i} className="group">
                        <td className="py-6 font-black text-lg">{row.size}</td>
                        <td className="py-6 font-medium text-slate-400 hidden md:table-cell">{row.central}</td>
                        <td className="py-6 font-medium text-slate-400 hidden md:table-cell">{row.upState}</td>
                        <td className="py-6 font-black text-blue-400 text-lg">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-[10px] text-slate-400 font-bold uppercase text-center tracking-widest">
                    *Applicable for residential homes with DCR Panels
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TECHNICAL WORKFLOW */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-12 text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-4">How It Works</h2>
          <p className="text-slate-500 font-medium">Prident precision engineering meets the public utility grid.</p>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Solar Capture", desc: "PV cells absorb photons and free electrons to generate DC current.", icon: Sun },
              { title: "MPPT Conversion", desc: "The inverter heart converts DC to 50Hz grid-compliant AC for your appliances.", icon: Activity },
              { title: "Bi-Directional Flow", desc: "Net-metering records units exported and imported, reducing your bill to near-zero.", icon: RefreshCw }
            ].map((step, i) => (
              <div key={i} className="relative p-10 bg-white rounded-[3rem] shadow-sm hover:shadow-2xl transition-all group">
                <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <step.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{step.desc}</p>
                <div className="absolute top-10 right-10 text-6xl font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">0{i+1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: ROI ANALYSIS */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-blue-950 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-8">
                  3-5 YEAR <br /> <span className="text-blue-400">BREAK-EVEN.</span>
                </h2>
                <div className="space-y-6">
                  {[
                    "Rapid Payback: Initial cost recovers in 3-5 years.",
                    "22 Years of Free Power: Systems last for 25+ years.",
                    "Zero Battery Cost: The grid acts as your infinite storage."
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="h-10 w-10 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0"><CheckCircle2 className="text-blue-400" /></div>
                      <p className="text-blue-100/70 text-lg">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-sm">
                <p className="text-blue-400 font-black text-xs uppercase tracking-[0.2em] mb-6 text-center">ROI Analysis (3 kW)</p>
                <div className="space-y-8">
                  <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Avg. Savings (25 yrs)</span>
                    <span className="text-3xl font-black">₹16.58 Lakhs</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Electricity Rate Inc.</span>
                    <span className="text-xl font-black">3-6% p.a.</span>
                  </div>
                  <Link href={'/solar-calculator'}>
                  <Button className="w-full bg-white text-blue-950 hover:bg-blue-400 hover:text-white py-8 rounded-2xl font-black uppercase tracking-widest text-sm transition-all">
                    Calculate My Savings
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          </div>
        </div>
      </section>

      {/* SECTION 5: TRUSTED PARTNER */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <Image src="/img/grid.jpg" alt="Installation Quality" fill className="object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
             <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">Why Prident?</h2>
             <div className="space-y-6">
                {[
                  { icon: ShieldCheck, text: "150MW+ Installation History" },
                  { icon: Award, text: "10+ Years of Sector Expertise" },
                  { icon: Building2, text: "Standardized Engineering Excellence" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl"><item.icon className="text-blue-700" /></div>
                    <p className="text-slate-700 font-bold">{item.text}</p>
                  </div>
                ))}
             </div>
             <Link href={'/contact'}>
             <Button className="bg-blue-950 text-white px-10 py-8 rounded-2xl font-black text-lg uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
               Get A Quote Now
             </Button>
             </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default OnGridSolar