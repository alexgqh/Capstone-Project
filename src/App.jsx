import Home from './components/home';

import { useState } from 'react';

function App() {
  const [page, setPage] = useState("home");

  return (
    page === "reserve" ?
      <h1 onClick={() => setPage("home")}>back to home</h1> :
      <Home setPage={setPage} />
  );
}

export default App