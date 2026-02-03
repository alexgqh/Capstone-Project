import { useState, useRef, useEffect } from 'react';
import { PageProvider } from './components/global/PageContext';

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
    setPage("home");
    scrollToTop();
  }
  const setPageReserve1 = () => {
    setPage("reserve1");
  }
  const setPageReserve2 = () => {
    setPage("reserve2");
  }
  const setPageReserve = () => {
    if (!page.startsWith("reserve")) {
      setPageReserve1();
    }
    scrollToTop();
  }
  const cancelReservation = () => {
    setIsCanceling(true);
  }
  const setPageConfirmed = () => {
    setPage("reservationConfirming");
    // setTimeout(() => setPage("reservationConfirmed"), 2500);
  }

  useEffect(() => {
    document.querySelector("body").classList = isCanceling ? 'no-scrollbar' : '';
  }, [isCanceling])

  function renderHeader() {
    if (!["reservationConfirmed","reservationConfirming"].includes(page)) {
      return <Header ref={headerRef} />;
    }
  }

  function renderPage() {
    switch (page) {
      case "home": return <Home />;
      case "reserve1":
      case "reserve2":
      case "reservationConfirming":
      case "reservationConfirmed": return <Reserve />;
      default: {
        setPage("home");
        return <Home />;
      }
    }
  }

  return (
    <PageProvider value={{page, setPageHome, setPageReserve1, setPageReserve2, setPageReserve, setPageConfirmed, cancelReservation, scrollToTop}}>
      {renderHeader()}
      {renderPage()}
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