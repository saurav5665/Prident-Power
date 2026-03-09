"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, 
  Minus,
  Phone,
  Zap,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Settings,
  TrendingUp,
  HelpCircle,
  PhoneCall
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Link from 'next/link'

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState('economics')

  const faqData = {
    economics: {
        title: "Solar Economics",
        icon: TrendingUp,
        questions: [
          { q: "How much does a solar Plant cost?", a: "Costs are determined by system type (On-Grid/Off-Grid) and structural requirements. We focus on economical, high-quality solutions." },
          { q: "What is the break-even period for Solar rooftop projects?", a: "Typically, break-even occurs within 3-5 years, after which you enjoy virtually free electricity for decades." },
          { q: "Are there any subsidies provided by the government for solar projects?", a: "Yes, we provide expert support to help you avail central and state government subsidies." },
          { q: "How do I avail subsidy provided by the government?", a: "Our team handles the coordination and setup of the complete project including subsidy paperwork." },
          { q: "What is the difference between CapEx and OpEx models?", a: "CapEx is an upfront investment model, while OpEx (RESCO) allows you to pay per unit of electricity generated." },
          { q: "Are financing options available for Solar Rooftop projects?", a: "Yes, we help coordinate financing for solar industrial solutions to help businesses move away from diesel plants." }
        ]
    },
    general: {
      title: "General Information",
      icon: HelpCircle,
      questions: [
        { q: "What is Prident Power Solutions?", a: "Prident Power Solutions is a professionally managed solar energy company with experienced engineers and project professionals having more than a decade of industry exposure." },
        { q: "What is a solar rooftop system?", a: "A solar rooftop system consists of solar panels installed on a building's roof that convert sunlight into electricity for onsite consumption." },
        { q: "How does a solar rooftop system work?", a: "Solar panels capture photon energy from the sun, convert it into DC electricity, which an inverter then transforms into AC power for your appliances." },
        { q: "How to apply for a solar rooftop subsidy?", a: "We provide full consultation and support for government subsidy applications and approvals." },
        { q: "What is the price of a solar system in India without a subsidy?", a: "Prices vary based on system size and component quality. We offer adequate value for money with technically advanced ideas." },
        { q: "Why should I go solar?", a: "Solar power helps preserve and improve human life by reducing carbon footprints while providing long-term energy savings." },
        { q: "Is solar power safe?", a: "Yes, we impart regular training to adopt accident-free industrial practices and strictly monitor the quality of components." },
        { q: "What do I need to install a rooftop solar system?", a: "A pre-installation site visit for shadow analysis and quality inspection of the roof structure is required." },
        { q: "What are the different types of Solar systems?", a: "We provide On-Grid, Off-Grid, and Hybrid solar power plant I&C work." },
        { q: "Do solar panels generate electricity even during monsoon and winter?", a: "Yes, solar panels generate electricity during daylight hours even in cloudy weather, though efficiency may slightly decrease compared to bright sun." },
      ]
    },
    maintenance: {
      title: "Solar Maintenance",
      icon: Settings,
      questions: [
        { q: "What is the life of a rooftop solar system?", a: "Standard solar systems are designed to last over 25 years with proper professional maintenance." },
        { q: "Do Solar Rooftop projects have a high maintenance cost?", a: "No, we offer Annual Maintenance Contracts (AMC) to keep your plant optimized at an economical cost." },
        { q: "Can Solar projects damage my roof?", a: "Our professional engineers ensure proper structure fixing and foundation work to protect your roof's integrity." },
        { q: "Do I need to clean my Solar plant?", a: "Yes, regular cleaning is essential for maintaining optimal system performance." },
        { q: "My roof is not made of concrete; can I still install a Solar Project?", a: "Yes, our installation teams are experienced in module mounting for various industrial and residential roof types." }
      ]
    }
  }

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8 mb-10 md:mb-16 border-b border-slate-200 pb-8 md:pb-12 text-center lg:text-left">
          <div className="max-w-3xl flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2 mb-3 md:mb-4 text-blue-700 font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-[9px] md:text-xs">
              <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 fill-blue-600" />
              Technical Knowledge Base
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] lg:leading-[0.9] tracking-tighter">
              SOLAR <span className="text-blue-600">INTEL.</span>
            </h1>
          </div>

          <p className="text-slate-500 font-medium text-xs md:text-sm lg:text-base max-w-sm border-l-0 lg:border-l-2 border-blue-500 pl-0 lg:pl-6 mt-2 lg:mt-0 mx-auto lg:mx-0">
            Technical insights into Prident Power Solutions' engineering standards and solar expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Navigation Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
              {Object.entries(faqData).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={cn(
                    "whitespace-nowrap flex items-center gap-3 md:gap-4 px-5 py-4 md:py-5 rounded-xl transition-all duration-300 font-bold text-[10px] md:text-xs uppercase tracking-widest border shrink-0 lg:w-full",
                    activeTab === key 
                      ? "bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-200" 
                      : "bg-white border-slate-100 text-slate-400 hover:border-blue-200 hover:text-blue-700"
                  )}
                >
                  <value.icon className="w-4 h-4" />
                  {value.title}
                </button>
              ))}
            </div>

            {/* Engineer Spotlight */}
            <div className="hidden lg:block relative rounded-2xl overflow-hidden aspect-3/5 bg-slate-100 group shadow-2xl">
              <Image 
                src="/gaurav.png" 
                alt="Prident Engineer"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 p-8 space-y-4">
                <div className="h-1 w-12 bg-blue-500 rounded-full" />
                <h4 className="text-xl font-bold text-white tracking-tight leading-snug">
                  Seeking Global Engineering Standards?
                </h4>
                <p className="text-slate-400 text-xs font-medium">Talk to our project management team.</p>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Accordion type="single" collapsible className="space-y-4">
                  {faqData[activeTab].questions.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border border-slate-100 bg-white rounded-xl px-4 md:px-8 transition-all duration-300 data-[state=open]:border-blue-100 data-[state=open]:shadow-lg"
                    >
                      <AccordionTrigger className="hover:no-underline py-5 md:py-6 text-left group gap-4">
                        <div className="flex items-start gap-4 md:gap-6">
                          <span className="text-slate-200 font-black text-xl md:text-2xl hidden sm:block mt-0.5">
                            {(index + 1).toString().padStart(2, '0')}.
                          </span>
                          <span className="text-slate-800 font-bold text-sm md:text-lg lg:text-xl tracking-tight leading-tight group-data-[state=open]:text-blue-800 transition-colors">
                            {item.q}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 md:pb-8 pl-0 sm:pl-10 md:pl-12">
                        <div className="text-slate-500 text-xs md:text-base leading-relaxed font-medium border-l-4 border-blue-500/20 pl-4 md:pl-6">
                          {item.a}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Support Bar */}
            <div className="mt-8 md:mt-12 bg-blue-950 rounded-2xl p-6 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 shadow-2xl">
              <div className="flex items-center gap-4 md:gap-5 w-full md:w-auto">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-base md:text-xl leading-tight text-left">
                    Have a unique site requirement?
                  </h4>
                  <p className="text-blue-100/60 text-[10px] md:text-sm font-medium text-left">
                    Reliable Nationwide Service: +91 9540263662
                  </p>
                </div>
              </div>
              <Link href={'/contact'}>
              <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-sm uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-950/20">
                Call Business Head
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQPage