import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Image1 from '../assets/dhruv.jpg';
import Image2 from '../assets/sakshham.jpg';
import Image3 from '../assets/bakshi.jpeg';
import Image4 from '../assets/vidyt.jpeg';

const About = () => {
  const members = [
    { name: "Dhruv Goyal", image: Image1, instagram: "https://www.instagram.com/agent__dg/", linkedin: "https://www.linkedin.com/in/DhruvGoyalThapar/", github: "https://github.com/DhruvGoyal404" },
    { name: "Sakshham Bhagat", image: Image2, instagram: "https://www.instagram.com/iamsakshham_28/", linkedin: "https://www.linkedin.com/in/sakshhamthecoder/", github: "https://github.com/SakshhamTheCoder" },
    { name: "Akshat Bakshi", image: Image3, instagram: "https://www.instagram.com/akshat_bakshi05/", linkedin: "https://www.linkedin.com/in/abakshi05/", github: "https://github.com/akshat448" },
    { name: "Vidyt Bhudolia", image: Image4, instagram: "https://www.instagram.com/bhudolia_/", linkedin: "https://www.linkedin.com/in/vidyt-bhudolia", github: "https://github.com/VidytBhudolia" }
  ];

  return (
    <div className='flex min-h-screen flex-col items-center pt-7'>
      <h1 className="text-4xl font-bold text-[rgb(2,78,146)] mb-4">About Us</h1>
      <h2 className="text-2xl mb-8">Made with love by:</h2>
      <div className="details grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-7xl px-4 pl-0 pr-0 pt-0 pb-0">
        {members.map((member, index) => (
          <div key={index} className="member bg-white rounded-lg shadow p-6 text-center w-full md:w-auto ">
            <h3 className="text-lg font-bold mb-4 text-green-500">{member.name}</h3>
            <img className="mx-auto mb-4" src={member.image} alt={member.name} />
            <div className="social-icons flex justify-center space-x-4">
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='h-10 text-black' icon={faInstagram} />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='h-10 text-black' icon={faLinkedin} />
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='h-10 text-black' icon={faGithub} />
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className='pt-3 text-center'>You may check us out at our social media handles! ❤️</p>
    </div>
  );
};

export default About;
