import './App.css';
import Hero from './Components/HeroComponent';
import LinkComponent from './Components/LinkComponent';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
      <Hero/>
      <LinkComponent />
      {/* <NotFound /> */}
    </div>
  );
}

export default App;
