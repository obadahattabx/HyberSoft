import { useEffect, useRef, useState } from "react";
import "./navbar-03.css";
import { Link } from "react-scroll";
export default function Navbar() {
  const btnNavbar = useRef(null);
  const handleNavbar = () => {
    btnNavbar.current.classList.toggle("active");
  };
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Check if scroll position is greater than 50
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section
        className={`navbar-area navbar-three fixed-top ${
          isScrolled
            ? "bg-white/70 backdrop-blur-md shadow-md" // When scrolled: Transparent white, blurred background, and shadow
            : "bg-transparent"
        } `}
        style={{ transition: " 0.7s" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12  ">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="javascript:void(0)">
                  <img
                    src="/src/assets/images/logo.png"
                    alt="Logo"
                    style={{
                      width: "200px",
                      height: "70px",
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
                      <Link to="Home">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="OurCompany">About us</Link>
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
