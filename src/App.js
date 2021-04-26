import React from 'react';
import './App.css';
import Charts from './components/Dashboard/charts';
import SlideMenu from 'react-slide-menu'
import StickyFooter from 'react-sticky-footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import AboutUs from './components/About Us/AboutUs';
import Assignment from './components/Assignment/Assignment';
import Calender from './components/Calender/Calendar';
import Profile from './components/Profile/Profile';
import Result from './components/Result/Result';
import Settings from './components/Settings/Settings';
import Support from './components/Support/Support';
import TodoMaterial from './components/Todo/ToDo_Material';
import Keep from './components/Keep/keep';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
    <Header />  
     <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Dashboard} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/calender' component={Calender} />
          <Route path='/profile' component={Profile} />
          <Route path='/result' component={Result} />
          <Route path='/settings' component={Settings} />
          <Route path='/support' component={Support} />
          <Route path='/todo' component={TodoMaterial} />
          <Route path='/keep' component={Keep} />
          <Route path='/assignment' component={Assignment} />
      </Switch>
    </Router>
      <Footer />




      {/* <Header /> */}
      {/* <Dashboard /> */}
        {/* <Navbar /> */}
        {/* <Switch> */}
          {/* <Route exact path="/" component={Dashboard} /> */}
          {/* <Route  path="/aboutus" component={AboutUs} /> */}
          {/* <Route  path="/Assignment" component={Assignment} /> */}
        {/* </Switch> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
