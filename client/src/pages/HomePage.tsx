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
            backgroundImage: "url(https://i.pinimg.com/564x/a0/a3/c7/a0a3c7888af0e21a3011db7bdc0e9f9b.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "400px"
          }}
        >
          <p className="text-black">A Whole New Look</p>
          <h2 className="text-3xl font-semibold text-black">Beauty Pronounced</h2>
          <Link to={'/'} className="text-center text-white bg-[#ce9d48] rounded-md px-4 py-2 mt-4  transition-all duration-300 hover:bg-gray-800 block ">
                View More
          </Link>
    </div>
        <Main isHome/>
        <SponsorsSection/>
        <ContactUsSection/>
        <Footer/>
    </div>
  )
}

export default HomePage
