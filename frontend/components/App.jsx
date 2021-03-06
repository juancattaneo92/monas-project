import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import NavBarContainer from './NavBar/NavBarContainer';
import SignUpForm from "./Session/SignUpFormContainer"
import SliderData from "./ImageSlider/SliderData.js"
import ImageSlider from "./ImageSlider/ImageSlider"
import Hero from "./Hero/Hero"

const App = () => (
  <div>
    
    <NavBarContainer />
    
    <Hero slides={SliderData} />
    
    
    {/* <Switch>
      <Redirect to="/"  />
    </Switch> */}
  </div>
);

export default App 