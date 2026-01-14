import Header from './header';
import Hero from './hero';
import Specials from './specials';
import Testimonials from './testimonials';
import About from './about';
import Footer from './footer';

import { useRef } from 'react';

const Home = ({ setPage }) => {
  const headerRef = useRef();

  const switchPage = () => {
    setPage("reserve");
  }

  const scrollToTop = () => {
    headerRef.current.scrollIntoView({
      behavior: 'smooth', // Optional: for a smooth scrolling animation
      block: 'start',      // Optional: align the top of the element to the top of the viewport
    });
  }

  return (
    <>
      <Header switchPage={switchPage} scrollToTop={scrollToTop} ref={headerRef} />
      <main>
        <Hero switchPage={switchPage} scrollToTop={scrollToTop} />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer switchPage={switchPage} scrollToTop={scrollToTop} />
    </>
  )
}

export default Home;