"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  Factory, 
  Zap, 
  Maximize, 
  ArrowRight, 
  ShieldCheck,
  Phone,
  Battery,
  Cpu,
  IndianRupee,
  RotateCcw,
  BarChart3
} from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const KnowYourRequirement = () => {
  const [siteType, setSiteType] = useState('residential')
  const [showResult, setShowResult] = useState(false)
  const [formData, setFormData] = useState({ bill: 5000, space: 500, systemType: 'On-Grid' })
  const [audit, setAudit] = useState(null)

  const handleAudit = (e) => {
    e.preventDefault()
    // Engineering Logic for Prident Power Solutions
    const kwReq = (formData.bill / 8 / 120).toFixed(2) 
    const areaReq = (kwReq * 80).toFixed(0) 
    const cost = (kwReq * 65000) 
    
    setAudit({
      kw: kwReq,
      area: areaReq,
      cost: cost.toLocaleString('en-IN'),
      battery: formData.systemType !== 'On-Grid' ? `${(kwReq * 2.5).toFixed(1)} kWh` : 'Not Required',
      inverter: `${kwReq} kVA industrial grade`
    })
    setShowResult(true)
  }

  return (
    <section className="w-full min-h-screen bg-white py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Header: Industrial Precision Look */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24 border-b border-slate-100 pb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-blue-700 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
              <BarChart3 className="w-4 h-4 fill-blue-600" />
              Technical Audit Division
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              KNOW YOUR <br /> <span className="text-blue-600">REQS.</span>
            </h1>
          </div>
          <p className="text-slate-500 font-medium text-sm md:text-base max-w-sm border-l-2 border-blue-500 pl-6">
            Leveraging 10+ years of engineering heritage to analyze your site's solar potential.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              {/* Left: Industrial Configurator */}
              <div className="lg:col-span-4 space-y-6">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Site Category</h3>
                <div className="flex flex-col gap-3">
                  {[{ id: 'residential', label: 'Residential', icon: Home },
                    { id: 'commercial', label: 'Industrial', icon: Factory }
                  ].map((type) => (
                    <button key={type.id} onClick={() => setSiteType(type.id)}
                      className={cn(
                        "flex items-center gap-4 p-6 rounded-2xl border transition-all duration-300",
                        siteType === type.id ? "bg-slate-900 border-slate-900 text-white shadow-2xl" : "bg-white border-slate-100 text-slate-400 hover:border-blue-200"
                      )}
                    >
                      <type.icon className="w-5 h-5" />
                      <span className="font-bold text-sm uppercase tracking-wider">{type.label}</span>
                    </button>
                  ))}
                </div>
                
                {/* Milestone Badge */}
                <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mt-8">
                    <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
                    <h4 className="text-blue-900 font-black text-lg leading-tight">150MW+ Experience</h4>
                    <p className="text-blue-700/70 text-xs font-bold mt-2 leading-relaxed">
                        Precision engineering for industrial giants and residential societies.
                    </p>
                </div>
              </div>

              {/* Right: Technical Input Form */}
              <div className="lg:col-span-8">
                <form onSubmit={handleAudit} className="bg-white border border-slate-100 p-6 md:p-12 rounded-[2.5rem] shadow-sm space-y-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Avg. Bill (₹)</label>
                      <input type="number" onChange={(e)=>setFormData({...formData, bill: e.target.value})} className="w-full bg-slate-50 rounded-xl py-5 px-6 font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 transition-all outline-none" placeholder="e.g. 5000" required />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Usable Area (Sqft)</label>
                      <input type="number" onChange={(e)=>setFormData({...formData, space: e.target.value})} className="w-full bg-slate-50 rounded-xl py-5 px-6 font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 transition-all outline-none" placeholder="e.g. 1000" required />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Desired Configuration</label>
                    <div className="flex flex-wrap gap-3">
                      {['On-Grid', 'Off-Grid', 'Hybrid'].map((sys) => (
                        <button key={sys} type="button" onClick={()=>setFormData({...formData, systemType: sys})}
                          className={cn(
                            "px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all",
                            formData.systemType === sys ? "bg-blue-600 text-white shadow-lg" : "bg-slate-50 text-slate-500 hover:bg-blue-50"
                          )}
                        >
                          {sys}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-slate-900 hover:bg-blue-700 text-white py-8 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-[1.02] active:scale-95">
                    Generate Audit Report <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </div>
            </motion.div>
          ) : (
            /* TECHNICAL AUDIT REPORT VIEW */
            <motion.div key="result" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-6xl mx-auto">
              <div className="bg-blue-950 rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden border border-blue-400/20">
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 border-b border-white/10 pb-10">
                    <div>
                      <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2">Technical Audit Report</h2>
                      <p className="text-blue-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                        <Zap className="w-4 h-4 fill-blue-400" /> Standardized Engineering Profile
                      </p>
                    </div>
                    <Button onClick={() => setShowResult(false)} className="bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold border border-white/10">
                      <RotateCcw className="w-4 h-4 mr-2" /> Reset Analysis
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-blue-400"><Maximize className="w-4 h-4" /><span className="text-[10px] font-black uppercase">Plant Capacity</span></div>
                      <p className="text-5xl font-black leading-none">{audit.kw}<span className="text-sm font-medium ml-2 opacity-40">kW</span></p>
                      <p className="text-[10px] text-blue-100/40 font-bold uppercase tracking-widest">Req. Space: {audit.area} Sq. Ft.</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-blue-400"><IndianRupee className="w-4 h-4" /><span className="text-[10px] font-black uppercase">Investment</span></div>
                      <p className="text-5xl font-black leading-none">₹{audit.cost.split(',')[0]}<span className="text-sm font-medium opacity-40">K+</span></p>
                      <p className="text-[10px] text-blue-100/40 font-bold uppercase tracking-widest">Incl. Commissioning</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-blue-400"><Cpu className="w-4 h-4" /><span className="text-[10px] font-black uppercase">Inverter</span></div>
                      <p className="text-xl font-black leading-tight">{audit.inverter.split(' ')[0]} <br /> {audit.inverter.split(' ').slice(1).join(' ')}</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-blue-400"><Battery className="w-4 h-4" /><span className="text-[10px] font-black uppercase">Storage</span></div>
                      <p className="text-xl font-black leading-tight">{audit.battery}</p>
                      <p className="text-[10px] text-blue-100/40 font-bold uppercase tracking-widest">I&C Service Ready</p>
                    </div>
                  </div>

                  <div className="mt-20 p-8 md:p-12 bg-white/5 border border-white/10 rounded-[2.5rem] flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="space-y-4 text-center lg:text-left">
                      <h4 className="text-xl md:text-2xl font-bold">Standardizing Excellence.</h4>
                      <p className="text-sm text-blue-100/60 max-w-xl font-medium">
                        Final plant design requires a physical site visit for shadow analysis and structural quality inspection.
                      </p>
                    </div>
                    <Button className="w-full lg:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black px-12 py-8 rounded-2xl text-lg shadow-2xl transition-transform hover:scale-105 active:scale-95">
                      Book Survey Now
                    </Button>
                  </div>
                </div>
                {/* Visual Engineering Backdrop */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default KnowYourRequirement