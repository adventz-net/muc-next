import { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import Link from 'next/link';

import ModalMBA from './ModalMBA';

export default function UGModal() {
  const [showModalFBM, setShowModalFBM] = useState(false);
  const [showModalFIT, setShowModalFIT] = useState(false);
  const [showModalFELS, setShowModalFELS] = useState(false);

  const handleCloseModalFBM = () => setShowModalFBM(false);
  const handleShowModalFBM = () => setShowModalFBM(true);

  const handleCloseModalFIT = () => setShowModalFIT(false);
  const handleShowModalFIT = () => setShowModalFIT(true);

  const handleCloseModalFELS = () => setShowModalFELS(false);
  const handleShowModalFELS = () => setShowModalFELS(true);

  //   const handleCloseModal02 = () => setShowModal02(false);
  //   const handleShowModal02 = () => setShowModal02(true);

  //   const handleCloseModal03 = () => setShowModal03(false);
  //   const handleShowModal03 = () => setShowModal03(true);

  //   const handleCloseModal04 = () => setShowModal04(false);
  //   const handleShowModal04 = () => setShowModal04(true);

  //   const handleCloseModal05 = () => setShowModal05(false);
  //   const handleShowModal05 = () => setShowModal05(true);

  //   const handleCloseModal06 = () => setShowModal06(false);
  //   const handleShowModal06 = () => setShowModal06(true);
  return (
    <section className="ug-modal-cover-sec">
      <>
        <Modal
          className="pgm-modal"
          show={showModalFBM}
          onHide={handleCloseModalFBM}
        >
          <Modal.Header>
            <button className="btn-modal-close" onClick={handleCloseModalFBM}>
              <i className="bi bi-x-lg"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <ModalMBA />
          </Modal.Body>
        </Modal>
      </>
      <>
        <Modal
          className="pgm-modal"
          show={showModalFIT}
          onHide={handleCloseModalFIT}
        >
          <Modal.Header>
            <button className="btn-modal-close" onClick={handleCloseModalFIT}>
              <i className="bi bi-x-lg"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <ModalMBA />
          </Modal.Body>
        </Modal>
      </>
      <>
        <Modal
          className="pgm-modal"
          show={showModalFELS}
          onHide={handleCloseModalFELS}
        >
          <Modal.Header>
            <button className="btn-modal-close" onClick={handleCloseModalFELS}>
              <i className="bi bi-x-lg"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <ModalMBA />
          </Modal.Body>
        </Modal>
      </>
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
                  onClick={handleShowModalFBM}
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
                  onClick={handleShowModalFIT}
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
                  onClick={handleShowModalFELS}
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
