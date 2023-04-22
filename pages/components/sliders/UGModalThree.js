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
        <div className="sec-con-cover">
          <div className="ug-slider-cover">
            <div className="ug-slider-img">
              <img src="images/ug-modal-slider-03.jpg" alt="Image" />
            </div>
            <div className="ug-slider-body">
              <div className="ug-slider-hd">
                <h2>
                  Faculty of English
                  <br />
                  Language Studies
                </h2>
              </div>
            </div>
          </div>
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
                    <div className="ug-pgm-info-name">Dr Amanda</div>
                  </div>
                  <p>
                    BA (Hons) English programme provides you with an enriching
                    learning experience where you can explore different aspects
                    of language studies such as Linguistics, Literature,
                    Translation, Discourse,Pragmatics, and the Media.
                  </p>
                  <p>
                    A programme of this nature will help you unfold your
                    potential and guarantee your personal, academic as well as
                    professional development.
                  </p>
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className="ug-pgm-head-img">
                  <img src="images/amanda.png" alt="Image" />
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
                    <span>BA (Honours) in English Language</span>
                  </h3>
                </div>
                <div className="text-white">
                  <p>
                    The programme offers the following pathways, to provide
                    sudents with an opportunity to gain indepth knowledge in
                    their chosen area of specialisation
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xl={12}>
                <Accordion className="ug-pgm-accordian" defaultActiveKey="01">
                  <Accordion.Item eventKey="01">
                    <Accordion.Header>Programme overview</Accordion.Header>
                    <Accordion.Body>
                      <div className="acc-pgm-overview">
                        <figure>
                          <div className="acc-pgm-img">
                            <img
                              src="images/pgm-overview-img-01.jpg"
                              alt="Image"
                            />
                          </div>
                          <div className="acc-pgm-info">
                            <p>It has</p>
                            <h3>2,600 students, </h3>
                            <p>
                              delivers eight undergraduate degrees and four
                              master's degrees.
                            </p>
                          </div>
                        </figure>
                        <div className="acc-pgm-body">
                          <p>
                            This degree in English Language focuses on
                            developing highly employable bi-lingual individuals
                            with marketable skills for potential employers.
                          </p>
                          <p>
                            Apart from its vocational applications, it provides
                            candidates with rigorous intellectual education,
                            valuable in training them to analyze perceptively
                            and critically, to reason effectively and express
                            themselves clearly and rationally.
                          </p>
                          <p>
                            Professions that require expertise in English
                            Language include, but are not restricted to
                            Translation, Journalism & the Media, Publishing,
                            Human Resources and Public Relations.
                          </p>
                        </div>
                      </div>
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
                </Accordion>
              </Col>
            </Row>
            <Row>
              <Col xl={12}>
                <div className="ug-pgm-fees">
                  <p>
                    For the complete details of the fees, please refer to the
                    &nbsp;
                    <Link href="">Fees Structure</Link>
                  </p>
                </div>
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
