import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

// slick carousel import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CampusSlider() {
  // Sports slider
  const sportsettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1080,
        sportsettings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        sportsettings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        sportsettings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        sportsettings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="campus-slider-sec">
      <div className="sec-bg-graphics">
        <div className="social-shape"></div>
        <div className="slider-d-shape"></div>
      </div>

      <section className="sec-con-cover">
        <section className="campus-into-sec">
          <Container fluid className="px-0">
            <Row className="gx-0">
              <Col className="col-12 col-cam-con">
                <div className="campus-intro">
                  <div className="cam-intro-scroll">
                    <h3>Campus life</h3>
                    <h5>
                      <span>Why Study at Majan?</span>
                    </h5>
                    <p>Majan University College is:</p>

                    <ul>
                      <li>
                        The first private college in Oman and maintains its
                        dynamism by offering high quality education comparable
                        to international standards
                      </li>
                      <li>
                        A leader in enhancing a student-centered learning
                        approach with a focus on development of employability
                        skills
                      </li>
                      <li>
                        Provides you with a unique learning environment with
                        both physical and online learning resources at your
                        disposal
                      </li>
                      <li>
                        Offers you the expertise of highly qualified academic
                        staff from around the world
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col className="col-12 col-cam-img">
                <div className="campus-intro-img">
                  <img src="images/campus-slider-img.jpg" alt="Image" />
                  <div className="achieve-img-shape">
                    <svg height={0} width={0}>
                      <defs />
                    </svg>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="cam-video-sec pt-5 pt-xl-6 px-5 px-xl-6 pb-5 pb-xl-6">
          <div className="cam-video-cover">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/4rWBqkKCBwI"
                title="Our International Student Community"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="cam-photo-sec">
          <Container fluid className="px-0">
            <Row className="gx-0">
              <Col className="col-12 col-gal-lg">
                <div className="cam-gal-lg-item">
                  <figure>
                    <img
                      src="images/cam-gallery-thumb-lg-01.jpg"
                      alt="Gallery"
                    />
                  </figure>
                </div>
              </Col>
              <Col className="col-12 col-gal-sm">
                <div className="cam-gal-sm-item">
                  <figure>
                    <img
                      src="images/cam-gallery-thumb-sm-01.jpg"
                      alt="Gallery"
                    />
                  </figure>
                </div>
                <div className="cam-gal-sm-item">
                  <figure>
                    <img
                      src="images/cam-gallery-thumb-sm-02.jpg"
                      alt="Gallery"
                    />
                  </figure>
                </div>
              </Col>
              <Col className="col-12 col-gal-lg">
                <div className="cam-gal-lg-item">
                  <figure>
                    <img
                      src="images/cam-gallery-thumb-lg-01.jpg"
                      alt="Gallery"
                    />
                  </figure>
                </div>
              </Col>
              <Col className="col-12 col-gal-sm">
                <div className="cam-gal-sm-item">
                  <figure>
                    <img
                      src="images/cam-gallery-thumb-sm-03.jpg"
                      alt="Gallery"
                    />
                  </figure>
                </div>
                <div className="cam-gal-sm-item">
                  <figure>
                    <img
                      src="images/cam-gallery-thumb-sm-04.jpg"
                      alt="Gallery"
                    />
                  </figure>
                </div>
              </Col>
              <Col className="col-12 col-gal-sm">
                <div className="cam-gal-sm-item">
                  <figure>
                    <img
                      src="images/cam-gallery-thumb-sm-05.jpg"
                      alt="Gallery"
                    />
                  </figure>
                </div>
                <div className="cam-gal-sm-item">
                  <figure>
                    <img
                      src="images/cam-gallery-thumb-sm-06.jpg"
                      alt="Gallery"
                    />
                  </figure>
                </div>
              </Col>
              <Col className="col-12 col-gal-lg">
                <div className="cam-gal-lg-item">
                  <figure>
                    <img
                      src="images/cam-gallery-thumb-lg-03.jpg"
                      alt="Gallery"
                    />
                  </figure>
                </div>
              </Col>
              <Col className="col-12 col-gal-lg">
                <div className="cam-gal-lg-item">
                  <figure>
                    <img
                      src="images/cam-gallery-thumb-lg-04.jpg"
                      alt="Gallery"
                    />
                  </figure>
                </div>
              </Col>
              <Col className="col-12 col-gal-lg">
                <div className="cam-gal-lg-item">
                  <figure>
                    <img
                      src="images/cam-gallery-thumb-lg-05.jpg"
                      alt="Gallery"
                    />
                  </figure>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="cam-fitness-sec">
          <div className="cam-fitness-cover">
            <div className="cam-d-shape"></div>
            <div className="cam-fitness-body">
              <h3>SPORTs AND FITNESS</h3>
              <h5>
                The Students Services Centre values sport as a positive
                contributor towards the cultural, economic and social
                development of Oman.
              </h5>
              <p>
                Majan University College offers a wide variety of opportunities
                for all students to participate in sport and take advantage of
                the facilities available on the campus under the supervision of
                our expert Coach.
              </p>
            </div>
          </div>
        </section>

        <section className="cam-sport-sec pt-5 pt-xl-6 px-5 px-xl-6 pb-5 pb-xl-6">
          <Container fluid>
            <Row>
              <Col xs={12}>
                <Slider className="slider sport-carousel" {...sportsettings}>
                  <div>
                    <div className="sport-item">
                      <figure>
                        <i>
                          <img src="images/sport-icon-01.png" alt="Partner" />
                          <img
                            className="hover"
                            src="images/sport-icon-hover-01.png"
                            alt="Partner"
                          />
                        </i>
                      </figure>
                      <div className="sport-it-body">
                        <h4>Futsal</h4>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="sport-item">
                        <figure>
                          <i>
                            <img src="images/sport-icon-02.png" alt="Partner" />
                            <img
                              className="hover"
                              src="images/sport-icon-hover-02.png"
                              alt="Partner"
                            />
                          </i>
                        </figure>
                        <div className="sport-it-body">
                          <h4>Table Tennis</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="sport-item">
                      <figure>
                        <i>
                          <img src="images/sport-icon-03.png" alt="Partner" />
                          <img
                            className="hover"
                            src="images/sport-icon-hover-03.png"
                            alt="Partner"
                          />
                        </i>
                      </figure>
                      <div className="sport-it-body">
                        <h4>Football</h4>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="sport-item">
                      <figure>
                        <i>
                          <img src="images/sport-icon-04.png" alt="Partner" />
                          <img
                            className="hover"
                            src="images/sport-icon-hover-04.png"
                            alt="Partner"
                          />
                        </i>
                      </figure>
                      <div className="sport-it-body">
                        <h4>Volleyball</h4>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="sport-item">
                      <figure>
                        <i>
                          <img src="images/sport-icon-05.png" alt="Partner" />
                          <img
                            className="hover"
                            src="images/sport-icon-hover-05.png"
                            alt="Partner"
                          />
                        </i>
                      </figure>
                      <div className="sport-it-body">
                        <h4>Chess</h4>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="sport-item">
                      <figure>
                        <i>
                          <img src="images/sport-icon-06.png" alt="Partner" />
                          <img
                            className="hover"
                            src="images/sport-icon-hover-06.png"
                            alt="Partner"
                          />
                        </i>
                      </figure>
                      <div className="sport-it-body">
                        <h4>Basketball</h4>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="sport-item">
                      <figure>
                        <i>
                          <img src="images/sport-icon-07.png" alt="Partner" />
                          <img
                            className="hover"
                            src="images/sport-icon-hover-07.png"
                            alt="Partner"
                          />
                        </i>
                      </figure>
                      <div className="sport-it-body">
                        <h4>Handball</h4>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="sport-item">
                      <figure>
                        <i>
                          <img src="images/sport-icon-08.png" alt="Partner" />
                          <img
                            className="hover"
                            src="images/sport-icon-hover-08.png"
                            alt="Partner"
                          />
                        </i>
                      </figure>
                      <div className="sport-it-body">
                        <h4>Athletics</h4>
                      </div>
                    </div>
                  </div>
                </Slider>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div className="sport-majan-txt">
                  <h5>
                    Other activities can be available on request as well as
                    personal training sessions for students on and off campus.
                    Please visit the Student Services Centre for more details.
                  </h5>
                  <p>
                    Opportunities to play friendly matches against other
                    colleges are offered throughout the year as well as the
                    chance to try out for the college teams and play in the
                    inter college and universities competitions.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="cam-sport-info-sec pt-5 ps-lg-5 ps-6 ps-xl-6 pb-5 pb-xl-6">
          <Container fluid className="px-0">
            <Row className="gx-0">
              <Col className="col-12 col-lg-6">
                <div className="cam-sport-info">
                  <h4>
                    Below is a list of students who are currently doing just
                    that:
                  </h4>
                  <ul>
                    <li>
                      <span>Sultan AL Raqqadi:</span> Fanjaa Football Club and
                      Football national team goalkeeper.
                    </li>
                    <li>
                      <span>Jaffar Al Balushi:</span> Oman Club football player.
                    </li>
                    <li>
                      <span>Ali Aulad Thani and Muhannad Al Shibli:</span>{" "}
                      Boshar Football player and U22 Football National Team,
                    </li>
                    <li>
                      <span>Ayman Al Qasmi:</span> Oman Swimming Team,
                    </li>
                    <li>
                      <span>Aina Hamimi:</span> Oman Female Athletics Team.
                    </li>
                  </ul>
                  <h4>Majan's Team won many competitions such as:</h4>
                  <ul>
                    <li>
                      1st place in the 7 on 7 Football competition between
                      Higher Education Institutions in 2016.
                    </li>
                    <li>1st place in the Neymar Jr's Five competition</li>
                    <li>
                      Represented Oman in the World Cup in Brazil 2016 and 2017.
                    </li>
                    <li>
                      1st place in the taekwondo competition between Higher
                      Education Institutions in 2016.
                    </li>
                    <li>
                      1st place in the female athletics competition between
                      Higher Education Institutions in 2017.
                    </li>
                  </ul>
                </div>
              </Col>
              <Col className="col-12 col-lg-6">
                <div className="cam-sport-img">
                  <img src="images/cam-sport-info-img.jpg" alt="Image" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </section>
    </section>
  );
}
