// src/pages/EventDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Event {
  id: string;
  date: string;
  title: string;
  time: string;
  location: string;
  description: string;
  topics: string[];
  specialOffers: string[];
}

const events: Event[] = [
  {
    id: '1',
    date: '4/9/2024',
    time: '11:00 AM',
    location: 'Tripoli',
    title: 'Luxury Skincare Workshop',
    description: 'Learn the secrets of luxury skincare with our expert estheticians.',
    topics: ['Anti-Aging', 'Hydration', 'Skin Types'],
    specialOffers: ['Free skincare samples with registration'],
  },
  {
    id: '2',
    date: '11/10/2024',
    time: '02:00 PM',
    location: 'Tyre',
    title: ' Makeup Techniques',
    description: 'Join us for a comprehensive makeup tutorial to enhance your beauty skills.',
    topics: ['Foundation Techniques', 'Eye Makeup', 'Contouring'],
    specialOffers: ['Discount on makeup products'],
  },
  {
    id: '3',
    date: '17/11/2024',
    time: '04:00 PM',
    location: 'Beirut',
    title: 'Cometic Products',
    description: 'Join our informative workshop about the cosmetic products',
    topics: ['Makeup', 'Skincare', 'Others'],
    specialOffers: ['Free samples from our shop'],
  },
];

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = events.find(e => e.id === id);

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
    <div>
      <Header />
      <div className="p-4 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">{event.title}</h1>
        <p className="mb-2"><strong>Date:</strong> {event.date}</p>
        <p className="mb-2"><strong>Time:</strong> {event.time}</p>
        <p className="mb-2"><strong>Location:</strong> {event.location}</p>
        <p className="mb-2"><strong>Description:</strong> {event.description}</p>
        <h2 className="text-xl font-semibold mt-4">Topics Covered</h2>
        <ul className="list-disc ml-4 mb-4">
          {event.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold">Special Offers</h2>
        <ul className="list-disc ml-4 mb-4">
          {event.specialOffers.map((offer, index) => (
            <li key={index}>{offer}</li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mt-4">Register for the Event</h2>
        <a href="/register" className="no-underline p-3.5 ">
                Register
              </a>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetails;
