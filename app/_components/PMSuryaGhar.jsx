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
  BarChart3
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const PMSuryaGhar = () => {
  return (
    <div className="w-full bg-white">
      
      {/* SECTION 1: HERO SPOTLIGHT */}
      <section className="relative w-full min-h-[500px] flex items-center overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 z-10 py-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Zap className="w-4 h-4 fill-blue-600" />
              Government Initiative 2026
            </motion.div>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
              PM SURYA GHAR: <br /> <span className="text-blue-600">MUFT BIJLI YOJANA</span>
            </h1>
            <p className="text-slate-500 font-medium text-lg md:text-xl max-w-2xl border-l-4 border-blue-500 pl-6 leading-relaxed">
              "In order to further sustainable development and people's well-being, we are launching this project to light up 1 crore households with 300 units of free electricity." 
              <span className="block mt-4 text-slate-900 font-black">— Shri Narendra Modi</span>
            </p>
          </div>
          <div className="lg:col-span-4 relative h-[500px] hidden lg:block">
            <Image 
              src="/narendra-modi.png" 
              alt="Hon'ble Prime Minister" 
              fill 
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: SCHEME TECHNICAL DETAILS */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Scheme Benefits & Subsidy</h2>
            <p className="text-slate-500 font-medium">Standardized financial support for residential and community solar plants.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Subsidy Matrix */}
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <IndianRupee className="w-10 h-10 text-blue-600" />
                <h3 className="text-xl font-black text-slate-900">Residential Subsidy</h3>
                <ul className="space-y-3 text-sm text-slate-500 font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Up to 2 kW: ₹30,000 per kW</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> 3 kW System: Up to ₹78,000</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Special States: Extra 10%</li>
                </ul>
              </div>
            </div>

            {/* Registration Steps */}
            <div className="bg-blue-950 p-8 rounded-[2.5rem] text-white lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <ClipboardCheck className="w-10 h-10 text-blue-400" />
                <h3 className="text-2xl font-black uppercase tracking-widest">Application Process</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { s: "01", t: "Registration", d: "Visit pmsuryaghar.gov.in and select state/DISCOM." },
                  { s: "02", t: "Feasibility", d: "Login and apply; wait for DISCOM approval." },
                  { s: "03", t: "Commissioning", d: "Install plant and submit commissioning certificate." }
                ].map((step, i) => (
                  <div key={i} className="border-l border-blue-500/30 pl-6 py-2">
                    <span className="text-blue-400 font-black text-2xl mb-2 block">{step.s}</span>
                    <h4 className="font-bold text-lg mb-1">{step.t}</h4>
                    <p className="text-blue-100/60 text-xs font-medium leading-relaxed">{step.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PRIDENT ASSISTANCE CARD */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-12">
          <div className="bg-white border border-slate-100 rounded-[3.5rem] p-8 md:p-16 shadow-2xl overflow-hidden relative">
            <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-4 relative aspect-square rounded-[2rem] overflow-hidden bg-slate-100">
                <Image 
                  src="/modi.png" 
                  alt="Modi Solar Initiative" 
                  fill 
                  className="object-cover object-top"
                />
              </div>
              <div className="lg:col-span-8 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-[10px]">
                    <ShieldCheck className="w-4 h-4" /> Professional Engineering Support
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                    Get Expert Assistance <br className="hidden md:block" /> 
                    With Your <span className="text-blue-600">Subsidy Goal.</span>
                  </h2>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed">
                    As a company with **150MW+ installation history**, Prident Power Solutions provides 
                    end-to-end support for technical approvals and commissioning under the Surya Ghar Yojana.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                <Link href={'/contact'}>
                  <Button className="bg-blue-950 hover:bg-blue-900 text-white py-8 rounded-2xl font-black text-lg shadow-xl shadow-blue-950/20">
                    Book Technical Audit
                  </Button>
                </Link>
                <Link href={'/requirement'}>
                  <Button variant="outline" className="border-blue-600 text-blue-600 py-8 rounded-2xl font-black text-lg hover:bg-blue-50">
                    Check Eligibility
                  </Button>
                </Link>
                </div>
              </div>
            </div>
            
            {/* Visual Engineering Backdrop */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default PMSuryaGhar