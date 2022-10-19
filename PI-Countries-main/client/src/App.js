import './App.css';
import { Route } from "react-router-dom";
import React from "react";
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Countries from './components/Countries/Countries';
import Activities from './components/Activities/Activities';
import ActivityCreate from './components/ActivityCreate/ActivityCreate';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
        <Footer/>
      </Route>
      <Route exact path="/countries">
        <div className='countries__containerApp'>
          <div className='navbar__App'>
            <Navbar />
          </div>
          <div className='countries__App'>
            <Countries />
          </div>
          <div className='footer__App'>
            <Footer />
          </div>
        </div>
      </Route>
      <Route exact path="/activities">
        <div className='countries__containerApp'>
            <div className='navbar__App'>
              <Navbar />
            </div>
            <div className='countries__App'>
              <Activities />
            </div>
            <div className='footer__App'>
              <Footer />
            </div>
        </div>
      </Route>
      <Route exact path="/createActivity">
        <ActivityCreate />
      </Route>
      <Route exact path="/countries/:idPais">
        <Navbar />
        <CountryDetails />
        <Footer />
      </Route>
    </div>
  );
}

export default App;
