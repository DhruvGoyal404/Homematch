import React from 'react';
import news1 from '../assets/news1.jpeg';
import news2 from '../assets/news2.jpeg';
import news3 from '../assets/news3.jpeg';
import news4 from '../assets/news4.jpeg';
import Building from '../assets/building.png';
import Home from '../assets/home.png';
import Group from '../assets/group.png';

const Advertise = () => {
  return (
    <div className="flex min-h-screen flex-col items-center pt-10 px-4 md:px-10">
      <h1 className="text-2xl md:text-3xl font-semibold text-[rgb(2,78,146)] mb-4 text-center">WHY DID WE FELT THE NEED TO CONSIDER THIS TOPIC?</h1>
      <h2 className="text-base md:text-lg text-center">To understand the importance of this issue, let us consider the following recent news articles!</h2>
      <br />
      <hr className="w-full border-t-2 border-dashed border-black mb-12" /> 
      <div className="box flex flex-col md:flex-row items-center mb-8 jadoo">
        <img src={news1} alt="" className="w-full md:w-1/2 h-auto mb-4 md:mb-0 md:mr-4 pl-0 md:pl-5" />
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center font-serif">
          <p className="text-sm md:text-md text-center text-[rgb(72,101,146)] pr-0 md:pr-4">Published on <time dateTime="2023-05-10">May 10, 2023</time></p>
          <p className="text-base md:text-lg text-center text-[rgb(72,101,146)] pr-0 md:pr-4">
            As per this article by <a href='https://www.theguardian.com/us-news/2023/may/10/us-housing-market-prices-increasing' rel='nofollow' className='text-blue-500 underline'>The Guardian</a>, USA is facing a severe housing crisis, shattering dreams and aspirations. The article also revealed that people and builders have started to sell their houses on online application to reduce their efforts and time in selling and for a better price to sell.
          </p>
        </div>
      </div>
      <hr className="w-full border-t-2 border-dashed border-black mb-12" /> {/* Horizontal Rule */}
      <div className="box flex flex-col md:flex-row items-center mb-8 jadoo">
        <img src={news2} alt="" className="w-full md:w-1/2 h-auto mb-4 md:mb-0 md:mr-4" />
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center font-serif">
          <p className='text-sm md:text-md text-center text-[rgb(72,101,146)] pr-0 md:pr-4'>Published on <time dateTime="2024-01-25">January 25, 2024</time></p>
          <p className="text-base md:text-lg text-center text-[rgb(72,101,146)] pl-0 md:pl-4">
            This article by <a href='https://www.npr.org/2024/01/25/1225957874/housing-unaffordable-for-record-half-all-u-s-renters-study-finds' rel='nofollow' className='text-blue-500 underline'>NPR</a> shows a study that reveals that housing is unaffordable for more than half of all U.S. renters! This showcases that people in U.S. are more prone to rent a home than to buy a home and hence raising the requirement of such apps which can help them with such daily life issue.
          </p>
        </div>
      </div>
      <hr className="w-full border-t-2 border-dashed border-black mb-12" /> 
      <div className="box flex flex-col md:flex-row items-center mb-8 jadoo">
        <img src={news3} alt="" className="w-full md:w-1/2 h-auto mb-4 md:mb-0 md:mr-4" />
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center font-serif">
          <p className='text-sm md:text-md text-center text-[rgb(72,101,146)] pr-0 md:pr-4'>Published on <time dateTime="2024-07-14">July 14, 2024</time></p>
          <p className="text-base md:text-lg text-center text-[rgb(72,101,146)] pr-0 md:pr-4">
            This shocking article by <a href='https://edition.cnn.com/2023/07/14/homes/build-for-rent-homes/index.html' rel='nofollow' className='text-blue-500 underline'>CNN</a> shows that house-hunting in the U.S. has become increasingly challenging due to rising rents and landlords' unusual demands. The increasing rents have increased the number of renters who are cost-burdened since past few years!
          </p>
        </div>
      </div>
      <hr className="w-full border-t-2 border-dashed border-black mb-12" /> 
      <div className="box flex flex-col md:flex-row items-center mb-8 jadoo">
        <img src={news4} alt="" className="w-full md:w-1/2 h-auto mb-4 md:mb-0 md:mr-4" />
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center font-serif">
          <p className='text-sm md:text-md text-center text-[rgb(72,101,146)] pr-0 md:pr-4'>Published on <time dateTime="2024-08-22">August 22, 2024</time></p>
          <p className="text-base md:text-lg text-center text-[rgb(72,101,146)] pl-0 md:pl-4">
            Another article by <a href='https://www.americanprogress.org/article/the-rental-housing-crisis-is-a-supply-problem-that-needs-supply-solutions/' rel='nofollow' className='text-blue-500 underline'>American Progress</a> shows and suggests that the ongoing rental housing crisis in the U.S., needs rapid, modern, accessible solutions. Such a rapidly growing country acquires many opportunities for such platform to furnish and grow as the rental housing crisis is growing exponentially.
          </p>
        </div>
      </div>
      <br />
      <hr className="w-full border-gray-300 mb-12" /> {/* Horizontal Rule */}
      <br />
      <h1 className="text-2xl md:text-3xl font-semibold text-[rgb(87,39,123)] mb-4 text-center">But Why Choose HomeMatch?</h1>
      <h2 className="text-xl md:text-2xl text-[#8993A4] font-open-sans text-center font-semibold mb-4">BENEFITS OF HOME MATCH</h2>
      <div className="flex flex-col md:flex-row justify-between w-full mb-8">
        <div className="flex flex-col items-center justify-center mb-4 md:mb-0">
          <img src={Building} alt="" className="w-16 h-16 mb-4" />
          <div className="text-center">
            <p className='text-lg font-semibold text-blue-600'>Huge Amount of Properties</p>
            <p className='text-base text-[#5f6571]'>Thousands of new properties are being added every day!</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-4 md:mb-0">
          <img src={Home} alt="" className="w-16 h-16 mb-4" />
          <div className="text-center">
            <p className="text-lg font-semibold text-blue-600">Verification by Home Match Team</p>
            <p className='text-base text-[#5f6571]'>Properties provided tailored to individual needs.</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={Group} alt="" className="w-16 h-16 mb-4" />
          <div className='text-center'>
            <p className="text-lg font-semibold text-blue-600">Large User Base</p>
            <p className='text-base text-[#5f6571]'>High active user count and user engagement to find and close deals</p>
          </div>
        </div>
      </div>
      <hr className="w-full border-gray-300 mb-12" /> {/* Horizontal Rule */}
      <br />
      <br />
      <style jsx>{`
        @keyframes jadoo {
          from {
            opacity: 0;
            scale: 0.5;
          }
          to {
            opacity: 1;
            scale: 1;
          }
        }

        .box {
          animation: jadoo linear;
          animation-timeline: view();
          animation-range: entry 0 cover 50%;
        }

        @media (max-width: 768px) {
          .box {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Advertise;

