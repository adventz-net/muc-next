import { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import Link from 'next/link';

import ModalBSCComputerInt from './ModalBSCComputerInt';
import ModalBSCNet from './ModalBSCNet';
import ModalBSCBank from './ModalBSCBank';

export default function UGModal() {
  const [showModalBSCComputerInt, setShowModalBSCComputerInt] = useState(false);
  const [showModalBSCNet, setShowModalBSCNet] = useState(false);
  const [showModalBSCBank, setShowModalBSCBank] = useState(false);

  const handleCloseModalBSCComputerInt = () =>
    setShowModalBSCComputerInt(false);
  const handleShowModalBSCComputerInt = () => setShowModalBSCComputerInt(true);

  const handleCloseModalBSCNet = () => setShowModalBSCNet(false);
  const handleShowModalBSCNet = () => setShowModalBSCNet(true);

  const handleCloseModalBSCBank = () => setShowModalBSCBank(false);
  const handleShowModalBSCBank = () => setShowModalBSCBank(true);

  return (
    <section className="ug-modal-cover-sec">
      <>
        <Modal
          className="pgm-modal"
          show={showModalBSCComputerInt}
          onHide={handleCloseModalBSCComputerInt}
        >
          <Modal.Header>
            <button
              className="btn-modal-close"
              onClick={handleCloseModalBSCComputerInt}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <ModalBSCComputerInt />
          </Modal.Body>
        </Modal>
      </>

      <>
        <Modal
          className="pgm-modal"
          show={showModalBSCNet}
          onHide={handleCloseModalBSCNet}
        >
          <Modal.Header>
            <button
              className="btn-modal-close"
              onClick={handleCloseModalBSCNet}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <ModalBSCNet />
          </Modal.Body>
        </Modal>
      </>

      <>
        <Modal
          className="pgm-modal"
          show={showModalBSCBank}
          onHide={handleCloseModalBSCBank}
        >
          <Modal.Header>
            <button
              className="btn-modal-close"
              onClick={handleCloseModalBSCBank}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <ModalBSCBank />
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
                  <h2>faculty of information technology</h2>
                </div>
              </Col>
            </Row>
            <Row className="gx-2 gx-xxl-5">
              <Col xs={12} md={6} lg={4}>
                <Link
                  href=""
                  className="programme-item"
                  onClick={handleShowModalBSCComputerInt}
                >
                  <figure>
                    <div className="programme-img">
                      <img src="images/prog-item-thumb-01.jpg" alt="Image" />
                    </div>
                  </figure>
                  <div className="programme-body">
                    <div className="overlay">
                      <h4>BSc (Hons) in Computer and Internet Applications</h4>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Link
                  href=""
                  className="programme-item"
                  onClick={handleShowModalBSCNet}
                >
                  <figure>
                    <div className="programme-img">
                      <img src="images/prog-item-thumb-02.jpg" alt="Image" />
                    </div>
                  </figure>
                  <div className="programme-body">
                    <div className="overlay">
                      <h4>BSc (Hons) in Networking</h4>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Link
                  href=""
                  className="programme-item"
                  // onClick={handleShowModalFELS}
                >
                  <figure>
                    <div className="programme-img">
                      <img src="images/prog-item-thumb-03.jpg" alt="Image" />
                    </div>
                  </figure>
                  <div className="programme-body">
                    <div className="overlay">
                      <h4>BSc (Hons) Computing - Oil & Gas</h4>
                    </div>
                  </div>
                </Link>
              </Col>

              <Col xs={12} md={6} lg={4}>
                <Link
                  href=""
                  className="programme-item"
                  onClick={handleShowModalBSCBank}
                >
                  <figure>
                    <div className="programme-img">
                      <img src="images/prog-item-thumb-03.jpg" alt="Image" />
                    </div>
                  </figure>
                  <div className="programme-body">
                    <div className="overlay">
                      <h4>
                        BSc (Hons) Computing - Banking Information Systems
                      </h4>
                    </div>
                  </div>
                </Link>
              </Col>

              <Col xs={12} md={6} lg={4}>
                <Link
                  href=""
                  className="programme-item"
                  // onClick={handleShowModalFELS}
                >
                  <figure>
                    <div className="programme-img">
                      <img src="images/prog-item-thumb-03.jpg" alt="Image" />
                    </div>
                  </figure>
                  <div className="programme-body">
                    <div className="overlay">
                      <h4>BSc(Hons) Computing - Software Engineering</h4>
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
