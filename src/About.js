import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import html from "./img/html.png";
import css from "./img/css.png";
import js from "./img/js.png";
import heroku from "./img/heroku.png";
import npm from "./img/npm.png";
import node from "./img/node.png";
import firebase from "./img/firebase.png";
import expressjs from "./img/ExpressJS.png";
import jest from "./img/jest.png";
import postgresql from "./img/pg.png";
import react from "./img/react.png";
import ts from "./img/tsd.png";
import vscode from "./img/vscode.png";
import chrome from "./img/chrome.png";
import github from "./img/github.svg";
import postman from "./img/postman.png";
import terminal from "./img/terminal.png";
import sass from "./img/sass.svg";
import axios from "axios";
function About() {
  return (
    <div className="dark-hero ">
      <div className="center move-down-about" id="about">
        <section>
          <h1
            className="co "
            id="title"
            // style={{ paddingTop: "20px", paddingBottom: "150px" }}
          >
            About
          </h1>
          <div className="container card center about-info">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-sm-6 col-md-5">
                          <div className=""></div>
                        </div>
                        <div className="col-sm-6 col-md-7"></div>
                      </div>
                      <div>
                        <div className="about-me title-s">About me</div>
                        <div style={{ color: "black" }}>
                          years of experience in developing and designing user
                          friendly, cross browser complaint web sites, and User
                          Interface (UI) applications using HTML5, CSS3,
                          Bootstrap, JavaScript, Node.js and React.js. •
                          Developed user interface by using the React.js SPA
                          development and used React-Router to turn it into
                          Single Page Application (SPA). • Strong experience in
                          Client Side designing and validations using HTML, CSS
                          and JavaScript. • Used HTML5 elements like video,
                          audio and canvas in making the website interactive. •
                          Design developer and test HTML5, CSS3, JavaScript and
                          React.JS that meets accessibility and web browser
                          standards for website. • Experience in configuring,
                          deployment and support of cloud services including
                          Confidential Web Services (AWS). • Proficient in
                          developing Single Page Applications (SPA) using
                          React.JS and NodeJS. • Extensively worked with Version
                          Control Systems like Perforce, GIT and Github • Good
                          practice with the Node.JS application in building the
                          minified versions. • Experienced in Agile
                          Methodologies and SCRUM Process. • Experience in
                          database development skills like Postgre SQL. •
                          Experienced in using version control tools GIT to keep
                          track of development stages and deployment stage. •
                          Used the best practices of SDLC as well as
                          Agile/Scrum, methodologies. • Hands on experience in
                          using React.JS with ES6 features to develop reusable
                          components and using Redux to enable predictable state
                          change and improve maintainability of the code. •
                          Excellent interpersonal abilities, Communication
                          skills, time management and team skills.
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="container">
                        <div className="title-box-2">
                          <h5>Skills</h5>
                        </div>
                        <div className="row tech-logo ">
                          <div className="col col-md-3 mb-3">
                            <img
                              className="image"
                              src={html}
                              alt="HTML5 - Structure web pages and components"
                            />
                          </div>
                          <div className="col col-md-3 mb-3">
                            <div
                              title="CSS3 - Control the way elements are displayed in the web browser"
                              className="tech-logo"
                            >
                              <img
                                className="image"
                                src={css}
                                alt="CSS3 - Control the way elements are displayed in the web browser"
                              />
                            </div>
                          </div>
                          <div className="col col-md-3 tech-logo mb-3">
                            <img className="image" src={js} alt="JavaScript" />
                          </div>
                          <div className="col col-md-3 mb-3">
                            <div
                              title="Heroku - Cloud-based web hosting platform"
                              className="tech-logo"
                            >
                              <img
                                className="image"
                                src={heroku}
                                alt="Heroku - Cloud-based web hosting platform"
                              />
                            </div>
                          </div>
                          <div className="col col-md-3 mb-3">
                            <div
                              title="NPM - Node Package Manager"
                              className="tech-logo"
                            >
                              <img
                                className="image"
                                src={npm}
                                alt="NPM - Node Package Manager"
                              />
                            </div>
                          </div>
                          <div className="col col-md-3 mb-3">
                            <div title="NodeJS" className="tech-logo">
                              <img className="image" src={node} alt="NodeJS" />
                            </div>
                          </div>
                          <div className="col col-md-3 mb-3">
                            <div title="Firebase" className="tech-logo">
                              <img
                                className="image"
                                src={firebase}
                                alt="Firebase"
                              />
                            </div>
                          </div>
                          <div className="col col-md-3 mb-3">
                            <div
                              title="ExpressJS - Lightweight but powerful NodeJS-based backend server"
                              className="tech-logo"
                            >
                              <img
                                className="image"
                                src={expressjs}
                                alt="ExpressJS - Lightweight but powerful NodeJS-based backend server"
                              />
                            </div>
                          </div>
                          <div className="col col-md-3 mb-3">
                            <div
                              title="Jest - Test javascript code and web components"
                              className="tech-logo"
                            >
                              <img
                                className="image"
                                src={jest}
                                alt="Jest - Test javascript code and web components"
                              />
                            </div>
                          </div>
                          <div className="col col-md-3 mb-3">
                            <div title="PostgreSQL" className="tech-logo">
                              <img
                                className="image"
                                src={postgresql}
                                alt="PostgreSQL"
                              />
                            </div>
                          </div>
                          <div className="col col-md-3 mb-3">
                            <div title="ReactJS" className="tech-logo">
                              <img
                                className="image"
                                src={react}
                                alt="ReactJS"
                              />
                            </div>
                          </div>
                          <div className="col col-md-3 mb-3">
                            <div title="SASS" className="tech-logo">
                              <img className="image" src={sass} alt="SASS" />
                            </div>
                          </div>
                          <div className="col col-md-3 mb-3">
                            <div title="TypeScript" className="tech-logo">
                              <img
                                className="image"
                                src={ts}
                                alt="TypeScript"
                              />
                            </div>
                          </div>
                          <div className="col col-md-3 mb-3">
                            <img
                              className="image"
                              src={vscode}
                              alt="Visual Studio Code"
                            />
                          </div>
                          <div className="col col-md-3 mb-3">
                            <div title="Chrome" className="tech-logo">
                              <img
                                className="image"
                                src={chrome}
                                alt="Chrome"
                              />
                            </div>
                          </div>
                          <div className="col col-md-3 mb-3">
                            <div title="Github" className="tech-logo">
                              <a
                                href="https://github.com/JohnSolomou"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  className="image"
                                  src={github}
                                  alt="Github"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col col-md-3 mb-3">
                            <div title="Postman" className="tech-logo">
                              <img
                                className="image"
                                src={postman}
                                alt="Postman"
                              />
                            </div>
                          </div>
                          <div className="col col-md-3 mb-3">
                            <div title="Terminal" className="tech-logo">
                              <img
                                className="image"
                                src={terminal}
                                alt="Terminal"
                              />
                            </div>
                          </div>
                          <div className="col col-md-3 mb-3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
