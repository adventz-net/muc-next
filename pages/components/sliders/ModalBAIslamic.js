import { Tab, Nav, Form, FloatingLabel, Button } from 'react-bootstrap';
import Slider from 'react-slick';

// slick carousel import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Link from 'next/link';

export default function UGModalMBA() {
  // Program Course Carousel
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
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
                <span>
                  BA (Hons) in <br />
                  Islamic Banking and Finance
                </span>
              </h3>
            </div>
            <div className="pgm-co-video">
              <video controls>
                <source
                  src="http://smoinoman.com/muc-videos/Dr-Ammar-Al-Balushi.mp4"
                  type="video/mp4"
                />
                <source
                  src="http://smoinoman.com/muc-videos/Dr-Ammar-Al-Balushi.webm"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </section>
      </section>

      <section className="pgm-co-caro-sec px-4 px-lg-6 py-4 py-lg-5 py-xl-6">
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
                <p>September and February</p>
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

      <section className="pgm-co-tab-sec px-4 px-lg-6 py-4 py-lg-5 py-xl-6">
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
                      The BA (Hons) in Islamic Banking and Finance programme
                      prepares students for careers in the Islamic Banking and
                      Finance industry. The curriculum structure is designed to
                      provide an opportunity to students to gain appropriate
                      knowledge of Islamic Banking and Finance. The programme
                      improves students’ analytical thinking skills and fosters
                      creativity through which they develop effective strategies
                      for core and contemporary issues related to Islamic
                      Banking and Finance in both local and international
                      contexts. The programme further enhances the student’s
                      ability to apply theoretical knowledge to analyse and
                      evaluate real-life Islamic Banking and Finance problems,
                      and recommend sustainable strategies
                    </p>
                    <h4>Programme Structure</h4>

                    <p>
                      Students are required to pass eight modules totalling 120
                      credits in each year (level). In total students must
                      satisfactorily complete 480 credits (32 modules) with a
                      combination of core and specialisation modules to be
                      eligible for the award of the BA (Honours).
                    </p>
                    <p>
                      Programme structures may be subject to change and modules
                      may be offered in any of the semesters in an academic year
                    </p>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="course-tab-02">
                <div className="co-tb-overview">
                  <div className="co-tab-hd">
                    <h4>Entry Requirements</h4>
                    <p>Coming soon</p>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="course-tab-03">
                <div className="co-tab-hd">
                  <h4>What will I study</h4>
                </div>
                <div className="co-structure-table">
                  <div className="table-responsive">
                    <h4>Modules in First Year (Level 3)</h4>
                    <table class="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th className="text-center">Module Name</th>
                          <th>Credits</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            Omani Culture & Civilization (Non-Arabic Speakers)
                          </td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Arabic Language and Society (Arabic Speakers)</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>English Vocabulary in Use</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Fundamentals of Business Management</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Fundamentals of ICT </td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>English for General Reading and Writing</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Professional Communication Skills in English</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>Business & Entrepreneurship </td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>Logical and Problem Solving Skills </td>
                          <td> </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td className="text-center">Total Credit</td>
                          <td>120</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="co-structure-table">
                  <div className="table-responsive">
                    <h4>Modules in Second Year (Level 4)</h4>
                    <table class="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th className="text-center">Module Name</th>
                          <th>Credits</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Principles of Management</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Principles of Islamic Economics </td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Business Mathematics and Statistics</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Principles of Islamic Banking</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Introduction to Financial Accounting</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Integrated Language Skills</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Academic Reading and Writing</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>Shariah Law Fiqh & Usul Al Fiqh</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td className="text-center">Total Credit</td>
                          <td>120</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
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
                    <p>
                      Opportunities are vast once you complete your Islamic
                      Banking and Finance qualification. Most graduates from
                      Majan University College get employed in Islamic Financial
                      Institutions such as Shariah or Islamic Banks and Islamic
                      Insurance Companies offering Takaful. The academic
                      qualification also opens doors to our graduates working in
                      Institutions that offer Islamic Investments and Wealth
                      Management. At times, conventional banks that offer
                      Islamic Divisions may also be looking for graduates with
                      specialization in Islamic Banking and Finance.
                    </p>
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
                  <h4>Fee & Scholarships</h4>
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
