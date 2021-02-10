/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { withTheme } from "@emotion/react";
import { CSSTransition } from "react-transition-group";
import Paper from "../../components/Paper/Paper";
import me2 from "../../images/me2.jpg";
import styles from "./Profile.module.css";

const Profile = ({ theme }) => {
  const { secondary } = theme;

  const [onPage, setOnPage] = useState(false);

  useEffect(() => {
    setTimeout(() => setOnPage(true), 500);
  }, []);
  return (
    <div>
      <Paper>
        <div>
          <center style={{ marginTop: "50px", color: secondary }}>
            <h1>About me</h1>
          </center>
          <CSSTransition
            in={onPage}
            timeout={1000}
            classNames="alert"
            unmountOnExit
          >
            <div className={styles.flex}>
              <div className={styles.flexGrow}>
                <img src={me2} alt="Me" className={styles.image} />
              </div>
              <div className={styles.flexGrow}>
                <p
                  className={styles.description}
                  style={{
                    color: secondary,
                  }}
                >
                  My name is Dandi Indra Wijaya I&apos;m from Cilacap Indonesia.
                  I was born on 5th November 1999. I&apos;m currently studying
                  Informatic Engineering at Semarang State University.
                </p>
                <p
                  className={styles.description}
                  style={{
                    color: secondary,
                    marginTop: "10px",
                  }}
                >
                  Interested in web-based programming, especially the visual
                  aspects of the web. Work with attention to detail and
                  tidiness.
                </p>
              </div>
            </div>
          </CSSTransition>
        </div>
      </Paper>
    </div>
  );
};

export default withTheme(withRouter(Profile));
