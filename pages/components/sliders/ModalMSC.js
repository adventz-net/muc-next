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

export default function UGModalFour() {
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
              <img src="images/ug-modal-slider-05.jpg" alt="Image" />
            </div>
            <div className="ug-slider-body">
              <div className="ug-slider-hd">
                <h2>
                  Msc IN COMPUTER <br />
                  SCIENCE
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="down-arrow">
          <img src="images/arrow-down.png" alt="Down Arrow" />
        </div>
      </section>

      <section className="ug-pgm-head-sec ps-3 px-lg-5 px-xl-6">
        <div className="sec-bg-graphics">
          <div className="pgm-head-shape shape-01"></div>
          <div className="pgm-head-shape shape-02"></div>
        </div>
        <div className="sec-con-cover">
          <Container fluid>
            <Row>
              <Col xs={12} lg={6}>
                <div className="ug-pgm-head-info">
                  <div className="ug-pgm-info-hd">
                    <div className="ug-pgm-info-desig">
                      Head of Postgraduate Centre
                    </div>
                    <div className="ug-pgm-info-name">
                      Mr. Armstrong Jeyakumar
                    </div>
                  </div>
                  <p>
                    We at the Postgraduate Centre (PGC) with years of experience
                    have developed a delivery format which draws on the best of
                    the blended learning experience and contextualises the
                    student's environment.
                  </p>
                  <p>
                    We believe that our students are equipped to bring a
                    difference to their workplace and their communities. We see
                    and hear about them across the length and breadth of the
                    Sultanate as well as the world.
                  </p>
                </div>
              </Col>
              <Col className="col-xs-12 col-lg-6 d-flex justify-content-center align-items-end">
                <div className="ug-pgm-head-img">
                  <img src="images/armstrong-jeyakumar.png" alt="Image" />
                </div>
              </Col>
            </Row>
          </Container>
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
                    <Accordion.Header>General Information</Accordion.Header>
                    <Accordion.Body>
                      <div className="acc-pgm-overview">
                        <figure>
                          <div className="acc-pgm-img">
                            <img src="images/msc-intro-img.jpg" alt="Image" />
                          </div>
                        </figure>
                        <div className="acc-pgm-body ps-0">
                          <Row>
                            <Col xs={12} md={6}>
                              <ul>
                                <li>
                                  <h5>Course Title: </h5>
                                  <p>MSc Computer Science</p>
                                </li>
                                <li>
                                  <h5>Awarded by: </h5>
                                  <p>University of Bedfordshire, U.K.</p>
                                </li>
                                <li>
                                  <h5>Duration of the Course: </h5>
                                  <p>2 Years / 4 Semesters</p>
                                </li>
                                <li>
                                  <h5>Mode of Study: </h5>
                                  <p>
                                    Part - Time in a blended learning format (4
                                    Weekends in a Semester)
                                  </p>
                                </li>
                                <li>
                                  <h5>Start of Application Process: </h5>
                                  <p>March 5, 2023</p>
                                </li>
                              </ul>
                            </Col>
                            <Col xs={12} md={6}>
                              <ul>
                                <li>
                                  <h5>End of Application Process: </h5>
                                  <p>August 31, 2023</p>
                                </li>
                                <li>
                                  <h5>Start of Registration: </h5>
                                  <p>August 27, 2023</p>
                                </li>
                                <li>
                                  <h5>End of Registration: </h5>
                                  <p>September 7, 2023</p>
                                </li>
                                <li>
                                  <h5>Classes commence: </h5>
                                  <p>September 15, 2023</p>
                                </li>
                                <li>
                                  <h5>Faculty: </h5>
                                  <p>
                                    Lead Faculty from Univ. of Bedfordshire,
                                    U.K., Tutorial support by Faculty members of
                                    Majan College (Univ. College).
                                  </p>
                                </li>
                              </ul>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="02">
                    <Accordion.Header>Entry Criteria</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>
                          A good first degree - 2.2 Hons. or equivalent , with a
                          significant (generally one third or more) element in
                          Computing.
                        </li>
                        <li>Applicants must have IELTS 6.0 or equivalent</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="03">
                    <Accordion.Header>Course Structure</Accordion.Header>
                    <Accordion.Body>
                      <div className="acc-course-str-cover">
                        <div className="icon">
                          <img src="images/acc-pgm-dt-icon.png" alt="ICon" />
                        </div>
                        <div className="course-srt-list">
                          <div className="course-str-item">
                            <h4>8 Units </h4>
                            <p>(of 15 Credits each)</p>
                          </div>
                          <div className="course-str-item">
                            <div className="plus">+</div>
                          </div>
                          <div className="course-str-item">
                            <h4>1 Project</h4>
                            <p>(of 60 Credits)</p>
                          </div>
                          <div className="course-str-item">
                            <div className="plus">=</div>
                          </div>
                          <div className="course-str-item">
                            <h4>Total 180</h4>
                            <p>Credits</p>
                          </div>
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
                        <Link
                          href="https://majancollege.edu.om/fees#msc"
                          target="_blank"
                        >
                          Fees Structure
                        </Link>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* <section className="ug-pgm-form-sec pt-5 px-lg-5 px-xl-6 pb-5 pb-xl-6">
        <Container fluid>
          <Row>
            <Col xl={12}>
              <div className="ug-pgm-form-cover">
                <div className="ug-pgm-form">
                  <div className="form-hd">
                    <h2>Get in touch with us to know more</h2>
                  </div>
                  <div className="form-body">
                    <Form>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="First Name*"
                        className="mb-3"
                      >
                        <Form.Control type="email" placeholder="First Name*	" />
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Last Name*"
                        className="mb-3"
                      >
                        <Form.Control type="email" placeholder="Last Name*" />
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Mobile*"
                        className="mb-3"
                      >
                        <Form.Control type="email" placeholder="Mobile*" />
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Email*"
                        className="mb-3"
                      >
                        <Form.Control type="email" placeholder="Email*" />
                      </FloatingLabel>
                      <div className="form-footer">
                        <Button className="btn btn-submit">Submit</Button>
                        <Button className="btn btn-reset">Reset</Button>
                      </div>
                    </Form>
                  </div>
                </div>
                <div className="ug-pgm-img">
                  <img src="images/form-img.jpg" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
    </section>
  );
}
