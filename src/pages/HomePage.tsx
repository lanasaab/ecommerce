import React from 'react'
import { Link } from 'react-router-dom';
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
      <div className="flex flex-col items-center justify-center mb-8 p-10"
          style={{
            backgroundImage: "url(/images/bg.jpg)",
            backgroundSize: "cover",
          }}
        >
          <p className="text-black">A Whole New Look</p>
          <h2 className="text-3xl font-semibold text-black">Beauty Pronounced</h2>
          <Link to={'/'} className="text-center text-white bg-[#ce9d48] rounded-md px-4 py-2 mt-4  transition-all duration-300 hover:bg-gray-800 block ">
                View More
          </Link>
      </div>
        <Main/>
        <SponsorsSection/>
        <ContactUsSection/>
        <Footer/>
    </div>
  )
}

export default HomePage
