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
          <div className="social-shape"></div>
          <div className="pgm-mod-shape shape-01"></div>
        </div>
        <div className="sec-con-cover h-100">
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
                      This programme aims to develop a student's intellectual ability, executive personality and managerial skills through an appropriate blending of 
                      business and general education. The programme provides students with exposure to different areas and functions of business such as Accounting,
                       Finance, Information technology, Marketing, Human resource and Strategy. It also enables students to take a broader perspective and ability to 
                       interlink different issues in the process of decision making. Students of this programme will also learn a broad range of managerial capabilities,
                        problem solving and communication skills.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="02a">
                    <Accordion.Header>
                      Human Resource Management Pathway
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                      This programme develops a range of skills and knowledge essential to the effective management of HR functions such as staff planning,
                       job analysis and design, recruitment and training, performance appraisal and assessment of training needs. Students of this programme 
                       will also be exposed to modules in accounting and finance, information systems, mathematics and statistics, management and marketing, 
                       in addition to English Language courses.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="03a">
                    <Accordion.Header>Marketing Pathway</Accordion.Header>
                    <Accordion.Body>
                      <p>
                      Students of this programme learn about the role of markets and marketing in today's society. The programme has a strong emphasis on understanding consumers' 
                      wants and needs and also understanding their behaviour. This programme starts with providing the fundamental principles of marketing and progresses to the 
                      marketing applications in real life scenarios.It also develops a good understanding of the core concepts underlying the practice of finance and accounting, 
                      micro and macro economics, 
                      organisational structure, management principles and the development of successful business strategies.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="04a">
                    <Accordion.Header>Accounting Pathway</Accordion.Header>
                    <Accordion.Body>
                      <p>
                      The programme provides a blend of a conceptual theoretical framework with practical applications and covers fundamental theoretical knowledge 
                      through to more specialised accounting requirements. This degree will develop a wide range of skills such as analytical problem solving, 
                      teamwork, research and organising and communicating information besides an understanding of the legal, economic, behavioural and human aspects 
                      of business organisations.The graduates of this programme will be capable of pursuing careers as finance managers, financial or management accountants, 
                      public accountants and managers. 
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="05a">
                    <Accordion.Header>
                      Information Systems Pathway
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                      The BA (Hons) in Business Administration with Information Systems pathway is designed to meet the growing needs of today's business world by merging 
                      IT skills with business knowledge.This programme will enable students to apply information technology solutions to business situations, 
                      evaluate technical knowledge and confidently take on project and team management in IT-related business scenarios. It also develops 
                      a good understanding of the business environment including the legal, economic, behavioural and human aspects and the core concepts underlying the 
                      practice of finance and accounting, management principles and the development of successful business strategies. It is aimed at developing students' 
                      skills of interpreting and communicating complicated technical ideas to those with less technical knowledge and prepares them for leadership roles 
                      in Business and IT management such as IT consultant, management consultant, business analyst, project manager, systems analyst, business systems and 
                      integration consultant and security and privacy consultant.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="06a">
                    <Accordion.Header>Small Business Pathway</Accordion.Header>
                    <Accordion.Body>
                      <p>
                      The importance of entrepreneurship and Small and Medium Enterprises have been widely accepted as vital 
for economic growth and employment generation. The role of higher education in the creation of 
graduate entrepreneurs is significant. Hence there is need for designing deliberate educational strategy to 
encourage entrepreneurship among students in particular and society in general. Entrepreneurs have a set of 
personal skills, attributes and behaviour that go beyond the purely commercial. 
The BA (Hons) in Business Administration with Small Business pathway develops the skills that are necessary to 
meet the demands for setting up and managing own businesses. 
The programme provides the business management core that includes an extensive background in the functional areas of marketing, 
accounting, and management; an understanding of the business environment to include the legal, economic, behavioural and human aspects; 
technical skills in information systems, mathematics and quantitative analysis; and the ability to communicate, integrate and synthesise. 
As a graduate you will be able to integrate the theory and practice which will enable you to communicate effectively, understand the internal and external 
environments of business, appreciate the legal, ethical, strategic and behavioural contexts of business decisions, and understand the financial and economic
 dynamics which constitute the context for business activity. You will be also equipped with the skills, knowledge and methods that are needed to launch 
 a new enterprise, take over an existing business, or 
be a dynamic manager who can make a dramatic difference in the future of a small business.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="07a">
                    <Accordion.Header>
                      Tourism and Event Management Pathway
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                      The BA (Hons) Business Administration with Tourism include modules aimed at providing students with the fundamentals of business management including accountancy, 
                      computing and marketing and is augmented by specialist travel and tourism modules. Research methods and skills, market segmentation, strategic planning, advertising, 
                      sales, promotions, pricing, and distribution will be explored in depth. Graduates will be prepared for a career in business 
                      management with an emphasis on the relevant skills and knowledge pertaining to the tourism sector.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="08a">
                    <Accordion.Header>
                      Transport Operations Management Pathway
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                      Transport Operations Management is a new BA Business Administration pathway designed to equip students with knowledge and skills relevant to the operation 
                      of shipping and road transport systems and associated supply chains. Students who follow this pathway will gain a good grounding in logistics and 
                      inventory management tasks, preparing them for careers in ports, logistics and land transport management. Diploma and degree programmes covering these areas are 
                      unusual in Oman, 
                      so students choosing this pathway may well find employment successfully after graduation. 
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
                      This degree programme is designed for students who are interested in dealing with people because people are in a constant change of flux in their needs, 
                      wants and desires. This programme will develop an in-depth understanding of the theoretical base relevant to consumer behaviour, advertising and promotional activities, 
                      brand management, sales force management, retail marketing and related marketing decisions. It will enhance students' ability to apply the theoretical knowledge to 
                      analysis and evaluation of marketing problems using appropriate market research techniques. The subjects covered include marketing strategy and campaign planning,
                       public relations, event management and journalism, working across different media and technologies while skills such as analytical problem solving, teamwork, 
                      research and organising and communicating information receive great emphasis
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="02b">
                    <Accordion.Header> Programme Structure</Accordion.Header>
                    <Accordion.Body>
                      <p>
                      Students are required to pass 8 modules totalling 120 credits in each year (level). In total students must satisfactorily complete 480 credits 
                      (32 modules) with a combination of core and specialisation modules to be eligible for the award of the BA (Honours).
                      </p>
                      <p>
                      Please note that: Programme structures may be subject to change and modules may be offered in any of the semesters in an academic year
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="03b">
                    <Accordion.Header>Fees structure</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Click to view
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
                      This degree programme is designed to give students employable skills that they can use within the growing field of e-business.
                       Students will gain skills in research, communication, problem solving, contemporary business strategies, planning, management, 
                       supervision, and critical thinking. In addition, they will gain proficiencies of web page design, networks administration, databases, 
                       systems analysts, and technical support. Hence, this programme provides a synthesis of business and information technology to 
                       evaluate instantaneously disseminated information via online resources, intranets, and various networks of information for the purposes of 
                       improved business communication.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="02c">
                    <Accordion.Header> Programme Structure</Accordion.Header>
                    <Accordion.Body>
                      <p>
                      Students are required to pass 8 modules totalling 120 credits in each year (level). 
                      In total students must satisfactorily complete 480 credits (32 modules) with a combination of core and 
                      specialisation modules to be eligible for the award of the BA (Honours).
                      </p>
                      <p>
                      Please note that: Programme structures may be subject to change and modules may be offered in any of the semesters in an academic year
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="03c">
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
            <Row>
              <Col xl={12}>
                <div className="ug-pgm-admin-hd">
                  <h3>
                    <span>BA (Hons) in Finance</span>
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
                      The BA (Hons) in Finance is designed for students who would like to be players in global financial markets, 
                      designing financial management strategies or providing financial advice to governments, companies or individuals. 
                      Finance students will have the opportunity to learn the principles and applications of financial analysis, management, 
                      securities analysis, portfolio management, risk management, international finance, and strategy.
</p>

 <p>The graduate of this degree programme will be equipped with a broad range of relevant skills, including 'logical' thinking, 
  problem solving and numerical skills such as use of statistical techniques used in the analysis of business problems. 
  They will also be equipped with the generic skills of information technology, communication, creativity, logical reasoning, critical analysis and good judgment. 
  They will be able to make right decisions in selecting projects and financial assets under alternatives with the goal of maximizing the value of the resources being managed.
</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="02c">
                    <Accordion.Header> Programme Structure</Accordion.Header>
                    <Accordion.Body>
                      <p>
                      Students are required to pass 8 modules totalling 120 credits in each year (level). In total students must satisfactorily complete 480 credits (32 modules) 
                      with a combination of core and 
                      specialisation modules to be eligible for the award of the BA (Honours).
                      </p>
                      <p>
                      Programme structures may be subject to change and modules may be offered in any of the semesters in an academic year
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="03c">
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
            <Row>
              <Col xl={12}>
                <div className="ug-pgm-admin-hd">
                  <h3>
                    <span>BA (Hons) in Islamic Banking and Finance</span>
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
                     The BA (Hons) in Islamic Banking and Finance programme prepares students for careers in the Islamic Banking and Finance industry. The curriculum structure is designed to provide an opportunity to students to gain appropriate knowledge of Islamic Banking and Finance.</p>
                     <p>The programme improves students’ analytical thinking skills and fosters creativity through which they develop effective strategies for core and contemporary issues related to Islamic Banking and Finance in both local and international contexts. The programme further enhances the student’s ability to apply theoretical knowledge to analyse and evaluate real-life Islamic Banking and Finance problems, and recommend sustainable strategies.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="02c">
                    <Accordion.Header> Programme Structure</Accordion.Header>
                    <Accordion.Body>
                      <p>
                     Students are required to pass eight modules totalling 120 credits in each year (level). In total students must satisfactorily complete 480 credits (32 modules) with a combination of core and specialisation modules to be eligible for the award of the BA (Honours).
                      </p>
                      <p>
                     Programme structures may be subject to change and modules may be offered in any of the semesters in an academic year
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="03c">
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
