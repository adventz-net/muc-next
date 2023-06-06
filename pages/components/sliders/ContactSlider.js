import { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import Link from 'next/link';

export default function ContactSlider() {
  const [showModalMapMaha, setShowModalMapMaha] = useState(false);
  const [showModalMapSahwa, setShowModalMapSahwa] = useState(false);
  const [showModalMapNahda, setShowModalMapNahda] = useState(false);
  const [showModalMapBustan, setShowModalMapBustan] = useState(false);
  const [showModalMapJibreen, setShowModalMapJibreen] = useState(false);

  const handleCloseModalMapMaha = () => setShowModalMapMaha(false);
  const handleShowModalMapMaha = () => setShowModalMapMaha(true);

  const handleCloseModalMapSahwa = () => setShowModalMapSahwa(false);
  const handleShowModalMapSahwa = () => setShowModalMapSahwa(true);

  const handleCloseModalMapNahda = () => setShowModalMapNahda(false);
  const handleShowModalMapNahda = () => setShowModalMapNahda(true);

  const handleCloseModalMapBustan = () => setShowModalMapBustan(false);
  const handleShowModalMapBustan = () => setShowModalMapBustan(true);

  const handleCloseModalMapJibreen = () => setShowModalMapJibreen(false);
  const handleShowModalMapJibreen = () => setShowModalMapJibreen(true);

  return (
    <section className="contact-slider-sec">
      <>
        <Modal
          className="modal-map"
          show={showModalMapMaha}
          onHide={handleCloseModalMapMaha}
        >
          <Modal.Body>
            <div className="modal-map-content">
              <button
                className="btn-modal-close"
                onClick={handleCloseModalMapMaha}
              >
                <i className="bi bi-x-lg"></i>
              </button>
              <figure>
                <img src="images/loc-map-img-01.jpg" alt="Map" />
              </figure>
              <div className="modal-map-body">
                <h3>Al Maha Block</h3>
                <ul>
                  <li>Auditorium</li>
                  <li>Cafetaria</li>
                  <li>Student Social Area</li>
                  <li>Postgraduate Centre</li>
                </ul>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>

      <>
        <Modal
          className="modal-map"
          show={showModalMapSahwa}
          onHide={handleCloseModalMapSahwa}
        >
          <Modal.Body>
            <div className="modal-map-content">
              <button
                className="btn-modal-close"
                onClick={handleCloseModalMapSahwa}
              >
                <i className="bi bi-x-lg"></i>
              </button>
              <figure>
                <img src="images/loc-map-img-01.jpg" alt="Map" />
              </figure>
              <div className="modal-map-body">
                <h3>Al Sahwa Block</h3>
                <p>
                  Rahul: We will be decommissioning this building soon which was
                  previously the English Language Studies building. The order to
                  demolish the building will take sometime, maybe a year. So
                  since the building is there, let's just add the building
                  picture and the name for now. Later we will edit it or remove
                  it accordingly.
                </p>
                <p>
                  They will change every semester as the building plans are
                  going on, please make sure it's properly editable through the
                  CMS. And ensure it's part of the training for my staff when we
                  explore the CMS.
                </p>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>

      <>
        <Modal
          className="modal-map"
          show={showModalMapNahda}
          onHide={handleCloseModalMapNahda}
        >
          <Modal.Body>
            <div className="modal-map-content">
              <button
                className="btn-modal-close"
                onClick={handleCloseModalMapNahda}
              >
                <i className="bi bi-x-lg"></i>
              </button>
              <figure>
                <img src="images/loc-map-img-01.jpg" alt="Map" />
              </figure>
              <div className="modal-map-body">
                <h3>Al Nahda Block</h3>
                <ul>
                  <li>Dean's Office</li>
                  <li>Registry and Admissions</li>
                  <li>Marketing Office</li>
                  <li>Faculty of Information Technology</li>
                  <li>Faculty of Business Management</li>
                  <li>Muttrah and Ruwi Lecture Halls</li>
                  <li>Cafe</li>
                  <li>Board Room</li>
                </ul>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>

      <>
        <Modal
          className="modal-map"
          show={showModalMapBustan}
          onHide={handleCloseModalMapBustan}
        >
          <Modal.Body>
            <div className="modal-map-content">
              <button
                className="btn-modal-close"
                onClick={handleCloseModalMapBustan}
              >
                <i className="bi bi-x-lg"></i>
              </button>
              <figure>
                <img src="images/loc-map-img-01.jpg" alt="Map" />
              </figure>
              <div className="modal-map-body">
                <h3>Al Bustan Block</h3>
                <ul>
                  <li>Library</li>
                  <li>Learning Resources Centre (LRC)</li>
                  <li>Al Bustan Hall</li>
                  <li>Faculty of English Language Studies</li>
                  <li>eLearning and Innovation Office</li>
                  <li>Chromelab</li>
                </ul>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>

      <>
        <Modal
          className="modal-map"
          show={showModalMapJibreen}
          onHide={handleCloseModalMapJibreen}
        >
          <Modal.Body>
            <div className="modal-map-content">
              <button
                className="btn-modal-close"
                onClick={handleCloseModalMapJibreen}
              >
                <i className="bi bi-x-lg"></i>
              </button>
              <figure>
                <img src="images/loc-map-img-01.jpg" alt="Map" />
              </figure>
              <div className="modal-map-body">
                <h3>Al Jibreen Block</h3>
                <ul>
                  <li>Majan Training Institute (MTI)</li>
                  <li>Student Services and Alumni Relations </li>
                  <li>Human Resources Office</li>
                  <li>Facilities and Administration Office</li>
                </ul>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>

      <section className="contact-addr-sec">
        <div className="sec-bg-graphics">
          <div className="social-shape"></div>
          <div className="slider-d-shape"></div>
        </div>
        <div className="sec-con-cover">
          <Container fluid className="px-0">
            <Row className="gx-0">
              <Col className="col-12 col-md-6 col-xl-6 px-0">
                <div className="con-addr-img">
                  <img src="images/con-address-img.png" alt="Image" />
                  <div class="achieve-img-shape">
                    <svg height="0" width="0">
                      <defs></defs>
                    </svg>
                  </div>
                </div>
              </Col>
              <Col className="col-12 col-md-6 col-xl-6 px-0">
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
                          Mutrah | Way No. 2621 | Building No. 1986 <br /> P.O
                          Box: 710, P.C: 112 | Ruwi | Sultanate of Oman
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
          <div className="con-map">
            <img src="images/location-map-img.jpg" alt="Up" />
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
              <img src="images/location-map.jpg" alt="Image" />
              <div className="map-icon icon-01">
                <Link
                  className="map-modal-nav"
                  href=""
                  onClick={handleShowModalMapMaha}
                >
                  <i class="bi bi-geo-alt-fill"></i>
                </Link>
              </div>
              <div className="map-icon icon-02">
                <Link
                  className="map-modal-nav"
                  href=""
                  onClick={handleShowModalMapSahwa}
                >
                  <i class="bi bi-geo-alt-fill"></i>
                </Link>
              </div>
              <div className="map-icon icon-03">
                <Link
                  className="map-modal-nav"
                  href=""
                  onClick={handleShowModalMapNahda}
                >
                  <i class="bi bi-geo-alt-fill"></i>
                </Link>
              </div>
              <div className="map-icon icon-04">
                <Link
                  className="map-modal-nav"
                  href=""
                  onClick={handleShowModalMapBustan}
                >
                  <i class="bi bi-geo-alt-fill"></i>
                </Link>
              </div>
              <div className="map-icon icon-05">
                <Link
                  className="map-modal-nav"
                  href=""
                  onClick={handleShowModalMapJibreen}
                >
                  <i class="bi bi-geo-alt-fill"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
