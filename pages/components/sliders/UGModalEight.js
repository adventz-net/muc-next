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

export default function UGModalEight() {
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
              <img src="images/ug-modal-slider-08.jpg" alt="Image" />
            </div>
            <div className="ug-slider-body">
              <div className="ug-slider-hd">
                <h2>
                  Doctor of Business <br />
                  Administration (DBA)
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
        {/* <div className="sec-con-cover">
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
                    We at the Postgraduate Centre (PGC) with over 15 years of
                    experience have developed a delivery format which draws on
                    the best of the blended learning experience and
                    contextualises the student's environment.
                  </p>
                  <p>
                    We believe that our students are equipped to bring a
                    difference to their workplace and their communities. We see
                    and hear about them across the length and breadth of the
                    Sultanate as well as the world.
                  </p>
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className="ug-pgm-head-img">
                  <img src="images/armstrong-jeyakumar.png" alt="Image" />
                </div>
              </Col>
            </Row>
          </Container>
        </div> */}
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
                            <img src="images/cma-intro-img.jpg" alt="Image" />
                          </div>
                          <div className="acc-pgm-info">
                            <h3>
                              With <br /> Over 150 <br /> students
                            </h3>
                            <p>
                              the PG Centre is among the largest in the
                              Sultanate
                            </p>
                          </div>
                        </figure>
                        <div className="acc-pgm-body">
                          <h5>
                            The University of Bradford Doctor of Business
                            Administration (DBA) is the pinnacle of management
                            education.
                          </h5>
                          <p>
                            DBA is specifically designed for executives,
                            professionals and senior managers who seek to
                            combine the best of academic knowledge with the best
                            of practitioner knowledge in order to push forward
                            the boundaries of understanding contemporary and
                            rapidly transforming business and management
                            challenges. The DBA award allows the holder to use
                            the title 'Doctor'.
                          </p>
                          <p>
                            The Bradford DBA provides advanced research methods
                            training through a suite of four specifically
                            designed taught modules. The modules are delivered
                            by leading scholars from the University of Bradford
                            School of Management, supported by scholars in Majan
                            University College, and will equip you to undertake
                            independent empirical research on contemporary
                            business/management challenges, and to develop new
                            knowledge and understanding.
                          </p>
                          <p>
                            You will be supervised by leading research-active
                            academics from University of Bradford and Majan
                            University College, who regularly publish in
                            international journals and present at prestigious
                            conferences.
                          </p>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="02">
                    <Accordion.Header>Entry Requirements</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        We welcome applications for the DBA - Oman programme,
                        particularly from applicants whose interests complement
                        the expertise of the Universities Research Centres
                        (People, Organisation and Entrepreneurship; Logistics,
                        Supply Chain and Technology; International Business,
                        Marketing and Branding).
                      </p>
                      <h5>For the DBA, you should have</h5>
                      <ul>
                        <li>
                          A Bachelor's degree and a Master's degree from an
                          accredited institution
                        </li>
                        <li>
                          A minimum of five years' relevant managerial work
                          experience
                        </li>
                        <li>A research proposal</li>
                        <li>Two references (one academic, if possible)</li>
                        <li>
                          A minimum score of at least 6.5 on the IELTS test
                          (with no sub-test less than 6.0). TOEFL Test result
                          min 94.
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="03">
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

      <section className="ug-pgm-form-sec pt-5 px-lg-5 px-xl-6 pb-5 pb-xl-6">
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
      </section>
    </section>
  );
}
