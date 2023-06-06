import { Tab, Nav, Form, FloatingLabel, Button } from 'react-bootstrap';
import Slider from 'react-slick';

// slick carousel import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Link from 'next/link';

export default function UGModalMBA() {
  // Sports slider
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="ug-modal-cover-sec">
      <section className="ug-pgm-slider-sec bg-dk-blue">
        <div className="sec-bg-graphics">
          <div className="social-shape"></div>
        </div>
        <section className="pgm-co-video-sec pt-7">
          <div className="pgm-co-vid-cover">
            <div className="pgm-co-vid-hd">
              <h3>
                <span>ACCA</span>
              </h3>
            </div>
            <div className="pgm-co-video">
              <video controls>
                <source
                  src="http://smoinoman.com/muc-videos/Mr-Armstronge-Jeyakumar.mp4"
                  type="video/mp4"
                />
                <source
                  src="http://smoinoman.com/muc-videos/Mr-Armstronge-Jeyakumar.webm"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </section>
      </section>

      <section className="pgm-co-caro-sec px-5 px-lg-6 py-4 py-lg-5 py-xl-6">
        <div className="pgm-co-carousel">
          <Slider className="slider" {...settings}>
            <div>
              <div className="pgm-co-caro-item">
                <h4>Faculty</h4>
                <p>
                  Lead Faculty from University of Bedfordshire, U.K., Tutorial
                  support by Faculty members of Majan College (Univ. College)
                </p>
              </div>
            </div>
            <div>
              <div className="pgm-co-caro-item">
                <h4>Award</h4>
                <p>University of Bedfordshire, U.K.</p>
              </div>
            </div>
            <div>
              <div className="pgm-co-caro-item">
                <h4>Delivery Mode</h4>
                <p>Full time and Part time</p>
              </div>
            </div>
            <div>
              <div className="pgm-co-caro-item">
                <h4>Classes Commence</h4>
                <p>July and January</p>
              </div>
            </div>
            <div>
              <div className="pgm-co-caro-item">
                <h4>Duration</h4>
                <p>4 Years / 4 Semesters</p>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section className="pgm-co-tab-sec px-5 px-lg-6 py-4 py-lg-5 py-xl-6">
        <div className="pgm-co-tb-cover">
          <Tab.Container id="tab-course" defaultActiveKey="course-tab-01">
            <Nav className="pgm-co-tb-nav">
              <Nav.Item>
                <Nav.Link eventKey="course-tab-01">Overview</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="course-tab-02">Entry Requirements</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="course-tab-03">What will I study?</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="course-tab-04">Future Careers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="course-tab-05">How to Apply</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="course-tab-06">Fee Structure</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="course-tab-01">
                <div className="co-tb-overview">
                  <div className="co-tab-hd">
                    <h4>Programme overview</h4>
                    <p className="pb-xl-4">
                      ACCA (the Association of Chartered Certified Accountants)
                      is the global body for professional accountants. Their
                      aims are to offer business-relevant, first-choice
                      qualifications to people of application, ability and
                      ambition from around the world who seek a rewarding career
                      in accountancy, finance and management. According to an
                      independent survey conducted among 1,300 employers in 20
                      countries, ACCA has been rated as the leading global
                      professional accountancy body in reputation. ACCA has a
                      global network of 83 offices and centres, 147,000 members
                      and 424,000 students around the world. In the Middle East
                      there is a gap in demand and supply of ACCA professionals,
                      making it an ideal choice for the students who wish to
                      make a career in accountancy in this part of the world.
                    </p>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="course-tab-02">
                <div className="co-tb-overview">
                  <div className="co-tab-hd">
                    <h4>Entry Requirements</h4>
                    <p>Coming Soon</p>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="course-tab-03">
                <div className="co-tab-hd">
                  <h4>What will I study</h4>
                </div>
                <p></p>
              </Tab.Pane>
              <Tab.Pane eventKey="course-tab-04">
                <div className="co-tab-hd">
                  <h4>Future Careers</h4>
                </div>
                <div className="co-tb-opertunity">
                  <figure>
                    <img src="images/course-opertunity.jpg" alt="Icon" />
                  </figure>
                  <div className="co-tb-oper-body">
                    <p>Coming Soon</p>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="course-tab-05">
                <div className="co-tab-hd">
                  <h4>How to Apply</h4>
                </div>
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
                          <Form.Control
                            type="email"
                            placeholder="First Name*	"
                          />
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
              </Tab.Pane>
              <Tab.Pane eventKey="course-tab-06">
                <div className="co-tab-hd">
                  <h4>Fees & Scholarships</h4>
                </div>
                <div className="co-tb-fees">
                  <figure>
                    <img src="images/course-fees.jpg" alt="Icon" />
                  </figure>
                  <div className="co-tb-fees-body">
                    <p>Total tuition fees Per Year</p>
                    <div className="fees-amount">
                      <span>12,346 OMR</span>
                    </div>
                    <p>
                      For the complete details of the fees, please refer to the{' '}
                      <Link href="#">Fee Structure</Link>
                    </p>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
    </section>
  );
}
