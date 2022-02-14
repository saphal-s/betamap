import React from 'react';
import './App.css';
import HeroSection from './components/herosection/HeroSection';
import Footer from './components/nav/footer/Footer';
import Headerf from './components/nav/header/Headerf';
import Headers from './components/nav/header/Headers';
import ScrollButton from './components/nav/scroll/ScrollButton';
import Routes from './Routes';

function App() {
  return (
    <>
      <Headerf />
      <Headers/>
      <HeroSection/>
      <Routes/>
      <Footer/>
      <ScrollButton/>
    </>
  );
}

export default App;
