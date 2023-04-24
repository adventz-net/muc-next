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

export default function UGModalTwo() {
  return (
    <section className="ug-modal-cover-sec">
      <section className="ug-pgm-slider-sec">
        <div className="sec-bg-graphics">
          <div className="pgm-mod-shape shape-01"></div>
        </div>
        <div className="sec-con-cover h-100">
          <div className="ug-slider-cover">
            <div className="ug-slider-img">
              <img src="images/ug-modal-slider-02.jpg" alt="Image" />
            </div>
            <div className="ug-slider-body">
              <div className="ug-slider-hd">
                <h2>
                  Faculty of
                  <br />
                  Information Technology
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
                      Head of <br />
                      Faculty
                    </div>
                    <div className="ug-pgm-info-name">
                      Dr. Syed Ziaur Rahman
                    </div>
                  </div>
                  <p>
                    “We prepare students to use technology strategically While
                    harnessing thier skills to transform information technology
                    (IT) from an operational to a strategic role in business. In
                    the 21st Century, we recognise that implementing information
                    technology has become an even more valuable strategic
                    resource in achieving any organisation's competitive
                    advantage”
                  </p>
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className="ug-pgm-head-img">
                  <img src="images/sayed.png" alt="Image" />
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
                <div className="ug-pgm-admin-hd">
                  <h3>
                    <span>
                      DipHE / BSc (Hons) in Computer and Internet Applications
                    </span>
                  </h3>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xl={12}>
                <Accordion className="ug-pgm-accordian" defaultActiveKey="01">
                  <Accordion.Item eventKey="01">
                    <Accordion.Header>Programme overview</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        This programme will equip you with the necessary
                        knowledge and skills for the existing and emerging
                        challenges that a career in computing and internet
                        technology will entail. In addition it prepares
                        graduates to show a high quality of independent thought,
                        flexibility and maturity based on a sound technical
                        knowledge of the field.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="02">
                    <Accordion.Header>Programme Objectives</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        The general goals of the BA (Hons) in English Language
                        have been to produce graduates with excellent
                        communication skills in English language; and secondly,
                        to ensure that those graduates are also able to
                        describe, appreciate and analyze the language in the
                        great variety of forms in which it occurs - spoken and
                        written, formal and informal, in different contexts,
                        genres and by different speakers. The first goal means
                        improving proficiency to high levels; the second
                        requires a thorough background in the subfields of
                        theoretical linguistics.
                      </p>
                      <h4>
                        Awards: (students must register for a particular award
                        in order to qualify for that award)
                      </h4>
                      <ul>
                        <li>Diploma in Higher Education</li>
                        <li>BA (Honours)</li>
                      </ul>
                      <p>Mode of delivery: Full time</p>
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
