import React, { Component, Fragment } from "react";
import { Row, Col, Button, Container, Modal } from "react-bootstrap";
import Header from "./header"
import Footer from "./footer";
import PhoneInput from "react-phone-number-input";

class Vacancy extends Component {
  constructor(props) {
    super(props)
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      show: false
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    const cover = event.target.cover.value
    const name = event.target.name.value
    const phoneno = event.target.phoneno.value
    const email = event.target.email.value
    let body = `Name - ${name}\nPhoneNumber - ${phoneno}\nEmail - ${email}\nCover: ${cover}`
    const location = `mailto:inquiries@rotopolymers.co.in?Subject=Roto Polymers: Job Application&Body=${encodeURIComponent(body)}`
    document.location.href = location
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <h3 className="tittle" style={{
            textAlign: 'left'
          }}><span>Job Vacancies</span></h3>
          <br />
          <h4 className="tittle two subtitle"><span>Plant Operator</span></h4>
          <div className="ab-text">
            <p>We are having requirement of Plant Operator for our company.</p>
          </div>
          <div class="start" style={{ "position": "relative" }}>
            <a href="#" style={{
              color: "#fff",
              background: "#5fa529"
            }} onClick={this.handleShow}>Apply Now</a>
            <br /><br />
          </div>
          <Modal show={this.state.show} style={{ opacity: 1 }} fade={false} onHide={this.handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
              <Modal.Title>Job Application Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <div
                  style={{
                    padding: "2rem",
                    width: "100%"
                  }}>
                  <h4 className="tittle">Plant Operator
                                </h4>
                  <div className="reservation">
                    <div className="reservation-grids">
                      <div className="clearfix"> </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
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
                      <div className="keywords">
                        <span
                          className="glyphicon glyphicon-envelope"
                          aria-hidden="true"
                        />
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="md-text form-control"
                          placeholder="Enter Your Email"
                          required=" "
                          style={{
                            height: "45px"
                          }}
                        />
                      </div>
                      <div className="keywords">
                        <span
                          className="glyphicon glyphicon-pencil"
                          aria-hidden="true"
                        />
                        <textarea id="cover" name="cover" class="md-textarea form-control" placeholder="Covering Letter" rows="3" required=" "></textarea>
                      </div>
                      <div className="keywords">
                        <input type="submit" value="Apply" />
                      </div>
                    </form>
                  </div>
                </div>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
            </Button>
            </Modal.Footer>
          </Modal>
        </Container>
        <Footer />
      </div >
    );
  }
}

export default Vacancy;
