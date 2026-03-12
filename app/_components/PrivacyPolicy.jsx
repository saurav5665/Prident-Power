"use client"

import React from "react";
import { Shield, Lock, Eye, Users, Cookie, Mail, Phone, MapPin, Zap, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  const lastUpdated = "January 2026";

  return (
    <div className="min-h-screen bg-white py-12 md:py-24 selection:bg-blue-100 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* SECTION 1: HERO HEADER */}
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-20 border-b border-slate-100 pb-12">
          <Badge className="bg-blue-500/10 text-blue-600 border-none px-4 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-6">
            <Zap className="w-4 h-4 mr-2 fill-blue-600" />
            Compliance & Legal Standards
          </Badge>
          <h1 className="text-4xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9] mb-6">
            PRIVACY <span className="text-blue-600">POLICY.</span>
          </h1>
          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
            Prident Power Solutions • Last Updated: {lastUpdated}
          </p>
        </div>

        {/* SECTION 2: LEGAL CONTENT CARD */}
        <Card className="shadow-2xl rounded-[2rem] md:rounded-[3rem] overflow-hidden border-slate-100 border-2">
          <CardContent className="p-8 md:p-16 space-y-12 text-slate-600 leading-relaxed font-medium">
            
            {/* 1. Introduction */}
            <section>
              <h2 className="text-xl md:text-3xl font-black text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-3">
                <Lock className="text-blue-600" size={28} /> 1. Introduction
              </h2>
              <div className="border-l-4 border-blue-500 pl-6">
                <p className="text-sm md:text-lg">
                  Prident Power Solutions (“we”, “our”, “us”) respects your privacy and is committed to upholding the security of the information supplied by every person (“User”/“You”) accessing <span className="text-blue-600 font-bold underline">www.pridentpowersolutions.com</span>. 
                  By using this website, you agree to be bound by this policy in accordance with the <strong>Information Technology Act, 2000</strong>.
                </p>
              </div>
            </section>

            <Separator className="bg-slate-100" />

            {/* 2. Information Collection */}
            <section>
              <h2 className="text-xl md:text-3xl font-black text-slate-900 uppercase tracking-tight mb-8 flex items-center gap-3">
                <Eye className="text-blue-600" size={28} /> 2. Data Acquisition
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-blue-200 transition-colors group">
                  <h4 className="font-black text-blue-600 uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
                    <Shield className="w-4 h-4 group-hover:fill-blue-600" /> Personal Records
                  </h4>
                  <ul className="space-y-3 text-xs md:text-sm font-bold text-slate-800">
                    <li>• Name, Email, and Phone Number</li>
                    <li>• Biographical & Demographic Info</li>
                    <li>• Financial/Payment related info</li>
                    <li>• Identity Proof Numbers</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-blue-200 transition-colors group">
                  <h4 className="font-black text-blue-600 uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4 group-hover:fill-blue-600" /> System Logs
                  </h4>
                  <ul className="space-y-3 text-xs md:text-sm font-bold text-slate-800">
                    <li>• IP Address & Device Signature</li>
                    <li>• Browsing and Search Patterns</li>
                    <li>• SMS Inbox Access (with consent)</li>
                    <li>• Geolocation & Movement Data</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator className="bg-slate-100" />

            {/* 3. Usage */}
            <section>
              <h2 className="text-xl md:text-3xl font-black text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-3">
                <Users className="text-blue-600" size={28} /> 3. Data Processing
              </h2>
              <p className="mb-8 text-sm font-bold text-slate-400 uppercase tracking-widest">Core Operational Usage:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Process Solar Quotations",
                  "Analyze System Feasibility",
                  "Repair Errors & Debugging",
                  "Regulatory Subsidy Filing"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 text-slate-900 shadow-sm hover:scale-[1.02] transition-transform">
                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full shrink-0 animate-pulse" />
                    <span className="text-[11px] font-black uppercase tracking-wider">{text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Cookies & Security Callout */}
            <section className="bg-[#020617] p-10 md:p-14 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
              <Cookie className="absolute -top-12 -right-12 w-64 h-64 opacity-10 text-blue-400 rotate-12 pointer-events-none" />
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-6 relative z-10">
                COOKIES & <span className="text-blue-500">SECURITY.</span>
              </h2>
              <p className="text-blue-100/70 mb-10 text-sm md:text-lg font-medium relative z-10 leading-relaxed">
                Prident Power Solutions implements rigorous technical standards (IS/ISO/IEC 27001) to protect your Sensitive Personal Data. While we strive for absolute security, confidentiality over the internet cannot be 100% guaranteed.
              </p>
              <Badge className="bg-blue-600 hover:bg-blue-500 text-white border-none py-2 px-6 rounded-full uppercase tracking-widest text-[9px] md:text-[10px] relative z-10 font-black">
                Zero-Trade: No Sale of Personal Data
              </Badge>
            </section>

            {/* 5. Contact & Grievance */}
            <section className="pt-8">
              <h2 className="text-xl md:text-3xl font-black text-slate-900 uppercase tracking-tight mb-12">
                Contact Gateway
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-10">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-blue-400 shrink-0 shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Mail size={24}/>
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Official Email</p>
                      <p className="font-bold text-slate-900 text-sm md:text-lg break-all">gaurav.sharma@pridentpowersolutions.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-blue-400 shrink-0 shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Phone size={24}/>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Support Helpline</p>
                      <p className="font-bold text-slate-900 text-sm md:text-lg tracking-widest">+91 9540263662</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 md:p-10 bg-slate-50 rounded-[2.5rem] border-2 border-slate-100 relative group">
                  <h4 className="text-[10px] font-black text-blue-700 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <MapPin size={12} className="fill-blue-200" /> Reg. Office
                  </h4>
                  <div className="space-y-4">
                    <p className="font-black text-xl text-slate-900 italic leading-none group-hover:text-blue-600 transition-colors">
                        Prident Power Solutions
                    </p>
                    <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed font-bold uppercase tracking-[0.1em]">
                      Ground Floor, M – 171, Jaitpur Pusta Road, <br />
                      Hari Nagar Extension, South East Delhi, 110044
                    </p>
                  </div>
                  <Globe className="absolute bottom-6 right-6 w-12 h-12 text-slate-200 opacity-20" />
                </div>
              </div>
            </section>
          </CardContent>
        </Card>

        {/* SECTION 3: FOOTER CALL-OUT */}
        <div className="mt-16 text-center pb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 px-6 leading-loose">
            PRIDENT POWER SOLUTIONS — DIGITAL PRESENCE. <br />
            ENGINEERING EXCELLENCE SINCE 2017.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;