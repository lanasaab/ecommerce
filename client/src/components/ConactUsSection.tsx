import React, { useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { MdChat } from "react-icons/md";

const ContactUsSection = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [showAssistant, setShowAssistant] = useState(false);

  const handleUserInput = () => {
    if (inputMessage.trim() === '') return;
    const userMessage = { text: inputMessage, isUser: true };
    const response = getResponse(inputMessage);
    const assistantMessage = { text: response, isUser: false };
    //@ts-expect-error error
    setMessages((prevMessages) => [...prevMessages, userMessage, assistantMessage]);
    setInputMessage('');
  };

  //@ts-expect-error error
  const getResponse = (question) => {
    const questionLowerCase = question.toLowerCase();
    const responses = {
        "hello": "Hello! How can I assist you today?",
        "what products do you offer": "We offer a wide range of beauty products including makeup, skincare, haircare, and more. Is there something specific you're looking for?",
        "do you have any promotions currently": "Yes, we have ongoing promotions on select products. You can check our website or visit our store for more details.",
        "how can I contact customer service": "You can reach our customer service team by phone at or via email at contact@info.com.",
        "where is the store located": "Our store is located at Beirut, Hamra Street. We're open Monday to Friday from 9 AM to 7 PM and on weekends from 10 AM to 5 PM.",
        "what are your shipping options": "We offer standard and express shipping options. Standard shipping typically takes 3-5 business days, while express shipping delivers within 1-2 business days. Shipping costs and delivery times may vary depending on your location.",
        "do you offer international shipping": "Yes, we offer international shipping to select countries. Shipping costs and delivery times may vary depending on the destination.",
        "what is your return policy": "Our return policy allows you to return items within 30 days of purchase for a full refund or exchange. Items must be unused and in their original packaging with tags attached. Certain restrictions may apply.",
        "can i cancel or modify my order after it has been placed": "You can cancel or modify your order within 24 hours of placing it. Please contact our customer service team as soon as possible to make changes.",
        "do you offer free samples": "Yes, we offer free samples with select purchases. You can also request specific samples during checkout, subject to availability.",
        "what payment methods do you accept": "We accept various payment methods including credit/debit cards, PayPal, and other online payment options. You can choose your preferred method at checkout.",
        "do you offer professional makeup services": "Yes, we offer professional makeup services at our store. You can book an appointment online or visit us for a consultation with our expert makeup artists.",
        "how do i sign up for your newsletter": "You can sign up for our newsletter by entering your email address at the bottom of our homepage. Stay updated on the latest products, promotions, and beauty tips.",
        "can i return an item bought on sale": "Sale items can be returned within 14 days of purchase for store credit or exchange only, provided they meet our return policy conditions.",
        "are your products safe for sensitive skin": "Many of our products are formulated for sensitive skin. Look for our 'sensitive skin' label on product pages or consult our customer service team for recommendations.",
        "can i earn points for writing reviews": "Yes, you can earn loyalty points by writing reviews for products you've purchased. Your feedback helps us improve and helps other customers make informed decisions.",
        "what should i do if i receive a damaged product": "If you receive a damaged product, please contact our customer service team immediately with your order details and a photo of the damaged item. We will arrange a replacement or refund for you.",
        "do you offer student discounts": "Yes, we offer a special discount for students. Verify your student status with our partner verification service to receive discount for your purchases.",
        "how can i update my account information": "You can update your account information by logging into your account on our website and navigating to the account settings section.",
    };
    //@ts-expect-error erorr
    return responses[questionLowerCase] || "I'm sorry, I'm not sure how to answer that question. Could you please provide more details?";
};


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
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-stretch gap-0">
        <div className="flex-1 bg-white p-6 text-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Season Sale</h2>
            <div className="flex justify-center items-center mb-4">
              <MdLocalOffer className="text-5xl" />
            </div>
            <p className="text-gray-700 mb-6">Get ready to refresh your beauty stash with our exclusive Season Sale! Enjoy incredible discounts on your favorite cosmetics for a limited time only.</p>
          </div>
        </div>
        <div className="flex-1 bg-white p-6 text-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Free Shipping</h2>
            <div className="flex justify-center items-center mb-4">
              <MdLocalShipping className="text-5xl" />
            </div>
            <p className="text-gray-700 mb-6">Enjoy our Free Shipping offer! No minimum purchase required. It's the perfect time to stock up on your beauty essentials.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full max-w-screen-lg mx-auto my-8">
  <div className="bg-white rounded-lg shadow-lg p-4 flex-1 mr-10">
    <section className="text-center">
      <h2 className="text-3xl font-bold text-black mb-8">Join Our Newsletter</h2>
      <p className="text-black mb-4">Stay updated with the latest products and offers.</p>
      <form className="flex flex-col md:flex-row justify-center items-center">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="p-3 rounded-md mb-4 md:mb-0 md:mr-4 w-full md:w-auto border-2 border-black" 
        />
        <button type="submit" className="text-white bg-[#ce9d48] rounded-md px-6 py-3 transition-all duration-300 hover:bg-gray-800">
          Subscribe
        </button>
      </form>
    </section>
  </div>
</div>

      <div
        className="fixed bottom-4 right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
        onClick={() => setShowAssistant(!showAssistant)}
      >
        <MdChat className="text-white text-3xl" />
      </div>
      {showAssistant && (
        <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold">Chatbot</h2>
          </div>
          <div className="mb-4">
            {messages.map((message, index) => (
              //@ts-expect-error error
              <div key={index} className={message.isUser ? "text-right mb-2" : "mb-2"}>
                <p className={
                  //@ts-expect-error error
                  message.isUser ? "bg-blue-200 py-2 px-4 rounded-lg inline-block" : "bg-gray-200 py-2 px-4 rounded-lg inline-block"}>
                  {
                  //@ts-expect-error error
                  message.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
              onClick={handleUserInput}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUsSection;
