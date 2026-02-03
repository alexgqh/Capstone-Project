import Hero from './hero';
import Specials from './specials';
import Testimonials from './testimonials';
import About from './about';
import Footer from './footer';

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default Home;