import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();
    setSent(true);
    try {
      await axios.post(
        `https://sheltered-inlet-00725.herokuapp.com/send_mail`,
        {
          name,
          email,
          subject,
          message,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="pad dark-hero">
      <h2 id="title" className="center ">
        Contact
      </h2>

      <section className="dark-contact contactPad">
        <div className="container ">
          <div className="row ">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6 contactPad">
                      <div className="title-box-2">
                        <h5 className="title-left"> Send Me a Message</h5>
                      </div>
                      <div>
                        {!sent ? (
                          <form onSubmit={handleSend}>
                            <div className="row">
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                  />{" "}
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    placeholder="Subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    name="message"
                                    rows="5"
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                  ></textarea>
                                </div>
                              </div>
                              {/* <div class="col-md-12 text-center my-3">
                              <div class="loading">Loading</div>
                              <div class="error-message"></div>
                              <div class="sent-message">
                                Your message has been sent. Thank you!
                              </div>
                            </div> */}
                              <div className="col-md-12 text-center">
                                <button
                                  type="submit"
                                  className="btn btn-primary mt-5"
                                >
                                  Send Message
                                </button>
                              </div>
                            </div>
                          </form>
                        ) : (
                          <h1 variant="success">Email Sent</h1>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left"> Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          {" "}
                          If you would like to contact me please send me a
                          message or email me.
                        </p>
                        <ul className="list-ico">
                          {/* <li>
                            <span class="bi bi-geo-alt"></span> John Solomou
                          </li> */}
                          {/* <li>
                            <span class="bi bi-phone"></span> 
                          </li> */}
                          <li>
                            <span className="bi bi-envelope"></span>{" "}
                            jsolomou79@gmail.com
                          </li>
                        </ul>
                      </div>
                      {/* <div class="socials">
                        <ul>
                          <li>
                            <a href="">
                              <span class="ico-circle">
                                <i class="bi bi-facebook"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span class="ico-circle">
                                <i class="bi bi-instagram"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span class="ico-circle">
                                <i class="bi bi-twitter"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span class="ico-circle">
                                <i class="bi bi-linkedin"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
