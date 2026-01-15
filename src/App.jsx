import { useState, useRef } from 'react';
import { PageProvider } from './global/pageContext';

import Header from './components/header';
import Home from './components/home';
import Reserve from './components/reserve';

function App() {
  const headerRef = useRef();

  const scrollToTop = () => {
    headerRef?.current.scrollIntoView({
      behavior: 'smooth', // Optional: for a smooth scrolling animation
      block: 'start',      // Optional: align the top of the element to the top of the viewport
    });
  }

  const [page, setPage] = useState("home");

  const setPageHome = () => {
    setPage(prev => {
      if (prev.startsWith("reserve")) {
        //make sure user wants to cancel their reservation!!
        if (!window.confirm("Are you sure you want to cancel making a reservation?")) {
          return prev;
        }
      }
      return "home";
    });
    scrollToTop();
  }
  const setPageReserve = () => {
    setPage("reserve1");
    scrollToTop();
  }
  const setPageReserve1 = () => {
    setPage("reserve1");
  }
  const setPageReserve2 = () => {
    setPage("reserve2");
  }

  return (
    <PageProvider value={{page, setPageHome, setPageReserve, setPageReserve1, setPageReserve2, scrollToTop}}>
      <Header ref={headerRef} />
      {
        page.startsWith('reserve') ?
          <Reserve /> :
          <Home />
      }
    </PageProvider>
  );
}

export default App