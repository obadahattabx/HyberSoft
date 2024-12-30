import { useRef } from "react";
import "./navbar-03.css";
import { Link } from "react-scroll";
export default function Navbar() {
  const btnNavbar = useRef(null);
  const handleNavbar = () => {
    btnNavbar.current.classList.toggle("active");
  };
  return (
    <>
      <section className="navbar-area navbar-three fixed-top ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="javascript:void(0)">
                  <img
                    src="/src/assets/images/logo.png"
                    alt="Logo"
                    style={{
                      width: "200px",
                      height: "90px",
                      backgroundImage: "",
                    }}
                  />
                </a>
                <button
                  ref={btnNavbar}
                  onClick={handleNavbar}
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarThree"
                  aria-controls="navbarThree"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarThree"
                >
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a
                        className="page-scroll active"
                        data-bs-toggle="collapse"
                        data-bs-target="#sub-nav5"
                        aria-controls="sub-nav5"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        href="javascript:void(0)"
                      >
                        Home
                        <div className="sub-nav-toggler">
                          <span>
                            <i className="lni lni-chevron-down" />
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link to="service">Services</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="feature">Features</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="contact">Contact us</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="javascript:void(0)">About us</Link>
                    </li>
                  </ul>
                </div>
                <div className="navbar-social d-none d-sm-inline-block">
                  <ul>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* navbar */}
            </div>
          </div>
          {/* row */}
        </div>
        {/* container */}
      </section>
    </>
  );
}
