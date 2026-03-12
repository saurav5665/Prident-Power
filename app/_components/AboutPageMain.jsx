"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  ShieldCheck, 
  Zap, 
  Users, 
  Target, 
  Award, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Briefcase,
  History
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const AboutPageMain = () => {
  const stats = [
    { label: "Industry Experience", value: "10+ Yrs", icon: History, delay: 0.1 },
    { label: "DC Work Done", value: "100MW+", icon: Zap, delay: 0.2 },
    { label: "Module Mounting", value: "150MW+", icon: ShieldCheck, delay: 0.3 },
    { label: "Award Recognition", value: "15+", icon: Award, delay: 0.4 }
  ];

  const values = [
    { title: "Integrity", desc: "Building long-lasting goodwill through honest engineering.", icon: ShieldCheck },
    { title: "Innovation", desc: "Solving unsolved problems with technically advanced ideas.", icon: Zap },
    { title: "Teamwork", desc: "Fostering a participative management & Kaizen culture.", icon: Users },
    { title: "Commitment", desc: "Ensuring timely execution and transparent communication.", icon: Briefcase }
  ];

  return (
    <main className="w-full bg-white">
      {/* SECTION 1: INDUSTRIAL HERO */}
      <section className="relative min-h-[70vh] flex items-center bg-blue-950 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Globe className="w-4 h-4" />
              Standardizing Global Excellence
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8"
            >
              OVER A DECADE OF <br />
              <span className="text-blue-500">SOLAR INNOVATION.</span>
            </motion.h1>
            <p className="text-blue-100/70 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
              Prident Power Solutions is a professionally managed solar energy company 
              dedicated to high-quality, reliable, and cost-effective solar commissioning across India.
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-t from-blue-500/40 to-transparent blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
      </section>

      {/* SECTION 2: THE TRACK RECORD (STATS) */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: stat.delay }}
                className="text-center md:text-left"
              >
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                  <span className="text-3xl md:text-4xl font-black text-slate-900">{stat.value}</span>
                </div>
                <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: STORY & PHILOSOPHY (Fixed Aspect Ratio) */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Fixed 5:4 aspect ratio container */}
              <div className="relative w-full aspect-6/4 rounded-[3rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/about.jpeg" 
                  alt="Prident Engineering Team" 
                  fill
                  className="object-cover rounded-[3rem]"
                />
              </div>
              {/* <div className="absolute -bottom-10 -left-10 bg-blue-950 p-10 rounded-[2.5rem] shadow-2xl hidden xl:block text-white max-w-xs">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Our Motto</p>
                  <p className="font-bold leading-relaxed">
                    "Committed to providing unmatched service and reliability."
                  </p>
              </div> */}
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h6 className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">The Prident Heritage</h6>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  Professional Engineering & Development
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                  With a strong foundation of experienced engineers and project professionals, 
                  we deliver complete lifecycle solar solutions—from design and engineering 
                  to installation, commissioning, and maintenance.
                </p>
              </div>

              <div className="space-y-4 pt-6">
                {[
                  "Expertise in On-Grid, Off-Grid & Hybrid Systems",
                  "Comprehensive Site Surveys & Detailed Engineering",
                  "Nationwide Reliable Service Network"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href={'/projects'}>
              <Button className="bg-blue-950 hover:bg-blue-900 text-white px-10 py-7 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl transition-transform hover:scale-105 active:scale-95">
                Explore Our Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: VISION & VALUES (GRID) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h6 className="text-blue-600 font-black uppercase tracking-widest text-xs mb-4">Foundation & Culture</h6>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              Values That Drive The Future
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
                <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <val.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-3">{val.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            <div className="bg-blue-950 p-12 rounded-[3rem] text-white">
              <Target className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-black mb-4 uppercase tracking-widest">Our Vision</h3>
              <p className="text-blue-100/60 leading-relaxed font-medium">
                To be a leading and trusted solar EPC and development partner in India, 
                driving the nation’s clean energy transition through reliable, innovative, 
                and high-performance solutions.
              </p>
            </div>
            <div className="bg-blue-600 p-12 rounded-[3rem] text-white">
              <Users className="w-12 h-12 text-blue-200 mb-6" />
              <h3 className="text-2xl font-black mb-4 uppercase tracking-widest">Our Culture</h3>
              <p className="text-blue-50 leading-relaxed font-medium">
                We foster a participative management environment with open communication, 
                continuous improvement, and ethical business conduct that empowers 
                every team member.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CALL TO ACTION */}
      <section className="py-24 relative overflow-hidden">
         <div className="container mx-auto px-6 lg:px-12">
            <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative z-10 shadow-3xl">
               <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                 Shaping the Future <br /> of Solar Energy
               </h2>
               <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
                 Join our network of recognized clients and shift your residential or industrial 
                 load to a reliable, clean energy plant with Prident.
               </p>
               <Link href={'/contact'}>
               <button className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-7 rounded-2xl font-black text-lg shadow-xl shadow-blue-500/20 transition-transform hover:scale-105 active:scale-95">
                 Contact Business Development
               </button>
               </Link>
            </div>
         </div>
         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
      </section>
    </main>
  )
}

export default AboutPageMain