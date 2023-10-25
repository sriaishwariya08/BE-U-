import React from 'react';
import HeroImg from '../components/Heroimg';
import Navbarr from "../components/Navbarr";
import Recomended from '../components/Recommended';
import Offers from '../components/Offers';
import Footer from '../components/Footer';
import FeaturedPro from '../components/FeaturedPro';

const Home = () => {
  return (
    <div>
       <Navbarr />
       <HeroImg />
       <FeaturedPro />
       <Offers />
       <Recomended />
       <Footer />
    </div>
  )
}

export default Home
