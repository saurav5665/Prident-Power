import React from 'react'
import HeroBanner from './HeroBanner'
import TrustedPartners from './TrustedPartners'
import AboutPage from './AboutPage'
import CustomerReviews from './CustomerReviews'
import Services from './Services'
import FAQPage from './FAQPage'

const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <TrustedPartners/>
      <AboutPage/>
      <Services/>
      <FAQPage/>
      <CustomerReviews/>
    </div>
  )
}

export default Home
