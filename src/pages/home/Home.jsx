import React from 'react'
import HelpemAll from '../../components/helpemall/HelpemAll'
import PracticeCoding from '../../components/practice-coding/PracticeCoding'
import Footer from '../../layouts/footer/Footer'
import Interview from '../../components/interview/Interview'

const Home = () => {
  return (
    <div>
      Home
      <Interview/>
      <HelpemAll/>
      <PracticeCoding/>
      <Footer/>
    </div>
  )
}

export default Home