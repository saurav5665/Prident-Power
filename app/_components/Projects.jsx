"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, Zap, ArrowRight, MapPin, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"

const Projects = () => {
  const [filter, setFilter] = useState('All')

  // The 7 images available for rotation
  const projectImages = [
    "/img/pr2.jpg", 
    "/img/pr3.jpg", 
    "/img/pr4.jpg", 
    "/img/pr5.jpg", 
    "/img/pr6.jpg",
    "/about.jpeg",
    "/about-solar.jpeg",
  ];

  // Full dataset mapped to images
  const projectsData = [
    { title: "Maa Durga Enterprises", location: "Meerut", capacity: "200 kW", category: "Industrial" },
    { title: "CERT College", location: "Meerut", capacity: "100 kW", category: "Institutional" },
    { title: "Bal Jagat Sr. Sec. School", location: "Ghaziabad", capacity: "85 kW", category: "Institutional" },
    { title: "First Impression", location: "Noida", capacity: "75 kW", category: "Commercial" },
    { title: "Karawal Nagar Site", location: "Delhi", capacity: "70 kW", category: "Residential" },
    { title: "Saraswati Shiksha Niketan", location: "Ghaziabad", capacity: "65 kW", category: "Institutional" },
    { title: "Prescott Pharmgel", location: "Khekra", capacity: "50 kW", category: "Industrial" },
    { title: "Silico and Chemico", location: "Khurja", capacity: "50 kW", category: "Industrial" },
    { title: "Vivid Chem", location: "Sahibabad", capacity: "40 kW", category: "Industrial" },
    { title: "Vidya International School", location: "Vijay Nagar", capacity: "40 kVA", category: "Institutional" },
    { title: "Raj Nagar Site", location: "Ghaziabad", capacity: "30 kW", category: "Residential" },
    { title: "Govt Polytechnic", location: "Sardhana", capacity: "20 kW", category: "Institutional" },
    { title: "Govt Polytechnic2", location: "Balrampur", capacity: "20 kW", category: "Institutional" },
    { title: "Sohna Site", location: "Gurgaon", capacity: "20 kW", category: "Residential" },
    { title: "Sector 51 Site", location: "Noida", capacity: "16 kW", category: "Residential" },
    { title: "Landcraft Golf Links", location: "Ghaziabad", capacity: "15 kW", category: "Residential" },
    { title: "Residential & Institutional", location: "India", capacity: "10 kW+", category: "Residential" },
  ].map((p, i) => ({ ...p, img: projectImages[i % projectImages.length] }));

  const categories = ["All", "Industrial", "Institutional", "Commercial", "Residential"];
  const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter);

  return (
    <main className="w-full bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-blue-950 text-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h6 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs mb-4"
          >
            Engineering Excellence
          </motion.h6>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter"
          >OUR PROJECTS
          </motion.h1>
        </div>
      </section> 

      {/* Grid Section */}
      <section className="py-16 container mx-auto px-6">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                filter === cat 
                ? "bg-blue-600 text-white shadow-lg" 
                : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image 
                    src={project.img} 
                    alt={project.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                    {project.capacity}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 text-blue-500 mb-3">
                    <Building2 size={14} />
                    <span className="text-[10px] uppercase font-bold tracking-widest">{project.category}</span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-1 leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-400 font-medium text-xs mt-4">
                    <MapPin size={12} />
                    {project.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  )
}

export default Projects