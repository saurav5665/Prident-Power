"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Instagram, 
  Youtube, 
  Play, 
  ShieldCheck, 
  Globe 
} from 'lucide-react'

const SocialMedia = () => {
  const instagramReels = [
    "DJi6-uFRODe", "C0fwq3mJQqP",
    "DOx3RfGE9R7", "DOqHeTmE1HN", "DOVcAfIExbu", 
    "DKHsG8ZzxRd", "DOAtteUkw-z", "DNxjTmy5iSr"
  ];

  const youtubeVideos = [
    "mKqQWVzrmkQ", "8cgDaJWVwdw", "bjkFZY8ROPU", 
    "3oA8O68uGiw", "eVO6D0-sbMw", "R4NtKqG4ti8", 
    "qmnhT1cfjxg", "G1LQ7-WDUWA", "6whDB2BKo2o"
  ];

  return (
    <section className="w-full py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <Globe className="w-3.5 h-3.5" />
            Nationwide Project Documentation
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
            Our Digital <span className="text-blue-600">Presence.</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            Watch our latest project highlights and success stories as we commission 
            solar power plants across India.
          </p>
        </div>

        {/* Instagram Reels Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-6">
            <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-2.5 rounded-xl text-white">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Instagram Highlights</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Recent Field Reels</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {instagramReels.map((id, index) => (
              <motion.div 
                key={id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="relative aspect-[9/16] bg-slate-200 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group"
              >
                <iframe 
                  src={`https://www.instagram.com/reel/${id}/embed`}
                  className="w-full h-full border-0"
                  allowFullScreen
                  title={`Instagram Reel ${index}`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* YouTube Videos Section */}
        <div className="bg-white rounded-[4rem] p-8 md:p-16 shadow-2xl border border-slate-100">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-red-600 p-2.5 rounded-xl text-white">
              <Youtube className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">YouTube Success Stories</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Project Walkthroughs</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {youtubeVideos.map((id, index) => (
              <motion.div 
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-video bg-slate-900 rounded-[2rem] overflow-hidden shadow-lg group-hover:shadow-2xl transition-all">
                  <iframe 
                    src={`https://www.youtube.com/embed/${id}`}
                    className="w-full h-full border-0"
                    allowFullScreen
                    title={`YouTube Video ${index}`}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent pointer-events-none transition-all" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Verification Badge */}
          <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
              <p className="text-sm font-bold text-slate-700">
                150MW+ installation history documented across platforms.
              </p>
            </div>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100">
              Subscribe For Updates
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialMedia;