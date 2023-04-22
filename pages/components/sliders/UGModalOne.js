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

export default function UGModalOne() {
  return (
    <section className="ug-modal-cover-sec">
      <section className="ug-pgm-slider-sec">
        <div className="sec-bg-graphics">
          <div className="pgm-mod-shape shape-01"></div>
        </div>
        <div className="sec-con-cover">
          <div className="ug-slider-cover">
            <div className="ug-slider-img">
              <img src="images/ug-modal-slider-01.jpg" alt="Image" />
            </div>
            <div className="ug-slider-body">
              <div className="ug-slider-hd">
                <h2>
                  Faculty of Business
                  <br />
                  Management
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
                    <div className="ug-pgm-info-name">Dr. Ammar AlBalushi</div>
                  </div>
                  <p>
                    Our programmes have grown substaintially in recent years to
                    meet the local and global market needs, we remain focused on
                    enabling a very much more personalised learning experience
                    when delivering our business and management degrees.
                  </p>
                  <p>
                    We are increasingly promoting research with impact, studies
                    that have proven relevance in the omani market
                  </p>
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className="ug-pgm-head-img">
                  <img src="images/ammar-albalushi.png" alt="Image" />
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
                    <span>Dip HE / BA (Hons) in Business Administration</span>
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
                <Accordion className="ug-pgm-accordian" defaultActiveKey="01a">
                  <Accordion.Item eventKey="01a">
                    <Accordion.Header>General Pathway</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        This programme aims to develop a student's intellectual
                        ability, executive personality and managerial skills
                        through an appropriate blending of business and general
                        education. The programme provides students with exposure
                        to different areas and functions of business such as
                        Accounting, Finance, Information technology, Marketing,
                        Human resource and Strategy. It also enables students to
                        take a broader perspective and ability to interlink
                        different issues in the process of decision making.
                        Students of this programme will also learn a broad range
                        of managerial capabilities, problem solving and
                        communication skills.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="02a">
                    <Accordion.Header>
                      Human Resource Management Pathway
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        This programme aims to develop a student's intellectual
                        ability, executive personality and managerial skills
                        through an appropriate blending of business and general
                        education. The programme provides students with exposure
                        to different areas and functions of business such as
                        Accounting, Finance, Information technology, Marketing,
                        Human resource and Strategy. It also enables students to
                        take a broader perspective and ability to interlink
                        different issues in the process of decision making.
                        Students of this programme will also learn a broad range
                        of managerial capabilities, problem solving and
                        communication skills.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="03a">
                    <Accordion.Header>Marketing Pathway</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        This programme aims to develop a student's intellectual
                        ability, executive personality and managerial skills
                        through an appropriate blending of business and general
                        education. The programme provides students with exposure
                        to different areas and functions of business such as
                        Accounting, Finance, Information technology, Marketing,
                        Human resource and Strategy. It also enables students to
                        take a broader perspective and ability to interlink
                        different issues in the process of decision making.
                        Students of this programme will also learn a broad range
                        of managerial capabilities, problem solving and
                        communication skills.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="04a">
                    <Accordion.Header>Accounting Pathway</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        This programme aims to develop a student's intellectual
                        ability, executive personality and managerial skills
                        through an appropriate blending of business and general
                        education. The programme provides students with exposure
                        to different areas and functions of business such as
                        Accounting, Finance, Information technology, Marketing,
                        Human resource and Strategy. It also enables students to
                        take a broader perspective and ability to interlink
                        different issues in the process of decision making.
                        Students of this programme will also learn a broad range
                        of managerial capabilities, problem solving and
                        communication skills.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="05a">
                    <Accordion.Header>
                      Information Systems Pathway
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        This programme aims to develop a student's intellectual
                        ability, executive personality and managerial skills
                        through an appropriate blending of business and general
                        education. The programme provides students with exposure
                        to different areas and functions of business such as
                        Accounting, Finance, Information technology, Marketing,
                        Human resource and Strategy. It also enables students to
                        take a broader perspective and ability to interlink
                        different issues in the process of decision making.
                        Students of this programme will also learn a broad range
                        of managerial capabilities, problem solving and
                        communication skills.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="06a">
                    <Accordion.Header>Small Business Pathway</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        This programme aims to develop a student's intellectual
                        ability, executive personality and managerial skills
                        through an appropriate blending of business and general
                        education. The programme provides students with exposure
                        to different areas and functions of business such as
                        Accounting, Finance, Information technology, Marketing,
                        Human resource and Strategy. It also enables students to
                        take a broader perspective and ability to interlink
                        different issues in the process of decision making.
                        Students of this programme will also learn a broad range
                        of managerial capabilities, problem solving and
                        communication skills.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="07a">
                    <Accordion.Header>
                      Tourism and Event Management Pathway
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        This programme aims to develop a student's intellectual
                        ability, executive personality and managerial skills
                        through an appropriate blending of business and general
                        education. The programme provides students with exposure
                        to different areas and functions of business such as
                        Accounting, Finance, Information technology, Marketing,
                        Human resource and Strategy. It also enables students to
                        take a broader perspective and ability to interlink
                        different issues in the process of decision making.
                        Students of this programme will also learn a broad range
                        of managerial capabilities, problem solving and
                        communication skills.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="08a">
                    <Accordion.Header>
                      Transport Operations Management Pathway
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        This programme aims to develop a student's intellectual
                        ability, executive personality and managerial skills
                        through an appropriate blending of business and general
                        education. The programme provides students with exposure
                        to different areas and functions of business such as
                        Accounting, Finance, Information technology, Marketing,
                        Human resource and Strategy. It also enables students to
                        take a broader perspective and ability to interlink
                        different issues in the process of decision making.
                        Students of this programme will also learn a broad range
                        of managerial capabilities, problem solving and
                        communication skills.
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
                    <span>BA (Hons) in Marketing</span>
                  </h3>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xl={12}>
                <Accordion className="ug-pgm-accordian" defaultActiveKey="01b">
                  <Accordion.Item eventKey="01b">
                    <Accordion.Header>Programme overview</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        This degree programme is designed for students who are
                        interested in dealing with people because people are in
                        a constant change of flux in their needs, wants and
                        desires. This programme will develop an in-depth
                        understanding of the theoretical base relevant to
                        consumer behaviour, advertising and promotional
                        activities, brand management, sales force management,
                        retail marketing and related marketing decisions. It
                        will enhance students' ability to apply the theoretical
                        knowledge to analysis and evaluation of marketing
                        problems using appropriate market research techniques.
                        The subjects covered include marketing strategy and
                        campaign planning, public relations, event management
                        and journalism, working across different media and
                        technologies while skills such as analytical problem
                        solving, teamwork, research and organising and
                        communicating information receive great emphasis
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="02b">
                    <Accordion.Header>Job opportunities:</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        This degree programme is designed for students who are
                        interested in dealing with people because people are in
                        a constant change of flux in their needs, wants and
                        desires. This programme will develop an in-depth
                        understanding of the theoretical base relevant to
                        consumer behaviour, advertising and promotional
                        activities, brand management, sales force management,
                        retail marketing and related marketing decisions.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="03b">
                    <Accordion.Header>Fees structure</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        This degree programme is designed for students who are
                        interested in dealing with people because people are in
                        a constant change of flux in their needs, wants and
                        desires. This programme will develop an in-depth
                        understanding of the theoretical base relevant to
                        consumer behaviour, advertising and promotional
                        activities, brand management, sales force management,
                        retail marketing and related marketing decisions.
                      </p>
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
                    <Link href="">Fees Structure</Link>
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xl={12}>
                <div className="ug-pgm-admin-hd">
                  <h3>
                    <span>BSc (Hons) in E-Business</span>
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
                        This degree programme is designed for students who are
                        interested in dealing with people because people are in
                        a constant change of flux in their needs, wants and
                        desires. This programme will develop an in-depth
                        understanding of the theoretical base relevant to
                        consumer behaviour, advertising and promotional
                        activities, brand management, sales force management,
                        retail marketing and related marketing decisions. It
                        will enhance students' ability to apply the theoretical
                        knowledge to analysis and evaluation of marketing
                        problems using appropriate market research techniques.
                        The subjects covered include marketing strategy and
                        campaign planning, public relations, event management
                        and journalism, working across different media and
                        technologies while skills such as analytical problem
                        solving, teamwork, research and organising and
                        communicating information receive great emphasis
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="02c">
                    <Accordion.Header>Job opportunities:</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        This degree programme is designed for students who are
                        interested in dealing with people because people are in
                        a constant change of flux in their needs, wants and
                        desires. This programme will develop an in-depth
                        understanding of the theoretical base relevant to
                        consumer behaviour, advertising and promotional
                        activities, brand management, sales force management,
                        retail marketing and related marketing decisions.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="03c">
                    <Accordion.Header>Fees structure</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        This degree programme is designed for students who are
                        interested in dealing with people because people are in
                        a constant change of flux in their needs, wants and
                        desires. This programme will develop an in-depth
                        understanding of the theoretical base relevant to
                        consumer behaviour, advertising and promotional
                        activities, brand management, sales force management,
                        retail marketing and related marketing decisions.
                      </p>
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
