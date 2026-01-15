import { useState, useRef, useEffect } from 'react';
import { PageProvider } from './global/pageContext';

import Header from './components/header';
import Home from './components/home';
import Reserve from './components/reserve';
import Confirm from './components/confirm';

function App() {
  const headerRef = useRef();

  const scrollToTop = () => {
    headerRef?.current.scrollIntoView({
      behavior: 'smooth', // Optional: for a smooth scrolling animation
      block: 'start',      // Optional: align the top of the element to the top of the viewport
    });
  }

  const [page, setPage] = useState("home");
  const [isCanceling, setIsCanceling] = useState(false);

  const setPageHome = () => {
    setPage(prev => {
      if (prev.startsWith("reserve")) {
        //user was reserving and now wants to navigate to home page. make sure user wants to cancel their reservation!!
        setIsCanceling(true);
        return prev;
      }
      scrollToTop();
      return "home";
    });
  }
  const setPageReserve1 = () => {
    setPage("reserve1");
  }
  const setPageReserve2 = () => {
    setPage("reserve2");
  }
  const setPageReserve = () => {
    setPageReserve1();
    scrollToTop();
  }

  useEffect(() => {
    document.querySelector("html").classList = isCanceling ? 'no-scrollbar' : '';
  }, [isCanceling])

  return (
    <PageProvider value={{page, setPageHome, setPageReserve, setPageReserve1, setPageReserve2, scrollToTop}}>
      <Header ref={headerRef} />
      {
        page.startsWith('reserve') ?
          <Reserve /> :
          <Home />
      }
      {isCanceling ?
        <Confirm
          confirmIsCTA={false}
          title="Leave this page?"
          message="Your reservation is still pending. Any information you have entered will be lost."
          onCancel={() => setIsCanceling(false)}
          onConfirm={() => {setIsCanceling(false); setPage("home"); scrollToTop();}}
        /> :
        null
      }
    </PageProvider>
  );
}

export default App