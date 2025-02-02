import React from 'react';
import Traveller from '../component/about/Traveller';
import AdventureSection from '../component/about/AdventureSection';
import TeamSection from '../component/about/TeamSection';
import Testimonials from '../component/about/Testimonials';

const About = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-blue-100 via-purple-50 to-indigo-100 py-12 px-4 sm:px-8 lg:px-16">
        <div className="animate-fade-in-up transform transition-all duration-700 ease-out">
          <Traveller />
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-yellow-100 to-pink-100 py-12 px-4 sm:px-8 lg:px-16">
        <div className="animate-fade-in-left transform transition-all duration-700 ease-out">
          <AdventureSection />
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-green-100 to-blue-50 py-12 px-4 sm:px-8 lg:px-16">
        <div className="animate-fade-in-right transform transition-all duration-700 ease-out">
          <TeamSection />
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-12 px-4 sm:px-8 lg:px-16">
        <div className="animate-fade-in-up transform transition-all duration-700 ease-out">
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default About;