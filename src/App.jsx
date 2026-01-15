import { useState } from 'react';
import { PageProvider } from './global/pageContext';

import Home from './components/home';
import Reserve from './components/reserve';

function App() {
  const [page, setPage] = useState("home");

  const setPageHome = () => setPage("home");
  const setPageReserve = (step = 0) => setPage("reserve" + step);

  return (
    <PageProvider value={{page, setPageHome, setPageReserve}}>
      {
        page.startsWith('reserve') ?
          <Reserve /> :
          <Home />
      }
    </PageProvider>
  );
}

export default App