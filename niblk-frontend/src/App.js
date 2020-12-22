import { useEffect } from 'react';
import './App.css';
import Hero from './Components/HeroComponent';
import LinkComponent from './Components/LinkComponent';

function App() {
  useEffect(() => {
    console.clear();
  });
  return (
    <div className="App">
      <Hero/>
      <LinkComponent />
      {/* <NotFound /> */}
    </div>
  );
}

export default App;
