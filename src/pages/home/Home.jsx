import React from 'react'
import AnnouncementBar from '../../components/announcement-bar/AnnouncemetBar'
import Hero from '../../components/hero/Hero'
import Spotlight from '../../components/spotlight/Spotlight'
import HelpemAll from '../../components/helpemall/HelpemAll'
import PracticeCoding from '../../components/practice-coding/PracticeCoding'
import Footer from '../../layouts/footer/Footer'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Spotlight/>
      <AnnouncementBar/>
      <HelpemAll/>
      <PracticeCoding/>
      <Footer/>
    </div>
  )
}

export default Home