import Hero from '../../components/hero/Hero';
import Spotlight from '../../components/spotlight/Spotlight';
import Coding from '../../components/coding/Coding';
import Interview from '../../components/interview/Interview';
import HelpemAll from '../../components/helpemall/HelpemAll';
import PracticeCoding from '../../components/practice-coding/PracticeCoding';
import Footer from '../../layouts/footer/Footer';

const Home = () => {

  return (
    <div>
      <Hero />
      <Spotlight />
      <Coding />
      <Interview/>
      <HelpemAll />
      <PracticeCoding />
      <Footer />
    </div>
  )
}

export default Home