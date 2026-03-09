"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Users, Target, Award, Globe } from 'lucide-react'
import Link from 'next/link'

const AboutPage = () => {
  const stats = [
    { label: "Industry Experience", value: "10+ Years", icon: Award },
    { label: "Solar Installations", value: "150MW+", icon: Zap },
    { label: "Safety Standards", value: "Compliant", icon: ShieldCheck },
    { label: "Nationwide Service", icon: Globe }
  ];

  return (
    <main className="w-full bg-white">
      {/* Section 1: Hero Header */}
      <section className="relative py-20 bg-blue-950 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Engineering Global <br />
            <span className="text-blue-400">Solar Excellence</span>
          </motion.h1>
          <p className="text-blue-100/80 max-w-2xl mx-auto text-lg font-medium">
            Prident Power Solutions is a professionally managed solar energy company 
            delivering high-quality, reliable, and cost-effective solar power solutions across India.
          </p>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent" />
        </div>
      </section>

      {/* Section 2: Core Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 border-l-4 border-blue-600 pl-6">
                Our Story & Expertise
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                With a strong foundation of experienced engineers and project professionals 
                having more than a decade of industry exposure, Prident specializes in 
                complete lifecycle solar solutions.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                {stats.map((stat, i) => (
                  <div key={i} className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                    <stat.icon className="w-6 h-6 text-blue-600 mb-2" />
                    <p className="text-2xl font-black text-slate-900">{stat.value || "Pan-India"}</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
<<<<<<< HEAD
  {/* FIX: Replaced h-[450px] with aspect-ratio classes.
    - aspect-[4/3]: Good for mobile (prevents heavy cropping)
    - md:aspect-[5/4]: Returns to your preferred rectangular look on tablets/desktops
  */}
  <div className="rounded-3xl overflow-hidden shadow-2xl p-2 border-8 border-blue-50 relative w-full aspect-5/4 md:aspect-5/4">
    <Image 
      src="/about.png" 
      alt="Commercial Solar Project" 
      fill
      className="object-cover"
    />
  </div>

  {/* Floating badge remains the same */}
  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
    <p className="text-sm font-bold text-blue-600 uppercase">Commercial Solutions</p>
    <p className="text-slate-500 text-xs">High-Performance EPC</p>
  </div>
</div>
=======
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-blue-50">
                <Image 
                  src="/about.png" 
                  alt="Commercial Solar Project" 
                  width={600} 
                  height={500}
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <p className="text-sm font-bold text-blue-600 uppercase">Commercial Solutions</p>
                <p className="text-slate-500 text-xs">High-Performance EPC</p>
              </div>
            </div>
>>>>>>> 7b331037235d6ef42a35c24d2d230786bb27e6f2
          </div>
        </div>
      </section>

      {/* Section 3: Vision & Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Our Values */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
              <ShieldCheck className="w-12 h-12 text-blue-600 mb-6" />
              <h4 className="text-xl font-black text-slate-900 mb-4">Our Values</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Integrity | Commitment | Responsibility | Innovation | Team Spirit | Customer Focus
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-blue-950 p-10 rounded-3xl shadow-xl text-white">
              <Target className="w-12 h-12 text-blue-400 mb-6" />
              <h4 className="text-xl font-black mb-4">Our Vision</h4>
              <p className="text-blue-50/70 text-sm leading-relaxed">
                To become a trusted and recognized solar EPC and development support company in India by delivering reliable, innovative, and sustainable solar energy solutions.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
              <Zap className="w-12 h-12 text-blue-600 mb-6" />
              <h4 className="text-xl font-black text-slate-900 mb-4">Our Mission</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                To empower clients with clean energy solutions that reduce energy costs, improve sustainability, and generate long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl relative">
              <Image 
                src="about-solar.jpg" 
                alt="Housing Solar Solution" 
                width={600} 
                height={500}
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 hover:bg-transparent transition-all" />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                EPC Services & <br />
                <span className="text-blue-600">Development Consulting</span>
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Prident supports solar power developers and investors through business 
                development consulting, project facilitation, and Power Purchase Agreement 
                (PPA) coordination[cite: 5].
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg"><ShieldCheck className="w-5 h-5 text-blue-700" /></div>
                  <p className="text-sm font-bold text-slate-700">Strict Quality & Safety Compliance</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg"><Zap className="w-5 h-5 text-blue-700" /></div>
                  <p className="text-sm font-bold text-slate-700">Strong After-Sales Service Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <section className="py-20 bg-blue-600 text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
            Ready for the Solar Revolution?
          </h2>
          <Link href={'/contact'}>
          <button className="bg-blue-950 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            Contact Us Today
          </button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default AboutPage;