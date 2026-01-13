import Home from './components/home';
import { useState } from 'react';
import Button from './components/button';

function App() {
  const [page, setPage] = useState("home");

  return (
    page === "reserve" ?
      <Button isCTA={true} onClick={() => setPage("home")}>Back to home</Button> :
      <Home setPage={setPage} />
  );
}

export default App