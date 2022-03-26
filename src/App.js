
import './App.css';
import Contact from './components/contact/Contact';
import Hero1 from './components/Hero1';
import Inter from './components/inter/Inter';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
        <Nav />
        <Hero1 />
        <Contact />
        <Inter />
    </div>
  );
}

export default App;
