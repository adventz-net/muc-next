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

export default function UGModalEleven() {
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
              <img src="images/ug-modal-slider-11.jpg" alt="Image" />
            </div>
            <div className="ug-slider-body">
              <div className="ug-slider-hd">
                <h2>
                  CERTIFIED ISLAMiC finance <br />
                  executive ( CIFE™ )
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
                    <Accordion.Header>How Do I Learn?</Accordion.Header>
                    <Accordion.Body>
                      <div className="acc-pgm-overview">
                        <div className="acc-pgm-body ps-0">
                          <div className="mb-4">
                            <img src="images/cife-logo.png" alt="Logo" />
                          </div>
                          <p>
                            Ethica's award-winning CIFE™ is a streamlined
                            training and certification programme designed to
                            take complete newcomers to an advanced level of
                            understanding in Islamic Finance. Once you
                            understand the 22 core topics offered as part of the
                            curriculum from Ethica Institute, you will be ready
                            to take the online CIFE™ examination.
                          </p>
                          <p>
                            In collaboration with Ethica, Majan University
                            College will provide study materials through face to
                            face and/online classes, as well as through the
                            Ethica website. Through your account with Ethica,
                            you can also supplement your study materials from
                            Majan with the ones provided by Ethica as videos and
                            PDF documents.
                          </p>
                          <p>
                            You can take the exam as soon as you are ready. The
                            recommended study duration is four months (whether
                            face-to-face or online).
                          </p>
                          <h5>Intakes ongoing every Sept., Feb. and June.</h5>
                        </div>
                      </div>
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
