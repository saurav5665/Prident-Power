"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Zap, Layout, TrendingUp, CreditCard, Leaf } from 'lucide-react'
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

const SolarCalculator = () => {
  const [avgBill, setAvgBill] = useState(5000)
  const [emiTenure, setEmiTenure] = useState(60)
  const [results, setResults] = useState({
    systemSize: 0,
    roofArea: 0,
    monthlySavings: 0,
    yearlySavings: 0,
    estimatedCost: 0,
    monthlyEmi: 0
  })

  useEffect(() => {
    const energyRate = 8 
    const unitsPerMonth = avgBill / energyRate
    const systemSize = (unitsPerMonth / 120).toFixed(2) 
    const roofArea = (systemSize * 80).toFixed(0) 
    const yearlySavings = (avgBill * 0.9 * 12)
    const costPerKW = 65000 
    const estimatedCost = Math.round(systemSize * costPerKW)
    const interestRate = 0.09 / 12 
    const emi = Math.round((estimatedCost * interestRate * Math.pow(1 + interestRate, emiTenure)) / (Math.pow(1 + interestRate, emiTenure) - 1))

    setResults({
      systemSize,
      roofArea,
      yearlySavings: yearlySavings.toLocaleString('en-IN'),
      estimatedCost: estimatedCost.toLocaleString('en-IN'),
      monthlyEmi: emi.toLocaleString('en-IN')
    })
  }, [avgBill, emiTenure])

  return (
    <section className="w-full py-10 md:py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Title Section */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">Calculate Your Solar Savings Now!</h2>
          <p className="text-slate-500 text-sm md:text-base">Unlock savings, build that dream fund, and start ticking off your checklist.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          
          {/* Left Side: Inputs */}
          <div className="space-y-12">
            <div className="bg-slate-50 p-6 md:p-10 rounded-2xl">
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase text-slate-500">Avg electricity bill</label>
                  <div className="bg-slate-900 text-white px-4 py-2 rounded text-lg font-bold italic">₹{avgBill}</div>
                </div>
                <Slider defaultValue={[5000]} max={50000} step={500} onValueChange={(v) => setAvgBill(v[0])} />
                <div className="flex justify-between text-[10px] font-bold text-slate-400">
                  <span>Min. 500</span>
                  <span>Max ₹50,000</span>
                </div>
              </div>
            </div>

            {/* Description Text */}
            <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
              <h3 className="text-lg font-bold text-slate-900">Why Use the Prident Solar Panel Calculator?</h3>
              <p>Our intelligent solar panel calculator for home is powered by region-specific data and takes into account electricity tariffs and panel degradation.</p>
              <ul className="space-y-2 list-none">
                <li>✅ Estimate Solar Savings instantly</li>
                <li>📏 Size Your Solar System accurately</li>
                <li>💰 Calculate Investment & ROI</li>
              </ul>
            </div>
          </div>

          {/* Right Side: Results */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-slate-200 p-6 rounded-xl text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Required System Size</p>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">{results.systemSize} kw</p>
              </div>
              <div className="border border-slate-200 p-6 rounded-xl text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Roof Area</p>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">{results.roofArea} sq. ft.</p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 relative overflow-hidden">
               <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Your Solar Savings (Yearly)</p>
                    <p className="text-4xl font-black text-blue-600">₹{results.yearlySavings}</p>
                  </div>
                  <div className="text-xs font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full uppercase">
                    5-Year Guaranteed
                  </div>
               </div>
            </div>

            {/* EMI Section */}
            <div className="border border-slate-200 p-8 rounded-xl space-y-6">
              <div className="flex items-center gap-2 border-b pb-4">
                <CreditCard className="w-5 h-5 text-blue-600" />
                <h4 className="font-bold text-slate-900 uppercase text-sm tracking-widest">Buy solar at ₹0 downpayment</h4>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                   <p className="text-sm font-medium text-slate-500">EMI tenure</p>
                   <p className="text-sm font-bold text-slate-900">{emiTenure / 12} years ({emiTenure} months)</p>
                </div>
                <Slider defaultValue={[60]} min={12} max={120} step={12} onValueChange={(v) => setEmiTenure(v[0])} />
                <div className="flex justify-between items-center bg-slate-50 p-4 rounded-lg">
                   <p className="text-sm font-bold text-slate-900 uppercase">Monthly EMI</p>
                   <p className="text-2xl font-black text-blue-600">₹{results.monthlyEmi}</p>
                </div>
              </div>
            </div>

            <Button className="w-full bg-blue-950 hover:bg-blue-900 text-white font-bold py-7 rounded-xl text-lg uppercase tracking-widest transition-transform active:scale-95 shadow-lg">
              Check Your Eligibility
            </Button>
          </div>
        </div>

        {/* Environmental Impact (Bottom Section) */}
        <div className="mt-16 border-t pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Leaf className="w-8 h-8 text-blue-600 mx-auto" />
              <p className="text-3xl font-black text-slate-900">275</p>
              <p className="text-xs font-bold text-slate-500 uppercase">Trees Planted Equivalent</p>
            </div>
            <div className="space-y-2">
              <Zap className="w-8 h-8 text-blue-600 mx-auto" />
              <p className="text-3xl font-black text-slate-900">8,256 Kg</p>
              <p className="text-xs font-bold text-slate-500 uppercase">CO2 Mitigated Annually</p>
            </div>
            <div className="space-y-2">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto" />
              <p className="text-3xl font-black text-slate-900">21.58%</p>
              <p className="text-xs font-bold text-slate-500 uppercase">Return on Investment</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SolarCalculator