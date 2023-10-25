import React from 'react'
import Navbarr from '../components/Navbarr'
import RecHero from '../components/RecHero'
import Footer from '../components/Footer'
import Undertone from '../components/Undertone'
import Skintype from '../components/Skintype'
import Skinconcerns from '../components/Skinconcerns'
import Hairtype from '../components/Hairtype'
import Hairconcerns from '../components/Hairconcerns'
import Complexion from '../components/Complexion'
import Recomended from '../components/Recommended'
const Recommends = () => {
  return (
    <div>
      <Navbarr />
      <RecHero />
      <Undertone />
      <Skintype />
      <Skinconcerns />
      <Hairtype />
      <Hairconcerns />
      <Complexion />
      <Recomended />
      <Footer />
    </div>
  )
}

export default Recommends
