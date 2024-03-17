import React from 'react'
import AnnouncementBar from '../../components/announcement-bar/AnnouncemetBar'
import HelpemAll from '../../components/helpemall/HelpemAll'
import PracticeCoding from '../../components/practice-coding/PracticeCoding'

const Home = () => {
  return (
    <div>
      Home
      <AnnouncementBar/>
      <HelpemAll/>
      <PracticeCoding/>
    </div>
  )
}

export default Home