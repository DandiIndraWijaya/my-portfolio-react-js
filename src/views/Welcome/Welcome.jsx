import React, { useEffect, useState } from "react";
import { withTheme } from "@emotion/react";
import { withRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import me1 from "../../images/me1.png";
import Paper from "../../components/Paper/Paper";
// eslint-disable-next-line react/prop-types
const Welcome = ({ theme }) => {
  // eslint-disable-next-line react/prop-types
  const { secondary } = theme;
  const [onPage, setOnPage] = useState(false);
  const [onPage2, setOnPage2] = useState(false);
  const [onPage3, setOnPage3] = useState(false);

  useEffect(() => {
    setTimeout(() => setOnPage(true), 700);
    setTimeout(() => setOnPage2(true), 1400);
    setTimeout(() => setOnPage3(true), 2100);
  }, []);

  return (
    <div>
      <Paper>
        <center>
          <CSSTransition
            in={onPage}
            timeout={1500}
            classNames="alert"
            unmountOnExit
          >
            <div>
              <h1 style={{ color: secondary, marginTop: "30px" }}>Hi, </h1>
              <h1 style={{ color: secondary }}>I&apos;m Dandi</h1>
            </div>
          </CSSTransition>
          <CSSTransition
            in={onPage2}
            timeout={1500}
            classNames="alert"
            unmountOnExit
          >
            <p style={{ color: secondary, marginTop: "10px" }}>
              Frontend Web Developer
            </p>
          </CSSTransition>
          <CSSTransition
            in={onPage3}
            timeout={1500}
            classNames="alert"
            unmountOnExit
          >
            <img
              src={me1}
              alt="Dandi"
              style={{ width: "350px", marginTop: "25px" }}
            />
          </CSSTransition>
        </center>
      </Paper>
    </div>
  );
};

export default withTheme(withRouter(Welcome));
