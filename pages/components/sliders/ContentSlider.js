import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";

export default function ContentSlider() {
  return (
    <section className="content-slider-sec">
      <div className="con-slider-bg-graphics">
        <div className="social-shape"></div>
        <div className="slider-d-shape"></div>
      </div>

      <section className="con-slider-sec">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <div className="content-slider-hd">
                <h2>Contents</h2>
              </div>
            </Col>
          </Row>
          <Row className="gx-2 gx-xxl-5">
            <Col xs={12} md={6} lg={4}>
              <div className="content-item">
                <figure>
                  <div className="content-img">
                    <img src="images/content-thumb-01.jpg" alt="Image" />
                  </div>
                </figure>
                <div className="content-body">
                  <div className="content-con">
                    <h4>Campus Life</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque cursus libero eu nulla rutrum lacinia. Maecenas id
                      consequat diam. Vestibulum vestibulum nec diam in pretium.
                    </p>
                  </div>
                  <Link className="btn btn-explore" href="">
                    Explore More
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="content-item">
                <figure>
                  <div className="content-img">
                    <img src="images/content-thumb-02.jpg" alt="Image" />
                  </div>
                </figure>
                <div className="content-body">
                  <div className="content-con">
                    <h4>Programmes</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque cursus libero eu nulla rutrum lacinia. Maecenas id
                      consequat diam. Vestibulum vestibulum nec diam in pretium.
                    </p>
                  </div>
                  <Link className="btn btn-explore" href="">
                    Explore More
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="content-item">
                <figure>
                  <div className="content-img">
                    <img src="images/content-thumb-03.jpg" alt="Image" />
                  </div>
                </figure>
                <div className="content-body">
                  <div className="content-con">
                    <h4>Student support</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque cursus libero eu nulla rutrum lacinia. Maecenas id
                      consequat diam. Vestibulum vestibulum nec diam in pretium.
                    </p>
                  </div>
                  <Link className="btn btn-explore" href="">
                    Explore More
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="content-item">
                <figure>
                  <div className="content-img">
                    <img src="images/content-thumb-04.jpg" alt="Image" />
                  </div>
                </figure>
                <div className="content-body">
                  <div className="content-con">
                    <h4>Employability</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque cursus libero eu nulla rutrum lacinia. Maecenas id
                      consequat diam. Vestibulum vestibulum nec diam in pretium.
                    </p>
                  </div>
                  <Link className="btn btn-explore" href="">
                    Explore More
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="content-item">
                <figure>
                  <div className="content-img">
                    <img src="images/content-thumb-05.jpg" alt="Image" />
                  </div>
                </figure>
                <div className="content-body">
                  <div className="content-con">
                    <h4>Studying at MUC</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque cursus libero eu nulla rutrum lacinia. Maecenas id
                      consequat diam. Vestibulum vestibulum nec diam in pretium.
                    </p>
                  </div>
                  <Link className="btn btn-explore" href="">
                    Explore More
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="content-item">
                <figure>
                  <div className="content-img">
                    <img src="images/content-thumb-06.jpg" alt="Image" />
                  </div>
                </figure>
                <div className="content-body">
                  <div className="content-con">
                    <h4>Destination Oman</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque cursus libero eu nulla rutrum lacinia. Maecenas id
                      consequat diam. Vestibulum vestibulum nec diam in pretium.
                    </p>
                  </div>
                  <Link className="btn btn-explore" href="">
                    Explore More
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="content-item">
                <figure>
                  <div className="content-img">
                    <img src="images/content-thumb-07.jpg" alt="Image" />
                  </div>
                </figure>
                <div className="content-body">
                  <div className="content-con">
                    <h4>Apply</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque cursus libero eu nulla rutrum lacinia. Maecenas id
                      consequat diam. Vestibulum vestibulum nec diam in pretium.
                    </p>
                  </div>
                  <Link className="btn btn-explore" href="">
                    Explore More
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="content-item">
                <figure>
                  <div className="content-img">
                    <img src="images/content-thumb-08.jpg" alt="Image" />
                  </div>
                </figure>
                <div className="content-body">
                  <div className="content-con">
                    <h4>Contact Us</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque cursus libero eu nulla rutrum lacinia. Maecenas id
                      consequat diam. Vestibulum vestibulum nec diam in pretium.
                    </p>
                  </div>
                  <Link className="btn btn-explore" href="">
                    Explore More
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
}
