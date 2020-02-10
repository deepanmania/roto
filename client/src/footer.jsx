import React, { Component, Fragment } from "react";
import "react-phone-number-input/style.css";
import {
  isBrowser,
  isMobile
} from "react-device-detect"

import { Link } from "react-router-dom";
class Footer extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault();
    const desc = event.target.description.value
    const name = event.target.name.value
    const phoneno = event.target.phoneno.value
    let body = `Name - ${name}\nPhoneNumber - ${phoneno}\nDescription - ${desc}\n`
    const location = `mailto:inquiries@rotopolymers.co.in?Subject=Roto Polymers: Query from Contact Us&Body=${encodeURIComponent(body)}`
    document.location.href = location
  }
  render() {
    return (
      <React.Fragment>
      <div className="nav-wrapper">
          <a name="contact-us" class="contact-us"></a>
      </div>
      <div id="contact">
        <div className="contact-w3ls">
          <div className="container">
            <div className="footer-grids w3-agileits">
              <div className="row">
              <div className="col-md-6">
                <div className="column">
                <div className="col-md-8 footer-grid">
                <p style={{
                  'line-height': '20px'
                }}>
                  <span
                    className="glyphicon glyphicon-map-marker"
                    aria-hidden="true"
                  />{" "}
                  <b>Address:</b><br />{isMobile ? <br /> : ""}
                  <div style={{
                    'margin-left': "8.5%"
                  }}>
                  S Seshadri (Marketing Manager)
                  <br />
                  Plot No. 125, S. No. 8/1, 10/2B, Orakkadu Village Sholavaram, Chennai- 600067, Tamil Nadu, India
                  </div>
                </p>
                <p>
                  <a href="mailto:inquiry@rotopolymers.com">
                    <span
                      className="glyphicon glyphicon-envelope"
                      aria-hidden="true"
                    />{" "}
                    <b>Email:</b><br />{isMobile ? <br /> : ""}
                    <div style={{
                      "margin-left": "8.5%"
                    }}>
                    inquiry@rotopolymers.com
                    </div>
                  </a>
                </p>
                <p>
                  <span
                    className="glyphicon glyphicon-earphone"
                    aria-hidden="true"
                  /><b>Phone:</b><br />{isMobile ? <br /> : ""}
                  <div style={{
                    'margin-left': '8.5%'
                  }}>
                  08048763078
                  </div>
                </p>
              </div>
              <div className="col-md-4 footer-grid">
                <ul>
                  <li>
                    <a className="scroll" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                  <Link
                        className="dropdown-item"
                        className="scroll"
                        to={{ pathname: "/about" }}
                      >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <a className="scroll" href="/#products">
                      Products
                    </a>
                  </li>
                  <li>
                  <a className="scroll" href="/vacancy">
                      Job Vacancies
                    </a>
                  </li>
                  <li>
                    <a className="scroll" href="#Contact">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
                </div>
                <div className="column">
                <div className="col-md-12 footer-grid">
                  <br/>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.6670314860257!2d80.18389721482497!3d13.246200490676165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDE0JzQ2LjMiTiA4MMKwMTEnMDkuOSJF!5e0!3m2!1sen!2sin!4v1577152201118!5m2!1sen!2sin" frameborder='0' style={{border: 0, width: "inherit", height: "220px", allowfullscreen: ''}}></iframe></div>
                </div>
              </div>
              <div className="col-md-6 price">
                <h3>
                  <span>Tell Us What Are You Looking For ?</span>
                </h3>
                <div className="reservation">
                <div className="keywords">
                    <form onSubmit={this.handleSubmit}>
                      {/* <span
                        className="glyphicon glyphicon-pencil"
                        aria-hidden="true"
                        style={{
                          top: "15%"
                        }}
                      />
                      <input
                        type="text"
                        name="Key Words"
                        placeholder="Describe your requirement in detail"
                        required=" "
                        style={{
                          height: "100px"
                        }}
                      /> */}
                      <div className="reservation-grids">
                      <div className="md-form">
                        <div className="keywords">
                        <span
                        className="glyphicon glyphicon-pencil"
                        aria-hidden="true"
                      />
                        <textarea id="description" name="description" class="md-textarea form-control" placeholder="Enter your description in detail." rows="3" required=" "></textarea>
                        </div>
                      <div className="keywords">
                        <span
                          className="glyphicon glyphicon-user"
                          aria-hidden="true"
                        />
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="md-text form-control"
                          placeholder="Enter Your Name"
                          required=" "
                          style={{
                            height: "45px"
                          }}
                        />
                      </div>
                      <div className="keywords">
                        <span
                          className="glyphicon glyphicon-earphone"
                          aria-hidden="true"
                        />
                        <input
                          type="text"
                          name="phoneno"
                          id="phoneno"
                          className="md-text form-control"
                          placeholder="Enter Your Phone Number"
                          maxLength="10"
                          minLength="10"
                          required=" "
                          style={{
                            height: "45px"
                          }}
                        />
                      </div>
                      </div>

                    <div className="clearfix"> </div>
                  </div>
                      <input type="submit" value="Send Enquiry" />
                    </form>
                  </div>
                </div>
              </div>
              </div>
              <div className="clearfix"> </div>
            </div>
            <h3 className="text-center follow">
              Share <span>Us</span>
            </h3>
            <ul className="social-icons1 agileinfo">
              <li>
                <a href="https://www.facebook.com/sharer.php?u=https://www.rotopolymers.co.in/">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/share?url=https://www.rotopolymers.co.in/&amp;text=Roto Polymers And Chemical">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/cws/share?url=https://www.rotopolymers.co.in">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              {/* <li>
                <a href="https://plus.google.com/share?url=https://www.rotopolymers.co.in/">
                  <i className="fa fa-google-plus" />
                </a>
              </li> */}
            </ul>
            <div className="w3agile_footer_copy">
              <p>©Roto Polymers And Chemicals.</p>
            </div>
          </div>
        </div>
        <a
          href="#home"
          id="toTop"
          className="scroll"
          style={{ display: "block" }}
        >
          {" "}
          <span id="toTopHover" style={{ opacity: 1 }}>
            {" "}
          </span>
        </a>
      </div>
      </React.Fragment>
    );
  }
}

export default Footer;
