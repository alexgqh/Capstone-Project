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

  const setPageHome = () => { setPage("home"); scrollToTop(); }
  const setPageReserve = (step = 0) => { setPage("reserve" + step); scrollToTop(); }

  return (
    <PageProvider value={{page, setPageHome, setPageReserve, scrollToTop}}>
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