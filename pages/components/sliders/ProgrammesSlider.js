import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";

export default function ProgrammesSlider() {
  return (
    <section className="programmes-slider-sec">
      <div className="pgm-bg-graphics">
        <div className="social-shape"></div>
        <div className="slider-d-shape"></div>
      </div>

      <section className="programmes-sec sec-top-pd-lg sec-btm-pd-md">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <div className="programmes-search">
                <input className="form-control" />
                <button className="btn btn-search">
                  <i class="bi bi-search"></i>
                </button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="pgm-slider-hd">
                <h2>UG programmes</h2>
              </div>
            </Col>
          </Row>
          <Row className="gx-2 gx-xxl-5">
            <Col xs={12} md={6} lg={4}>
              <Link href="" className="programme-item">
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
              <Link href="" className="programme-item">
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
              <Link href="" className="programme-item">
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

      <section className="programmes-sec bg-pg sec-top-pd-md sec-btm-pd-md">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <div className="pgm-slider-hd">
                <h2>PG programmes</h2>
              </div>
            </Col>
          </Row>
          <Row className="gx-2 gx-xxl-5">
            <Col xs={12} md={6} lg={4}>
              <Link href="" className="programme-item">
                <figure>
                  <div className="programme-img">
                    <img src="images/prog-item-thumb-04.jpg" alt="Image" />
                  </div>
                </figure>
                <div className="programme-body">
                  <div className="overlay">
                    <h4>Master of Business Administration (MBA)</h4>
                  </div>
                </div>
              </Link>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Link href="" className="programme-item">
                <figure>
                  <div className="programme-img">
                    <img src="images/prog-item-thumb-05.jpg" alt="Image" />
                  </div>
                </figure>
                <div className="programme-body">
                  <div className="overlay">
                    <h4>MSc in Computer Science</h4>
                  </div>
                </div>
              </Link>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Link href="" className="programme-item">
                <figure>
                  <div className="programme-img">
                    <img src="images/prog-item-thumb-06.jpg" alt="Image" />
                  </div>
                </figure>
                <div className="programme-body">
                  <div className="overlay">
                    <h4>MA in Applied Linguistics</h4>
                  </div>
                </div>
              </Link>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Link href="" className="programme-item">
                <figure>
                  <div className="programme-img">
                    <img src="images/prog-item-thumb-07.jpg" alt="Image" />
                  </div>
                </figure>
                <div className="programme-body">
                  <div className="overlay">
                    <h4>IELTS Preparatory Course</h4>
                  </div>
                </div>
              </Link>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Link href="" className="programme-item">
                <figure>
                  <div className="programme-img">
                    <img src="images/prog-item-thumb-08.jpg" alt="Image" />
                  </div>
                </figure>
                <div className="programme-body">
                  <div className="overlay">
                    <h4>Doctor of Business Administration (DBA)</h4>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="programmes-sec bg-pro sec-top-pd-md sec-btm-pd-md">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <div className="pgm-slider-hd">
                <h2>Professional Programmes</h2>
              </div>
            </Col>
          </Row>
          <Row className="gx-2 gx-xxl-5">
            <Col xs={12} md={6} lg={4}>
              <Link href="" className="programme-item">
                <figure>
                  <div className="programme-img">
                    <img src="images/prog-item-thumb-09.jpg" alt="Image" />
                  </div>
                </figure>
                <div className="programme-body">
                  <div className="overlay">
                    <h4>ACCA</h4>
                  </div>
                </div>
              </Link>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Link href="" className="programme-item">
                <figure>
                  <div className="programme-img">
                    <img src="images/prog-item-thumb-10.jpg" alt="Image" />
                  </div>
                </figure>
                <div className="programme-body">
                  <div className="overlay">
                    <h4>CMA</h4>
                  </div>
                </div>
              </Link>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Link href="" className="programme-item">
                <figure>
                  <div className="programme-img">
                    <img src="images/prog-item-thumb-11.jpg" alt="Image" />
                  </div>
                </figure>
                <div className="programme-body">
                  <div className="overlay">
                    <h4>CIFE</h4>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="programmes-sec bg-found sec-top-pd-md sec-btm-pd-lg">
        <div className="pgm-found-graphics">
          <div className="pgm-found-shape shape-01"></div>
          <div className="pgm-found-shape shape-02"></div>
          <div className="pgm-found-shape shape-03"></div>
          <div className="pgm-found-shape shape-04"></div>
        </div>
        <Container fluid>
          <Row>
            <Col xs={12}>
              <div className="pgm-slider-hd">
                <h2>Foundation Programme</h2>
              </div>
            </Col>
          </Row>
          <Row className="gx-2 gx-xxl-5 justify-content-center">
            <Col xs={12} md={6} lg={4}>
              <Link href="" className="programme-item">
                <figure>
                  <div className="programme-img">
                    <img src="images/prog-item-thumb-12.jpg" alt="Image" />
                  </div>
                </figure>
                <div className="programme-body">
                  <div className="overlay">
                    <h4>Foundation Programme</h4>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
}
