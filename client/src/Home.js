import React, { Component, Fragment } from "react";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./css/style.css";
import "./App.css";
import { Zoom } from "react-slideshow-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./header"
import Footer from "./footer"
import Product from "./Product"
import About from "./About"
import Admin from "./Admin"
import Vacancy from "./Vacancy"
import { Row, Col, Button } from "react-bootstrap";
import Sticky from "./Sticky";
import Container from "./Container";

import {
  isBrowser,
  isMobile
} from "react-device-detect";

const Slides = (props) => {
  return (
    <Fragment>
      {
        props.list.map((item, idx) => {
          return <div key={idx}>{item}</div>
        })
      }
    </Fragment>

  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: undefined };
  }

  callAPI() {
    fetch(`${global.app.apiRootUrl}/getAllProducts`)
      .then(res => res.json())
      .then(res => {
        return res
      })
      .then(data => this.setState({ data: data.data }))
  }

  componentWillMount() {
    this.callAPI();
  }

  getCarouselContent = () => {
    const products = Object.assign([], this.state.data)
    let items = []
    const slickSettings = {
      dots: isMobile ? false : true,
      adaptiveHeight: true,
      infinite: true,
      speed: 500,
    slidesToShow: isMobile ? 1 : 3,
      slidesToScroll: 1,
    };
      slickSettings.nextArrow = <img src='./images/side-arrow.gif'/>
      slickSettings.prevArrow = <img src='./images/side-arrow.gif'/>
    products.forEach(product => {
      const services = JSON.parse(product.services);
      services.forEach((service, idx) => {
        items.push(
          <div key={idx}>
            <div className="project-fur">
            <Link to={{ pathname: "/product", search: `?id=${product.id}` }} style={{ color: "#5fa529" }}>
                <img className="img-responsive thumb" style={{
                  'object-fit': 'cover'
                }} src={`${global.app.apiRootUrl}/images/${service.images[0]}`} alt />{" "}
              </Link>
              <div className="fur">
                <div className="fur1">
                  <span className="fur-money">{`Rs. ${service.price} per ${service.unit}`} </span>
                  <h6 className="fur-name">{service.name}</h6>
                </div>
                <div className="fur2">
                  <Link to={{ pathname: "/product", search: `?id=${product.id}` }} style={{ color: "#5fa529" }}>
                    <span>View service</span>
                  </Link>
                </div>
              </div>
              <span className="five">{`Rs. ${service.price} per ${service.unit}`}</span>
            </div>
          </div>
        )
      })
    })
    // items = items.concat(items)
    return (
      <Fragment>
        <Slider {...slickSettings}>
          {items}
        </Slider>
      </Fragment>
    )
  }


  render() {
    const slideImages = () => {
      const urls = [
        {image: `${global.app.apiRootUrl}/images/d45fa11c-46de-4210-9c40-044bd7fe08cf.JPG`},
        {image: `${global.app.apiRootUrl}/images/ab862a1f-89f9-4941-96a7-4518ee40eb45.JPG`},
        {image: `${global.app.apiRootUrl}/images/59a4e36c-8007-4824-b091-0fc56e58d095.JPG`},
        {image: `${global.app.apiRootUrl}/images/40dacf91-9832-40a2-8741-249f720b723b.JPG`},
        {image: `${global.app.apiRootUrl}/images/IMG_4940.JPG`},
      ]
      // Object.assign([], this.state.data).map(product => {
      //   const services = JSON.parse(product.services)
      //   return services.map(service => {
      //     return {
      //       image: `${global.app.apiRootUrl}/images/${service.images[0]}`,
      //       name: service.name,
      //       id: product.id
      //     }
      //   }
      //   )
      // }).forEach(img => {
      //   urls = urls.concat(img)
      // })
      return urls
    };

    const zoomOutProperties = {
      duration: 5000,
      transitionDuration: 400,
      infinite: true,
      indicators: true,
      scale: 1,
      arrows: true
    };

    const Slideshow = () => {
      const imgs = slideImages()
      return (
        <Fragment>
          <Zoom {...zoomOutProperties}>
            {imgs.map((each, index) => (
              <div className="each-fade" style={{ width: "100%", height: "600px" }} key={index}>
                <div className="image-container" style={{ width: "100%", height: "600px" }}>
                  <img src={each.image} style={{ width: "100%", height: "600px" }} />
                </div>
                {/* <div style={{
                  marginLeft: "7%",
                  top: "auto",
                  height: "200px",
                  bottom: "100%",
                  background: "rgba(0,0,0,0.3)",
                  width: "75%",
                  top: "-450px",
                  color: "white",
                  position: "relative",
                }}>
                  <h2 style={{ marginLeft: "3%", paddingTop: "2%" }}>{each.name}</h2>
                  <h4 style={{ marginLeft: "3%", paddingTop: "2%" }}><Link to={{ pathname: "/product", search: `?id=${each.id}` }}>
                    <span>View service</span>
                  </Link></h4>
                </div> */}
              </div>
            ))}
          </Zoom>
        </Fragment>
      );
    };

    const HomeRoute = () => {
      return (
        <div>
          <Header />
          <div>{Slideshow()}</div>
          <div className="col-md-12 agitsworkw3ls-grid">
            <h3 className="tittle two">About <span>Us</span></h3>
            <div style={{
              "font-family": "Montserrat, sans-serif",
              "font-size": "16px",
              "letter-spacing": "1px",
              color: "#fff"
            }}>
              <p><h6>ROTO POLYMERS AND CHEMICALS is a Chennai-based manufacturer and exporter of all kinds of Epoxy Resins (basic &amp; formulated), curing agents and high performance phenolic resins. We are supported by a team of dedicated professionals experienced in this field and has well designed machinery and well-equipped laboratory.</h6></p>
              <br />
              <div class="start">
                <Link
                  style={{color: "rgb(255, 255, 255)", background: "rgb(95, 165, 41)"}}
                  className="dropdown-item"
                  className="scroll"
                  to={{ pathname: "/about" }}
                >
                  View More
                    </Link>
              </div>
            </div>

          </div>
          <div className="featured-section" id="products">
            <div className="container">
              <br />
              <h3 className="tittle">
                Our <span>Products </span>
              </h3>

              {this.getCarouselContent()}
            </div>
          </div>
          <Footer />
        </div >
      );
    }

    if (!this.state.data) {
      return <div style={{
        "position": "absolute",
        "top": 0,
        "bottom": "0",
        "left": "28%",
        "right": "0",
        "margin": "auto",
      }
      }
      >
        <img src="./images/ounq1mw5kdxy.gif" />
      </div>;
    }
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomeRoute} exact />
            <Route path="/product" component={Product} />
            <Route path="/about" component={About} />
            <Route path="/vacancy" component={Vacancy} />
            <Route path="/adminxyz" component={Admin} />
          </Switch>
        </BrowserRouter>
      </div >
    );
  }
}

export default App;
