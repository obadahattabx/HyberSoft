import { useRef } from "react";
import "./navbar-03.css";

export default function Navbar() {
  const btnNavbar = useRef(null);
  const handleNavbar = () => {
    btnNavbar.current.classList.toggle("active");
  };
  return (
    <>
      <section className="navbar-area navbar-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="javascript:void(0)">
                  <img src="../assets/images/white-logo.svg" alt="Logo" />
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
                        About
                        <div className="sub-nav-toggler">
                          <span>
                            <i className="lni lni-chevron-down" />
                          </span>
                        </div>
                      </a>
                      <ul className="sub-menu collapse" id="sub-nav5">
                        <li>
                          <a href="javascript:void(0)">Dropdown Menu 1</a>
                        </li>
                        <li>
                          <a
                            className="page-scroll active"
                            data-bs-toggle="collapse"
                            data-bs-target="#sub-nav6"
                            aria-controls="sub-nav6"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            href="javascript:void(0)"
                          >
                            Dropdown Menu 2
                            <div className="sub-nav-toggler">
                              <span>
                                <i className="lni lni-chevron-down" />
                              </span>
                            </div>
                          </a>
                          <ul className="sub-menu collapse" id="sub-nav6">
                            <li>
                              <a href="javascript:void(0)">Sub Menu 1</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Sub Menu 2</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Sub Menu 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:void(0)">Dropdown Menu 3</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0)">Services</a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0)">Resources</a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0)">Support</a>
                    </li>
                  </ul>
                </div>
                <div className="navbar-social d-none d-sm-inline-block">
                  <ul>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-twitter-original" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-facebook-filled" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-instagram-original" />
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
