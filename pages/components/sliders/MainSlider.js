import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Link from 'next/link';

export default function MainSlider() {
  // Bootstra carousel hover pause
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div className="main-slider-item">
        <Carousel pause={!isHovering} fade controls={false} indicators={false}>
          <Carousel.Item>
            <div className="first-slider">
              <div className="student-slider-01">
                <div className="slider-shape shape-01"></div>
                <div className="slider-shape shape-02"></div>
                <div className="slider-shape shape-03"></div>
                <div className="slider-shape shape-04"></div>
                <div className="student-img">
                  <img src="images/slider-student-01.png" alt="Image" />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="first-slider">
              <div className="student-slider-02">
                <div className="slider-shape shape-01"></div>
                <div className="slider-shape shape-02"></div>
                <div className="slider-shape shape-03"></div>
                <div className="slider-shape shape-04"></div>
                <div className="student-img">
                  <img src="images/slider-student-02.png" alt="Image" />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="first-slider">
              <div className="student-slider-01">
                <div className="slider-shape shape-01"></div>
                <div className="slider-shape shape-02"></div>
                <div className="slider-shape shape-03"></div>
                <div className="slider-shape shape-04"></div>
                <div className="student-img">
                  <img src="images/slider-student-03.png" alt="Image" />
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        <div className="slider-caption">
          <div className="slider-hd">
            <h1>
              Together we <br />
              transform lives.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
