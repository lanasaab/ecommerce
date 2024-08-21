import React, { useState } from 'react';
interface RegistrationFormProps {
    eventId: number;
  }
      const Register: React.FC<RegistrationFormProps> = ({ eventId }) => {
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          phone: '',
          additionalInfo: '',
          consent: false,
        });
      
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          const { name, value, type, checked } = e.target;
          setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
          }));
        };
      
        const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          console.log('Form data submitted:', formData);
          alert('Registration submitted successfully!');
        };
  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg mt-20">
    <h2 className="text-2xl font-bold mb-4">Register for Event {eventId}</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (optional)</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">Additional Information</label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
        <label htmlFor="consent" className="ml-2 text-sm text-gray-700">
          I agree to the <a href="/terms" className="text-blue-500 hover:underline">terms and conditions</a>
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Register
      </button>
    </form>
  </div>
  )
}

export default Register


    
  
