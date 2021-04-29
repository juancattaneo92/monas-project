import React ,{ useEffect} from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import NavBarContainer from './NavBar/NavBarContainer';
import SignUpForm from "./Session/SignUpFormContainer"
import SliderData from "./ImageSlider/SliderData.js"
import Grassfed from "./Grassfed/Grassfed"
import AOS from "aos"
// import 'aos/dist/aos.css'
import Hero from "./Hero/Hero"
import Modal from "./Modal/Modal"
import About from "./About/About"
import MenuItemIndex from "./MenuItem/MenuItemIndex"

// import MenuItemShow from './MenuItem/MenuItemShow'
// import { fetchMenuItems } from './../actions/MenuItemActions'

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
        <Route exact path="/menu-items">
          <MenuItemIndex />
        </Route>
      </Switch>
      </div>
    )
};

export default App 