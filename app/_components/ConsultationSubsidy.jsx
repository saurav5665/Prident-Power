"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  ShieldCheck, 
  Zap, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  ClipboardCheck,
  Wrench,
  HelpCircle,
  PhoneCall,
  GraduationCap
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'

const ConsultationSubsidy = () => {
  const currentYear = new Date().getFullYear();

  const steps = [
    { 
        id: "01", 
        title: "Site Assessment", 
        desc: "Our engineers conduct a detailed shadow analysis and structural integrity check of your roof.",
        icon: ClipboardCheck 
    },
    { 
        id: "02", 
        title: "Custom Engineering", 
        desc: "Developing technically advanced ideas to offer adequate value for money and optimal generation.",
        icon: Wrench 
    },
    { 
        id: "03", 
        title: "Regulatory Filing", 
        desc: "Handling all coordination with state and central agencies (MNRE/UPNEDA) for project approvals.",
        icon: FileText 
    }
  ];

  return (
    <main className="w-full bg-white selection:bg-blue-100">
      {/* SECTION 1: HERO HEADER */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center bg-[#020617] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 py-12"
          >
            <Badge className="bg-blue-500/20 text-blue-400 border-none px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Zap className="w-4 h-4 mr-2 fill-blue-600" />
              Engineering Excellence {currentYear}
            </Badge>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              CONSULTATION & <br /> <span className="text-blue-500">SUBSIDY HELP.</span>
            </h1>
            <p className="text-blue-100/70 text-lg md:text-xl font-medium border-l-4 border-blue-500 pl-6 max-w-2xl leading-relaxed">
              Prident Power Solutions delivers end-to-end solar power solutions with engineering excellence, transparency, and long-term reliability.
            </p>
          </motion.div>
        </div>
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]" />
        <GraduationCap className="absolute -bottom-10 -right-10 w-96 h-96 text-white/5 rotate-12" />
      </section>

      {/* SECTION 2: THE PROCESS & SUBSIDY */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left: Timeline */}
            <div className="lg:col-span-7 space-y-12">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-6">The Engineering Journey</h2>
                <p className="text-slate-500 font-medium leading-relaxed">
                  As a professionally managed company with 10+ years of sector experience, we simplify the path to solar energy.
                </p>
              </div>

              <div className="space-y-10">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-8 group relative">
                    {i !== steps.length - 1 && (
                      <div className="absolute left-8 top-16 bottom-[-40px] w-px bg-slate-200" />
                    )}
                    <div className="h-16 w-16 bg-white shadow-xl rounded-2xl flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 border border-slate-100">
                      <step.icon size={28} />
                    </div>
                    <div className="pt-2">
                      <span className="text-xs font-black text-blue-500 uppercase tracking-widest mb-1 block">Phase {step.id}</span>
                      <h4 className="text-2xl font-black text-slate-900 uppercase mb-3 leading-none">{step.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Subsidy Matrix & Help */}
            <div className="lg:col-span-5 space-y-8">
              <Card className="bg-blue-950 p-10 rounded-[3rem] text-white shadow-3xl relative overflow-hidden border-none">
                <div className="relative z-10">
                   <h3 className="text-2xl font-black uppercase mb-8 border-b border-white/10 pb-4">Subsidy Support</h3>
                   <div className="space-y-6">
                      {[
                        "CFA/Subsidy Eligibility Check",
                        "Portal Registration Support",
                        "End-to-end Documentation",
                        "Approval & Disbursement Help"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 group">
                          <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                            <CheckCircle2 size={16} />
                          </div>
                          <span className="font-bold text-sm uppercase tracking-wide">{item}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <Zap className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10 text-blue-400" />
              </Card>

              {/* FAQ Spotlight */}
              <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
                <div className="flex items-center gap-3 text-blue-600">
                   <HelpCircle size={24} />
                   <h4 className="font-black uppercase tracking-tight">Need Clarity?</h4>
                </div>
                <div className="space-y-6">
                    <div>
                        <p className="text-sm font-black text-slate-900 uppercase mb-2">How do I avail subsidy?</p>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">Our team handles the coordination and setup of the complete project including subsidy paperwork and DISCOM approvals.</p>
                    </div>
                    <Separator />
                    <div>
                        <p className="text-sm font-black text-slate-900 uppercase mb-2">What is the break-even?</p>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">Typically, with government support, solar rooftop projects break even within 3-5 years.</p>
                    </div>
                </div>
              </div>

              {/* Action Box */}
              <div className="bg-blue-600 p-8 rounded-[3rem] text-white flex flex-col gap-6">
                  <div>
                    <h4 className="text-xl font-black uppercase leading-tight">Request Site Inspection</h4>
                    <p className="text-blue-100 text-xs font-medium">Get your feasibility report within 24 hours.</p>
                  </div>
                  <a href="tel:9808170015" className="bg-white text-blue-600 h-16 rounded-2xl flex items-center justify-between px-6 group transition-all hover:scale-[1.02]">
                    <div className="flex items-center gap-3">
                        <PhoneCall size={20} className="fill-blue-600/10" />
                        <span className="font-black tracking-widest">+91 9808170015</span>
                    </div>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER CALL-OUT */}
      <section className="py-12 bg-[#020617]">
        <div className="container mx-auto px-6 lg:px-12 text-center text-white/40">
          <p className="text-[10px] font-black uppercase tracking-[0.4em]">
            Prident Power Solutions — Professional Engineering Excellence Since 2017
          </p>
        </div>
      </section>
    </main>
  );
};

export default ConsultationSubsidy;