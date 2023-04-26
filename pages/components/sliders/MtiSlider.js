import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Accordion,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";

export default function MtiSlider() {
  return (
    <section className="ug-modal-cover-sec">
      <section className="ug-pgm-slider-sec bg-dk-blue">
        <div className="sec-bg-graphics">
          <div className="social-shape"></div>
          <div className="pgm-mod-shape shape-01"></div>
        </div>
        <div className="sec-con-cover h-100">
          <div className="ug-slider-cover">
            <div className="ug-slider-img">
              <img src="images/mti-slider-01.jpg" alt="Image" />
            </div>
            <div className="ug-slider-body">
              <div className="ug-slider-hd">
                <h2>
                  Majan Training <br />
                  Institute
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="down-arrow">
          <img src="images/arrow-down.png" alt="Down Arrow" />
        </div>
      </section>

      <section className="ug-pgm-admin-sec pt-5 px-lg-5 px-xl-6 pb-5 pb-md-4">
        <div className="sec-bg-graphics">
          <div className="pgm-admin-shape shape-01"></div>
        </div>
        <div className="sec-con-cover">
          <Container fluid>
            <Row>
              <Col xl={12}>
                <Accordion className="ug-pgm-accordian" defaultActiveKey="01">
                  <Accordion.Item eventKey="01">
                    <Accordion.Header>intro</Accordion.Header>
                    <Accordion.Body>
                      <div className="acc-pgm-overview">
                        <figure>
                          <div className="acc-pgm-img">
                            <img src="images/mti-intro-img.jpg" alt="Image" />
                          </div>
                          <div className="acc-pgm-info">
                            <p>MTI</p>
                            <h3>
                              Enhances and <br />
                              promote career <br />
                              growth
                            </h3>
                            <p>through training workshops and programmes.</p>
                          </div>
                        </figure>
                        <div className="acc-pgm-body">
                          <p>
                            Majan Training Institute (MTI) provides the diverse
                            community with professional training opportunities
                            to enhance and promote career growth through
                            training workshops and programmes. It offers
                            customised courses in the areas of Finance,
                            Information Technology, Marketing, English Language,
                            Leadership, Accounting… etc.
                          </p>
                          <p>
                            When the institute was first opened it was called
                            "Centre for Continuing Education", it ran a number
                            of courses to a high level for many years. In 2013
                            the centre became an approved centre by the Ministry
                            and Manpower and at this point it changed its name
                            to "Majan Training Unit". In 2022 the unit was
                            approved to function as an institute by the Ministry
                            of Labour and the Ministry of Higher Education,
                            Research and Innovation.
                          </p>
                          <p>
                            As an extended arm to the college, Majan Training
                            Institute offers bespoke professional courses in the
                            areas of English Language, Information Technology,
                            Finance, Marketing, Business Management, Accounting
                            and Leadership Training.
                          </p>
                          <p>
                            Professional Development courses and Post-graduate
                            preparation courses delivered by tenured professors
                            and lecturers. Courses are audited each year by the
                            Ministry of Education and Ministry of Labour to
                            ensure relevance and to respond to the requirements
                            of the national economy.
                          </p>
                          <p>
                            With the priorities of Vision 2040 set by the Omani
                            government, Majan University College is uniquely
                            positioned to meet the demands of the future locally
                            and internationally.
                          </p>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="02">
                    <Accordion.Header>Testimonials</Accordion.Header>
                    <Accordion.Body>
                      <div className="acc-testi-cover">
                        <figure>
                          <img
                            src="images/tesi-profile-pic-01.png"
                            alt="Profile"
                          />
                        </figure>
                        <div className="acc-testi-body">
                          <div className="testi-hd">Testimonies</div>
                          <div className="testi-text">
                            I took on the CISSP course to improve my skills and
                            enhance my CV. The course has been very beneficial
                            and the lecturer was easy to understand. I recommend
                            the course to others and would study again at MJU.
                          </div>
                          <div className="testi-name">
                            Moosa Ali Al Rawahi, Studied CISSP
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="03">
                    <Accordion.Header>Our Clients</Accordion.Header>
                    <Accordion.Body>
                      <div className="oru-clients-cover">
                        <div className="client-item">
                          <figure>
                            <img src="images/clients-01.png" alt="Clients" />
                          </figure>
                        </div>
                        <div className="client-item">
                          <figure>
                            <img src="images/clients-02.png" alt="Clients" />
                          </figure>
                        </div>
                        <div className="client-item">
                          <figure>
                            <img src="images/clients-03.png" alt="Clients" />
                          </figure>
                        </div>
                        <div className="client-item">
                          <figure>
                            <img src="images/clients-04.png" alt="Clients" />
                          </figure>
                        </div>
                        <div className="client-item">
                          <figure>
                            <img src="images/clients-05.png" alt="Clients" />
                          </figure>
                        </div>
                        <div className="client-item">
                          <figure>
                            <img src="images/clients-06.png" alt="Clients" />
                          </figure>
                        </div>
                        <div className="client-item">
                          <figure>
                            <img src="images/clients-07.png" alt="Clients" />
                          </figure>
                        </div>
                        <div className="client-item">
                          <figure>
                            <img src="images/clients-08.png" alt="Clients" />
                          </figure>
                        </div>
                        <div className="client-item">
                          <figure>
                            <img src="images/clients-09.png" alt="Clients" />
                          </figure>
                        </div>
                        <div className="client-item">
                          <figure>
                            <img src="images/clients-10.png" alt="Clients" />
                          </figure>
                        </div>
                        <div className="client-item">
                          <figure>
                            <img src="images/clients-11.png" alt="Clients" />
                          </figure>
                        </div>
                        <div className="client-item">
                          <figure>
                            <img src="images/clients-12.png" alt="Clients" />
                          </figure>
                        </div>
                        <div className="client-item">
                          <figure>
                            <img src="images/clients-13.png" alt="Clients" />
                          </figure>
                        </div>
                        <div className="client-item">
                          <figure>
                            <img src="images/clients-15.png" alt="Clients" />
                          </figure>
                        </div>
                        <div className="client-item">
                          <figure>
                            <img src="images/clients-16.png" alt="Clients" />
                          </figure>
                        </div>
                        <div className="client-item">
                          <figure>
                            <img src="images/clients-17.png" alt="Clients" />
                          </figure>
                        </div>
                        <div className="client-item">
                          <figure>
                            <img src="images/clients-18.png" alt="Clients" />
                          </figure>
                        </div>
                        <div className="client-item">
                          <figure>
                            <img src="images/clients-19.png" alt="Clients" />
                          </figure>
                        </div>
                        <div className="client-item">
                          <figure>
                            <img src="images/clients-20.png" alt="Clients" />
                          </figure>
                        </div>
                        <div className="client-item">
                          <figure>
                            <img src="images/clients-21.png" alt="Clients" />
                          </figure>
                        </div>
                        <div className="client-item">
                          <figure>
                            <img src="images/clients-22.png" alt="Clients" />
                          </figure>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="04">
                    <Accordion.Header>Fees structure</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        For the complete details of the fees, please refer to
                        the &nbsp;
                        <Link href="">Fees Structure</Link>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </section>
  );
}
