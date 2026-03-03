import React from 'react'
import AboutPage from '../_components/AboutPage'
import HybridSolar from '../_components/HybridSolar'
import Services from '../_components/Services'
import KnowYourRequirement from '../_components/KnowYourRequirement'
import SolarCalculator from '../_components/SolarCalculator'
import ContactPage from '../_components/ContactPage'
import FAQPage from '../_components/FAQPage'

const page = () => {
  return (
    <div>
        <HybridSolar/>
        <KnowYourRequirement/>
        <FAQPage/>
        <SolarCalculator/>
        <AboutPage/>
        <Services/>
        <ContactPage/>
    </div>
  )
}

export default page
