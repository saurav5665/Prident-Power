"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, CheckCircle2, Users, Building2, MapPin } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const CustomerReviews = () => {
  // Expanded Testimonials with Prident Branding
  const reviews = [
    {
      name: "Braj Bhushan",
      title: "Residential Homeowner",
      location: "Uttar Pradesh",
      text: "The Prident team did everything perfectly. My bills have gone down from Rs 4300 to Rs 500-700 a month. They even handled the entire subsidy process for me!",
      rating: 5
    },
    {
      name: "Anish Sengupta",
      title: "EHS & S, Johnson & Johnson",
      location: "Corporate Client",
      text: "I am happy to acknowledge that Prident Power Solutions has met the strictest quality and safety norms for our facility. Professional execution.",
      rating: 5
    },
    {
      name: "Ravi Sharma",
      title: "Residential Project",
      location: "Ghaziabad",
      text: "Professional engineering at its best. Their 10+ years of experience shows in the neatness of the installation and the efficiency of the panels.",
      rating: 5
    },
    {
      name: "Sunita Devi",
      title: "Solar Subsidy Recipient",
      location: "Noida",
      text: "I was worried about the paperwork, but the team guided me through every step. The subsidy was credited exactly when they promised.",
      rating: 5
    },
    {
      name: "Rajesh Khandelwal",
      title: "Factory Owner",
      location: "Meerut",
      text: "The ROI on our commercial plant has been excellent. Prident provided a detailed technical audit that was accurate to the dot.",
      rating: 5
    },
    {
      name: "Dr. Manish Gupta",
      title: "Hospital Director",
      location: "Noida",
      text: "Absolute peace of mind. We needed 24/7 reliability for our operations, and the hybrid system they designed has been flawless.",
      rating: 5
    }
  ];

  return (
    <section className="w-full py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6"
          >
            <Users className="w-4 h-4" /> 6000+ Happy Customers
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Trusted by the <span className="text-blue-600">Best in India</span>
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-2xl transition-all duration-300 rounded-[2.5rem]">
                <CardContent className="p-10 space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="h-12 w-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                      <Quote className="w-6 h-6" />
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 italic leading-relaxed text-sm">"{rev.text}"</p>
                  
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="font-black text-slate-900 text-sm">{rev.name}</p>
                      <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{rev.title}</p>
                    </div>
                    <div className="flex items-center gap-1 text-slate-400">
                      <MapPin size={12} />
                      <span className="text-[10px] font-bold uppercase">{rev.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Social Proof */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-8 items-center bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm"
        >
           <div className="flex items-center gap-2 text-slate-900 font-black">
              <CheckCircle2 className="text-blue-600" /> 150MW+ Installed
           </div>
           <div className="flex items-center gap-2 text-slate-900 font-black">
              <Building2 className="text-blue-600" /> 10+ Years Experience
           </div>
           <div className="flex items-center gap-2 text-slate-900 font-black">
              <Star className="text-blue-600 fill-blue-600" /> 4.9/5 Average Rating
           </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CustomerReviews;