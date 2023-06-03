import { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import Link from 'next/link';

import ModalBAFinance from './ModalBAFinance';
import ModalBAIslamic from './ModalBAIslamic';

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
            <ModalBAFinance />
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
            <ModalBAIslamic />
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
                      <h4>BA (Hons) in Finance</h4>
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
                      <h4>BA (Hons) in Islamic Banking and Finance </h4>
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
