import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useQuery } from '@tanstack/react-query';
interface Event {
  id: string;
  date: string;
  name: string;
  time: string;
  location: string;
  description: string;
  topics: string[];
  offers: string[];
}


const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();


  
  const { isLoading, error, data:event} = useQuery({
    queryKey: ['services'] ,
    queryFn: () => fetch(`http://localhost:3000/event/${id}`).then((res) => res.json())
  });

  if (isLoading) return "Loading...";
  if (error) return "An error occurred";
  console.log('====================================');
  console.log(event);
  console.log('====================================');
  if (!event) {
    return (
      <div>
        <Header />
        <div className="p-4 max-w-xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">Event Not Found</h1>
          <p>Sorry, we couldn't find the event you're looking for.</p>
          <a href="/" className="text-blue-400 no-underline p-3.5 block relative">
            Go Back to Homepage
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
  <Header />
  <div className="p-4 max-w-xl mx-auto bg-white shadow-lg rounded-lg my-20">
    <h1 className="text-2xl font-bold mb-2">{event.name}</h1>
    <p className="mb-2 text-gray-700"><strong>Date:</strong> {event.date}</p>
    <p className="mb-2 text-gray-700"><strong>Time:</strong> {event.time}</p>
    <p className="mb-2 text-gray-700"><strong>Location:</strong> {event.location}</p>
    <p className="mb-2 text-gray-700"><strong>Description:</strong> {event.description}</p> 
    <h2 className="text-xl font-semibold mt-4">Topics Covered</h2>
    <ul className="list-disc ml-4 mb-4 text-gray-700">
      {event.topics}
    </ul>
    <h2 className="text-xl font-semibold ">Special Offers</h2>
    <ul className="list-disc ml-4 mb-4 text-gray-700">
      {event.offers}
    </ul>
    <h2 className="text-xl font-semibold mt-4 ">Register for the Event</h2>
    <a href="/register" className="inline-block bg-blue-500 text-white font-semibold p-3.5 rounded-md mt-4 hover:bg-blue-700 w-24 ">
      Register
    </a>
  </div>
  <Footer />
</div>

     
  );
};

export default EventDetails;
