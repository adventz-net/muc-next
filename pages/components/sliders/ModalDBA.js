import React, { useRef, useState } from 'react';
import { Tab, Nav, Form, FloatingLabel, Button } from 'react-bootstrap';
import Slider from 'react-slick';

// slick carousel import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Link from 'next/link';

import { PlayFill, Pause } from 'react-bootstrap-icons';

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

  // Video
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonClass, setButtonClass] = useState('btn-video');

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
      setButtonClass('btn-video btn-pause');
    } else {
      video.pause();
      setIsPlaying(false);
      setButtonClass('btn-video btn-play');
    }
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
                  Doctor of Business <br />
                  Administration (DBA)
                </span>
              </h3>
            </div>
            <div className="pgm-co-video">
              <video
                ref={videoRef}
                src="videos/story.mp4"
                poster="images/mba-video-poster.jpg"
              />
              <button className={buttonClass} onClick={togglePlay}>
                {isPlaying ? <Pause /> : <PlayFill />}
              </button>
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
                <p>
                  Part - Time in a blended learning format (4 Weekends in a
                  Semester)
                </p>
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
                <p>2 Years / 4 Semesters</p>
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
                    <h4>Course Overview</h4>
                    <p className="pb-xl-4">
                      The Executive MBA offers you an Executive perspective; you
                      will become knowledgeable about the important concepts of
                      key business disciplines, integrating this knowledge with
                      your experience. You will have opportunities to design
                      projects, manage messy problems and be creative in solving
                      real problems you face at work, which enriches your
                      education and has a positive impact on your job
                      performance. You will develop leadership skills to support
                      your career growth and gain confidence to prepare you to
                      take on executive responsibilities. The course also offers
                      a platform for building your professional networks.
                    </p>
                    <h4>Course Structure</h4>
                    <p>
                      8 Units of 15 Credits each + 2 Project of 30 Credits =
                      Total 180 Credits
                    </p>
                  </div>
                  <div className="co-structure-list">
                    <div className="co-structure-item">
                      <div className="icon">
                        <img src="images/acc-pgm-dt-icon.png" alt="Icon" />
                      </div>
                      <h4>Semester 1</h4>
                      <p>
                        Accounting for Leaders, Leading and Managing People &
                        Leadership Project 1
                      </p>
                    </div>
                    <div className="co-structure-item">
                      <div className="icon">
                        <img src="images/acc-pgm-dt-icon.png" alt="Icon" />
                      </div>
                      <h4>Semester 2</h4>
                      <p>
                        Mobilising Creativity and Innovation, Marketing Products
                        and Services & Leadership Project 2
                      </p>
                    </div>
                    <div className="co-structure-item">
                      <div className="icon">
                        <img src="images/acc-pgm-dt-icon.png" alt="Icon" />
                      </div>
                      <h4>Semester 3</h4>
                      <p>
                        Strategy, Operations and Project Management & Integrated
                        Management Project 1
                      </p>
                    </div>
                    <div className="co-structure-item">
                      <div className="icon">
                        <img src="images/acc-pgm-dt-icon.png" alt="Icon" />
                      </div>
                      <p>
                        Entrepreneurship and Small Business Management, Thriving
                        in Competitive Global Context & Integrated Management
                        Project 2
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="course-tab-02">
                <div className="co-tab-hd">
                  <h4>Entry Criteria</h4>
                </div>
                <div className="co-entry-list">
                  <div className="co-entry-item">
                    <h4>25 years & above </h4>
                    <p>
                      With Bachelors, and at least, 2 years of work experience
                    </p>
                  </div>
                  <div className="co-entry-item">
                    <div className="options">Or</div>
                  </div>
                  <div className="co-entry-item">
                    <h4>25 years & above</h4>
                    <p>
                      With 2 years Higher National Diploma, any 4 short training
                      courses and 6 years of work experience.
                    </p>
                  </div>
                  <div className="co-entry-item">
                    <p>Applicants must have</p>
                    <h4>IELTS 6.0 or equivalent</h4>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="course-tab-03">
                <div className="co-tab-hd">
                  <h4>What will I study</h4>
                </div>
                <div className="co-structure-table">
                  <div className="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th colSpan={5}>Course Structure</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={5}>
                            The Units which make up the course are:
                          </td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th>Unit Code</th>
                          <th>Level</th>
                          <th>Credits</th>
                          <th>Unit Name</th>
                          <th>Core or Option</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>SHR012-6</td>
                          <td>7</td>
                          <td>15</td>
                          <td>Leading and Managing People</td>
                          <td>Core</td>
                        </tr>
                        <tr>
                          <td>SHR036-6</td>
                          <td>7</td>
                          <td>15</td>
                          <td>Accounting for Leaders</td>
                          <td>Core</td>
                        </tr>
                        <tr>
                          <td>SHR037-6</td>
                          <td>7</td>
                          <td>15</td>
                          <td>Marketing Management</td>
                          <td>Core</td>
                        </tr>
                        <tr>
                          <td>SHR044-6</td>
                          <td>7</td>
                          <td>15</td>
                          <td>Mobilising Creativity and Innovation </td>
                          <td>Core</td>
                        </tr>
                        <tr>
                          <td>SHR011-6 </td>
                          <td>7</td>
                          <td>30</td>
                          <td>Leadership Project</td>
                          <td>Core</td>
                        </tr>
                        <tr>
                          <td>SHR019-6</td>
                          <td>7</td>
                          <td>15</td>
                          <td>Strategy</td>
                          <td>Core</td>
                        </tr>
                        <tr>
                          <td>SHR039-6</td>
                          <td>7</td>
                          <td>15</td>
                          <td>Operations and Project Management</td>
                          <td>Core</td>
                        </tr>
                        <tr>
                          <td>MAR015-6</td>
                          <td>7</td>
                          <td>15</td>
                          <td>
                            Entrepreneurship and Small Business Management
                          </td>
                          <td>Core</td>
                        </tr>
                        <tr>
                          <td>MAR023-6</td>
                          <td>7</td>
                          <td>15</td>
                          <td>Thriving in Competitive Global Context</td>
                          <td>Core</td>
                        </tr>
                        <tr>
                          <td>SHR043-6</td>
                          <td>7</td>
                          <td>30</td>
                          <td>Integrated Management Project</td>
                          <td>Core</td>
                        </tr>
                        <tr>
                          <td>SHR053-6</td>
                          <td>7</td>
                          <td>0</td>
                          <td>Personal and Professional Development </td>
                          <td>Core</td>
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
                <div className="co-tb-future">
                  <figure>
                    <img src="images/course-future.jpg" alt="Icon" />
                  </figure>
                  <div className="co-tb-fut-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer euismod pharetra nunc, eget laoreet purus pretium
                      vel. Nunc massa magna, rhoncus ornare auctor a, iaculis in
                      sem. Duis fermentum, lectus vel rutrum rhoncus, metus
                      libero dapibus sapien, sit amet laoreet erat nisl non
                      ipsum. Nunc rutrum massa et felis commodo consectetur.
                      Donec ex tortor, vehicula at nisi placerat, cursus
                      efficitur ligula. In aliquet, dolor vel feugiat feugiat,
                      orci nunc porttitor tellus, sit amet suscipit nisi orci ut
                      orci.
                    </p>
                    <p>
                      The Executive MBA offers you an Executive perspective; you
                      will become knowledgeable about the important concepts of
                      key business disciplines, integrating this knowledge with
                      your experience. You will have opportunities to design
                      projects, manage messy problems and be creative in solving
                      real problems you face at work, which enriches your
                      education and has a positive impact on your job
                      performance. You will develop leadership skills to support
                      your career growth and gain confidence to prepare you to
                      take on executive responsibilities. The course also offers
                      a platform for building your professional networks.
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
                  <h4>Fees & Scholarships</h4>
                </div>
                <div className="co-tb-fees">
                  <figure>
                    <img src="images/course-fees.jpg" alt="Icon" />
                  </figure>
                  <div className="co-tb-fees-body">
                    <p>Total tuition fees Per Year</p>
                    <div className="fees-amount">
                      <span>6,636 OMR</span>
                    </div>
                    <p>
                      For the complete details of the fees, please refer to the{' '}
                      <Link href="#">Fees Structure</Link>
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
