import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar } from "react-bootstrap";

import "bootstrap-icons/font/bootstrap-icons.css";

export default function navbarMain() {
  const router = useRouter();

  return (
    <Navbar className="navbar nav-top">
      {/* <ul className="social-media">
        <li className="sm-item">
          <Link
            type="button"
            className="sm-link"
            data-bs-toggle="tooltip"
            href=""
            title="Facebook"
          >
            <i className="bi bi-facebook"></i>
          </Link>
        </li>
        <li className="sm-item">
          <Link
            type="button"
            className="sm-link"
            data-bs-toggle="tooltip"
            href=""
            title="Instagram"
          >
            <i className="bi bi-instagram"></i>
          </Link>
        </li>
        <li className="sm-item">
          <Link
            type="button"
            className="sm-link"
            data-bs-toggle="tooltip"
            href=""
            title="Twitter"
          >
            <i className="bi bi-twitter"></i>
          </Link>
        </li>
        <li className="sm-item">
          <Link
            type="button"
            className="sm-link"
            data-bs-toggle="tooltip"
            href=""
            title="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </Link>
        </li>
      </ul> */}
      <ul className="tool-nav">
        {/* <li className="nav-item">
          <Link className="nav-link nav-home" href="/">
            <i className="bi bi-house-door-fill"></i>
          </Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link nav-lng" href="">
            AR
          </Link>
        </li>
      </ul>
    </Navbar>
  );
}
