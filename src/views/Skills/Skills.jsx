/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
import Modal from "react-modal";
import Paper from "../../components/Paper/Paper";
import styles from "./Skills.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Skills = ({ theme }) => {
  const { primary, secondary } = theme;

  const [onPage, setOnPage] = useState(false);
  const [onPage2, setOnPage2] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  // const afterOpenModal = () => {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // };

  const closeModal = () => {
    setIsOpen(false);
  };

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
        <center style={{ marginTop: "50px", color: primary }}>
          <h1 style={{ color: secondary }}>Skills</h1>
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
                  <div
                    className={styles.card}
                    onClick={() => {
                      setModalContent("javascript");
                      setIsOpen(true);
                    }}
                  >
                    <div style={{ color: secondary }}>Javascript</div>
                    <FontAwesomeIcon
                      title="Javascript"
                      color="#f0db4f"
                      size="8x"
                      icon={faJs}
                    />
                  </div>
                </div>
                <div className={styles.flexGrow}>
                  <div
                    className={styles.card}
                    onClick={() => {
                      setModalContent("reactjs");
                      setIsOpen(true);
                    }}
                  >
                    <div style={{ color: secondary }}>React.Js</div>
                    <FontAwesomeIcon
                      title="React JS"
                      color="#61dbfb"
                      size="8x"
                      icon={faReact}
                    />
                  </div>
                </div>

                <div className={styles.flexGrow}>
                  <div
                    className={styles.card}
                    onClick={() => {
                      setModalContent("vuejs");
                      setIsOpen(true);
                    }}
                  >
                    <div style={{ color: secondary }}>Vue.Js</div>
                    <FontAwesomeIcon
                      title="Vue JS"
                      color="#42b883"
                      size="8x"
                      icon={faVuejs}
                    />
                  </div>
                </div>
                <div className={styles.flexGrow}>
                  <div
                    className={styles.card}
                    onClick={() => {
                      setModalContent("html");
                      setIsOpen(true);
                    }}
                  >
                    <div style={{ color: secondary }}>HTML</div>
                    <FontAwesomeIcon
                      title="HTML"
                      color="#f06529"
                      size="8x"
                      icon={faHtml5}
                    />
                  </div>
                </div>
                <div className={styles.flexGrow}>
                  <div
                    className={styles.card}
                    onClick={() => {
                      setModalContent("css");
                      setIsOpen(true);
                    }}
                  >
                    <div style={{ color: secondary }}>CSS</div>
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
                  <div
                    className={styles.card}
                    onClick={() => {
                      setModalContent("php");
                      setIsOpen(true);
                    }}
                  >
                    <div style={{ color: secondary }}>PHP</div>
                    <FontAwesomeIcon
                      title="PHP"
                      color="#8993be"
                      size="8x"
                      icon={faPhp}
                    />
                  </div>
                </div>
                <div className={styles.flexGrow}>
                  <div
                    className={styles.card}
                    onClick={() => {
                      setModalContent("laravel");
                      setIsOpen(true);
                    }}
                  >
                    <div className={styles.bottomItem}>
                      <div style={{ color: secondary }}>Laravel</div>
                      <FontAwesomeIcon
                        title="Laravel"
                        color="#fb503b"
                        size="8x"
                        icon={faLaravel}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CSSTransition>
          </div>
        </center>
      </Paper>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {modalContent === "javascript" && (
          <div style={{ color: secondary, textAlign: "center" }}>
            <h3>Javascript</h3>
            <FontAwesomeIcon
              title="Javascript"
              color="#f0db4f"
              size="8x"
              icon={faJs}
            />

            <p>
              JavaScript is the dominant client-side scripting language of the
              Web, with 95% of websites using it for this purpose.
            </p>
          </div>
        )}

        {modalContent === "reactjs" && (
          <div style={{ color: secondary, textAlign: "center" }}>
            <h3>React.js</h3>
            <FontAwesomeIcon
              title="React JS"
              color="#61dbfb"
              size="8x"
              icon={faReact}
            />

            <p>
              React.js is an open-source JavaScript library that is used for
              building user interfaces specifically for single-page
              applications.
            </p>
          </div>
        )}

        {modalContent === "vuejs" && (
          <div style={{ color: secondary, textAlign: "center" }}>
            <h3>Vue.js</h3>
            <FontAwesomeIcon
              title="Vue JS"
              color="#42b883"
              size="8x"
              icon={faVuejs}
            />
            <p>
              Vue. js is a progressive framework for JavaScript used to build
              web interfaces and one-page applications.
            </p>
          </div>
        )}

        {modalContent === "html" && (
          <div style={{ color: secondary, textAlign: "center" }}>
            <h3>HTML</h3>
            <FontAwesomeIcon
              title="HTML"
              color="#f06529"
              size="8x"
              icon={faHtml5}
            />
            <p>
              HTML stands for Hyper Text Markup Language. HTML is the standard
              markup language for creating Web pages.
            </p>
          </div>
        )}

        {modalContent === "css" && (
          <div style={{ color: secondary, textAlign: "center" }}>
            <h3>CSS</h3>
            <FontAwesomeIcon
              title="CSS"
              color="#264de4"
              size="8x"
              icon={faCss3}
            />
            <p>
              Cascading Style Sheets (CSS) is a style sheet language used for
              describing the presentation of a document written in a markup
              language such as HTML.
            </p>
          </div>
        )}

        {modalContent === "php" && (
          <div style={{ color: secondary, textAlign: "center" }}>
            <h3>PHP</h3>
            <FontAwesomeIcon
              title="PHP"
              color="#8993be"
              size="8x"
              icon={faPhp}
            />
            <p>
              PHP (recursive acronym for PHP: Hypertext Preprocessor ) is a
              widely-used open source general-purpose scripting language that is
              especially suited for web
            </p>
          </div>
        )}

        {modalContent === "laravel" && (
          <div style={{ color: secondary, textAlign: "center" }}>
            <h3>Laravel</h3>
            <FontAwesomeIcon
              title="Laravel"
              color="#fb503b"
              size="8x"
              icon={faLaravel}
            />
            <p>
              Laravel is a free, open-source PHP web framework, created by
              Taylor Otwell and intended for the development of web applications
              following the model–view–controller (MVC).
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default withTheme(withRouter(Skills));
