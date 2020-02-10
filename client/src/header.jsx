import React, { Component, Fragment } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row
} from "react-bootstrap"
import 'react-sticky-header/styles.css'
import StickyHeader from 'react-sticky-header'

import {
  isBrowser,
  isMobile
} from "react-device-detect"
import { Link } from "react-router-dom"
import { throws } from "assert";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { data: undefined, style: {position: "inherit"} };
  }

  callAPI() {
    fetch(`${global.app.apiRootUrl}/getAllProducts`)
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .then(data => this.setState({ data: data.data }));
  }

  componentWillMount() {
    this.callAPI();
  }

  getProductList() {
    const list = [];
    const products = Object.assign([], this.state.data);
    if (isBrowser) {
      const count = products.length
    const col1 = []
    const col2 = []
    for (let i = 0, ii = Math.floor(count / 2); i < ii; i++) {
      col1.push(
        <Link
          className="dropdown-item"
          key={i.toString()}
          to={{ pathname: "/product", search: `?id=${products[i].id}` }}
        >
          <span>{products[i].name}</span>
        </Link>
      )
      col2.push(
        <Link
          className="dropdown-item"
          key={(count - 1 - i).toString()}
          to={{ pathname: "/product", search: `?id=${products[count - 1 - i].id}` }}
        >
          <span>{products[count - 1 - i].name}</span>
        </Link>
      )
    }
    if (count % 2 !== 0) {
      col1.push(
        <Link
          className="dropdown-item"
          key={(Math.floor(count / 2)).toString()}
          to={{ pathname: "/product", search: `?id=${products[Math.floor(count / 2)].id}` }}
        >
          <span>{products[Math.floor(count / 2)].name}</span>
        </Link>
      )
    }
    list.push(
      <Row style={{
        width: "750px"
      }}>
        <div className = "col-md-6 col-sm-12">
          {col1}
        </div>
        <div className = "col-md-6 col-sm-12">
          {col2}
        </div>
      </Row>
    )
    } else {
      products.forEach((product, idx) => {
      const services = JSON.parse(product.services);
      list.push(
        <Link
          className="dropdown-item"
          key={idx.toString()}
          to={{ pathname: "/product", search: `?id=${product.id}` }}
        >
          <span>{product.name}</span>
        </Link>
      );
    });
    }
    const style = isBrowser ? ({
      "left": "-300px",
      "font-size": "13.5px",
      "font-weight": "normal"
    }) : {
      "max-height": "500px",
      "overflow-y": "scroll"
    }
    return <div className="dropdown-menu" style={style}>{list}</div>
  }

  render() {
    const headStyle = isMobile ? {
      "font-size": "14px",
      "padding": "0 0 0 0"
    } : {}
    if (!this.state.data) {
      return <div style={{
        "width": "100px",
        "height": "100px",
        "position": "absolute",
        "top": 0,
        "bottom": "0",
        "left": "0",
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
                  Sothuperumbedu, Chennai, Tamil Nadu
                </li>
              </ul>
            </div>
            <div className="w3l_header_right">
              <ul className="top-links">
                <li>
                  <a href="https://www.facebook.com/sharer.php?u=https://www.rotopolymers.co.in/">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://plus.google.com/share?url=https://www.rotopolymers.co.in/">
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
            </div>
            <div className="clearfix"> </div>
          </div>
          
          <StickyHeader
          onSticky = {(bool) => {
            if (bool) {
              this.setState({style: {position: "fixed", top: 0, background: "white", width: "100%"}})
            } else {
              this.setState({style: {position: "inherit", top: "auto"}})
            }
          }}
    // This is the sticky part of the header.
    header={
          <div className="header-bottom" style={this.state.style}>
              <Navbar expand="lg" >
                  <Navbar.Brand href="/" alt="Home" title="Home" style={headStyle}>
                    <img
                      src="/images/roto.png"
                      width="63px"
                      height="63px"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />
                    {" Roto Polymers And Chemicals"}
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                      <ul className="nav navbar-nav nav-deep mr-auto cl-effect-1" id="cl-effect-1">
                        <li className="nav-item">
                        <Link
                            className="dropdown-item"
                            to={{ pathname: "/" }}
                          >
                            Home
                          </Link>
                        </li>
                        {/* <li className="nav-item">
                          <a
                            href="#team"
                            className="scroll hvr-bounce-to-bottom"
                          >
                            Introduction
                          </a>
                        </li> */}
                        <li className="nav-item">
                          <Link
                            className="dropdown-item"
                            to={{ pathname: "/about" }}
                          >
                            {/* <a
                            href="#about"
                            className="scroll hvr-bounce-to-bottom"
                          > */}
                            About Us
                            {/* </a> */}
                          </Link>
                        </li>
                        <li className="nav-item dropdown">
                          <Link
                            className="scroll hvr-bounce-to-bottom nav-link dropdown-item"
                            data-toggle="dropdown"
                          >
                            Products
                          </Link>
                            {this.getProductList()}
                        </li>
                        <li className="nav-item">
                        <Link
                            className="dropdown-item"
                            to={{ pathname: "/vacancy" }}
                          >
                            Job Vacancies
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#contact-us"
                            className="scroll hvr-bounce-to-bottom"
                          >
                            Contact Us
                          </a>
                        </li>
                      </ul>
                  </Navbar.Collapse>
              </Navbar>

              {/* <div className="w3ls_search">
                <div className="cd-main-header">
                  <ul className="cd-header-buttons">
                    <li>
                      <a className="cd-search-trigger" href="#cd-search">
                        {" "}
                        <span />
                      </a>
                    </li>
                  </ul>{" "}
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
              </div> */}
          </div>
     }></StickyHeader> </div>
      </div>
    );
  }
}

export default Header;
