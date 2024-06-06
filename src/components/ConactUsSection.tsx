import React from 'react'

const ContactUsSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
     
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-black text-center mb-8">Customer Testimonials</h2>
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <p className="text-gray-700 mb-4">"This is the best product I have ever used!"</p>
          <p className="text-gray-900 font-bold">- Happy Customer</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <p className="text-gray-700 mb-4">"Absolutely love it! My skin feels amazing."</p>
          <p className="text-gray-900 font-bold">- Satisfied Client</p>
        </div>
      </div>
    </section>

    <section className="text-center m-4">
      <h2 className="text-3xl font-bold text-black mb-8">Join Our Newsletter</h2>
      <p className="text-black mb-4">Stay updated with the latest products and offers.</p>
      <form className="flex flex-col md:flex-row justify-center items-center">
        <input type="email" placeholder="Enter your email" className="p-3 rounded-md mb-4 md:mb-0 md:mr-4 w-full md:w-auto" />
        <button type="submit" className="text-white bg-black rounded-md px-6 py-3 transition-all duration-300 hover:bg-gray-800">
          Subscribe
        </button>
      </form>
    </section>
  </div>
  );
};

export default ContactUsSection
