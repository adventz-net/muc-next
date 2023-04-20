import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import Slider from "react-slick";

// slick carousel import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WelcomeSlider() {
  // Partners slider
  const partnersettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        partnersettings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        partnersettings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        partnersettings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Achievements slider
  const [achiveSliderMain, setachiveSliderMain] = useState(0);
  const [achiveSliderNav, setachiveSliderNav] = useState(0);

  const achiveSliderMainRef = useRef();
  const achiveSliderNavRef = useRef();

  const handleSliderOneBeforeChange = (oldIndex, newIndex) => {
    setachiveSliderMain(newIndex);
    achiveSliderNavRef.current.slickGoTo(newIndex);
  };

  const handleSliderTwoBeforeChange = (oldIndex, newIndex) => {
    setachiveSliderNav(newIndex);
    achiveSliderMainRef.current.slickGoTo(newIndex);
  };

  const settings01 = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    variableWidth: true,
    focusOnSelect: true,
    arrows: false,
    beforeChange: handleSliderTwoBeforeChange,
  };

  const settings02 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: handleSliderOneBeforeChange,
  };
  return (
    <section className="welcome-slider-sec">
      <div className="wel-slider-bg-graphics">
        <div className="social-shape"></div>
        <div className="slider-d-shape"></div>
      </div>

      <section className="wel-slider-sec">
        <div className="wel-slider-cover">
          <div className="wel-slider">
            <img src="images/welcome-slider-01.jpg" alt="Image" />
          </div>
          <div className="down-arrow">
            <img src="images/arrow-down.png" alt="Down Arrow" />
          </div>
        </div>
      </section>

      <section className="wel-dean-sec">
        <div className="wel-dean-cover">
          <Row className="d-flex align-items-end">
            <Col xs={12} lg={6}>
              <div className="dean-img">
                <img src="images/maha-kobeil-img.png" alt="Image" />
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="dean-content">
                <div className="dean-con-hd">
                  <div className="dean-name">Dr. Maha Kobeil</div>
                  <div className="dean-desig">
                    The Dean <br />
                    Majan University College
                  </div>
                </div>
                <div className="dean-con-body">
                  <h4>
                    It is my pleasure to welcome you to Majan University College
                    (MUC), the first private higher education institution
                    established in Oman, and an institution that, over almost
                    three decades of operation, has gained a well-deserved
                    reputation for maintaining high academic standards.
                  </h4>
                  <p>
                    At Majan, we aim to produce graduates with the
                    self-confidence, skills, knowledge and values that will
                    enable them to pursue their chosen career path with success;
                    to be active and constructive citizens; and to continue
                    learning and developing as they grow older.
                  </p>
                  <p>
                    MUC has for many years believed in blended learning, because
                    when students spend significant amounts of time online,
                    carrying out tasks or searching for information, they
                    acquire skills that are greatly appreciated in the job
                    market.Indeed, the experience of the past two years, during
                    the Covid pandemic, has shown us still more clearly that a
                    combination of online study and face to face learning,
                    facilitated by experienced and empathetic lecturers, is the
                    ideal way to nurture our students. Through a mix of studying
                    independently and guided tuition from our staff, Majan's
                    graduates emerge with strong 21st century skills in such key
                    areas as information literacy, critical thinking, and
                    collaborative working.
                  </p>
                  <p>
                    In recent times, the College has invested heavily in
                    facilities and IT infrastructure,with the most visible
                    example of this being the six-storey Al Maha Building, with
                    its impressive auditorium and well-equipped classrooms,
                    offices, and recreational spaces. Yet, in all honesty, it is
                    not the buildings and infrastructure that provide the key to
                    Majan University College's continuing success; rather, it is
                    the warm relationship between the students and all the
                    College's staff, whether academic or non-academic.
                  </p>
                  <h4>
                    To all prospective students I say this: choose the Majan
                    experience and join the Majan family. You will never regret
                    your decision.
                  </h4>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="wel-vison-sec">
        <div className="vision-item-cover">
          <Container fluid className="px-0">
            <Row className="g-0">
              <Col xs={12} md={6} lg={4}>
                <div className="vision-item">
                  <figure>
                    <img src="images/vision-img-01.png" alt="Image" />
                  </figure>
                  <div className="vision-it-body">
                    <h4>Vision</h4>
                    <p>
                      Recognising potential, engaging minds, transforming
                      futures.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className="vision-item bg-mission">
                  <figure>
                    <img src="images/vision-img-02.png" alt="Image" />
                  </figure>
                  <div className="vision-it-body">
                    <h4>Mission</h4>
                    <p>
                      To provide an innovative learning environment that
                      supports students in reaching their full potential in a
                      changing world.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className="vision-item bg-values">
                  <figure>
                    <img src="images/vision-img-03.png" alt="Image" />
                  </figure>
                  <div className="vision-it-body">
                    <h4>Our Values</h4>
                    <ul>
                      <li>Excellence</li>
                      <li>Integrity</li>
                      <li>Creativity</li>
                      <li>Teamwork</li>
                      <li>Inclusivity</li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="abt-majan-sec">
        <div className="abt-majan-cover">
          <Container fluid className="px-0">
            <Row className="g-0">
              <Col xs={12} lg={6}>
                <div className="abt-maj-content">
                  <h3>ABOUT MAJAN</h3>
                  <p>
                    Established in 1995 as the first private sector college in
                    Oman, Majan University College (MUC) has developed rapidly
                    to become one of the most trusted higher education
                    institutions. Today, it has 2,600 students, delivers eight
                    undergraduate degrees and also offers four Postgraduate
                    degrees. In December 2017 it became the first higher
                    education institution to receive accreditation from the Oman
                    Academic Accreditation Authority (OAAA) - illustrating its
                    prominence in the higher education sector.
                  </p>
                  <p>
                    MUC is an accredited college of the University of
                    Bedfordshire, UK (UoB). A bilateral agreement allows Majan
                    to design, develop, review and update the curriculum for its
                    undergraduate programmes. All curricula, assessments and
                    teaching are subject to rigorous quality assurance measures,
                    overseen by the University of Bedfordshire, which also
                    issues the academic certificates. Currently, the College
                    offers undergraduate programmes in
                  </p>
                  <Accordion className="abt-maj-accordion">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Business Administration (with 8 pathways){" "}
                        <span className="icon"></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Excellence</li>
                          <li>Integrity</li>
                          <li>Creativity</li>
                          <li>Teamwork</li>
                          <li>Inclusivity</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Finance</Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Accounting</Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Marketing</Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        Islamic Banking and Finance
                      </Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        Computer & Internet Applications
                      </Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                      <Accordion.Header>Networking</Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                      <Accordion.Header>
                        Computing (with 3 pathways){" "}
                        <span className="icon"></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Excellence</li>
                          <li>Integrity</li>
                          <li>Creativity</li>
                          <li>Teamwork</li>
                          <li>Inclusivity</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                      <Accordion.Header>English Language</Accordion.Header>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className="abt-maj-img">
                  <img src="images/abt-maj-img.jpg" alt="Image" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="attribute-sec">
        <div className="att-bg-graphics">
          <div className="att-shape"></div>
        </div>
        <div className="attribute-cover">
          <div className="container-fluid px-0">
            <div className="row g-0">
              <div className="col-12 col-lg-6">
                <div className="credo-cover">
                  <div className="credo-hd">
                    <h4>The Majan University College Teaching CREDO</h4>
                    <p>
                      Credo (noun): a statement of the beliefs which guide
                      someone's actions.From the Latin for "I believe".
                    </p>
                    <p>
                      The MUC teaching credo encapsulates five key ingredients
                      which we believe to be important in successful teaching
                      and learning
                    </p>
                  </div>
                  <figure>
                    <img src="images/credo-img.jpg" alt="Image" />
                  </figure>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="attr-cover">
                  <div className="attr-hd">
                    <h4>
                      Graduate <br />
                      Attributes
                    </h4>
                  </div>
                  <figure>
                    <img src="images/graduate-attr-img.png" alt="Image" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="partners-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="partners-caro-hd">
                <h3>Our Partners</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Slider className="slider partner-carousel" {...partnersettings}>
                <div>
                  <div className="partner-item">
                    <figure>
                      <img src="images/partner-logo-01.png" alt="Partner" />
                    </figure>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="partner-item">
                      <figure>
                        <img src="images/partner-logo-02.png" alt="Partner" />
                      </figure>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="partner-item">
                    <figure>
                      <img src="images/partner-logo-03.png" alt="Partner" />
                    </figure>
                  </div>
                </div>
                <div>
                  <div className="partner-item">
                    <figure>
                      <img src="images/partner-logo-04.png" alt="Partner" />
                    </figure>
                  </div>
                </div>
                <div>
                  <div className="partner-item">
                    <figure>
                      <img src="images/partner-logo-05.png" alt="Partner" />
                    </figure>
                  </div>
                </div>
                <div>
                  <div className="partner-item">
                    <figure>
                      <img src="images/partner-logo-06.png" alt="Partner" />
                    </figure>
                  </div>
                </div>
                <div>
                  <div className="partner-item">
                    <figure>
                      <img src="images/partner-logo-07.png" alt="Partner" />
                    </figure>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="achievement-sec">
        <div className="achievement-cover">
          <div className="row g-0">
            <div className="col-12 col-ach-caro">
              <div className="achievement-caro-cover">
                <div className="achievement-hd">
                  <h3>Achievements</h3>
                </div>
                <Slider
                  className="slider achievement-caro-nav"
                  {...settings01}
                  ref={achiveSliderNavRef}
                >
                  <div>
                    <a className="ach-nav-item">2023</a>
                  </div>
                  <div>
                    <a className="ach-nav-item">2022</a>
                  </div>
                  <div>
                    <a className="ach-nav-item">2021</a>
                  </div>
                  <div>
                    <a className="ach-nav-item">2020</a>
                  </div>
                  <div>
                    <a className="ach-nav-item">2019</a>
                  </div>
                  <div>
                    <a className="ach-nav-item">2018</a>
                  </div>
                  <div>
                    <a className="ach-nav-item">2017</a>
                  </div>
                  <div>
                    <a className="ach-nav-item">2016</a>
                  </div>
                  <div>
                    <a className="ach-nav-item">2015</a>
                  </div>
                  <div>
                    <a className="ach-nav-item">2014</a>
                  </div>
                  <div>
                    <a className="ach-nav-item">2013</a>
                  </div>
                </Slider>
                <Slider
                  className="slider achievement-caro-con"
                  {...settings02}
                  ref={achiveSliderMainRef}
                >
                  <div>
                    <div className="ach-caro-item">
                      <figure>
                        <img src="images/achievement-img-01.png" alt="Image" />
                      </figure>
                      <div className="ach-caro-it-body">
                        <div className="date">2023</div>
                        <h4>
                          Top Omani Brand' in the 'Higher Education' category -
                          15th of March, 2023
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="ach-caro-item">
                      <figure>
                        <img src="images/achievement-img-01.png" alt="Image" />
                      </figure>
                      <div className="ach-caro-it-body">
                        <div className="date">2023</div>
                        <h4>
                          Top Omani Brand' in the 'Higher Education' category -
                          15th of March, 2023
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="ach-caro-item">
                      <figure>
                        <img src="images/achievement-img-01.png" alt="Image" />
                      </figure>
                      <div className="ach-caro-it-body">
                        <div className="date">2023</div>
                        <h4>
                          Top Omani Brand' in the 'Higher Education' category -
                          15th of March, 2023
                        </h4>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-12 col-ach-img">
              <div className="achievement-img">
                <img src="images/achievement-img.jpg" alt="Image" />
                <div className="achieve-img-shape">
                  <svg height={0} width={0}>
                    <defs />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wel-video-sec">
        <div className="wel-vid-bg-grphics">
          <div className="vid-shape shape-01"></div>
          <div className="vid-shape shape-02"></div>
          <div className="vid-shape shape-03"></div>
        </div>
        <div className="wel-video-cover">
          <div className="wel-video">
            <video id="storyVideo" loop poster="images/wel-video-poster.jpg">
              <source src="videos/story.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="wel-video-body">
            <div className="wel-vid-play">
              <div className="buttons">
                <button className="btn btnPlay">
                  <img src="images/play-icon.svg" alt="Pause" />
                </button>
                <button className="btn btnPause">
                  <img src="images/pause-icon.svg" alt="Pause" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
