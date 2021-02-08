import React from "react";
import { withTheme } from "@emotion/react";
import me1 from "../../images/me1.png";
import Paper from "../../components/Paper/Paper";
import Navigation from "../../components/Navigation/Navigation";

// eslint-disable-next-line react/prop-types
const Welcome = ({ theme }) => {
  // eslint-disable-next-line react/prop-types
  const { secondary } = theme;
  return (
    <div>
      <Paper>
        <center>
          <h1 style={{ color: secondary, marginTop: "30px" }}>Hi, </h1>
          <h1 style={{ color: secondary }}>I&apos;m Dandi</h1>
          <img
            src={me1}
            alt="Dandi"
            style={{ width: "350px", marginTop: "25px" }}
          />
        </center>
        <Navigation />
      </Paper>
    </div>
  );
};

export default withTheme(Welcome);
