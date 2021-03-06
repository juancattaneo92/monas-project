import React , {useEffect} from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import NavBarContainer from './NavBar/NavBarContainer';
import SignUpForm from "./Session/SignUpFormContainer"
import SliderData from "./ImageSlider/SliderData.js"
import Grassfed from "./Grassfed/Grassfed"
import AOS from "aos"
import Hero from "./Hero/Hero"
import Modal from "./Modal/Modal"
import About from "./About/About"
import MenuItemIndex from "./MenuItem/MenuItemIndex"
import Catering from "./Catering/Catering"
import Contact from "./Contact/Contact"
import Location from "./Location/Location"
import Profile from "./Profile/Profile"
import Footer from "./Footer/Footer"


function App() {

  useEffect(() => { 
    AOS.init({});
  }, [])
  return(
    <div>
      <Modal />
      <NavBarContainer />
      <Switch>
        <Route exact path="/">
          <Hero slides={SliderData} />
          <About />
          <Grassfed />
        </Route>
        <Route exact path="/menu-items/:category">
          <MenuItemIndex />
        </Route>
      
        <Route exact path="/catering">
          <Catering />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/locations">
          <Location />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
      <Footer/>
      </div>
    )
};

export default App 