import Link from 'next/link';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

export default function UGModalOne() {
  return (
    <section className="ug-modal-cover-sec">
      <div className="sec-bg-graphics">
        <div className="social-shape"></div>
        <div className="slider-d-shape"></div>
      </div>

      <section className="sec-con-cover">
        <section className="programmes-sec  pt-5 pt-xl-6 px-5 px-xl-6 pb-5 pb-xl-6">
          <Container fluid>
            <Row>
              <Col xs={12}>
                <div className="pgm-slider-hd">
                  <h2>UG programmes</h2>
                </div>
              </Col>
            </Row>
            <Row className="gx-2 gx-xxl-5">
              <Col xs={12} md={6} lg={4}>
                <Link
                  href=""
                  className="programme-item"
                  onClick={handleShowModal01}
                >
                  <figure>
                    <div className="programme-img">
                      <img src="images/prog-item-thumb-01.jpg" alt="Image" />
                    </div>
                  </figure>
                  <div className="programme-body">
                    <div className="overlay">
                      <h4>faculty of business management</h4>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Link
                  href=""
                  className="programme-item"
                  onClick={handleShowModal02}
                >
                  <figure>
                    <div className="programme-img">
                      <img src="images/prog-item-thumb-02.jpg" alt="Image" />
                    </div>
                  </figure>
                  <div className="programme-body">
                    <div className="overlay">
                      <h4>faculty of information technology</h4>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Link
                  href=""
                  className="programme-item"
                  onClick={handleShowModal03}
                >
                  <figure>
                    <div className="programme-img">
                      <img src="images/prog-item-thumb-03.jpg" alt="Image" />
                    </div>
                  </figure>
                  <div className="programme-body">
                    <div className="overlay">
                      <h4>faculty of english language studies</h4>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </section>
    </section>
  );
}
