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
import Location from "./Location/Location"

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
          {/* <Grassfed /> */}
        </Route>
        <Route exact path="/menu-items">
          <MenuItemIndex />
        </Route>
        <Route exact path="/catering">
          <Catering />
        </Route>
        <Route exact path="/locations">
          <Location />
        </Route>
      </Switch>
      </div>
    )
};

export default App 