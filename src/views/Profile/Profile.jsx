import React from "react";
import { withRouter } from "react-router-dom";
import { withTheme } from "@emotion/react";
import Navigation from "../../components/Navigation/Navigation";
import Paper from "../../components/Paper/Paper";

const Profile = () => {
  return (
    <div>
      <Paper>
        <h2>Hello World</h2>
        <Navigation />
      </Paper>
    </div>
  );
};

export default withTheme(withRouter(Profile));
