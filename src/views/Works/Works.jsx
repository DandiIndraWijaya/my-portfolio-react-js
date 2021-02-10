/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { withTheme } from "@emotion/react";
import { withRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Paper from "../../components/Paper/Paper";
import styles from "./Works.module.css";
import work1 from "../../images/work1.png";
import work2 from "../../images/work2.png";
import work3 from "../../images/work3.png";

const Works = ({ theme }) => {
  const { secondary } = theme;
  const [onPage, setOnPage] = useState(false);

  useEffect(() => {
    setTimeout(() => setOnPage(true), 500);
  }, []);
  return (
    <div>
      <Paper>
        <center style={{ marginTop: "50px", color: secondary }}>
          <h1>Projects that I&apos;ve been working on</h1>
          <CSSTransition
            in={onPage}
            timeout={1000}
            classNames="alert"
            unmountOnExit
          >
            <div className={styles.works}>
              <a href="https://top-euro-league.web.app/">
                <img src={work3} alt="work 3" className={styles.image} />
              </a>

              <a href="https://movies-info-96656.web.app/">
                <img src={work1} alt="work 1" className={styles.image} />
              </a>
              <a href="https://my-deadline.web.app/">
                <img
                  src={work2}
                  alt="work 2"
                  className={styles.image}
                  style={{ marginBottom: "150px" }}
                />
              </a>
            </div>
          </CSSTransition>
        </center>
      </Paper>
    </div>
  );
};

export default withTheme(withRouter(Works));
