"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageCircle, 
  ShieldCheck 
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  // Direct WhatsApp Integration Logic
  const sendToWhatsApp = (e) => {
    e.preventDefault()
    const phoneNumber = "919540263662" // Updated Prident Business Contact
    const text = `*New Solar Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank')
  }

  return (
    <main className="w-full bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Reliable Nationwide Support
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
            Let's Engineer Your <span className="text-blue-600">Solar Future.</span>
          </h1>
          <p className="text-slate-500 text-lg font-medium">
            Have a question or need a custom solar solution? Our team is ready to assist you across India.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            
            {/* Contact Form Section */}
            <div className="p-8 md:p-16 lg:p-20">
              <div className="mb-10">
                <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-widest">Get in Touch</h2>
                <p className="text-slate-500 text-sm">
                  Fill out the form and our team will get back to you via WhatsApp or call shortly.
                </p>
              </div>

              <form onSubmit={sendToWhatsApp} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Your Name</label>
                    <Input 
                      required 
                      placeholder="John Doe"
                      className="bg-slate-50 border-none h-14 rounded-xl focus-visible:ring-blue-600"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Your Email</label>
                    <Input 
                      required 
                      type="email" 
                      placeholder="john@example.com"
                      className="bg-slate-50 border-none h-14 rounded-xl focus-visible:ring-blue-600"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Subject</label>
                  <Input 
                    required 
                    placeholder="Residential Solar Inquiry"
                    className="bg-slate-50 border-none h-14 rounded-xl focus-visible:ring-blue-600"
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Message</label>
                  <Textarea 
                    required 
                    placeholder="Tell us about your project requirements..."
                    className="bg-slate-50 border-none min-h-[150px] rounded-xl focus-visible:ring-blue-600"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-950 hover:bg-blue-700 text-white h-16 rounded-xl font-black uppercase tracking-widest shadow-xl transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send via WhatsApp
                </Button>
              </form>
            </div>

            {/* Map Section */}
            <div className="relative min-h-[400px] lg:min-h-full bg-slate-100">
              <iframe 
                className="absolute inset-0 w-full h-full transition-all duration-700" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.634690315758!2d77.3006!3d28.5085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd2b388b17c1%3A0xe54e5b9275b11a57!2sJaitpur%20Pusta%20Road%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 lg:mt-24">
          <div className="flex items-center gap-6 p-8 bg-slate-50 rounded-[2rem]">
            <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Call Us</p>
              <p className="font-bold text-slate-900">+91 9540263662</p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-8 bg-slate-50 rounded-[2rem]">
            <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Email Us</p>
              <p className="font-bold text-slate-900 underline">gaurav.sharma@pridentpowersolutions.com</p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-8 bg-slate-50 rounded-[2rem]">
            <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Office</p>
              <p className="font-bold text-slate-900">South East Delhi</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ContactPage