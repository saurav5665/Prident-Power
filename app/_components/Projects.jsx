"use client"

import React, { useState , useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Zap, 
  Eye, 
  Link as LinkIcon, 
  Quote, 
  Play, 
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'

const Projects = () => {
  const [filter, setFilter] = useState('All')
  const [playingVideo, setPlayingVideo] = useState(null);
  const swiperRef = useRef(null);

  // Project data
  const projectsData = [
    { title: "Janita Exports Solar Power Plant", location: "150KW – Greater Noida", category: "Commercial", img: "/img/on-grid.png" },
    { title: "New Era School Solar Project", location: "130KW – Ghaziabad", category: "On-Grid Plants", img: "/img/pr2.jpeg" },
    { title: "Shrishti Technologies Solar Plant", location: "120KW – Baddi, Himachal", category: "Commercial", img: "/img/pr3.jpeg" },
    { title: "MNIT Jaipur Solar Installation", location: "100KW – Jaipur", category: "On-Grid Plants", img: "/img/pr4.jpeg" },
    { title: "SRS Hospital Solar Project", location: "100KW – Noida Sector 70", category: "Commercial", img: "/img/pr5.jpeg" },
    { title: "Hindon Public School Solar Plant", location: "10KW – Delhi", category: "Residential Society", img: "/img/off-grid.png" },
    { title: "Prident Solar Pioneer", location: "Off-Grid Installation", category: "Off-Grid Plants", img: "/img/img1.jpg" },
  ];

  const categories = ["All", "On-Grid Plants", "Off-Grid Plants", "Hybrid Solar Plants", "Commercial", "Residential Society"];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  const testimonials = [
    { 
      name: "Ravi Sharma", 
      review: "I opted for a hybrid solar system from Prident, and the installation was smooth and professional. They also helped me claim the government subsidy. Great experience overall!",
      youtubeId: "mKqQWVzrmkQ"
    },
    { 
      name: "Vidya International School", 
      review: "We installed an on-grid solar system for our school. The team provided complete EPC services and took care of all government formalities. Highly satisfied!",
      youtubeId: "8cgDaJWVwdw"
    }
  ];

  return (
    <main className="w-full">
      {/* SECTION 1: HERO BACKGROUND */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/img/civil.png" 
          alt="Engineering Projects" 
          fill 
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <motion.h6 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-400 font-bold uppercase tracking-[0.3em] text-sm mb-4"
          >
            Engineering Excellence
          </motion.h6>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter"
          >
            OUR LATEST <br /> <span className="text-blue-500">SOLAR PROJECTS.</span>
          </motion.h1>
        </div>
      </section>

      {/* SECTION 2: PROJECT GRID WITH FILTER */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-slate-100 pb-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                National Installation Map
              </h2>
              <p className="text-slate-500 font-medium">
                Successfully installed over the last 10 years across multiple institutions.
              </p>
            </div>
            
            {/* Filter Navigation */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                    filter === cat 
                    ? "bg-blue-600 text-white shadow-xl shadow-blue-200" 
                    : "bg-slate-50 text-slate-400 hover:bg-blue-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group"
                >
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-100 shadow-sm transition-all group-hover:shadow-2xl">
                    <Image src={project.img} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <button className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-blue-600 hover:scale-110 transition-transform"><Eye size={20} /></button>
                      <button className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-blue-600 hover:scale-110 transition-transform"><LinkIcon size={20} /></button>
                    </div>
                  </div>
                  <div className="pt-6 px-4">
                    <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-1">{project.location}</p>
                    <h5 className="text-lg font-black text-slate-900 leading-tight">{project.title}</h5>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: YOUTUBE TESTIMONIAL SLIDER */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">What Our Clients Say!</h2>
          </div>

          <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ 
              delay: 5000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            onSlideChange={() => {
              setPlayingVideo(null);
              if (swiperRef.current) swiperRef.current.autoplay.start();
            }} 
            className="testimonial-swiper rounded-[3rem] overflow-hidden bg-white shadow-2xl"
          >
            {testimonials.map((testi, i) => (
              <SwiperSlide key={i}>
                <div className="grid lg:grid-cols-2 items-center min-h-[500px]">
                  <div className="relative aspect-video lg:aspect-square bg-black group overflow-hidden">
                    {playingVideo === i ? (
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${testi.youtubeId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div className="relative w-full h-full">
                        <img 
                          src={`https://img.youtube.com/vi/${testi.youtubeId}/maxresdefault.jpg`}
                          alt={testi.name}
                          className="w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setPlayingVideo(i);
                              if (swiperRef.current) swiperRef.current.autoplay.stop();
                            }}
                            className="h-20 w-20 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 z-50"
                          >
                            <Play fill="currentColor" size={32} />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-10 md:p-20 space-y-6 md:space-y-8">
                    <Quote size={48} className="text-blue-500 opacity-20" />
                    <p className="text-lg md:text-2xl font-medium text-slate-700 italic leading-relaxed">
                      "{testi.review}"
                    </p>
                    <div>
                      <h5 className="text-2xl font-black text-slate-900">{testi.name}</h5>
                      <p className="text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-xs mt-1">
                        Verified Client
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="bg-blue-950 rounded-[3.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <h3 className="text-3xl md:text-5xl font-black mb-6">Ready to Power Your Institution?</h3>
            <p className="text-blue-100/60 mb-10 max-w-2xl mx-auto text-lg">
              Join our portfolio of **150MW+ module mounting** success stories across India.
            </p>
            <Link href={'/contact'}>
            <button className="bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-2xl">
              Book Physical Survey
            </button>
            </Link>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-y-48 translate-x-48 blur-3xl" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Projects