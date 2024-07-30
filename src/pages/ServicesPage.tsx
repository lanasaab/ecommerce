import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Event {
  id: string;
  date: string;
  time: string;
  location: string;
  title: string;
  description: string;
}

const events: Event[] = [
  {
    id: '1',
    date: '',
    time: '10:00 AM',
    location: 'Beirut',
    title:'',
    description: 'Join us for an informative workshop on beauty products',
  },
  {
    id: '2',
    date: '',
    time: '02:00 PM',
    location: 'Tyre',
    title:'',
    description: 'Learn about the usage of cosmetics ',
  },
  {
    id: '2',
    date: '',
    time: '02:00 PM',
    location: 'Tyre',
    title:'',
    description: 'Learn about the usage of cosmetics ',
  },
];

const ServicesPage: React.FC = () => {
  

  return (
    <div>
       <Header />
      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Upcoming Workshops and Events</h1>
        <ul className="space-y-4">
          {events.map(event => (
            <li key={event.id} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-2"><strong>Date:</strong> {event.date}</p>
              <p className="mb-2">{event.description}</p>
              <Link to={`/event/${event.id}`} className="text-blue-500 hover:underline">View Details</Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
