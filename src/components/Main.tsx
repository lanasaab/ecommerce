import React from 'react';
import ImageContainer from './imageContainer';
import { cardData } from '../constants/imageData';
import { useQuery } from '@tanstack/react-query';

const Main = () => {


  const { isPending, error, data } = useQuery({
    queryKey: ['productsalll'],
    queryFn: () => fetch("http://localhost:3000/products").then((res) =>
      res.json()
    )

  })
  if (isPending) return "pending"
  if (error) return "error"


  console.log(data)



  return (
    <main>
      <div className="max-w-6xl mx-auto px-4">
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black text-center mb-8">Featured Products:</h2>
          <p className="text-xl italic text-black text-center mb-8">" Add a flavor to being a girl "</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.map((item, index) => (
              <ImageContainer
                key={index}
                id={item.id}
                src={item.src}
                category={item.category}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
