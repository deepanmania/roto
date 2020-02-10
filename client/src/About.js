import React, { Component, Fragment } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import Header from "./header"
import Footer from "./footer";

class Admin extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="featured-section">
          <Container>
            <h4 class="tittle two"><span>About</span> Us</h4>
            <div className="ab-text">
              <p>
              ROTO POLYMERS AND CHEMICALS is a Chennai-based manufacturer and exporter of all kinds of Epoxy Resins (basic &amp; formulated), curing agents and high performance phenolic resins. We are supported by a team of dedicated professionals experienced in this field and has well designed machinery and well-equipped laboratory.
            </p>
            </div>
          </Container>
          <div className="price">
            <Container>
              <h4 class="tittle two"><span>QUALITY</span> &amp; SERVICES</h4>
              <div className="ab-text">
                <p>
                Our Quality Control department is the key to our continuing success. Quality begins, where every batch of raw material is tested for compliance before it is utilized by the production department. In-process checks are made in addition to standard Quality Control tests, providing assurance that our products will meet your performance standards. Our Process Quality Control parameters such as mixing time, batch temperature etc., are monitored by experienced professionals. These production processes offer our customers unprecedented batch-to-batch consistency, setting standards for the electrical/electronic industry.<br />
                We offer consistent quality products to various companies by maintaining Internal Quality manual for process inputs, intermediates and final products. We also have excellent in-house testing facilities to check various test parameters related to the manufacture of Epoxy Resins &amp; Hardener. We are an <strong>ISO 9001:2015</strong> certified <strong>NSIC registered</strong> and approved <strong>Indian railway</strong> vendor company.<br />
                <img src="./images/ISO 9001-2015 CERTIFICATE.jpg" width="300px" height="400px" />
                </p>
              </div>
            </Container>
            <Container>
              <h4 class="tittle two"><span>PRODUCTS </span> AND APPLICATION</h4>
              <div className="ab-text">
                <p>
                ROTO POLYMERS AND CHEMICALS is engaged in the manufacture of DGEBA (Diglycidyl Ether of Bisphenol-A) based Epoxy Resins and formulating various modified and speciality pre-pigmented filled epoxy systems, comparable to the international standards. We currently offer around 100 different grades of Epoxy Resins &amp; Hardeners and many more in the developmental stage. Our plant has an installed capacity of 2000 MT per annum for both resin and hardener with a land area of 45000 sqft (built-up area of 20000 sq.ft). We are also planning to produce/introduce polyurethane systems to our product range.
                <center><b>Plant Area (Factory, Lab, Office, Production &amp; Godown)</b></center>
                </p>
                <table>
                  <tr>
                    <td><img src='./images/image1.png' width="350px" height="350px"></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td><img src='./images/image2.png' width="350px" height="350px"></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td><img src='./images/image4.png' width="350px" height="350px"></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  </tr>
                  <tr><td><br /></td><td><br /></td><td><br /></td></tr>
                  <tr>
                    <td><img src='./images/image5.png' width="350px" height="350px"></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td><img src='./images/image6.png' width="350px" height="350px"></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td><img src='./images/image7.png' width="350px" height="350px"></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  </tr>
                </table>
                <p>Generally our Epoxy Resins find a wide range of applications in the various industrial segments such as, mechanical, electrical &amp; electronics, paints, Civil engineering etc. Some of our widely used Epoxy Systems, find their applications in the following areas in the Civil Engineering Sector,<br />(i) ADHESIVE for Industrial &amp; Structural purposes<br />(ii) CASTING compounds for moulds, dies, stampings, dies, patterns &amp; toolings.<br />(iii) POTTING &amp; ENCAPSULATION compounds and impregnating resins for electrical components<br />(iv) COAL TAR EPOXY COATINGS<br />(v) LAMINATION &ndash; For PCB&rsquo;s, Glass tapes, and filament wound parts<br />(vi) ANTICORROSIVE COATINGS<br />(vii) FOUNDATION GROUTING OF MACHINERY<br />(viii) SCREEDING (Chemical Resistant Flooring, Heavy Duty Flooring)<br />(ix) SELF-LEVELLING FLOORING SYSTEM<br />(x) GLASS CLOTH LINING<br />(xi) GENERAL PURPOSE EPOXY ADHESIVE <br />(xii) GRANITE APPLICATIONS<br />(xiii) CRUSHER BACKING COMPOUND<br />(xiv) TRAFFIC LOOP SEALANT<br />(xv) COATED AND BONDED ABRASIVE<br />(xvi) BATTERY SEALANT<br />(xvii) GEL COAT IN SANITARY WARE APPLICATIONS<br />(xviii) GENERAL PURPOSE TWO PACK ADHESIVE</p>
                <h4 className="tittle two"><span>CORE</span> COMPETENCY</h4><p>One of our main fortes is in offering customized solutions for challenging applications based on our customers&rsquo; requirement. If your material performance requirements should extend beyond the properties of our standard products, our technical team will work closely with your manufacturing specialists to determine your specific product needs from start to finish, ensuring consistent contact and ideal results.<br /><strong>Advantages of Rotex Epoxy sytems</strong><br />⦁ Excellent adhesion<br />⦁ Good Electrical insulation<br />⦁ Low shrinkage during curing<br />⦁ Exceptional dimensional stability<br />⦁ Thermosetting<br />⦁ Natural gap filling ability<br />⦁ Good mechanical properties and chemical resistance <br />⦁ Ease of Application</p>
              </div>
            </Container>
          </div>
        </div >
        <Footer />
      </div >
    );
  }
}

export default Admin;
