"use client"

import React from 'react'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-white px-6 py-12">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover opacity-90"
      >
        <source src="/Hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-transparent to-blue-950/80 z-10" />

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto flex flex-col items-center text-center space-y-8 md:space-y-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-600/40 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full">
          <ShieldCheck className="w-5 h-5 text-blue-300" />
          <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.25em]">
            Trusted Solar EPC Partner
          </span>
        </div>

        {/* Typography */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight drop-shadow-2xl">
            Let the Sun <br />
            <span className="text-blue-400">Save for You.</span>
          </h1>
          
          <p className="text-lg md:text-2xl font-semibold text-white max-w-3xl mx-auto leading-relaxed drop-shadow-lg opacity-95">
            Prident Power Solutions delivers end-to-end solar power solutions with 
            engineering excellence, transparency, and long-term reliability.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <Link href={'/housing-subsidy'}>
          <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 py-8 text-xl font-black transition-all shadow-2xl hover:scale-105">
            Our Solutions
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          </Link>
          <Link href={'/projects'}>
          <Button variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white/20 rounded-full px-10 py-8 text-xl font-black transition-all">
            View Projects
          </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner