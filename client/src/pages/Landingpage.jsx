import React, { useEffect } from 'react';
import VORTEX from './public/VORTEX.png';
import './tiliwind.css';
import 'tailwindcss/tailwind.css';

const LandingPage = ({ onNavigate}) => {
  useEffect(() => {
    const text = 'Programi i parë AI në gjuhën Shqipe';
    let index = 0;
    const typingElement = document.getElementById('typing');

    const interval = setInterval(() => {
      typingElement.textContent += text[index];
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, 100);

    const handleClick = () => {
      onNavigate();
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
      <header className="bg-white">
        <nav className="flex justify-between items-center w-92 mx-auto">
          {/* Add your logo image here */}
          <div>
            <img className="w-16 cursor-pointer" src={ALBGPT} alt="..." />
          </div>
          {/* Add your navigation links here */}
          <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-60vh left-0 top--100 md:w-auto w-full flex items-center px-5">
            <ul className="flex flex-col md:flex-row md:gap-6 md:text-lg text-gray-800 font-medium">
              <li className="cursor-pointer hover:text-black">
                <a href="#" className="px-3 py-2 font-bold text-white hover:text-white hover:bg-black rounded transition duration-300">Kreu</a>
              </li>
              <li className="cursor-pointer hover:text-black">
                <a href="#" className="px-3 py-2 font-bold text-black hover:text-white hover:bg-black rounded transition duration-300">Rreth nesh</a>
              </li>
              <li className="cursor-pointer hover:text-black">
                <a href="#" className="px-3 py-2 font-bold text-black hover:text-white hover:bg-black rounded transition duration-300">Kontakt</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-white text-black border-2 border-black rounded-full px-6 py-2 font-bold hover:bg-black hover:text-white transition duration-300" onClick={handleClick}}>Hyr</button>
            <ion-icon name="menu" className="text-3xl cursor-pointer md:hidden"></ion-icon>
          </div>
        </nav>
      </header>
      <div className="flex flex-col items-center justify-center h-full">
        <div id="typing" className="text-6xl md:text-7xl font-bold text-black mb-8 md:mb-16"></div>
        <div className="flex flex-col items-center justify-center space-y-8">
          <button className="bg-white text-black border-2 border-black rounded-full px-6 py-3 font-semibold hover:bg-black hover:text-white transition duration-300" onClick={() => (window.location.href = '/loginpage')}>
            Fillo Ketu
          </button>
          <span className="typing-animation text-black font-bold text-3xl md:text-4xl"></span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
