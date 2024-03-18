import React from 'react'
import AnnouncementBar from '../../components/announcement-bar/AnnouncemetBar'
import HelpemAll from '../../components/helpemall/HelpemAll'
import PracticeCoding from '../../components/practice-coding/PracticeCoding'
import Footer from '../../layouts/footer/Footer'

const Home = () => {
  return (
    <div>
      Home
      <AnnouncementBar/>
      <HelpemAll/>
      <PracticeCoding/>
      <Footer/>
    </div>
  )
}

export default Home