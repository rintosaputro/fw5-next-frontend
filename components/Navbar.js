import Link from "next/link";
import style from './Navbar.module.scss'
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link href='/'>
          <a className="navbar-brand fw-bold text-white">Zwallet</a>
        </Link>
        <div className="collapse navbar-collapse  justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item me-5">
              <Link href='/login'>
                <a className="nav-link text-white btn btn-outline-primary py-3 px-5">Login</a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link href='/signup'>
                <a className="nav-link text-white btn btn-primary py-3 px-5">Signup</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
