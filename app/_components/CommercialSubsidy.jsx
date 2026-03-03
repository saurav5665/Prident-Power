"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Factory, 
  Zap, 
  Briefcase, 
  Globe, 
  ShieldCheck, 
  ArrowRight,
  FileText,
  CheckCircle2,
  Building2
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const CommercialSubsidy = () => {
  const currentYear = new Date().getFullYear();

  const kusumSteps = [
    { title: "Application", desc: "Submit via UPNEDA’s official KUSUM portal with land records." },
    { title: "Vendor Selection", desc: "Choose an MNRE-approved vendor like Prident for installation." },
    { title: "Contribution", desc: "Pay the 10% farmer contribution online (if applicable)." },
    { title: "Commissioning", desc: "Final inspection by UPNEDA officials for subsidy release." }
  ];

  return (
    <main className="w-full bg-white">
      {/* SECTION 1: INDUSTRIAL HERO */}
      <section className="relative h-[60vh] md:h-[75vh] flex items-center bg-blue-950 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Building2 className="w-4 h-4" /> C&I Solar Incentives {currentYear}
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter mb-6 uppercase">
              COMMERCIAL <br /> <span className="text-blue-500">OPTIMIZATION.</span>
            </h1>
            <p className="text-blue-100/70 text-lg font-medium border-l-4 border-blue-500 pl-6 max-w-lg">
              Industrial-scale solar solutions with professional subsidy facilitation for UP factories and farmers.
            </p>
            <Link href={'/requirement'}>
              <Button className="mt-10 bg-blue-600 hover:bg-blue-500 text-white px-10 py-8 rounded-2xl font-black text-lg shadow-xl shadow-blue-950/20">
                Request Technical Audit
              </Button>
            </Link>
          </motion.div>
          <div className="relative h-full hidden lg:block opacity-40">
            <Image src="/img/civil.png" alt="Industrial Solar" fill className="object-cover" priority />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-slate-900/40 to-transparent z-0" />
      </section>

      {/* SECTION 2: SECTOR SPECIFIC PROGRAMS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">Incentive Framework</h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              Targeted solar subsidy programs for agricultural irrigation and registered commercial entities in Uttar Pradesh.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* PM KUSUM CARD */}
            <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-14 w-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-100">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">PM KUSUM Scheme</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Solar pump subsidy for farmers with functional borewells. Subsidies available for pumps ranging from 3 HP to 10 HP.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-white rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-black uppercase text-blue-600 mb-1">ST/Vantangiya/Musahar</p>
                    <p className="text-xl font-black text-slate-900">100% Subsidy</p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-black uppercase text-blue-600 mb-1">General Farmers</p>
                    <p className="text-xl font-black text-slate-900">90% Combined</p>
                  </div>
                </div>
              </div>
              <ul className="space-y-3 border-t border-slate-200 pt-8">
                <li className="flex items-center gap-3 text-xs font-bold text-slate-600"><CheckCircle2 className="text-blue-500 w-4 h-4" /> Central Support: 30%</li>
                <li className="flex items-center gap-3 text-xs font-bold text-slate-600"><CheckCircle2 className="text-blue-500 w-4 h-4" /> State Support: 60%</li>
              </ul>
            </div>

            {/* Industrial Subsidy Card */}
            <div className="bg-blue-950 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <Briefcase className="w-12 h-12 text-blue-400 mb-8" />
                <h3 className="text-3xl font-black mb-4 tracking-tight">C&I Sector Subsidy</h3>
                <p className="text-blue-100/60 text-sm leading-relaxed mb-8">
                  Registered commercial and industrial units can avail incentives through MNRE and UPNEDA for larger solar projects.
                </p>
                <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] mb-8">
                  <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-4 flex items-center gap-2">
                    <FileText className="w-4 h-4" /> Required Documentation
                  </p>
                  <div className="grid grid-cols-2 gap-y-3 text-[10px] font-bold uppercase tracking-wider text-blue-100/80">
                    <span>• Company GST</span>
                    <span>• PAN Details</span>
                    <span>• Land/Lease Deed</span>
                    <span>• Solvency Proof</span>
                    <span>• 6-Month Bills</span>
                    <span>• Site Layout</span>
                  </div>
                </div>
              </div>
              <Link href={'/contact'}>
                <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-8 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-blue-950/20 relative z-10">
                  Apply for Industrial Audit
                </Button>
              </Link>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROFESSIONAL MANAGEMENT */}
      <section className="py-24 border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative h-[500px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-slate-50">
             <Image src="/modi.png" alt="PM Modi Vision" fill className="object-cover" />
             {/* <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-white/20">
                <p className="text-[10px] font-black text-blue-700 uppercase tracking-widest mb-1">Global Standards</p>
                <p className="text-slate-900 font-bold">Nationwide Commissioning</p>
             </div> */}
          </div>
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              A Professionally Managed <br /> <span className="text-blue-600">Subsidy Journey.</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              Prident Power Solutions simplifies the technical audit process, managing DISCOM NOCs and 
              MNRE-approved vendor selection for sites all over India.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {kusumSteps.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="h-10 w-10 shrink-0 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-black text-xs">
                    0{i+1}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm uppercase mb-1">{step.title}</h4>
                    <p className="text-slate-500 text-xs font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-8">
               <div className="flex items-center gap-2 bg-blue-50 px-5 py-3 rounded-2xl text-blue-700 font-black text-[10px] uppercase tracking-widest"><ShieldCheck size={16}/> 150MW+ Experience</div>
               <div className="flex items-center gap-2 bg-blue-50 px-5 py-3 rounded-2xl text-blue-700 font-black text-[10px] uppercase tracking-widest"><Globe size={16}/> Nationwide Presence</div>
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

export default CommercialSubsidy