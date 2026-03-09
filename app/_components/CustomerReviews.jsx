"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, CheckCircle2, PlayCircle, Users } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const CustomerReviews = () => {
  // YouTube Video Links
  const videoReviews = [
    "mKqQWVzrmkQ", "8cgDaJWVwdw", "bjkFZY8ROPU", 
    "3oA8O68uGiw", "eVO6D0-sbMw", "R4NtKqG4ti8", 
    "qmnhT1cfjxg", "G1LQ7-WDUWA", "6whDB2BKo2o"
  ];

  // Updated Testimonials with Prident Branding
  const textReviews = [
    {
      name: "Braj Bhushan",
      location: "Uttar Pradesh",
      text: "The Prident team did everything perfectly. My bills have gone down from Rs 4300 to Rs 500-700 a month. They even helped me get a subsidy!",
      rating: 5
    },
    {
      name: "Anish Sengupta",
      location: "Johnson & Johnson",
      text: "I am happy to acknowledge that Prident Power Solutions has met the strictest quality and safety norms.",
      rating: 5
    },
    {
      name: "Ravi Sharma",
      location: "Ghaziabad",
      text: "Professional engineering at its best. Their 10+ years of experience shows in the neatness of the installation.",
      rating: 5
    }
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
              <Users className="w-4 h-4" />
              Trusted by 6000+ Families
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              90% of customers <br />
              <span className="text-blue-600">recommend us!</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Don't just believe us — hear directly from our satisfied homeowners and partners across India.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:w-1/3 bg-blue-950 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden"
          >
            <Quote className="absolute -top-4 -right-4 w-24 h-24 text-white/5" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-blue-400 text-blue-400" />
              ))}
            </div>
            <p className="text-lg italic font-medium leading-relaxed relative z-10">
              "Prident met the strictest Quality & Safety norms for our project. Impeccable service."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold">AS</div>
              <div>
                <p className="font-bold text-sm">Anish Sengupta</p>
                <p className="text-xs text-blue-400">EHS & S, Johnson & Johnson</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Video Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {videoReviews.map((id, index) => (
            <motion.div 
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg border-4 border-white transition-all group-hover:shadow-2xl group-hover:border-blue-100">
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${id}`} 
                  title="YouTube Solar Review"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all pointer-events-none" />
              </div>
              <div className="mt-4 flex items-center gap-2 px-2">
                <PlayCircle className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-bold text-slate-700 uppercase tracking-tighter">Verified Installation Story</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Text Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {textReviews.map((rev, i) => (
            <Card key={i} className="border-none shadow-sm rounded-3xl bg-white hover:shadow-xl transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                    ))}
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                </div>
                <p className="text-slate-600 italic leading-relaxed">"{rev.text}"</p>
                <div className="pt-4 border-t border-slate-50">
                  <p className="font-black text-slate-900">{rev.name}</p>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">{rev.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CustomerReviews;