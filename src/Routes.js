import React from "react";
import { Route, useLocation } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import Profile from "./views/Profile/Profile";
import Welcome from "./views/Welcome/Welcome";
import Skills from "./views/Skills/Skills";
import Navigation from "./components/Navigation/Navigation";

const Routes = () => {
  const location = useLocation();

  return (
    <div>
      <SlideRoutes
        pathList={["/", "/profile", "/skills"]}
        location={location}
        duration={500}
      >
        <Route exact path="/" component={Welcome} />
        <Route path="/profile" component={Profile} />
        <Route path="/skills" component={Skills} />
      </SlideRoutes>
      <Navigation />
    </div>
  );
};

export default Routes;
