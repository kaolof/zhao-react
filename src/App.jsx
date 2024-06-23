import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { WeOffer } from "./components/weoffer";
import { OurGoal } from "./components/ourgoal";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import SmoothScroll from "smooth-scroll";
import "./App.css";
/* import './styles/style.css'; */

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
 /*  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []); */

  return (
    <div>
      <Navigation/>
      <Header/>
      <About/>
      <OurGoal/>
      <WeOffer/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
