import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useQuery } from '@tanstack/react-query';
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
    date: '4/9/2024',
    time: '11:00 AM',
    location: 'Tripoli',
    title: 'Luxury Skincare Workshop',
    description: 'Learn the secrets of luxury skincare with our expert estheticians.',
  },
  {
    id: '2',
    date: '11/10/2024',
    time: '02:00 PM',
    location: 'Tyre',
    title: 'Makeup Techiques',
    description: 'Join us for a comprehensive makeup tutorial to enhance your beauty skills.',
  },
  {
    id: '3',
    date: '17/11/2024',
    time: '04:00 PM',
    location: 'Beirut',
    title: 'Cosmetic Products',
    description: 'Join an informative workshop about the cosmetic products of our shop.',
  },

];

const ServicesPage: React.FC = () => {

  const { isLoading, error, data:service } = useQuery({
    queryKey: ['services'] ,
    queryFn: () => fetch(`http://localhost:3000/services`).then((res) => res.json())
  });

  if (isLoading) return "Loading...";
  if (error) return "An error occurred";
  if (!service) {
    return <div>Service not found</div>;
  }
console.log('====================================');
console.log(service);
console.log('====================================');

  return (
    <div>
      <Header />
      <div className="p-4 max-w-4xl mx-auto ">
        <h1 className="text-3xl font-bold mb-4 text-center">Workshops and Events</h1>
        <p className="text-center mb-4">
          Discover our exciting cosmetics workshops and events!
          Join us for hands-on makeup tutorials, skincare, and exclusive product launches.
          Our events are perfect for learning new skills and connecting with beauty enthusiasts.
          Check our calendar for upcoming events and register to secure your spot.
          We look forward to seeing you!
        </p>
        <div className="flex justify-center items-center ">
        <img src="https://i.pinimg.com/564x/46/79/3a/46793adbefb4639f6c1ea00770cd0498.jpg" alt="image" className="bg-cover rounded-lg "></img>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-center ">Upcoming Workshops and Events</h1>
        <ul className="space-y-4">
          {service.map(event => (
            <li key={event.id} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
              <p className="text-gray-600 mb-2"><strong>Date:</strong> {event.date}</p>
              <p className="mb-2">{event.description}</p>
              <Link to={`/event/${event._id}`} className="text-blue-500 hover:underline">View Details</Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
