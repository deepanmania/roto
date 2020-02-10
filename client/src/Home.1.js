import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
// import "./css/style.css";
import "./App.css";
import { Zoom } from "react-slideshow-image";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    return fetch("http://localhost:9000/testAPI")
  }

  async componentWillMount() {
    try {
      const data = await this.callAPI();
      this.setState({data})
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const slideImages = [
      "images/2.jpg",
      "images/1.jpg",
      "images/3.jpg",
      "images/4.jpg"
    ];

    const zoomOutProperties = {
      duration: 5000,
      transitionDuration: 1000,
      infinite: true,
      indicators: true,
      scale: 0.4,
      arrows: true
    };

    const Slideshow = () => {
      return (
        <Fragment>
          <Zoom {...zoomOutProperties}>
            {slideImages.map((each, index) => (
              <img key={index} style={{ width: "100%" }} src={each} />
            ))}
          </Zoom>
        </Fragment>
      );
    };

    return (
      <div>
        <title>
          Fetch Villa a Real Estate Category Flat Bootstrap Responsive Website
          Template | Home :: w3layouts
        </title>
        {/* for-mobile-apps */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="keywords"
          content="Fetch Villa Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, 
          Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design"
        />
        {/* //for-mobile-apps */}
        {/*/web-fonts*/}
        <script src="https://code.jquery.com/jquery-3.4.0.min.js" />

        <link rel="stylesheet" href="owl-carousel/owl.theme.css" />
        <link
          href="//fonts.googleapis.com/css?family=Tangerine:400,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="//fonts.googleapis.com/css?family=Lato:400,300,300italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="//fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
          type="text/css"
        />
        {/*//web-fonts*/}
        {/*/main-header*/}
        <div className="top-main" id="home">
          <div className="header-top">
            <div className="w3l_header_left">
              <ul>
                <li>
                  <span className="fa fa-envelope" aria-hidden="true" />{" "}
                  <a href="mailto:info@example.com">info@example.com</a>
                </li>
                <li>
                  <span className="fa fa-phone-square" aria-hidden="true" />{" "}
                  (010) 221 918 811
                </li>
              </ul>
            </div>
            <div className="w3l_header_right">
              <ul className="top-links">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="header-bottom">
            <div className="container">
              <nav className="navbar navbar-default">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <div className="logo">
                    <h1>
                      <a className="navbar-brand" href="index.html">
                        <span className="one">R</span>oto
                        <span className="one">P</span>olymers
                      </a>
                    </h1>
                  </div>
                </div>
                {/* Collect the nav links, forms, and other content for toggling */}
                <div
                  className="collapse navbar-collapse nav-wil"
                  id="bs-example-navbar-collapse-1"
                >
                  <nav className="cl-effect-1" id="cl-effect-1">
                    <ul className="nav navbar-nav">
                      <li className="active">
                        <a className="scroll" href="index.html">
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="#projects"
                          className="scroll hvr-bounce-to-bottom"
                        >
                          Projects
                        </a>
                      </li>
                      <li>
                        <a href="#team" className="scroll hvr-bounce-to-bottom">
                          Team
                        </a>
                      </li>
                      <li>
                        <a
                          href="#gallery"
                          className="scroll hvr-bounce-to-bottom"
                        >
                          Gallery
                        </a>
                      </li>
                      <li>
                        <a
                          href="#contact"
                          className="scroll hvr-bounce-to-bottom"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* /.navbar-collapse */}
              </nav>
              <div className="w3ls_search">
                <div className="cd-main-header">
                  <ul className="cd-header-buttons">
                    <li>
                      <a className="cd-search-trigger" href="#cd-search">
                        {" "}
                        <span />
                      </a>
                    </li>
                  </ul>{" "}
                  {/* cd-header-buttons */}
                </div>
                <div id="cd-search" className="cd-search">
                  <form action="#" method="post">
                    <input
                      name="Search"
                      type="search"
                      placeholder="Search..."
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/*/banner-section*/}
          <div id="demo-1">
            <div class="demo-inner-content">{Slideshow()}</div>
          </div>
          {/*/banner-section*/}
        </div>
        {/*/main-header*/}
        <div className="featured-section" id="projects">
          <div className="container">
            <h3 className="tittle">
              Our <span>Featured </span> Projects
            </h3>
            <OwlCarousel className="owl-theme" loop margin={10} nav>
              <div class="item">
                <h4>
                  <div className="project-fur">
                    <a href="#" data-toggle="modal" data-target="#myModal1">
                      <img className="img-responsive" src="images/v1.jpg" alt />{" "}
                    </a>
                    <div className="fur">
                      <div className="fur1">
                        <span className="fur-money">$2.44 0 - $5.280 </span>
                        <h6 className="fur-name">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#myModal1"
                          >
                            Contrary to popular
                          </a>
                        </h6>
                        <span>Paris</span>
                      </div>
                      <div className="fur2">
                        <span>2 BHK</span>
                      </div>
                    </div>
                    <span className="five">40,000$</span>
                  </div>
                </h4>
              </div>
              <div class="item">
                <h4>
                  <div className="project-fur">
                    <a href="#" data-toggle="modal" data-target="#myModal1">
                      <img className="img-responsive" src="images/v2.jpg" alt />{" "}
                    </a>
                    <div className="fur">
                      <div className="fur1">
                        <span className="fur-money">$2.44 0 - $5.280 </span>
                        <h6 className="fur-name">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#myModal1"
                          >
                            Contrary to popular
                          </a>
                        </h6>
                        <span>Paris</span>
                      </div>
                      <div className="fur2">
                        <span>2 BHK</span>
                      </div>
                    </div>
                    <span className="five">45,000$</span>
                  </div>
                </h4>
              </div>
              <div class="item">
                <h4>
                  <div className="project-fur">
                    <a href="#" data-toggle="modal" data-target="#myModal1">
                      <img className="img-responsive" src="images/v3.jpg" alt />{" "}
                    </a>
                    <div className="fur">
                      <div className="fur1">
                        <span className="fur-money">$2.44 0 - $5.280 </span>
                        <h6 className="fur-name">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#myModal1"
                          >
                            Contrary to popular
                          </a>
                        </h6>
                        <span>Paris</span>
                      </div>
                      <div className="fur2">
                        <span>2 BHK</span>
                      </div>
                    </div>
                    <span className="five">40,000$</span>
                  </div>
                </h4>
              </div>
              <div class="item">
                <h4>
                  <div className="project-fur">
                    <a href="#" data-toggle="modal" data-target="#myModal1">
                      <img className="img-responsive" src="images/v4.jpg" alt />{" "}
                    </a>
                    <div className="fur">
                      <div className="fur1">
                        <span className="fur-money">$2.44 0 - $5.280 </span>
                        <h6 className="fur-name">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#myModal1"
                          >
                            Contrary to popular
                          </a>
                        </h6>
                        <span>Paris</span>
                      </div>
                      <div className="fur2">
                        <span>2 BHK</span>
                      </div>
                    </div>
                    <span className="five">40,000$</span>
                  </div>
                </h4>
              </div>
            </OwlCarousel>
          </div>
        </div>
        {/* //Stats */}
        <div className="agitsworkw3ls" id="property">
          <div className="col-md-6 agitsworkw3ls-grid ">
            <h3 className="tittle two">
              Properties <span>For</span> Rent
            </h3>
            {/* Tabs */}
            <div className="tabs">
              <div className="sap_tabs">
                <div
                  id="horizontalTab"
                  style={{ display: "block", width: "100%", margin: "0px" }}
                >
                  <ul className="resp-tabs-list">
                    <li
                      className="resp-tab-item resp-tab-active"
                      aria-controls="tab_item-0"
                      role="tab"
                    >
                      <span>CREATION</span>
                    </li>
                    <li
                      className="resp-tab-item"
                      aria-controls="tab_item-1"
                      role="tab"
                    >
                      <span>ANALYSIS</span>
                    </li>
                    <li
                      className="resp-tab-item"
                      aria-controls="tab_item-2"
                      role="tab"
                    >
                      <span>STRATEGY</span>
                    </li>
                    <div className="clearfix" />
                  </ul>
                  <div className="resp-tabs-container">
                    <h3
                      className="resp-accordion resp-tab-active"
                      role="tab"
                      aria-controls="tab_item-0"
                    >
                      <span className="resp-arrow" />
                      CREATION
                    </h3>
                    <div
                      className="tab-1 resp-tab-content resp-tab-content-active"
                      aria-labelledby="tab_item-0"
                      style={{ display: "block" }}
                    >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged
                      </p>
                    </div>
                    <h3
                      className="resp-accordion"
                      role="tab"
                      aria-controls="tab_item-1"
                    >
                      <span className="resp-arrow" />
                      ANALYSIS
                    </h3>
                    <div
                      className="tab-2 resp-tab-content"
                      aria-labelledby="tab_item-1"
                    >
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word.
                      </p>
                    </div>
                    <h3
                      className="resp-accordion"
                      role="tab"
                      aria-controls="tab_item-2"
                    >
                      <span className="resp-arrow" />
                      STRATEGY
                    </h3>
                    <div
                      className="tab-3 resp-tab-content"
                      aria-labelledby="tab_item-2"
                    >
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now
                        use.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //Tabs */}
          </div>
          <div className="col-md-6 agitsworkw3ls-grid-2">
            <div className="info-imgs">
              <ul>
                <li>
                  <div className="gallery-grid1">
                    <img
                      src="images/v5.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                    <div className="p-mask">
                      <h4>
                        Fetch <span>Villa</span>
                      </h4>
                      <p>Neque porro quisquam est, qui dolorem ipsum.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gallery-grid1">
                    <img
                      src="images/v2.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                    <div className="p-mask">
                      <h4>
                        Fetch <span>Villa</span>
                      </h4>
                      <p>Neque porro quisquam est, qui dolorem ipsum.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gallery-grid1">
                    <img
                      src="images/v6.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                    <div className="p-mask">
                      <h4>
                        Fetch <span>Villa</span>
                      </h4>
                      <p>Neque porro quisquam est, qui dolorem ipsum.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gallery-grid1">
                    <img
                      src="images/v7.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                    <div className="p-mask">
                      <h4>
                        Fetch <span>Villa</span>
                      </h4>
                      <p>Neque porro quisquam est, qui dolorem ipsum.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="clearfix" />
        </div>
        {/* //Stats */}
        {/*/team*/}
        <div className="team" id="team">
          <div className="container">
            <h3 className="tittle">
              Our <span>Team </span>
            </h3>
            {/*/about-section*/}
            <div className="about-section agileits">
              <div className="col-md-7 ab-left">
                <div className="grid">
                  <div className="h-f">
                    <figure className="effect-jazz">
                      <img src="images/t1.jpg" alt="img25" />
                      <figcaption>
                        <h4>
                          Ander<span>son</span>
                        </h4>
                        <ul className="top-links two">
                          <li>
                            <a href="#">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-google-plus" />
                            </a>
                          </li>
                        </ul>
                        <p>MANAGER</p>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="h-f">
                    <figure className="effect-jazz">
                      <img src="images/t2.jpg" alt="img25" />
                      <figcaption>
                        <h4>
                          Ed<span>wards</span>
                        </h4>
                        <ul className="top-links two">
                          <li>
                            <a href="#">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-google-plus" />
                            </a>
                          </li>
                        </ul>
                        <p>CEO</p>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="col-md-5 ab-text">
                <h4 className="tittle">About Us</h4>
                <p>
                  Lorem ipsum Nam libero tempore cum soluta nobis est eligendi
                  optio cumque nihil impedit quo minus id quod maxime placeat
                  facere.Lorem Ipsum has been the industry's standard dummy text
                  ever since.
                </p>
                <div className="start">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#myModal1"
                    className="hvr-bounce-to-bottom"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
            {/*//about-section*/}
            {/*/about-section2*/}
            <div className="about-section">
              <div className="col-md-5 ab-text two">
                <h4 className="tittle">Welcome</h4>
                <p>
                  Lorem ipsum Nam libero tempore cum soluta nobis est eligendi
                  optio cumque nihil impedit quo minus id quod maxime placeat
                  facere.Lorem Ipsum has been the industry's standard dummy text
                  ever since.
                </p>
                <div className="start">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#myModal1"
                    className="hvr-bounce-to-bottom"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              <div className="col-md-7 ab-left">
                <div className="grid">
                  <div className="h-f">
                    <figure className="effect-jazz">
                      <img src="images/t4.jpg" alt="img25" />
                      <figcaption>
                        <h4>
                          Chri<span>stopher</span>
                        </h4>
                        <ul className="top-links two">
                          <li>
                            <a href="#">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-google-plus" />
                            </a>
                          </li>
                        </ul>
                        <p>DIRECTOR</p>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="h-f">
                    <figure className="effect-jazz">
                      <img src="images/t3.jpg" alt="img25" />
                      <figcaption>
                        <h4>
                          Andrew<span>Mark</span>
                        </h4>
                        <ul className="top-links two">
                          <li>
                            <a href="#">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-google-plus" />
                            </a>
                          </li>
                        </ul>
                        <p>MANAGER</p>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
            {/*//about-section2*/}
          </div>
        </div>
        {/*/team*/}
        {/* gallery */}
        <div className="gallery agile" id="gallery">
          <div className="container">
            <h3 className="tittle">
              {" "}
              Our <span>Gallery</span>
            </h3>
            <div className="agile_gallery_grids w3-agile">
              <ul className="clearfix demo">
                <li>
                  <div className="gallery-grid1">
                    <img
                      src="images/v5.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                    <div className="p-mask">
                      <h4>
                        Fetch <span>Villa</span>
                      </h4>
                      <p>Neque porro quisquam est, qui dolorem ipsum.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gallery-grid1">
                    <img
                      src="images/v1.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                    <div className="p-mask">
                      <h4>
                        Fetch <span>Villa</span>
                      </h4>
                      <p>Neque porro quisquam est, qui dolorem ipsum.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gallery-grid1">
                    <img
                      src="images/v6.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                    <div className="p-mask">
                      <h4>
                        Fetch <span>Villa</span>
                      </h4>
                      <p>Neque porro quisquam est, qui dolorem ipsum.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gallery-grid1">
                    <img
                      src="images/v3.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                    <div className="p-mask">
                      <h4>
                        Fetch <span>Villa</span>
                      </h4>
                      <p>Neque porro quisquam est, qui dolorem ipsum.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gallery-grid1">
                    <img
                      src="images/v7.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                    <div className="p-mask">
                      <h4>
                        Fetch <span>Villa</span>
                      </h4>
                      <p>Neque porro quisquam est, qui dolorem ipsum.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gallery-grid1">
                    <img
                      src="images/v2.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                    <div className="p-mask">
                      <h4>
                        Fetch <span>Villa</span>
                      </h4>
                      <p>Neque porro quisquam est, qui dolorem ipsum.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gallery-grid1">
                    <img
                      src="images/v8.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                    <div className="p-mask">
                      <h4>
                        Fetch <span>Villa</span>
                      </h4>
                      <p>Neque porro quisquam est, qui dolorem ipsum.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gallery-grid1">
                    <img
                      src="images/v4.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                    <div className="p-mask">
                      <h4>
                        Fetch <span>Villa</span>
                      </h4>
                      <p>Neque porro quisquam est, qui dolorem ipsum.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gallery-grid1">
                    <img
                      src="images/v1.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                    <div className="p-mask">
                      <h4>
                        Fetch <span>Villa</span>
                      </h4>
                      <p>Neque porro quisquam est, qui dolorem ipsum.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gallery-grid1">
                    <img
                      src="images/v2.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                    <div className="p-mask">
                      <h4>
                        Fetch <span>Villa</span>
                      </h4>
                      <p>Neque porro quisquam est, qui dolorem ipsum.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gallery-grid1">
                    <img
                      src="images/v3.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                    <div className="p-mask">
                      <h4>
                        Fetch <span>Villa</span>
                      </h4>
                      <p>Neque porro quisquam est, qui dolorem ipsum.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gallery-grid1">
                    <img
                      src="images/v4.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                    <div className="p-mask">
                      <h4>
                        Fetch <span>Villa</span>
                      </h4>
                      <p>Neque porro quisquam est, qui dolorem ipsum.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* //gallery */}
        <div className="contact-w3ls" id="contact">
          <div className="container">
            <h2>
              Sign up for our <span>Newsletter</span>
            </h2>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vitae eros eget tellus tristique bibendum. Donec rutrum sed sem
              quis venenatis.
            </p>
            <div className="footer-contact">
              <form action="#" method="post">
                <input
                  type="text"
                  name="Email"
                  placeholder="Enter your email to update"
                  required=" "
                />
                <input type="submit" defaultValue="Subscribe" />
              </form>
            </div>
            <div className="footer-grids w3-agileits">
              <div className="col-md-4 footer-grid">
                <p>
                  <span
                    className="glyphicon glyphicon-map-marker"
                    aria-hidden="true"
                  />{" "}
                  General Pvt 66, Dong Da Hanoi, Vietnam.
                </p>
                <p>
                  <a href="mailto:contact@example.com">
                    <span
                      className="glyphicon glyphicon-envelope"
                      aria-hidden="true"
                    />{" "}
                    contact@example.com
                  </a>
                </p>
                <p>
                  <span
                    className="glyphicon glyphicon-earphone"
                    aria-hidden="true"
                  />
                  +0123 456 686
                </p>
              </div>
              <div className="col-md-2 footer-grid">
                <ul>
                  <li>
                    <a className="scroll" href="#home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="scroll" href="#projects">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a className="scroll" href="#team">
                      Team
                    </a>
                  </li>
                  <li>
                    <a className="scroll" href="#property">
                      Properties
                    </a>
                  </li>
                  <li>
                    <a className="scroll" href="#gallery">
                      Gallery
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 footer-grid">
                <div className="footer-grid1">
                  <div className="footer-grid1-left">
                    <a href="#">
                      <img
                        src="images/v8.jpg"
                        alt=" "
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="footer-grid1-right">
                    <a href="#">eveniet ut molesti</a>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="footer-grid1">
                  <div className="footer-grid1-left">
                    <a href="#">
                      <img
                        src="images/v7.jpg"
                        alt=" "
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="footer-grid1-right">
                    <a href="#">earum rerum tenet</a>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="footer-grid1">
                  <div className="footer-grid1-left">
                    <a href="#">
                      <img
                        src="images/v1.jpg"
                        alt=" "
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="footer-grid1-right">
                    <a href="#">maiores alias cons</a>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="col-md-3 footer-grid">
                <div className="footer-grid-instagram">
                  <a href="#">
                    <img
                      src="images/v5.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                  </a>
                </div>
                <div className="footer-grid-instagram">
                  <a href="#">
                    <img
                      src="images/v3.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                  </a>
                </div>
                <div className="footer-grid-instagram">
                  <a href="#">
                    <img
                      src="images/v2.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                  </a>
                </div>
                <div className="footer-grid-instagram">
                  <a href="#">
                    <img
                      src="images/v4.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                  </a>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="clearfix"> </div>
            </div>
            <h3 className="text-center follow">
              Follow <span>Us</span>
            </h3>
            <ul className="social-icons1 agileinfo">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-whatsapp" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-youtube" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
            </ul>
            <div className="w3agile_footer_copy">
              <p>© 2017 Fetch Villa. All rights reserved.</p>
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
    );
  }
}

export default App;
