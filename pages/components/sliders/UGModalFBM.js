import { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import Link from 'next/link';

import ModalBAMarketing from './ModalBAMarketing';
import ModalBAAccounts from './ModalBAAccounts';
import ModalBscEBusiness from './ModalBscEBusiness';
import ModalBAFinance from './ModalBAFinance';
import ModalBAIslamic from './ModalBAIslamic';

export default function UGModal() {
  const [showModalBAMarketing, setShowModalBAMarketing] = useState(false);
  const [showModalBAAccounts, setShowModalBAAccounts] = useState(false);
  const [showModalBscEBusiness, setShowModalBscEBusiness] = useState(false);
  const [showModalBAFinance, setShowModalBAFinance] = useState(false);
  const [showModalBAIslamic, setShowModalBAIslamic] = useState(false);

  const handleCloseModalBAMarketing = () => setShowModalBAMarketing(false);
  const handleShowModalBAMarketing = () => setShowModalBAMarketing(true);

  const handleCloseModalBAAccounts = () => setShowModalBAAccounts(false);
  const handleShowModalBAAccounts = () => setShowModalBAAccounts(true);

  const handleCloseModalBscEBusiness = () => setShowModalBscEBusiness(false);
  const handleShowModalBscEBusiness = () => setShowModalBscEBusiness(true);

  const handleCloseModalBAFinance = () => setShowModalBAFinance(false);
  const handleShowModalBAFinance = () => setShowModalBAFinance(true);

  const handleCloseModalBAIslamic = () => setShowModalBAIslamic(false);
  const handleShowModalBAIslamic = () => setShowModalBAIslamic(true);

  return (
    <section className="ug-modal-cover-sec">
      <>
        <Modal
          className="pgm-modal"
          show={showModalBAMarketing}
          onHide={handleCloseModalBAMarketing}
        >
          <Modal.Header>
            <button
              className="btn-modal-close"
              onClick={handleCloseModalBAMarketing}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <ModalBAMarketing />
          </Modal.Body>
        </Modal>
      </>

      <>
        <Modal
          className="pgm-modal"
          show={showModalBAAccounts}
          onHide={handleCloseModalBAAccounts}
        >
          <Modal.Header>
            <button
              className="btn-modal-close"
              onClick={handleCloseModalBAAccounts}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <ModalBAAccounts />
          </Modal.Body>
        </Modal>
      </>

      <>
        <Modal
          className="pgm-modal"
          show={showModalBscEBusiness}
          onHide={handleCloseModalBscEBusiness}
        >
          <Modal.Header>
            <button
              className="btn-modal-close"
              onClick={handleCloseModalBscEBusiness}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <ModalBscEBusiness />
          </Modal.Body>
        </Modal>
      </>

      <>
        <Modal
          className="pgm-modal"
          show={showModalBAFinance}
          onHide={handleCloseModalBAFinance}
        >
          <Modal.Header>
            <button
              className="btn-modal-close"
              onClick={handleCloseModalBAFinance}
            >
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
          show={showModalBAIslamic}
          onHide={handleCloseModalBAIslamic}
        >
          <Modal.Header>
            <button
              className="btn-modal-close"
              onClick={handleCloseModalBAIslamic}
            >
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
                  <h2>faculty of business management</h2>
                </div>
              </Col>
            </Row>
            <Row className="gx-2 gx-xxl-5">
              <Col xs={12} md={6} lg={4}>
                <Link
                  href=""
                  className="programme-item"
                  onClick={handleShowModalBAMarketing}
                >
                  <figure>
                    <div className="programme-img">
                      <img src="images/prog-item-thumb-01.jpg" alt="Image" />
                    </div>
                  </figure>
                  <div className="programme-body">
                    <div className="overlay">
                      <h4>BA (Hons) in Marketing</h4>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Link
                  href=""
                  className="programme-item"
                  onClick={handleShowModalBAAccounts}
                >
                  <figure>
                    <div className="programme-img">
                      <img src="images/prog-item-thumb-01.jpg" alt="Image" />
                    </div>
                  </figure>
                  <div className="programme-body">
                    <div className="overlay">
                      <h4>BA (Hons) in Accounting</h4>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Link
                  href=""
                  className="programme-item"
                  onClick={handleShowModalBscEBusiness}
                >
                  <figure>
                    <div className="programme-img">
                      <img src="images/prog-item-thumb-01.jpg" alt="Image" />
                    </div>
                  </figure>
                  <div className="programme-body">
                    <div className="overlay">
                      <h4>BSc (Hons) in E-Business</h4>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Link
                  href=""
                  className="programme-item"
                  onClick={handleShowModalBAFinance}
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
                  onClick={handleShowModalBAIslamic}
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
