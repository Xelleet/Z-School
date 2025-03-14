import React from 'react';
import Header from './Components/Header';
import Hero from './Components/HeroSection';
import Advantages from './Components/Advantages';
import AboutCourse from './Components/AboutCourse';
import Accordion from './Components/Accordion';
import Reviews from './Components/Reviews';
import Prices from './Components/Prices';
import Contacts from './Components/Contacts';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Advantages/>
      <AboutCourse/>
      <Accordion/>
      <Reviews/>
      <Prices/>
      <Contacts/>
    </div>
  );
}

export default App;
