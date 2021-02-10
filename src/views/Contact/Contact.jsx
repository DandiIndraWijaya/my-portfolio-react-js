/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { withTheme } from "@emotion/react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { CSSTransition } from "react-transition-group";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Paper from "../../components/Paper/Paper";
import styles from "./Contact.module.css";

const Contact = ({ theme }) => {
  const { primary, secondary } = theme;
  const [onPage, setOnPage] = useState(false);
  useEffect(() => {
    setTimeout(() => setOnPage(true), 500);
  }, []);
  return (
    <div>
      <Paper>
        <center style={{ marginTop: "50px", color: secondary }}>
          <h1>Contact Me</h1>
          <CSSTransition
            in={onPage}
            timeout={1000}
            classNames="alert"
            unmountOnExit
          >
            <div className={styles.contact} style={{ color: primary }}>
              <div className={styles.flex}>
                <div className={styles.flexGrow}>
                  <div className={styles.card}>
                    <div>dandiindra29@gmail.com</div>
                    <FontAwesomeIcon
                      title="Email"
                      color={primary}
                      size="6x"
                      icon={faEnvelope}
                    />
                  </div>
                </div>
                <div className={styles.flexGrow}>
                  <a
                    href="https://wa.me/+6285932446148"
                    style={{ color: "unset", textDecoration: "unset" }}
                  >
                    <div className={styles.card}>
                      <div>+6285932446148</div>
                      <FontAwesomeIcon
                        title="Whatsapp"
                        color={primary}
                        size="6x"
                        icon={faWhatsapp}
                      />
                    </div>
                  </a>
                </div>
                <div className={styles.flexGrow}>
                  <a
                    href="https://github.com/DandiIndraWijaya/"
                    style={{ color: "unset", textDecoration: "unset" }}
                  >
                    <div className={styles.card}>
                      <div>DandiIndraWijaya</div>
                      <FontAwesomeIcon
                        title="Github"
                        color={primary}
                        size="6x"
                        icon={faGithub}
                      />
                    </div>
                  </a>
                </div>
                <div className={styles.flexGrow}>
                  <a
                    href="https://www.linkedin.com/in/dandi-indra-2640501b4/"
                    style={{ color: "unset", textDecoration: "unset" }}
                  >
                    <div className={styles.card}>
                      <div>Dandi Indra</div>
                      <FontAwesomeIcon
                        title="Linkedin"
                        color={primary}
                        size="6x"
                        icon={faLinkedin}
                      />
                    </div>
                  </a>
                </div>
                <div className={styles.flexGrow}>
                  <a
                    href="https://www.instagram.com/dandiindrawijaya/"
                    style={{ color: "unset", textDecoration: "unset" }}
                  >
                    <div className={styles.card}>
                      <div>dandiindrawijaya</div>
                      <FontAwesomeIcon
                        className={styles.bottomItem}
                        title="Instagram"
                        color={primary}
                        size="6x"
                        icon={faInstagram}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </CSSTransition>
        </center>
      </Paper>
    </div>
  );
};
export default withTheme(withRouter(Contact));
