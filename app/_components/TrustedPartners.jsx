"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Handshake } from 'lucide-react'

const TrustedPartners = () => {
  // Partner data 
  const partners = [
    { name: "Tata Power Solar", img: "/img/tata-solar.jpg" },
    { name: "Waaree Energies", img: "/img/waaree.png" },
    { name: "Adani Solar", img: "/img/adani.jpeg" },
    { name: "UTL Solar", img: "/img/utl-solar.jpg" },
    { name: "Vikram Solar", img: "/img/vikram.jpeg" },
    { name: "Smarten Solar", img: "/img/smarten.jpeg" },
    { name: "Luminous Solar", img: "/img/luminous.png" },
    { name: "Exide Solar", img: "/img/exide_solar.webp" },
  ];

  // Duplicate for seamless infinite loop
  const loopPartners = [...partners, ...partners];

  return (
    <section className="w-full py-20 bg-blue-50/30 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-2xl">
              <Handshake className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Our <span className="text-blue-600">Trusted Partners</span>
          </h2>
          <p className="text-slate-500 font-medium">
            At Prident Power Solutions, we collaborate with industry leaders to ensure 
            engineering excellence and top-tier quality for every solar plant.
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative flex overflow-x-hidden group">
          <motion.div 
            className="flex gap-8 whitespace-nowrap py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 30, 
              repeat: Infinity 
            }}
          >
            {loopPartners.map((partner, index) => (
              <div 
                key={index} 
                className="inline-flex flex-col items-center justify-center bg-white border border-blue-100/50 shadow-sm rounded-3xl p-8 min-w-[240px] transition-all hover:shadow-xl hover:shadow-blue-100/40 hover:-translate-y-1 group"
              >
                <div className="relative w-32 h-20 mb-4 transition-transform hover:scale-110">
                  <Image
                    src={partner.img}
                    alt={partner.name}
                    fill
                    className="object-contain filter group-hover:grayscale-0 transition-all duration-500"
                    sizes="128px"
                  />
                </div>
                <h6 className="text-sm font-black uppercase tracking-wider text-blue-600">
                  {partner.name}
                </h6>
              </div>
            ))}
          </motion.div>

          {/* Side Fades for Depth */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-blue-50/30 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-blue-50/30 to-transparent z-10" />
        </div>
        
        {/* Quality Commitment Footer */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white px-6 py-3 rounded-full border border-blue-100 shadow-sm">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Standardizing Engineering Excellence
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedPartners;