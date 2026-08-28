import React from 'react';
import HeroSection from './HeroSection';
import HomeProduct from './HomeProduct';
import Faq from './Faq';


const HomePage = () => {
    return (
        <div>
          <HeroSection/>
          <HomeProduct/>
         <Faq/>
        </div>
    );
};

export default HomePage;