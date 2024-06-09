import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'react-feather';
import { useNavigate } from 'react-router-dom'; // Use for navigation
import { onAuthStateChanged } from 'firebase/auth'; // Firebase auth state change listener
import { auth } from '../components/Firebase'; // Import your Firebase config
import Home from '../assets/home.jpg';

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const navigate = useNavigate(); // Hook for navigation
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const toggleAccordion = (index) => {
    if (!isLoggedIn) {
      navigate('/register');
      return;
    }
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="flex min-h-screen flex-col items-center pt-16 relative">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${Home})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(5px)',
        }}
      ></div>

      <h1 className="text-2xl font-bold my-4 text-[rgb(230,36,146)] relative z-10 text-center px-4">
        Frequently Asked Questions
      </h1>
      <div className="wrapper z-10 w-full px-4 md:px-0">
        {/* FAQ items */}
        <div className="faq max-w-2xl mx-auto">
          <button
            className={`accordion flex justify-between items-center w-full p-3 rounded-tl-lg rounded-tr-lg bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 ${activeAccordion === 0 ? 'active' : ''}`}
            onClick={() => toggleAccordion(0)}
          >
            <span className="font-semibold">What is HomeMatch?</span>
            <ChevronDown
              className={`transition-transform transform ${activeAccordion === 0 ? 'rotate-180' : ''}`}
              style={{ color: 'blue' }}
            />
          </button>
          <div className={`panel px-3 py-2 bg-white shadow-md ${activeAccordion === 0 ? 'block' : 'hidden'}`}>
            <p>HomeMatch is a property recommendation app designed to simplify the process of finding your ideal home. Our platform uses advanced algorithms to match your preferences with available properties, providing personalized recommendations tailored to your needs.</p>
          </div>
        </div>

        <div className="faq max-w-2xl mx-auto mt-2">
          <button
            className={`accordion flex justify-between items-center w-full p-3 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 ${activeAccordion === 1 ? 'active' : ''}`}
            onClick={() => toggleAccordion(1)}
          >
            <span className="font-semibold">How does HomeMatch work?</span>
            <ChevronDown
              className={`transition-transform transform ${activeAccordion === 1 ? 'rotate-180' : ''}`}
              style={{ color: 'blue' }}
            />
          </button>
          <div className={`panel px-3 py-2 bg-white shadow-md ${activeAccordion === 1 ? 'block' : 'hidden'}`}>
            <p>HomeMatch works by gathering information about your preferences, such as location, budget, and desired amenities. Our algorithms then analyze this data to identify properties that best match your criteria, presenting you with personalized recommendations to streamline your property search.</p>
          </div>
        </div>

        <div className="faq max-w-2xl mx-auto mt-2">
          <button
            className={`accordion flex justify-between items-center w-full p-3 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 ${activeAccordion === 2 ? 'active' : ''}`}
            onClick={() => toggleAccordion(2)}
          >
            <span className="font-semibold">What kind of properties does HomeMatch offer?</span>
            <ChevronDown
              className={`transition-transform transform ${activeAccordion === 2 ? 'rotate-180' : ''}`}
              style={{ color: 'blue' }}
            />
          </button>
          <div className={`panel px-3 py-2 bg-white shadow-md ${activeAccordion === 2 ? 'block' : 'hidden'}`}>
            <p>HomeMatch offers a wide range of properties, including apartments, houses, condos, townhouses, and more. Whether you're looking to rent or buy, our platform connects you with properties that meet your specific requirements.</p>
          </div>
        </div>

        <div className="faq max-w-2xl mx-auto mt-2">
          <button
            className={`accordion flex justify-between items-center w-full p-3 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 ${activeAccordion === 3 ? 'active' : ''}`}
            onClick={() => toggleAccordion(3)}
          >
            <span className="font-semibold">Is HomeMatch free to use?</span>
            <ChevronDown
              className={`transition-transform transform ${activeAccordion === 3 ? 'rotate-180' : ''}`}
              style={{ color: 'blue' }}
            />
          </button>
          <div className={`panel px-3 py-2 bg-white shadow-md ${activeAccordion === 3 ? 'block' : 'hidden'}`}>
            <p>Yes, HomeMatch is completely free for users. There are no hidden fees or charges associated with using our platform to tailor your needs in finding your dream home.</p>
          </div>
        </div>

        <div className="faq max-w-2xl mx-auto mt-2">
          <button
            className={`accordion flex justify-between items-center w-full p-3 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 ${activeAccordion === 4 ? 'active' : ''}`}
            onClick={() => toggleAccordion(4)}
          >
            <span className="font-semibold">How accurate are the property recommendations provided by HomeMatch?</span>
            <ChevronDown
              className={`transition-transform transform ${activeAccordion === 4 ? 'rotate-180' : ''}`}
              style={{ color: 'blue' }}
            />
          </button>
          <div className={`panel px-3 py-2 bg-white shadow-md ${activeAccordion === 4 ? 'block' : 'hidden'}`}>
            <p>Our algorithms are designed to provide highly accurate recommendations based on the information you provide. While we strive to ensure the accuracy of our recommendations, it's important to keep in mind that factors such as market availability and property updates may influence the results.</p>
          </div>
        </div>

        <div className="faq max-w-2xl mx-auto mt-2">
          <button
            className={`accordion flex justify-between items-center w-full p-3 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 ${activeAccordion === 5 ? 'active' : ''}`}
            onClick={() => toggleAccordion(5)}
          >
            <span className="font-semibold">I have specific requirements for my new home. Can HomeMatch accommodate them?</span>
            <ChevronDown
              className={`transition-transform transform ${activeAccordion === 5 ? 'rotate-180' : ''}`}
              style={{ color: 'blue' }}
            />
          </button>
          <div className={`panel px-3 py-2 bg-white shadow-md ${activeAccordion === 5 ? 'block' : 'hidden'}`}>
            <p>Absolutely! HomeMatch allows you to customize your search based on a variety of criteria, including location, price range, property type, number of bedrooms/bathrooms, and proximity to amenities such as schools, hospitals, and shopping centers.</p>
          </div>
        </div>

        <div className="faq max-w-2xl mx-auto mt-2 mb-4">
          <button
            className={`accordion flex justify-between items-center w-full p-3 rounded-br-lg rounded-bl-lg bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 ${activeAccordion === 6 ? 'active' : ''}`}
            onClick={() => toggleAccordion(6)}
          >
            <span className="font-semibold">I have more questions. How can I get in touch with HomeMatch?</span>
            <ChevronDown
              className={`transition-transform transform ${activeAccordion === 6 ? 'rotate-180' : ''}`}
              style={{ color: 'blue' }}
            />
          </button>
          <div className={`panel px-3 py-2 bg-white shadow-md ${activeAccordion === 6 ? 'block' : 'hidden'}`}>
            <p>If you have any additional questions or need further assistance, please don't hesitate to contact our customer support team. You can reach us via email, phone, or through the contact form on our website. We're here to help!<br />Email: homematch@gmail.com<br />Ph. Number: 123456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
