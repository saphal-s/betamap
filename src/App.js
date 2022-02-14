import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/nav/footer/Footer';
import Headerf from './components/nav/header/Headerf';
import Headers from './components/nav/header/Headers';
import ScrollButton from './components/nav/scroll/ScrollButton';

import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Events from './pages/Events';
import Course from './pages/Course';
import Register from './pages/register/Register';
import Contact from './pages/contact/Contact';
import Australia from './pages/study/Australia';
import Usa from './pages/study/Usa';
import Canada from './pages/study/Canada';
import Newzealand from './pages/study/Newzealand';
import Japan from './pages/study/Japan';
import Europe from './pages/study/Europe';
import Uk from './pages/study/Uk';


function App() {
  return (
    <>
      <Headerf />
      <Headers />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={About} />
        <Route path="/services" component={Service} />
        <Route path="/events" component={Events} />
        <Route path="/courses" component={Course} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/register" component={Register} />
        <Route path="/study-australia" component={Australia} />
        <Route path="/study-usa" component={Usa} />
        <Route path="/study-canada" component={Canada} />
        <Route path="/study-newzealand" component={Newzealand} />
        <Route path="/study-japan" component={Japan} />
        <Route path="/study-europe" component={Europe} />
        <Route path="/study-uk" component={Uk} />
      </Switch>
      <Footer />
      <ScrollButton />
    </>
  );
}

export default App;
