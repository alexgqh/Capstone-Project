import Header from './header';
import Hero from './hero';
import Specials from './specials';
import Testimonials from './testimonials';
import About from './about';
import Footer from './footer';

const Home = ({ setPage }) => {
  return (
    <>
      <Header setPage={setPage} />
      <main>
        <Hero setPage={setPage} />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default Home;