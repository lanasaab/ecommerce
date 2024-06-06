import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import ContactUsSection from '../components/ConactUsSection'
import Footer from '../components/Footer'
import ImageContainer from '../components/imageContainer'
import SponsorsSection from '../components/SponsorsSection'
const HomePage = () => {
  return (
    <div>
        <Header/>
        <Main/>
        <SponsorsSection/>
        <ContactUsSection/>
        <Footer/>
    </div>
  )
}

export default HomePage
