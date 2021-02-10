/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { withTheme } from "@emotion/react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faVuejs,
  faHtml5,
  faCss3,
  faJs,
  faLaravel,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import Paper from "../../components/Paper/Paper";
import styles from "./Skills.module.css";

const Skills = ({ theme }) => {
  const { secondary } = theme;

  const [onPage, setOnPage] = useState(false);
  const [onPage2, setOnPage2] = useState(false);

  const setOnPageValue = (state) => {
    setOnPage(state);
  };

  const setOnPageValue2 = (state) => {
    setOnPage2(state);
  };

  useEffect(() => {
    setTimeout(() => setOnPageValue(true), 500);
    setTimeout(() => setOnPageValue2(true), 1000);
  }, []);
  return (
    <div>
      <Paper>
        <center style={{ marginTop: "50px", color: secondary }}>
          <h1>Skills</h1>
          <div className={styles.skills}>
            <CSSTransition
              in={onPage}
              timeout={1000}
              classNames="alert"
              unmountOnExit
            >
              <div className={styles.flex}>
                <div className={styles.flexGrow}>
                  <h2>Frontend : </h2>
                </div>
                <div className={styles.flexGrow}>
                  <div className={styles.card}>
                    <FontAwesomeIcon
                      title="Javascript"
                      color="#f0db4f"
                      size="8x"
                      icon={faJs}
                    />
                  </div>
                </div>
                <div className={styles.flexGrow}>
                  <div className={styles.card}>
                    <FontAwesomeIcon
                      title="React JS"
                      color="#61dbfb"
                      size="8x"
                      icon={faReact}
                    />
                  </div>
                </div>

                <div className={styles.flexGrow}>
                  <div className={styles.card}>
                    <FontAwesomeIcon
                      title="Vue JS"
                      color="#42b883"
                      size="8x"
                      icon={faVuejs}
                    />
                  </div>
                </div>
                <div className={styles.flexGrow}>
                  <div className={styles.card}>
                    <FontAwesomeIcon
                      title="HTML"
                      color="#f06529"
                      size="8x"
                      icon={faHtml5}
                    />
                  </div>
                </div>
                <div className={styles.flexGrow}>
                  <div className={styles.card}>
                    <FontAwesomeIcon
                      title="CSS"
                      color="#264de4"
                      size="8x"
                      icon={faCss3}
                    />
                  </div>
                </div>
              </div>
            </CSSTransition>
            <CSSTransition
              in={onPage2}
              timeout={1000}
              classNames="alert"
              unmountOnExit
            >
              <div className={styles.flex}>
                <div className={styles.flexGrow}>
                  <h2>Backend : </h2>
                </div>
                <div className={styles.flexGrow}>
                  <div className={styles.card}>
                    <FontAwesomeIcon
                      title="PHP"
                      color="#8993be"
                      size="8x"
                      icon={faPhp}
                    />
                  </div>
                </div>
                <div className={styles.flexGrow}>
                  <div className={styles.card}>
                    <FontAwesomeIcon
                      title="Laravel"
                      color="#fb503b"
                      size="8x"
                      icon={faLaravel}
                    />
                  </div>
                </div>
              </div>
            </CSSTransition>
          </div>
        </center>
      </Paper>
    </div>
  );
};

export default withTheme(withRouter(Skills));
