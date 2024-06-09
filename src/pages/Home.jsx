import React, { useEffect, useState } from 'react';
import Image1 from '../assets/home1.jpg';
import Image2 from '../assets/home2.jpg';
import Image3 from '../assets/home3.jpg';

const Home = () => {
  const images = [Image1, Image2, Image3];
  const heroData = [
    { text1: "Find your", text2: "home your way!" },
    { text1: "Find your", text2: "perfect home!" },
    { text1: "Find your", text2: "own dream space!" },
  ];
  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount(count => (count === 2 ? 0 : count + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center overflow-hidden min-h-screen">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${heroCount === index ? 'opacity-100' : 'opacity-0'}`}
          alt=""
        />
      ))}
      <div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black p-4 lg:p-12 bg-white bg-opacity-50 rounded-full">
        <p className="text-2xl lg:text-4xl font-semibold text-center">{heroData[heroCount].text1}</p>
        <p className="text-2xl lg:text-4xl font-semibold text-center">{heroData[heroCount].text2}</p>
      </div>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex justify-center mt-8 lg:mt-16">
        <ul className="hero-dots flex items-center gap-2 list-none">
          {images.map((_, index) => (
            <li
              key={index}
              onClick={() => setHeroCount(index)}
              className={`hero-dot w-3 h-3 lg:w-4 lg:h-4 cursor-pointer rounded-full bg-white ${heroCount === index ? 'bg-yellow-300' : ''}`}
            ></li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Home;
