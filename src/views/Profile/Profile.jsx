import React from "react";
import { withRouter } from "react-router-dom";
import { withTheme } from "@emotion/react";
import Paper from "../../components/Paper/Paper";
import me2 from "../../images/me2.jpg";
import styles from "./Profile.module.css";

// eslint-disable-next-line react/prop-types
const Profile = ({ theme }) => {
  // eslint-disable-next-line react/prop-types
  const { secondary } = theme;
  return (
    <div>
      <Paper>
        <div>
          <center style={{ marginTop: "50px", color: secondary }}>
            <h1>About me</h1>
          </center>
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
                My name is Dandi Indra Wijaya I&apos;m from Cilacap Indonesia. I
                was born on 5th November 1999. I&apos;m currently studying
                Informatic Engineering at Semarang State University.
              </p>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default withTheme(withRouter(Profile));
