import React, { Component, Fragment } from "react";
import "react-bootstrap";
import qs from "query-string";
import Header from "./header"
import Footer from "./footer"
import { Container, Row, Media, Modal, Button, Figure } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import { inherits } from "util";
import { Zoom } from "react-slideshow-image";

class Product extends Component {
  constructor(props) {
    super(props)
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      show: {},
      data: undefined,
      uid: undefined
    };
  }

  handleSubmit(productName, serviceName, event) {
    event.preventDefault();
    const phoneno = event.target.phoneno.value
    let body = `PhoneNumber - ${phoneno}\n`
    const location = `mailto:inquiries@rotopolymers.co.in?Subject=Roto Polymers: Quote Request for ${productName} - ${serviceName}&Body=${encodeURIComponent(body)}`
    document.location.href = location
  }

  componentWillMount() {
    this.state.uid = qs.parse(this.props.location.search).uid
    fetch(`${global.app.apiRootUrl}/product?id=${qs.parse(this.props.location.search).id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({show: {}})
        JSON.parse(data.data[0].services).forEach((i, idx) => {
          this.setState(prevState => {
            return {
              show: Object.assign(prevState.show, {[idx]: false})
            }
          })
        })
        this.setState({ data: data.data[0] })
      })
  }

  componentDidMount() {
    this.props.history.listen((location, action) => {
      if (qs.parse(this.props.location.search).id) {
        if (this.state.uid !== qs.parse(location.search).id) {
          this.state.uid = qs.parse(this.props.location.search).id
          fetch(`${global.app.apiRootUrl}/product?id=${qs.parse(location.search).id || qs.parse(this.props.location.search).id}`)
            .then(res => res.json())
            .then(data => {
              this.setState({show: {}})
              JSON.parse(data.data[0].services).forEach((i, idx) => {
                this.setState(prevState => {
                  return {
                    show: Object.assign(prevState.show, {[idx]: false})
                  }
                })
              })
              this.setState({ data: data.data[0] })
            })
        }
      }
    })
  }

  handleClose(idx) {
    this.setState(prevState => {
      return {
        show: Object.assign(prevState.show, {[idx]: false})
      }
    })
  }

  handleShow(idx) {
    this.setState(prevState => {
      return {
        show: Object.assign(prevState.show, {[idx]: true})
      }
    })
  }

  getLayout = () => {
    const product = Object.assign({}, this.state.data)
    const zoomOutProperties = {
      indicators: true,
      scale: 0.4,
      arrows: false
    };
    return (
      <div>
        <Container>
          <h3 className="tittle" style={{
            textAlign: 'left'
          }}><span>{product.name}</span></h3>
          <div className="ab-text">
            <p>{product.description}</p>
          </div>
          <br /><br />
        </Container>
        <Container>
          <Fragment>
            {JSON.parse(product.services).map((service, idx) => {
              return (
                <div key={idx.toString()} style={{
                  "boxSizing": "border-box",
                  "boxShadow": "3px 3px 3px 3px #6d707378",
                  "marginBottom": "50px",
                  padding: "20px 10px 20px 20px"
                }}>
                  <Row> 
                    <div className="col-md-4">
                      <Zoom {...zoomOutProperties}>
                        {service.images.map((each, index) => (
                          <div className="each-fade" style={{ width: 300, height: 300 }} key={index}>
                            <div className="image-container" style={{ width: 300, height: 300 }}>
                              <img src={`${global.app.apiRootUrl}/images/${each}`} style={{ width: 300, height: 300 }} onClick={this.handleShow.bind(this, idx)}/>
                            </div>
                          </div>
                        ))}
                      </Zoom>
                      {/* <img
                      width={300}
                      height={300}
                      className="align-self-start mr-3 effect-jazz"
                      src={`${global.app.apiRootUrl}/images/${service.images[0]}`}
                      alt={service.name}
                      onClick={this.handleShow}
                    /> */}
                      <div class="start" style={{ "position": "relative" }}>
                        <a style={{
                          color: "#fff",
                          background: "#5fa529",
                          'margin-left': '25%'
                        }} onClick={this.handleShow.bind(this, idx)}>Get best Quote</a>
                        <br /><br />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <Modal show={this.state.show[idx]} style={{ opacity: 1 }} fade={false} onHide={this.handleClose.bind(this, idx)}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Modal.Header closeButton>
                          <Modal.Title>{service.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Row>
                            <div className="col-md-4">
                              <img
                                style={{
                                  width: "250px",
                                  height: "250px"
                                }}
                                src={`${global.app.apiRootUrl}/images/${service.images[0]}`}
                                alt={service.name}
                              />
                            </div>
                            <div className="col-md-8">
                              <div
                                style={{
                                  padding: "2rem"
                                }}>
                                <h4 className="tittle">Share Your
                                  <span> Requirement</span>
                                </h4>
                                <div className="reservation">
                                  <div className="reservation-grids">
                                    <div className="clearfix"> </div>
                                  </div>
                                  <form onSubmit={this.handleSubmit.bind(this, product.name, service.name)} method="post">
                                  <div className="keywords">
                        <span
                          className="glyphicon glyphicon-earphone"
                          aria-hidden="true"
                        />
                        <input
                          type="text"
                          name="Key Words"
                          placeholder="Enter Your Phone Number"
                          required=" "
                          name="phoneno"
                          id="phoneno"
                          className="md-text form-control"
                          maxLength="10"
                          minLength="10"
                        />
                      </div>
                                    <div className="keywords">
                                      <input type="submit" value="Send Enquiry" />
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </Row>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={this.handleClose.bind(this, idx)}>
                            Close
            </Button>
                        </Modal.Footer>
                      </Modal>
                    <Row>Approx Price:&nbsp;&nbsp;&#x20b9;&nbsp;&nbsp;<h5 style={{
                      color: '#7ac143'
                    }}>{service.price}</h5>&nbsp;/&nbsp;{service.unit} </Row>
                    {/* <span>Rs. <span>{`${service.price}`}</span> per {`${service.unit}`} </span> */}
                      <h4 className="tittle two subtitle"><span>{service.name}</span></h4>
                      <Fragment>
                        <div className="content" dangerouslySetInnerHTML={{ __html: service.details }}></div>
                      </Fragment>
                    </div>
                  </Row>
                </div>
              )
            })}
          </Fragment>
        </Container>
      </div>
    )
  }

  render() {
    if (!this.state.data) {
      return <div style={{
        "width": "10px",
        "height": "10px",
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "margin": "auto",
      }
      }
      >
        <img src="./images/ounq1mw5kdxy.gif" />
      </div>;
    }
    return (
      <div>
        <Header />
        <div className="featured-section">
          {this.getLayout()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Product
