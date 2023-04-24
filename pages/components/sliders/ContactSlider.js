import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";

export default function ContactSlider() {
  return (
    <section className="contact-slider-sec">
      <section className="contact-addr-sec">
        <div className="sec-bg-graphics">
          <div className="social-shape"></div>
          <div className="slider-d-shape"></div>
        </div>
        <div className="sec-con-cover">
          <Container fluid className="px-0">
            <Row className="gx-0">
              <Col className="col-12 col-lg-7 px-0">
                <div className="con-addr-img">
                  <img src="images/con-address-img.png" alt="Image" />
                </div>
              </Col>
              <Col className="col-12 col-lg-5 px-0">
                <div className="con-addr-con">
                  <div className="con-addr-hd">
                    <h3>Get In Touch</h3>
                  </div>
                  <div className="con-addr-info">
                    <div className="con-addr-info-img">
                      <img src="images/oman-map-img.png" alt="Image" />
                    </div>
                    <div className="con-addr-info-body">
                      <ul>
                        <li>
                          <span className="icon">
                            <i className="bi bi-telephone-fill"></i>
                          </span>
                          Tel: +968 2473 0400
                        </li>
                        <li>
                          <span className="icon">
                            <i className="bi bi-whatsapp"></i>
                          </span>
                          WhatsApp : +968 7235 5500
                        </li>
                        <li>
                          <span className="icon">
                            <i className="bi bi-envelope-fill"></i>
                          </span>
                          Email: info@majancollege.edu.om
                        </li>
                        <li>
                          <hr className="addr-hr" />
                        </li>
                        <li>
                          <span className="icon">
                            <i className="bi bi-geo-alt-fill"></i>
                          </span>
                          Mutrah | Way No. 2621 | Building No. 1986 P.O Box:
                          710, P.C: 112 | Ruwi | Sultanate of Oman
                        </li>
                        <li>
                          <hr className="addr-hr" />
                        </li>
                        <li>
                          <span className="icon">
                            <i className="bi bi-phone-vibrate-fill"></i>
                          </span>
                          Hotline: +968 8007 1000
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="con-map-sec">
        <div className="con-map-cover">
          <div className="con-map">
            <img src="images/location-map-img.jpg" alt="Up" />
          </div>
          <div className="map-info-cover">
            <div className="map-info-item">
              <div className="map-info-icon">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div className="map-info-body">
                <h5>Toll free Numbers</h5>
                <h4>24730400, 80071000</h4>
              </div>
            </div>
            <div className="map-info-item">
              <div className="map-info-icon">
                <i className="bi bi-printer-fill"></i>
              </div>
              <div className="map-info-body">
                <h5>fax</h5>
                <h4>24730490</h4>
              </div>
            </div>
            <div className="map-info-item">
              <div className="map-info-icon">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div className="map-info-body">
                <h5>email</h5>
                <h4>studentoutreach@majancollege.edu.om</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="con-campus-sec pt-5 pt-xl-6 px-lg-5 px-xl-6 pb-5 pb-xl-6">
        <div className="sec-bg-graphics">
          <div className="con-cam-shape shape-01"></div>
        </div>
        <div className="sec-con-cover">
          <div className="con-campus-map-cover">
            <div className="con-campus-map-hd">
              <h3>Campus Map</h3>
            </div>
            <div className="con-campus-map">
              <img src="images/campus-map-img.jpg" alt="Image" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
