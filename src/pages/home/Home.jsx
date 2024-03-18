import HelpemAll from '../../components/helpemall/HelpemAll';
import PracticeCoding from '../../components/practice-coding/PracticeCoding';
import Footer from '../../layouts/footer/Footer';
import Coding from '../../components/coding/Coding';
import AnnouncementBar from '../../components/announcement-bar/AnnouncemetBar'
import Hero from '../../components/hero/Hero'
import Spotlight from '../../components/spotlight/Spotlight'
import HelpemAll from '../../components/helpemall/HelpemAll'
import PracticeCoding from '../../components/practice-coding/PracticeCoding'
import Footer from '../../layouts/footer/Footer'

const Home = () => {
  
  return (
    <div>
      <AnnouncementBar/>
      <Hero/>
      <Spotlight/>
      <Coding />
      <HelpemAll/>
      <PracticeCoding/>
      <Footer/>
    </div>
  )
}

export default Home