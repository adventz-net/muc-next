import Link from "next/link";
import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";

import UGModalFBM from "./UGModalFBM";
import UGModalFIT from "./UGModalFIT";
import UGModalFELS from "./UGModalFELS";
import PGModalMBA from "./PGModalMBA";
import PGModalMSC from "./PGModalMSC";
import PGModalMA from "./PGModalMA";
import PGModalDBA from "./PGModalDBA";
import PROModalACCA from "./PROModalACCA";
import PROModalCMA from "./PROModalCMA";
import PROModalACIFE from "./PROModalACIFE";
import FDModalFound from "./FDModalFound";

export default function ProgrammesSlider() {
  const [showModal01, setShowModal01] = useState(false);
  const [showModal02, setShowModal02] = useState(false);
  const [showModal03, setShowModal03] = useState(false);
  const [showModal04, setShowModal04] = useState(false);
  const [showModal05, setShowModal05] = useState(false);
  const [showModal06, setShowModal06] = useState(false);
  const [showModal08, setShowModal08] = useState(false);
  const [showModal09, setShowModal09] = useState(false);
  const [showModal10, setShowModal10] = useState(false);
  const [showModal11, setShowModal11] = useState(false);
  const [showModal12, setShowModal12] = useState(false);

  const handleCloseModal01 = () => setShowModal01(false);
  const handleShowModal01 = () => setShowModal01(true);

  const handleCloseModal02 = () => setShowModal02(false);
  const handleShowModal02 = () => setShowModal02(true);

  const handleCloseModal03 = () => setShowModal03(false);
  const handleShowModal03 = () => setShowModal03(true);

  const handleCloseModal04 = () => setShowModal04(false);
  const handleShowModal04 = () => setShowModal04(true);

  const handleCloseModal05 = () => setShowModal05(false);
  const handleShowModal05 = () => setShowModal05(true);

  const handleCloseModal06 = () => setShowModal06(false);
  const handleShowModal06 = () => setShowModal06(true);

  const handleCloseModal08 = () => setShowModal08(false);
  const handleShowModal08 = () => setShowModal08(true);

  const handleCloseModal09 = () => setShowModal09(false);
  const handleShowModal09 = () => setShowModal09(true);

  const handleCloseModal10 = () => setShowModal10(false);
  const handleShowModal10 = () => setShowModal10(true);

  const handleCloseModal11 = () => setShowModal11(false);
  const handleShowModal11 = () => setShowModal11(true);

  const handleCloseModal12 = () => setShowModal12(false);
  const handleShowModal12 = () => setShowModal12(true);

  return (
    <section className="programmes-slider-sec">
      <div>
        <Modal
          className="pgm-modal"
          show={showModal01}
          onHide={handleCloseModal01}
        >
          <Modal.Header>
            <button className="btn-modal-close" onClick={handleCloseModal01}>
              <i className="bi bi-x-lg"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <UGModalFBM />
          </Modal.Body>
        </Modal>

        <Modal
          className="pgm-modal"
          show={showModal02}
          onHide={handleCloseModal02}
        >
          <Modal.Header>
            <button className="btn-modal-close" onClick={handleCloseModal02}>
              <i className="bi bi-x-lg"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <UGModalFIT />
          </Modal.Body>
        </Modal>

        <Modal
          className="pgm-modal"
          show={showModal03}
          onHide={handleCloseModal03}
        >
          <Modal.Header>
            <button className="btn-modal-close" onClick={handleCloseModal03}>
              <i className="bi bi-x-lg"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <UGModalFELS />
          </Modal.Body>
        </Modal>

        <Modal
          className="pgm-modal"
          show={showModal04}
          onHide={handleCloseModal04}
        >
          <Modal.Header>
            <button className="btn-modal-close" onClick={handleCloseModal04}>
              <i className="bi bi-x-lg"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <PGModalMBA />
          </Modal.Body>
        </Modal>

        <Modal
          className="pgm-modal"
          show={showModal05}
          onHide={handleCloseModal05}
        >
          <Modal.Header>
            <button className="btn-modal-close" onClick={handleCloseModal05}>
              <i className="bi bi-x-lg"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <PGModalMSC />
          </Modal.Body>
        </Modal>

        <Modal
          className="pgm-modal"
          show={showModal06}
          onHide={handleCloseModal06}
        >
          <Modal.Header>
            <button className="btn-modal-close" onClick={handleCloseModal06}>
              <i className="bi bi-x-lg"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <PGModalMA />
          </Modal.Body>
        </Modal>

        <Modal
          className="pgm-modal"
          show={showModal08}
          onHide={handleCloseModal08}
        >
          <Modal.Header>
            <button className="btn-modal-close" onClick={handleCloseModal08}>
              <i className="bi bi-x-lg"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <PGModalDBA />
          </Modal.Body>
        </Modal>

        <Modal
          className="pgm-modal"
          show={showModal09}
          onHide={handleCloseModal09}
        >
          <Modal.Header>
            <button className="btn-modal-close" onClick={handleCloseModal09}>
              <i className="bi bi-x-lg"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <PROModalACCA />
          </Modal.Body>
        </Modal>

        <Modal
          className="pgm-modal"
          show={showModal10}
          onHide={handleCloseModal10}
        >
          <Modal.Header>
            <button className="btn-modal-close" onClick={handleCloseModal10}>
              <i className="bi bi-x-lg"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <PROModalCMA />
          </Modal.Body>
        </Modal>

        <Modal
          className="pgm-modal"
          show={showModal11}
          onHide={handleCloseModal11}
        >
          <Modal.Header>
            <button className="btn-modal-close" onClick={handleCloseModal11}>
              <i className="bi bi-x-lg"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <PROModalACIFE />
          </Modal.Body>
        </Modal>

        <Modal
          className="pgm-modal"
          show={showModal12}
          onHide={handleCloseModal12}
        >
          <Modal.Header>
            <button className="btn-modal-close" onClick={handleCloseModal12}>
              <i className="bi bi-x-lg"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <FDModalFound />
          </Modal.Body>
        </Modal>
      </div>

      <div className="sec-bg-graphics">
        <div className="social-shape"></div>
        <div className="slider-d-shape"></div>
      </div>

      <section className="sec-con-cover">
        <section className="programmes-sec  pt-5 pt-xl-6 px-5 px-xl-6 pb-5 pb-xl-6">
          <Container fluid>
            {/* <Row>
              <Col xs={12}>
                <div className="programmes-search">
                  <input className="form-control" />
                  <button className="btn btn-search">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </Col>
            </Row> */}
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

        <section className="programmes-sec bg-pg  pt-5 pt-xl-6 px-5 px-xl-6 pb-5 pb-xl-6">
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
                <Link
                  href=""
                  className="programme-item"
                  onClick={handleShowModal04}
                >
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
                <Link
                  href=""
                  className="programme-item"
                  onClick={handleShowModal05}
                >
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
                <Link
                  href=""
                  className="programme-item"
                  onClick={handleShowModal06}
                >
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
              {/* <Col xs={12} md={6} lg={4}>
                <Link
                  href=""
                  className="programme-item"
                  onClick={handleShowModal01}
                >
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
              </Col> */}
              <Col xs={12} md={6} lg={4}>
                <Link
                  href=""
                  className="programme-item"
                  onClick={handleShowModal08}
                >
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

        <section className="programmes-sec bg-pro  pt-5 pt-xl-6 px-5 px-xl-6 pb-5 pb-xl-6">
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
                <Link
                  href=""
                  className="programme-item"
                  onClick={handleShowModal09}
                >
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
                <Link
                  href=""
                  className="programme-item"
                  onClick={handleShowModal10}
                >
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
                <Link
                  href=""
                  className="programme-item"
                  onClick={handleShowModal11}
                >
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

        <section className="programmes-sec bg-found  pt-5 pt-xl-6 px-5 px-xl-6 pb-5 pb-xl-6">
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
                <Link
                  href=""
                  className="programme-item"
                  onClick={handleShowModal12}
                >
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
    </section>
  );
}
