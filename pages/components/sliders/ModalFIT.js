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
      <section className="ug-pgm-slider-sec bg-dk-blue">
        <div className="sec-bg-graphics">
          <div className="social-shape"></div>
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
              <Col className="col-xs-12 col-lg-6 d-flex justify-content-center align-items-end">
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
                      BSc (Hons) in Computer and Internet Applications
                    </span>
                  </h3>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xl={12}>
                <Accordion className="ug-pgm-accordian" defaultActiveKey="01c">
                  <Accordion.Item eventKey="01c">
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
                  <Accordion.Item eventKey="02c">
                    <Accordion.Header> Programme Structure</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Please note that: Programme structures may be subject to
                        change and modules may be offered in any of the
                        semesters in an academic year
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="03c">
                    <Accordion.Header>Fees structure</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        For the complete details of the fees, please refer to
                        the &nbsp;
                        <Link
                          href="https://majancollege.edu.om/fees#under"
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

            <Row>
              <Col xl={12}>
                <div className="ug-pgm-admin-hd">
                  <h3>
                    <span>BSc (Hons) in Networking</span>
                  </h3>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xl={12}>
                <Accordion className="ug-pgm-accordian" defaultActiveKey="01c">
                  <Accordion.Item eventKey="01c">
                    <Accordion.Header>Programme overview</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        This degree programme will equip graduates with the
                        necessary knowledge and technical skills needed to
                        design, create, operate and maintain network
                        infrastructure for modern distributed enterprise
                        computer systems. It will also strengthen their
                        awareness of networking security threats and they will
                        be able to implement networking related configurations.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="02c">
                    <Accordion.Header> Programme Structure</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Please note that: Programme structures may be subject to
                        change and modules may be offered in any of the
                        semesters in an academic year
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="03c">
                    <Accordion.Header>Fees structure</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        For the complete details of the fees, please refer to
                        the &nbsp;
                        <Link
                          href="https://majancollege.edu.om/fees#under"
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

            <Row>
              <Col xl={12}>
                <div className="ug-pgm-admin-hd">
                  <h3>
                    <span>BSc (Hons) Computing - Oil & Gas (Regular)</span>
                  </h3>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xl={12}>
                <Accordion className="ug-pgm-accordian" defaultActiveKey="01c">
                  <Accordion.Item eventKey="01c">
                    <Accordion.Header>Programme overview</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        The BSc (Computing) programme prepares students to
                        demonstrate in-depth skills and knowledge in relation to
                        IT applications that support business needs.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="02c">
                    <Accordion.Header>
                      {" "}
                      Salient Features of the Oil & Gas Pathway
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        The programme will equip students for a career in the
                        domain of IT solutions and management in the Oil and Gas
                        Industry. Graduates of the BSc (Hons) Computing (Oil &
                        Gas) programme will be ideally positioned to acquire a
                        job in the oil and gas industry among its IT solution
                        providers. The programme is the first of its kind and is
                        specifically designed for students looking to gain the
                        required competency to help fill a major skills gap
                        within the oil and gas industry. It will provide
                        hands-on experience with technologies like SCADA,
                        Wireless Sensor Network, Industrial Computing, Oil and
                        Gas processes and Industrial Data networks.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="03c">
                    <Accordion.Header>Fees structure</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        For the complete details of the fees, please refer to
                        the &nbsp;
                        <Link
                          href="https://majancollege.edu.om/fees#under"
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

            <Row>
              <Col xl={12}>
                <div className="ug-pgm-admin-hd">
                  <h3>
                    <span>BSc (Hons) Computing - Oil & Gas (On/Off)</span>
                  </h3>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xl={12}>
                <Accordion className="ug-pgm-accordian" defaultActiveKey="01c">
                  <Accordion.Item eventKey="01c">
                    <Accordion.Header>Programme overview</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        The BSc (Computing) programme prepares students to
                        demonstrate in-depth skills and knowledge in relation to
                        IT applications that support business needs.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="02c">
                    <Accordion.Header>
                      {" "}
                      Salient Features of the Oil & Gas Pathway
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        The programme will equip students for a career in the
                        domain of IT solutions and management in the Oil and Gas
                        Industry. Graduates of the BSc (Hons) Computing (Oil &
                        Gas) programme will be ideally positioned to acquire a
                        job in the oil and gas industry among its IT solution
                        providers. The programme is the first of its kind and is
                        specifically designed for students looking to gain the
                        required competency to help fill a major skills gap
                        within the oil and gas industry. It will provide
                        hands-on experience with technologies like SCADA,
                        Wireless Sensor Network, Industrial Computing, Oil and
                        Gas processes and Industrial Data networks.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="03c">
                    <Accordion.Header>Fees structure</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        For the complete details of the fees, please refer to
                        the &nbsp;
                        <Link
                          href="https://majancollege.edu.om/fees#under"
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
            <Row>
              <Col xl={12}>
                <div className="ug-pgm-admin-hd">
                  <h3>
                    <span>
                      BSc (Hons) Computing - Banking Information Systems
                    </span>
                  </h3>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xl={12}>
                <Accordion className="ug-pgm-accordian" defaultActiveKey="01c">
                  <Accordion.Item eventKey="01c">
                    <Accordion.Header>Programme overview</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        The BSc (Computing) programme prepares students to
                        demonstrate in-depth skills and knowledge in relation to
                        applications that support business needs.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="02c">
                    <Accordion.Header>
                      {" "}
                      Salient Features of the Banking Information Systems
                      Pathway
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Technologies like cloud computing, Big Data and the
                        Internet of Things have allowed banks to deliver state
                        of the art customer services to their customers while
                        maintaining the market competitiveness required for
                        winning and retaining business. This pathway will
                        prepare students for analysing, formulating and
                        implementing the diverse information technology
                        solutions required in the banking sector. It will also
                        provide students with understanding of the various
                        technologies which underpin security measures.
                      </p>
                      <p>
                        The programme is the first of its kind in Oman and is
                        specifically for computing graduates looking to gain the
                        required competency to help fill a major skills gap
                        within the Banking Sector.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="03c">
                    <Accordion.Header>Fees structure</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        For the complete details of the fees, please refer to
                        the &nbsp;
                        <Link
                          href="https://majancollege.edu.om/fees#under"
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
            <Row>
              <Col xl={12}>
                <div className="ug-pgm-admin-hd">
                  <h3>
                    <span>BSc(Hons) Computing - Software Engineering</span>
                  </h3>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xl={12}>
                <Accordion className="ug-pgm-accordian" defaultActiveKey="01c">
                  <Accordion.Item eventKey="01c">
                    <Accordion.Header>Programme overview</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        The BSc (Computing) programme prepares students to
                        demonstrate in-depth skills and knowledge in relation to
                        IT applications that support business needs.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="02c">
                    <Accordion.Header>
                      {" "}
                      Salient Features of the Banking Information Systems
                      Pathway
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        The BSc (Computing) Software Engineering pathway
                        provides the key technical skills needed to take up jobs
                        in the software engineering domain. The Information
                        Technology industry requires professionals with
                        knowledge and awareness of modern computer techniques
                        and programming skills. The need for high quality,
                        reliable software is becoming increasingly vital as its
                        use continues to grow both generally and in specific
                        environments.
                      </p>
                      <p>
                        The students will be able to understand and demonstrate
                        the concepts of software quality, the quality models,
                        standards and the methodologies used in software
                        industry. The students will also be able to develop an
                        understanding of the principles, methods, and best
                        practices in software architecture development in Oman
                        in the Information Technology domain.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="03c">
                    <Accordion.Header>Fees structure</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        For the complete details of the fees, please refer to
                        the &nbsp;
                        <Link
                          href="https://majancollege.edu.om/fees#under"
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
