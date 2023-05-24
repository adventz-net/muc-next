import Link from 'next/link';
import { useRouter } from 'next/router';
import { Navbar } from 'react-bootstrap';

import 'bootstrap-icons/font/bootstrap-icons.css';

export default function navbarMain() {
  const router = useRouter();

  return (
    <Navbar className="navbar nav-top">
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
