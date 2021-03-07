import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import NavBarContainer from './NavBar/NavBarContainer';
import SignUpForm from "./Session/SignUpFormContainer"
import SliderData from "./ImageSlider/SliderData.js"
import Grassfed from "./Grassfed/Grassfed"

import Hero from "./Hero/Hero"

const App = () => (
  <div>
    
    <NavBarContainer />
    
    <Hero slides={SliderData} />
    <Grassfed />
    
    
    {/* <Switch>
      <Redirect to="/"  />
    </Switch> */}
  </div>
);

export default App 