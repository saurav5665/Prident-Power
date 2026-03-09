import React from "react";
import { Shield, Lock, Eye, Users, Cookie, Mail, Phone, MapPin, Zap } from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "January 2026";

  return (
    <div className="min-h-screen bg-slate-50 py-16 md:py-24 selection:bg-emerald-100">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header Section: Industrial Clean Aesthetic */}
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16 border-b border-slate-200 pb-12">
          <div className="flex items-center gap-2 mb-4 text-emerald-700 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
            <Zap className="w-4 h-4 fill-emerald-600" />
            Compliance & Legal Standards
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9] mb-4">
            PRIVACY <span className="text-emerald-600">POLICY.</span>
          </h1>
          <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-slate-100">
          <div className="p-8 md:p-12 space-y-12 text-slate-600 leading-relaxed font-medium">
            
            {/* 1. Introduction */}
            <section>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-3">
                <Lock className="text-emerald-600" size={24} /> 1. Introduction
              </h2>
              <p className="text-sm md:text-base border-l-4 border-emerald-500/20 pl-6">
                Archtronic Systems (“we”, “our”, “us”) respects your privacy and is committed to upholding the security of the information supplied by every person (“User”/“You”) accessing <span className="text-emerald-700 font-bold underline decoration-emerald-200">www.archtronicsystems.com</span>. 
                By accessing this website, you signify that you have read, understood, and agree to be bound by this Privacy Policy in accordance with the <strong>Information Technology Act, 2000</strong>.
              </p>
            </section>

            <div className="h-px bg-slate-100 w-full" />

            {/* 2. Information Collection */}
            <section>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-3">
                <Eye className="text-emerald-600" size={24} /> 2. Information We Collect
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 transition-all hover:border-emerald-200">
                  <h4 className="font-black text-emerald-700 uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
                    <Shield className="w-3 h-3" /> Personal Data
                  </h4>
                  <ul className="space-y-3 text-xs md:text-sm font-bold text-slate-800">
                    <li>• Name, Email, and Phone Number</li>
                    <li>• Biographical & Demographic Info</li>
                    <li>• Financial/Payment related info</li>
                    <li>• Identity Proof Numbers</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 transition-all hover:border-emerald-200">
                  <h4 className="font-black text-emerald-700 uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
                    <Zap className="w-3 h-3" /> Technical Data
                  </h4>
                  <ul className="space-y-3 text-xs md:text-sm font-bold text-slate-800">
                    <li>• IP Address & Device Type</li>
                    <li>• Browsing and Search History</li>
                    <li>• SMS Inbox Access (with consent)</li>
                    <li>• Geolocation & Movement Data</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="h-px bg-slate-100 w-full" />

            {/* 3. Usage of Information */}
            <section>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-3">
                <Users className="text-emerald-600" size={24} /> 3. How We Use Data
              </h2>
              <p className="mb-6 text-sm font-bold text-slate-400 uppercase tracking-widest">Internal Logistics & Engineering Usage:</p>
              <div className="grid md:grid-cols-2 gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-wider">
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 text-slate-900 shadow-sm transition-all hover:scale-[1.02]">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full shrink-0" /> Respond to Solar Quotations
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 text-slate-900 shadow-sm transition-all hover:scale-[1.02]">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full shrink-0" /> Customize Advertisements
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 text-slate-900 shadow-sm transition-all hover:scale-[1.02]">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full shrink-0" /> Debug and Repair Errors
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 text-slate-900 shadow-sm transition-all hover:scale-[1.02]">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full shrink-0" /> Legal & Regulatory Obligations
                </div>
              </div>
            </section>

            {/* 4. Cookies & Security: Dark Industrial Callout */}
            <section className="bg-[#022c22] p-8 md:p-12 rounded-2xl text-white relative overflow-hidden shadow-2xl">
              <Cookie className="absolute -top-10 -right-10 w-48 h-48 opacity-10 text-emerald-400 rotate-12" />
              <h2 className="text-2xl font-black uppercase tracking-tight mb-4 relative z-10">
                COOKIES & <span className="text-emerald-400">DATA SECURITY.</span>
              </h2>
              <p className="text-emerald-100/70 mb-8 text-xs md:text-sm font-medium relative z-10 leading-relaxed">
                We use cookies and retargeting tools to analyze trends and provide meaningful advertisements. 
                We implement rigorous technical standards (IS/ISO/IEC 27001) to protect your SPDI. However, as no method is 100% secure, your use of the website remains at your sole risk.
              </p>
              <div className="inline-block px-5 py-2.5 bg-white/10 rounded-xl border border-white/10 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] relative z-10">
                Zero-Tolerance: No Rental or Sale of Personal Data.
              </div>
            </section>

            {/* 5. Grievance Redressal */}
            <section className="pt-6">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight mb-10">
                Grievance & Contact
              </h2>
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-8">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-emerald-400 shrink-0 shadow-lg">
                      <Mail size={20}/>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">Official Inquiries</p>
                      <p className="font-bold text-slate-900 text-sm md:text-base tracking-tight">archtronicsystem@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-emerald-400 shrink-0 shadow-lg">
                      <Phone size={20}/>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">Technical Support</p>
                      <p className="font-bold text-slate-900 text-sm md:text-base tracking-tight">+91 9808170015</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 bg-slate-100 rounded-2xl border border-slate-200">
                <h4 className="text-[10px] font-black text-emerald-700 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <MapPin size={12} className="fill-emerald-200" /> Grievance Officer
                </h4>
                <p className="font-black text-xl text-slate-900 mb-2 leading-none italic">
                    Er. Saurabh Sharma
                </p>
                <div className="space-y-1">
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                    Corporate Office
                    </p>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-bold uppercase tracking-wider">
                    Santpura, Gali No. 2, Govind Puri, <br />
                    Modinagar, Ghaziabad, UP – 201201
                    </p>
                </div>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-12 text-center pb-8">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            ARCHTRONIC SYSTEMS — ENGINEERING THE FUTURE.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;