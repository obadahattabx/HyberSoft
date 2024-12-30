import { FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
export default function Contact() {
  return (
    <>
      <section id="contact" className="contact-section pt-130 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-xl-5">
              <div className="section-title-contact text-center mb-60">
                <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                  Contact Us
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  We’d love to hear from you! Whether you have a question, need
                  support, or are ready to start your next project, our team is
                  here to help.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-8 col-lg-7 pt-2 pe-2">
              <div
                className="contact-wrapper wow fadeInUp"
                data-wow-delay=".2s"
              >
                <form
                  action="#"
                  method="POST"
                  id="contact-form"
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-form">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-input"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-input"
                          placeholder="Your E-mail"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          className="form-input"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form">
                        <input
                          type="text"
                          name="number"
                          id="number"
                          className="form-input"
                          placeholder="Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-form">
                        <textarea
                          name="message"
                          id="message"
                          className="form-input"
                          rows={7}
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="submit-btn">
                        <button className="main-btn btn-hover" type="submit">
                          Submit Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className=" col-xl-4 col-lg-5 ps-4">
              <div className=" section-title-contact ">
                <h3 className="title">Contact Information</h3>
              </div>
              <div className=" contact-info">
                <ul className="info cont-info ps-2">
                  <li>
                    <div className="single-info">
                      <div className="info-icon">
                        <FaMapMarkerAlt />
                      </div>
                      <div className="info-content">
                        <p className="text">
                          Level 13, 2 Elizabeth St, Melbourne, Victoria 3000,
                          Australia
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-info">
                      <div className="info-icon">
                        <MdOutlinePhone />
                      </div>
                      <div className="info-content">
                        <p className="text">+61 (8) 8234 3555</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-info">
                      <div className="info-icon">
                        <FaWhatsapp />
                      </div>
                      <div className="info-content">
                        <p className="text">+61 (8) 8234 3555</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-info">
                      <div className="info-icon">
                        <MdOutlineMail />
                      </div>
                      <div className="info-content">
                        <p className="text">admin@uideck.com</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="social mt-3 ms-2">
                  <li>
                    <a href="javascript:void(0)">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
