"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Zap,
  ShieldCheck,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileDropdown, setMobileDropdown] = useState(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Know Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    // {
      //   name: "Offers",
      //   href: "#",
      //   hasDropdown: true,
      //   subItems: [
        //     { name: "Home", href: "/home" },
        //     { name: "Housing Subsidy", href: "/housing-subsidy" },
        //     { name: "Commercial Subsidy", href: "/commercial-subsidy" },
        //   ],
        // },
        {
          name: "Services",
          href: "#",
          hasDropdown: true,
          subItems: [
            { name: "On-Grid Plants", href: "/on-grid" },
            { name: "Off-Grid Plants", href: "/off-grid" },
            { name: "Hybrid Solar Plants", href: "/hybrid" },
          ],
        },
        {
          name: "More",
          href: "#",
          hasDropdown: true,
          subItems: [
            { name: "Solar Calculator", href: "/solar-calculator" },
            { name: "Know Your Requirement", href: "/requirement" },
            { name: "Government Subsidy", href: "/subsidy-help" },
            { name: "Consultation & Subsidy Support", href: "/consultation" },
            { name: "Help & Support", href: "/help" },
          ],
        },
        { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm">
      
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex h-24 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 lg:h-14 lg:w-14 transition-transform group-hover:scale-110">
              <Image
                src="/Prident_Logo.png"
                alt="Prident Power Solutions"
                fill
                className="object-contain"
              />
            </div>

            <div className="flex flex-col border-l-2 border-blue-100 pl-3">
              <span className="text-lg lg:text-xl font-black text-slate-900 leading-none tracking-tight">
                PRIDENT
                <span className="text-blue-600 font-extrabold">
                  {" "}POWER
                </span>
              </span>
              <span className="text-[9px] lg:text-[10px] font-bold text-blue-500 uppercase tracking-[0.15em] mt-1">
                SOLUTIONS
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group py-8"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1.5 text-sm font-bold text-slate-600 group-hover:text-blue-600 transition-all"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-slate-300 transition-transform duration-300",
                        activeDropdown === link.name &&
                          "rotate-180 text-blue-500"
                      )}
                    />
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {link.hasDropdown && (
                  <div
                    className={cn(
                      "absolute top-full left-0 w-64 bg-white border border-blue-50 shadow-xl rounded-2xl p-4 transition-all duration-300 origin-top",
                      activeDropdown === link.name
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
                    )}
                  >
                    <div className="flex flex-col gap-1">
                      {link.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="px-4 py-3 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors flex items-center justify-between group/item"
                        >
                          {sub.name}
                          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <span className="absolute bottom-6 left-0 w-0 h-1 bg-blue-500 rounded-full transition-all group-hover:w-full" />
              </div>
            ))}
          </div>

          {/* DESKTOP BUTTON */}
          <div className="hidden lg:flex items-center">
            <Link href={'/contact'}>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-7 py-6 font-bold flex items-center gap-3 group transition-all hover:shadow-lg hover:shadow-blue-100">
              <Award className="h-4 w-4 text-blue-200" />
              Get Free Quote
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-2 rounded-xl bg-blue-50 text-blue-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-24 bg-white z-[999] transition-all duration-300",
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <div className="h-[calc(100vh-96px)] overflow-y-auto p-8 flex flex-col gap-4 bg-white">

          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              
              <button
                className="text-lg font-bold text-slate-800 py-3 flex justify-between items-center w-full text-left"
                onClick={() => {
                  if (link.hasDropdown) {
                    setMobileDropdown(
                      mobileDropdown === link.name ? null : link.name
                    )
                  } else {
                    setIsOpen(false)
                  }
                }}
              >
                <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-semibold text-slate-500 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform duration-300",
                      mobileDropdown === link.name &&
                        "rotate-180 text-blue-600"
                    )}
                  />
                )}
              </button>

              {link.hasDropdown && mobileDropdown === link.name && (
                <div className="flex flex-col ml-4 border-l-2 border-blue-100 pl-4 gap-3 my-2">
                  {link.subItems.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="text-sm font-semibold text-slate-500 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Info Cards - Added Red Accent for Zap */}
          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-blue-50">
            <div className="flex flex-col items-center p-3 bg-blue-50 rounded-xl">
              <ShieldCheck className="h-6 w-6 text-blue-600 mb-1" />
              <span className="text-[10px] font-black text-blue-800 uppercase">
                ISO Certified
              </span>
            </div>

            <div className="flex flex-col items-center p-3 bg-blue-50 rounded-xl">
              <Zap className="h-6 w-6 text-red-500 mb-1" /> 
              <span className="text-[10px] font-black text-blue-800 uppercase">
                150MW+ Work
              </span>
            </div>
          </div>
          <Link href={'/contact'}>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-8 text-lg rounded-2xl shadow-xl shadow-blue-100">
            Get A Free Quote
          </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar