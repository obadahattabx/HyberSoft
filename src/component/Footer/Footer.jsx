import { FaMapMarkerAlt } from "react-icons/fa";
import "./footer-01.css";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import { Link } from "react-scroll";
export default function Footer() {
  return (
    <>
      <footer className="footer-area footer-one">
        <div className="footer-widget">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-4 col-sm-12">
                <div className="f-about">
                  <div className="footer-logo">
                    <a href="javascript:void(0)">
                      <img
                        src="/src/assets/images/logoDark.png"
                        alt="Logo"
                        style={{
                          width: "30%",
                        }}
                      />
                    </a>
                  </div>
                  <p className="text">
                    HyberSoft is a leading web and app development company
                    dedicated to delivering innovative, reliable, and
                    user-friendly digital solutions.
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-sm-4">
                <div className="footer-link">
                  <h6 className="footer-title">Company</h6>
                  <ul>
                    <li>
                      <Link to="OurCompany">Our Company</Link>
                    </li>
                    <li>
                      <Link to="service">Services</Link>
                    </li>
                    <li>
                      <Link to="feature">Features</Link>
                    </li>
                    <li>
                      <Link to="contact">Contact us</Link>
                    </li>
                  </ul>
                </div>
                {/* footer link */}
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-4">
                <div className="footer-link">
                  <h6 className="footer-title">Services</h6>
                  <ul>
                    <li>
                      <a href="javascript:void(0)">
                        Web Application Development
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">UI/UX Design</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Website Redesign</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Technical Support</a>
                    </li>
                  </ul>
                </div>
                {/* footer link */}
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-4">
                {/* Start Footer Contact */}
                <div className="footer-contact">
                  <h6 className="footer-title">Help &amp; Suuport</h6>
                  <ul>
                    <li className="ps-2 ">
                      <FaMapMarkerAlt /> Madison Street, NewYork, USA
                    </li>
                    <li className="ps-2">
                      <MdOutlinePhone /> +88 556 88545
                    </li>

                    <li className="ps-2 d-flex  justify-content-center align-items-center gap-2">
                      <MdOutlineMail />
                      support@uideck.com
                    </li>
                  </ul>
                </div>
                {/* End Footer Contact */}
              </div>
            </div>
            {/* row */}
          </div>
          {/* container */}
        </div>
        {/* footer widget */}
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="
                    copyright
                    text-center
                    d-md-flex
                    justify-content-between
                    align-items-center
                "
                >
                  <p className="text">
                    Copyright © 2024 HyberSoft. All Rights Reserved
                  </p>
                  <ul className="social">
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-facebook-filled" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-twitter-original" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-instagram-filled" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-linkedin-original" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* copyright */}
              </div>
            </div>
            {/* row */}
          </div>
          {/* container */}
        </div>
        {/* footer copyright */}
      </footer>
    </>
  );
}
