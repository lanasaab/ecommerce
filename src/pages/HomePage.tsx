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
        <div
  className="flex flex-col items-center justify-center mb-8 p-10"
  style={{
    backgroundImage: "url(/images/bg.jpg)",
    backgroundSize: "cover",
  }}
>
  <p className="text-black">A Whole New Look</p>
  <h2 className="text-3xl font-semibold text-black">Beauty Pronounced</h2>
  <button className="bg-[#ce9d48] hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4">
    View More
  </button>
</div>
        <Main/>
        <SponsorsSection/>
        <ContactUsSection/>
        <Footer/>
    </div>
  )
}

export default HomePage
