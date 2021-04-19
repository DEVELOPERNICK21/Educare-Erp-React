import React from 'react';
import './App.css';
import Charts from './components/Dashboard/charts';
import SlideMenu from 'react-slide-menu'
import StickyFooter from 'react-sticky-footer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () =>

  {
  return(
    <>   
     <Header />
      <Dashboard />     
    <Router>
    <div>
    </div>
      <Navbar />
      <Switch>
        <Route path="" />
      </Switch>
    </Router>
        <Footer />
    </>
  );
}

export default App;
