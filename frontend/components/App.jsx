import React ,{ useEffect} from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import NavBarContainer from './NavBar/NavBarContainer';
import SignUpForm from "./Session/SignUpFormContainer"
import SliderData from "./ImageSlider/SliderData.js"
import Grassfed from "./Grassfed/Grassfed"
import AOS from "aos"
// import 'aos/dist/aos.css'
import Hero from "./Hero/Hero"
import Modal from "./Modal/Modal"
import About from "./About/About"


function App() {

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  });

  useEffect(() => { 
    AOS.init({});
  }, [])
  return(
    <div>
    <Modal />
    <NavBarContainer />
    
    <Hero slides={SliderData} />
    <Grassfed />
    <About />
    
    {/* <Switch>
      <Redirect to="/"  />
    </Switch> */}
      </div>
    )
};

export default App 