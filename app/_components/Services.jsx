"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Bolt, 
  BatteryFull, 
  WifiSyncIcon, 
  HardHat, 
  Settings, 
  MessageSquare, 
  Wrench, 
  SearchCode,
  ArrowRight, 
  BoltIcon,
  PhoneCall
} from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const Services = () => {
  const services = [
    {
      title: "On-Grid Solar Systems",
      desc: "Smart integration with the utility grid, enabling energy savings and net metering benefits.",
      icon: BoltIcon,
      img: "/img/on-grid.png",
      delay: 0.1
    },
    {
      title: "Off-Grid Solar Systems",
      desc: "Reliable standalone systems with battery backup for remote or power-deficit areas.",
      icon: BatteryFull,
      img: "/img/pr5.jpg",
      delay: 0.2
    },
    {
      title: "Hybrid Solar Systems",
      desc: "Combine grid + battery systems for uninterrupted power and better energy management.",
      icon: WifiSyncIcon,
      img: "/img/pr4.jpg",
      delay: 0.3
    },
    {
      title: "Civil & Electrical Work",
      desc: "Foundation work, structure fixing, cable trenching, and electrical system setup for plant readiness.",
      icon: HardHat,
      img: "/img/civil.png",
      delay: 0.4
    },
    {
      title: "O&M (AMC Services)",
      desc: "Annual maintenance, fault diagnosis, cleaning, and system performance optimization.",
      icon: Settings,
      img: "/img/pr6.jpg",
      delay: 0.5
    },
    {
      title: "Consultation & Subsidy",
      desc: "Get expert system design and support in applying for government subsidies and approvals.",
      icon: MessageSquare,
      img: "/meeting.png",
      delay: 0.6
    },
    {
      title: "Installation & Commissioning",
      desc: "Complete EPC execution: structure mounting, module installation, DC cabling, and commissioning.",
      icon: Wrench,
      img: "/img/pr3.jpg",
      delay: 0.7
    },
    {
      title: "Site Survey & Inspection",
      desc: "Pre-installation site visits, shadow analysis, and quality inspections for optimal design.",
      icon: SearchCode,
      img: "/img/pr2.jpg",
      delay: 0.8
    }
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Bolt className="w-4 h-4" />
            Engineering Excellence
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6"
          >
            Complete Solar <span className="text-blue-600">EPC Solutions</span> <br className="hidden md:block" /> Under One Roof
          </motion.h2>
          <p className="text-slate-500 text-lg font-medium">
            Prident Power Solutions provides highly innovative services for the solar sector with a focus on global engineering standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay }}
              className="group"
            >
              <Card className="h-full border-none shadow-sm hover:shadow-2xl transition-all duration-500 rounded-[2rem] overflow-hidden bg-white">
                <CardContent className="p-0 flex flex-col h-full">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-all" />
                  </div>

                  {/* Icon and Text Container */}
                  <div className="p-8 pt-10 relative flex flex-col flex-grow">
                    {/* Floating Icon */}
                    <div className="absolute -top-8 left-8 bg-blue-600 p-4 rounded-2xl shadow-xl shadow-blue-200 text-white transition-transform duration-500 group-hover:-translate-y-2">
                      <service.icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-black text-slate-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                      {service.desc}
                    </p>

                    <Link 
                      href="/contact" 
                      className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider group/link"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA for Project Management */}
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-20 p-6 md:p-12 lg:p-16 bg-blue-950 rounded-[2rem] md:rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl shadow-blue-900/20"
        >
            <div className="relative z-10 space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-black leading-tight tracking-tight">
                Need a Custom Solar <br className="sm:hidden" /> 
                Project Management Plan?
            </h3>
            
            <p className="text-blue-100/70 text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
            Our engineers specialize in end-to-end services, from site surveys to long-term Annual Maintenance Contracts (AMC) across India, ensuring reliability and technical excellence for your solar investment.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href={'/contact'}>
                <Button 
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-black px-8 md:px-10 py-6 md:py-8 rounded-xl md:rounded-2xl text-base md:text-lg shadow-xl shadow-blue-950/40 transition-all hover:scale-105"
                >
                Consult Business Head
                </Button>
                </Link>    
                <a 
                href="tel:+919540263662" 
                className="flex sm:hidden items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-widest"
                >
                <PhoneCall className="w-4 h-4" />
                Call Now
                </a>
            </div>
            </div>

            <div className="absolute top-0 right-0 w-48 md:w-80 h-48 md:h-80 bg-blue-500/10 rounded-full -translate-y-24 md:-translate-y-40 translate-x-24 md:translate-x-40 blur-2xl md:blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-blue-500/5 rounded-full translate-y-16 md:translate-y-32 -translate-x-16 md:-translate-x-32 blur-2xl md:blur-3xl" />
        </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Services