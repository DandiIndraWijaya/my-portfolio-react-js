import React from "react";
import { Route, useLocation } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import Profile from "./views/Profile/Profile";
import Welcome from "./views/Welcome/Welcome";
import Skills from "./views/Skills/Skills";
import Navigation from "./components/Navigation/Navigation";
import Works from "./views/Works/Works";
import Contact from "./views/Contact/Contact";

const Routes = () => {
  const location = useLocation();

  return (
    <div>
      <SlideRoutes
        pathList={["/", "/profile", "/skills", "/works", "/contact"]}
        location={location}
        duration={500}
      >
        <Route exact path="/" component={Welcome} />
        <Route path="/profile" component={Profile} />
        <Route path="/skills" component={Skills} />
        <Route path="/works" component={Works} />
        <Route path="/contact" component={Contact} />
      </SlideRoutes>
      <Navigation />
    </div>
  );
};

export default Routes;
