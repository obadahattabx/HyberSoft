import "./Contact.css";
export default function Contact() {
  return (
    <>
      <section id="contact" className="contact-section pt-130 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-xl-5">
              <div className="section-title-contact text-center mb-60">
                <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                  Get In Touch
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
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
                <ul className="info cont-info">
                  <li>
                    <div className="single-info">
                      <div className="info-icon">
                        <i className="lni lni-map-marker" />
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
                        <i className="lni lni-phone" />
                      </div>
                      <div className="info-content">
                        <p className="text">+61 (8) 8234 3555</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-info">
                      <div className="info-icon">
                        <i className="lni lni-phone-set" />
                      </div>
                      <div className="info-content">
                        <p className="text">+61 (8) 8234 3555</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-info">
                      <div className="info-icon">
                        <i className="lni lni-envelope" />
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
                      <i className="lni lni-instagram-original" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-linkedin-original" />
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