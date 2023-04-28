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

export default function UGModalNine() {
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
              <img src="images/ug-modal-slider-09.jpg" alt="Image" />
            </div>
            <div className="ug-slider-body">
              <div className="ug-slider-hd">
                <h2>ACCA</h2>
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
                    <Accordion.Header>Programme Overview</Accordion.Header>
                    <Accordion.Body>
                      <div className="acc-pgm-overview">
                        <figure>
                          <div className="acc-pgm-img">
                            <img src="images/acca-intro-img.jpg" alt="Image" />
                          </div>
                        </figure>
                        <div className="acc-pgm-body">
                          <div className="mb-4">
                            <img src="images/acca-logo.jpg" alt="Logo" />
                          </div>
                          <p>
                            ACCA (the Association of Chartered Certified
                            Accountants) is the global body for professional
                            accountants. Their aims are to offer
                            business-relevant, first-choice qualifications to
                            people of application, ability and ambition from
                            around the world who seek a rewarding career in
                            accountancy, finance and management. According to an
                            independent survey conducted among 1,300 employers
                            in 20 countries, ACCA has been rated as the leading
                            global professional accountancy body in reputation.
                          </p>
                          <p>
                            ACCA has a global network of 83 offices and centres,
                            147,000 members and 424,000 students around the
                            world. In the Middle East there is a gap in demand
                            and supply of ACCA professionals, making it an ideal
                            choice for the students who wish to make a career in
                            accountancy in this part of the world.
                          </p>
                          <h5>We have ACCA intakes in July and January.</h5>
                        </div>
                      </div>
                      <div className="acc-reg-cover">
                        <div className="acc-reg-intro">
                          <p>
                            Students awaiting their higher secondary school
                            results can also register their interest to check
                            availability of places.
                          </p>
                          <p>Documents required for Registration:</p>
                        </div>
                        <div className="acc-reg-list">
                          <div className="acc-reg-item">
                            <div className="count">1</div>
                            <p>Passport copy / original</p>
                          </div>
                          <div className="acc-reg-item">
                            <div className="count">2</div>
                            <p>One passport size photograph</p>
                          </div>
                          <div className="acc-reg-item">
                            <div className="count">3</div>
                            <p>
                              Photocopy of all previous degrees / certificates
                              (no attestation required)
                            </p>
                          </div>
                          <div className="acc-reg-item">
                            <div className="count">4</div>
                            <p>
                              Debit/credit card for payment of the initial
                              registration fee of £ 89 to ACCA.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="02">
                    <Accordion.Header>Fees structure</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        For the complete details of the fees, please refer to
                        the &nbsp;
                        <Link
                          href="https://majancollege.edu.om/fees"
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
