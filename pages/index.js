import Head from "next/head";
import Link from "next/link";
import React, { useState, useRef } from "react";

import TopNavbar from "./components/TopNavbar";
import MainSlider from "./components/sliders/MainSlider";
import WelcomeSlider from "./components/sliders/WelcomeSlider";
import ContentSlider from "./components/sliders/ContentSlider";
import CampusSlider from "./components/sliders/CampusSlider";
import ProgrammesSlider from "./components/sliders/ProgrammesSlider";

import Slider from "react-slick";

// slick carousel import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [sliderMain, setsliderMain] = useState(0);
  const [sliderNav, setsliderNav] = useState(0);

  const sliderMainRef = useRef();
  const sliderNavRef = useRef();

  const handleSliderOneBeforeChange = (oldIndex, newIndex) => {
    setsliderMain(newIndex);
    sliderNavRef.current.slickGoTo(newIndex);
  };

  const handleSliderTwoBeforeChange = (oldIndex, newIndex) => {
    setsliderNav(newIndex);
    sliderMainRef.current.slickGoTo(newIndex);
  };

  const settings01 = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: handleSliderOneBeforeChange,
  };

  const settings02 = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true,
    beforeChange: handleSliderTwoBeforeChange,
  };

  return (
    <>
      <Head>
        <title>Majan University College</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNavbar />

      <div className="slider-cover">
        <Slider
          className="slider slider-main"
          {...settings01}
          ref={sliderMainRef}
        >
          <div>
            <MainSlider />
          </div>
          <div>
            <WelcomeSlider />
          </div>
          <div>
            <ContentSlider />
          </div>
          <div>
            <CampusSlider />
          </div>
          <div>
            <ProgrammesSlider />
          </div>
          <div>
            <div>666</div>
          </div>
          <div>
            <div>777</div>
          </div>
          <div>
            <div>888</div>
          </div>
          <div>
            <div>999</div>
          </div>
          <div>
            <div>101010</div>
          </div>
          <div>
            <div>111111</div>
          </div>
        </Slider>
      </div>

      <footer className="navbar slider-nav">
        <Link className="logo" href="/">
          <img src="images/muc-logo.png" alt="MUC Logo" />
        </Link>
        <button
          className="btn-hamburger dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <svg
            stroke="var(--white)"
            fill="none"
            className="hamburger"
            viewBox="-10 -10 120 120"
          >
            <path
              className="line"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20 40h60a1 1 0 010 20H20a1 1 0 010-40h30v70"
            />
          </svg>
        </button>
        <Slider
          className="slider slider-nav"
          {...settings02}
          ref={sliderNavRef}
        >
          <div>
            <div className="nav-link">Home</div>
          </div>
          <div>
            <div className="nav-link">Welcome</div>
          </div>
          <div>
            <div className="nav-link">Contents</div>
          </div>
          <div>
            <div className="nav-link">Campus Life</div>
          </div>
          <div>
            <div className="nav-link">Programmes</div>
          </div>
          <div>
            <div className="nav-link">Student Support</div>
          </div>
          <div>
            <div className="nav-link">Careers & Employability</div>
          </div>
          <div>
            <div className="nav-link">Studying at MUC</div>
          </div>
          <div>
            <div className="nav-link">Destination Oman</div>
          </div>
          <div>
            <div className="nav-link">Apply</div>
          </div>
          <div>
            <div className="nav-link">Contact Us</div>
          </div>
        </Slider>
        <div className="slider-counter">1/11</div>
        <div className="btm-university">
          <div className="uni-item">
            <img
              src="images/university-logo-01.png"
              alt="University of BRADFORD"
            />
          </div>
          <div className="uni-item">
            <img
              src="images/university-logo-02.png"
              alt="University of Bedfordshire"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
