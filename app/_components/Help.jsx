"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Wrench, 
  FileText 
} from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const Help = () => {
  const contactMethods = [
    {
      icon: PhoneCall,
      title: "Call Business Head",
      detail: "+91 9540263662",
      desc: "Direct line for project management and urgent technical queries.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      detail: "gaurav.sharma@pridentpowersolutions.com",
      desc: "Send us your site plans or AMC service requests for review.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: MapPin,
      title: "Main Office",
      detail: "Jaitpur Pusta Road, South East Delhi",
      desc: "Coordinating solar commissioning projects nationwide.",
      color: "bg-slate-50 text-slate-600"
    }
  ];

  return (
    <section className="w-full min-h-screen bg-white py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Reliable Nationwide Support
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
            Help & <span className="text-blue-600">Support.</span>
          </h1>
          <p className="text-slate-500 text-sm md:text-lg font-medium leading-relaxed">
            Prident Power Solutions provides dedicated information sharing and technical support 
            to ensure your solar plant operates at global engineering standards.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="group h-full border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(30,64,175,0.1)] transition-all duration-500 rounded-[2.5rem] overflow-hidden bg-white flex flex-col">
                <CardContent className="p-8 md:p-12 flex flex-col items-center text-center flex-grow">
                  {/* Icon Container with Premium Glow */}
                  <div className={`p-5 rounded-3xl mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm ${method.color}`}>
                    <method.icon className="w-7 h-7" />
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight uppercase">
                        {method.title}
                      </h3>
                      <p className="text-blue-600 font-black text-sm md:text-base mb-4 tracking-wide break-words">
                        {method.detail}
                      </p>
                    </div>
                    
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium px-2">
                      {method.desc}
                    </p>
                  </div>
                </CardContent>
                
                {/* Decorative Bottom Bar */}
                <div className="h-1.5 w-0 group-hover:w-full bg-blue-600 transition-all duration-700 ease-in-out" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technical Support Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-50 rounded-[3rem] p-8 md:p-16">
          <div className="space-y-8">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight">
              Specialized Engineering <br />
              <span className="text-blue-600">Assistance.</span>
            </h2>
            <div className="space-y-6">
              {[
                { icon: Wrench, title: "O&M and AMC Support", text: "Performance optimization for your installation projects." },
                { icon: MessageSquare, title: "Subsidy Consultation", text: "Technical help for government approval and subsidy applications." },
                { icon: FileText, title: "Site Surveys", text: "Professional site analysis and project feasibility planning." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 h-10 w-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">{item.title}</h4>
                    <p className="text-slate-500 text-xs md:text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-950 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <Clock className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-xl md:text-2xl font-bold mb-4">Response Commitment</h3>
              <p className="text-blue-100/70 text-sm md:text-base mb-8 leading-relaxed">
                As a professional solar energy company, we prioritize commitment and teamwork. 
                Expect a technical response within 24 hours for all project-related queries.
              </p>
              <Link href={'/contact'}>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-7 rounded-2xl text-lg shadow-xl shadow-blue-950/20 transition-transform active:scale-95">
                Start Support Chat
              </Button>
              </Link>
            </div>
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Help