"use client"

import React from 'react'
import Link from 'next/link'
import { 
  MapPin, Clock, Phone, Facebook, Linkedin, Instagram 
} from 'lucide-react'

const Header = () => {
  return (
    <header className="w-full">
      {/* --- TOPBAR --- */}
      {/* Updated to Blue-950 for a deep, professional Corporate theme */}
      <div className="w-full bg-blue-950 text-blue-50/80 py-2.5 border-b border-blue-900/50">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="flex justify-between items-center text-[10px] md:text-xs font-medium uppercase tracking-wider">
            
            {/* Left Side: Location & Hours */}
            <div className="flex items-center gap-4 md:gap-6">
              <div className="hidden md:flex items-center gap-2 hover:text-blue-200 transition-colors">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>South East Delhi</span>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>9:30AM – 6:30PM</span>
              </div>
            </div>

            {/* Right Side: Phone & Socials */}
            <div className="flex items-center gap-3 md:gap-5">
              <a 
                href="tel:+919540263662" 
                className="flex items-center gap-2 hover:text-blue-200 transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400 group-hover:animate-pulse" />
                <span className="hidden sm:inline font-bold">+91 9540263662</span>
              </a>
              
              {/* Social Icons with Blue divider */}
              <div className="flex items-center border-l border-blue-800/50 ml-2 pl-3 md:ml-4 md:pl-4 gap-3">
                <Link href="#" className="hover:text-blue-300 transition-all hover:-translate-y-0.5">
                  <Facebook className="w-3.5 h-3.5" />
                </Link>
                <Link href="#" className="hover:text-blue-300 transition-all hover:-translate-y-0.5">
                  <Linkedin className="w-3.5 h-3.5" />
                </Link>
                <Link 
                  href="#" 
                  target="_blank" 
                  className="hover:text-blue-300 transition-all hover:-translate-y-0.5"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header