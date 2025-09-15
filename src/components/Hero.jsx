import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <div id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-10">
              <span className="text-zinc-700">Data Analytics &</span>
              <br />
              <span className="text-teal-700">AI/ML Enthusiast</span>
            </h1>
            
            <p className="text-xl text-zinc-900 mb-6">
            I bridge data analytics and AI/ML to engineer solutions that think, learn, and adapt
            </p>
            
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Link 
                to="/work"
                className="flex items-center gap-2 px-10 py-4 bg-black rounded-full text-slate-200 hover:text-white cursor-pointer transition duration-300"
              >
                View My Work
                <FaArrowRight />
              </Link>
              <Link 
                to="/contact"
                className="flex items-center gap-2 border border-slate-400 rounded-full px-10 py-4 hover:border-slate-800 transition duration-300 cursor-pointer"
              >
                Contact Me
                <FaArrowRight />
              </Link>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="flex justify-center">
            <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem] lg:w-[26rem] lg:h-[32rem] floating">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img 
                  src={assets.profileImg} 
                  alt="Profile" 
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
              
              {/* Experience Badge */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
