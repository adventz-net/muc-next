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

export default function UGModalTen() {
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
              <img src="images/ug-modal-slider-10.jpg" alt="Image" />
            </div>
            <div className="ug-slider-body">
              <div className="ug-slider-hd">
                <h2>
                  Certified Management <br />
                  Accountants
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
                    <Accordion.Header>Overview</Accordion.Header>
                    <Accordion.Body>
                      <div className="acc-pgm-overview">
                        <figure>
                          <div className="acc-pgm-img">
                            <img src="images/cma-intro-img.jpg" alt="Image" />
                          </div>
                          <div className="acc-pgm-info">
                            <p>Members in</p>
                            <h3>
                              140 <br />
                              countries
                            </h3>
                          </div>
                        </figure>
                        <div className="acc-pgm-body">
                          <div className="mb-4">
                            <img src="images/cma-logo.png" alt="Logo" />
                          </div>
                          <p>
                            The future belongs to CMAs (Certified Management
                            Accountants). Nowadays, because of new regulations
                            in the corporate sector, if you intend to become a
                            CFO, Head of Internal Audit, Company Secretary or
                            other similar executive positions, experience or an
                            academic degree is not sufficient. Instead, you will
                            need to be a member of an international professional
                            body. Qualifying as a CMA will make you eligible for
                            these statutory positions.
                          </p>
                          <p>
                            CMAs have the edge over other professionals in areas
                            like decision-making, planning, forecasting, risk
                            management, cost and internal control, investment
                            decisions, corporate finance and performance
                            management.
                          </p>
                          <p>
                            CMAs have the edge over other professionals in areas
                            like decision-making, planning, forecasting, risk
                            management, cost and internal control, investment
                            decisions, corporate finance and performance
                            management.
                          </p>
                          <h5>
                            CMAs have the edge over other professionals in areas
                            like decision-making, planning, forecasting, risk
                            management, cost and internal control, investment
                            decisions, corporate finance and performance
                            management.
                          </h5>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="02">
                    <Accordion.Header>Program details</Accordion.Header>
                    <Accordion.Body>
                      <div className="acc-pgm-dt-cover">
                        <div className="acc-pgm-dt-list">
                          <div className="acc-pgm-dt-item">
                            <div className="icon">
                              <img
                                src="images/acc-pgm-dt-icon.png"
                                alt="Logo"
                              />
                            </div>
                            <h4>Duration</h4>
                            <p>
                              Minimum time to complete both parts is eight
                              months but average time to complete is 1½ years.
                            </p>
                          </div>
                          <div className="acc-pgm-dt-item">
                            <div className="icon">
                              <img
                                src="images/acc-pgm-dt-icon.png"
                                alt="Logo"
                              />
                            </div>
                            <h4>Maximum Duration</h4>
                            <p>
                              Once a candidate enters the CMA programme, he or
                              she must complete within three years.
                            </p>
                          </div>
                          <div className="acc-pgm-dt-item">
                            <div className="icon">
                              <img
                                src="images/acc-pgm-dt-icon.png"
                                alt="Logo"
                              />
                            </div>
                            <h4>Exam Dates</h4>
                            <p>
                              Exams are held in Jan/Feb, May/June & Sept/Oct
                            </p>
                          </div>
                          <div className="acc-pgm-dt-item">
                            <div className="icon">
                              <img
                                src="images/acc-pgm-dt-icon.png"
                                alt="Logo"
                              />
                            </div>
                            <h4>Exams</h4>
                            <p>
                              There are two online closed book exams and each
                              exam is of four hours. Exams are conducted by the
                              Prometric Testing Centre in Al Mawaleh.
                            </p>
                          </div>
                          <div className="acc-pgm-dt-item">
                            <div className="icon">
                              <img
                                src="images/acc-pgm-dt-icon.png"
                                alt="Logo"
                              />
                            </div>
                            <h4>Eligibility</h4>
                            <p>
                              The normal entry requirement for the CMA programme
                              is an appropriate Bachelor's degree. However,
                              under certain circumstances, those without a
                              degree can be admitted. Full details can be
                              obtained from Majan College
                            </p>
                          </div>
                          <div className="acc-pgm-dt-item">
                            <div className="icon">
                              <img
                                src="images/acc-pgm-dt-icon.png"
                                alt="Logo"
                              />
                            </div>
                            <h4>Documents required for registration</h4>
                            <ul>
                              <li>Passport Copy/Original.</li>
                              <li>Four passport size photographs.</li>
                              <li>
                                Originals and photocopies of all previous
                                certificates, degrees, transcripts etc.
                              </li>
                            </ul>
                          </div>
                          <div className="acc-pgm-dt-item">
                            <div className="icon">
                              <img
                                src="images/acc-pgm-dt-icon.png"
                                alt="Logo"
                              />
                            </div>
                            <h4>Teaching Staff</h4>
                            <p>
                              This programme is offered under the supervision of
                              a qualified CMA USA professional.
                            </p>
                          </div>
                        </div>
                      </div>
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
