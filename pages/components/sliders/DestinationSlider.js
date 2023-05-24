import React, { useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import Link from 'next/link';

import { PlayFill, Pause } from 'react-bootstrap-icons';

// slick carousel import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function DestinationSlider() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
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
    <section className="content-slider-sec">
      <div className="sec-bg-graphics">
        <div className="social-shape"></div>
        <div className="slider-d-shape"></div>
      </div>

      <section className="des-intro-sec px-5 px-lg-6 px-xl-6 py-5 py-lg-5 py-xl-6">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <div className="des-slider-cover">
                <h2>Destination Oman</h2>
                <p>
                  Oman is a peaceful and hospitable country, with easy access to
                  the GCC and beyond.
                </p>
                <p>
                  Muscat is a clean and well developed capital city, nestling
                  between the mountains and the ocean. The city has abundant
                  modern shopping malls, cinemas, entertainment facilities and
                  beautiful sandy beaches.
                </p>
                <p>
                  Approximately 45% of the population of Oman are expatriates
                  hailing from many different countries, giving the nation an
                  engaging and multicultural feel. Living and studying in Oman
                  contributes to your international exposure, preparing you for
                  the excitement and challenges of the increasingly globalised
                  workplace.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="des-exp-sec px-5 px-lg-6 px-xl-6 py-5 py-lg-5 py-xl-7">
        <div className="sec-bg-graphics">
          <div className="des-exp-shape-01"></div>
          <div className="des-exp-shape-02"></div>
        </div>
        <Container fluid>
          <Row>
            <Col xs={12} lg={6}>
              <div className="des-exp-cover">
                <h3>Come and experience Oman</h3>
                <p>
                  Whether you are visiting Oman for a stopover, a short stay or
                  for longer, Oman is yours to explore.
                </p>
                <p>
                  Thanks to its diverse landscapes, ranging from Rocky Mountains
                  with green terrace fields to bustling souks selling camels on
                  the edge of the desert or watching baby turtles hatch on the
                  beach, the Sultanate welcomes all travellers seeking
                  adventures of a lifetime.
                </p>
                <p>
                  Oman's culture is deeply rooted in the Sultanate's proud
                  heritage and history of seafaring, trading and exploration.
                </p>
                <p>
                  Today, long-standing traditions blend seamlessly with modern
                  day living, with the latest fashion and electronics brands
                  sold alongside traditional hand-made crafts, jewellery, and
                  even goats and cattle at souqs around the country.
                </p>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="des-exp-img">
                <img src="images/des-exp-oman.png" alt="Oman" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="des-oman-vid-sec px-5 px-lg-6 px-xl-6 py-5 py-lg-5 py-xl-6">
        <div className="sec-bg-graphics">
          <div className="des-oman-shape-01"></div>
          <div className="des-oman-shape-02"></div>
        </div>
        <div className="des-oman-video">
          <video
            ref={videoRef}
            src="videos/story.mp4"
            poster="images/des-oman-vid-poster.png"
          />
          <button className={buttonClass} onClick={togglePlay}>
            {isPlaying ? <Pause /> : <PlayFill />}
          </button>
        </div>
      </section>

      <section className="des-explore-sec px-5 px-lg-6 px-xl-6 py-5 py-lg-5 py-xl-7">
        <div className="sec-bg-graphics">
          <div className="des-explore-shape-01"></div>
        </div>
        <Container fluid>
          <Row>
            <Col xs={12}>
              <div className="des-explore-slider-hd">
                <h2>places you can explore</h2>
              </div>
            </Col>
          </Row>
          <Row className="gx-2 gx-xxl-4">
            <Col xs={12}>
              <Slider className="slider des-exp-carousel" {...settings}>
                <div>
                  <div className="des-exp-item">
                    <figure>
                      <img src="images/des-place-item-01.jpg" alt="Image" />
                    </figure>
                    <div className="des-exp-body">
                      <h4>Marina Bandar Al Rowdha - Muscat</h4>
                      <p>
                        Marina Bandar Al Rowdha is Muscat's original marina
                        located at the foot of the Al Hajar Mountains giving
                        berth holders access to the best cruising ground close
                        to the the city. A range of on and off shore facilities
                        ensure that you and your boat is fully supported.
                      </p>
                    </div>
                    <div className="des-exp-footer">
                      <Link href="" className="btn btn-des-exp">
                        <i class="bi bi-plus-lg"></i> Explore
                      </Link>
                      <Link href="" className="btn btn-des-exp">
                        <i class="bi bi-geo-alt-fill"></i> Location Map
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="des-exp-item">
                    <figure>
                      <img src="images/des-place-item-02.jpg" alt="Image" />
                    </figure>
                    <div className="des-exp-body">
                      <h4>SCUBA Diving</h4>
                      <p>
                        Ever wondered how it feels to breathe underwater, how it
                        feels to get close to marine life? Wonder no more. Try
                        SCUBA diving with our professional Instructors right
                        beside you to get a taste of SCUBA. No license required.
                      </p>
                    </div>
                    <div className="des-exp-footer">
                      <Link href="" className="btn btn-des-exp">
                        <i class="bi bi-plus-lg"></i> Explore
                      </Link>
                      <Link href="" className="btn btn-des-exp">
                        <i class="bi bi-geo-alt-fill"></i> Location Map
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="des-exp-item">
                    <figure>
                      <img src="images/des-place-item-03.jpg" alt="Image" />
                    </figure>
                    <div className="des-exp-body">
                      <h4>Oman, is a wonderland for geology travelers</h4>
                      <p>
                        Oman is a wonderland for travellers with a keen interest
                        in geology. Geological stories can be found just about
                        anywhere, from Oman's highest mountain, Jebel Shams, to
                        the mega-dunes of the Empty Quarter (Rub Al Khali) and
                        the Rock Garden at Duqm.
                      </p>
                    </div>
                    <div className="des-exp-footer">
                      <Link href="" className="btn btn-des-exp">
                        <i class="bi bi-plus-lg"></i> Explore
                      </Link>
                      <Link href="" className="btn btn-des-exp">
                        <i class="bi bi-geo-alt-fill"></i> Location Map
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="des-exp-item">
                    <figure>
                      <img src="images/des-place-item-03.jpg" alt="Image" />
                    </figure>
                    <div className="des-exp-body">
                      <h4>Oman, is a wonderland for geology travelers</h4>
                      <p>
                        Oman is a wonderland for travellers with a keen interest
                        in geology. Geological stories can be found just about
                        anywhere, from Oman's highest mountain, Jebel Shams, to
                        the mega-dunes of the Empty Quarter (Rub Al Khali) and
                        the Rock Garden at Duqm.
                      </p>
                    </div>
                    <div className="des-exp-footer">
                      <Link href="" className="btn btn-des-exp">
                        <i class="bi bi-plus-lg"></i> Explore
                      </Link>
                      <Link href="" className="btn btn-des-exp">
                        <i class="bi bi-geo-alt-fill"></i> Location Map
                      </Link>
                    </div>
                  </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
}
