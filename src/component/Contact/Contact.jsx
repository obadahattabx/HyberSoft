import { FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import SuccessMessage from "./SuccessMessage";
// import SuccessMessage from "./SuccessMessage";

export default function Contact() {
  const serviceID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
  const userID = import.meta.env.VITE_APP_EMAILJS_USER_ID;
  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const formRef = useRef(null); // Create a ref for the form
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^\d{10,15}$/, "Phone must be 10-15 digits")
        .required("Phone is required"),
      subject: Yup.string()
        .min(3, "Subject must be at least 3 characters")
        .required("Subject is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),
    onSubmit: () => {
      setLoading(true);
      emailjs
        .sendForm(
          serviceID, // Replace with your EmailJS service ID
          templateID, // Replace with your EmailJS template ID
          formRef.current,
          userID // Replace with your EmailJS user ID
        )
        .then(
          (result) => {
            // alert("asdasdasd");
            setLoading(false);
            console.log(result.text);
            setShowSuccessMessage(true);
            setTimeout(() => {
              setShowSuccessMessage(false);
            }, 1500);
            formik.resetForm();
            // Clear the form after submission
          },
          (error) => {
            alert("asdasdasd");
            setLoading(false);
            console.log(error.text);
          }
        );
    },
  });

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
                  ref={formRef}
                  action="#"
                  method="POST"
                  id="contact-form"
                  className="contact-form"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-form">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          className="form-input"
                          placeholder="Your Name"
                        />
                        {formik.touched.name && formik.errors.name && (
                          <div className="text-danger ps-4">
                            {formik.errors.name}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          className="form-input"
                          placeholder="Your E-mail"
                        />
                        {formik.touched.email && formik.errors.email && (
                          <div className="text-danger ps-4">
                            {formik.errors.email}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          value={formik.values.subject}
                          onChange={formik.handleChange}
                          className="form-input"
                          placeholder="Subject"
                        />
                        {formik.touched.subject && formik.errors.subject && (
                          <div className="text-danger ps-4">
                            {formik.errors.subject}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          className="form-input"
                          placeholder="Number"
                        />
                        {formik.touched.phone && formik.errors.phone && (
                          <div className="text-danger ps-4">
                            {formik.errors.phone}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-form">
                        <textarea
                          name="message"
                          id="message"
                          className="form-input"
                          value={formik.values.message}
                          onChange={formik.handleChange}
                          rows={7}
                          placeholder="Message"
                        />
                        {formik.touched.message && formik.errors.message && (
                          <div className="text-danger ps-4">
                            {formik.errors.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="submit-btn">
                        <button
                          className="main-btn btn-hover"
                          type="submit"
                          disabled={loading}
                        >
                          {loading == false ? (
                            <div>
                              <span>Submit Message</span>
                            </div>
                          ) : (
                            <div
                              className="spinner-border text-primary"
                              role="status"
                            >
                              <span className="sr-only">Loading...</span>
                            </div>
                          )}
                        </button>

                        {showSuccessMessage == true ? (
                          <div
                            style={{
                              opacity: "1",
                              visibility: "visible",
                              transition:
                                "opacity 1s ease-in-out, visibility 0s 0s",
                            }}
                          >
                            <SuccessMessage />
                          </div>
                        ) : (
                          <div
                            style={{
                              opacity: "0",
                              visibility: "hidden",
                              transition:
                                "opacity 1s ease-in-out, visibility 0s 0.5s",
                            }}
                          >
                            <SuccessMessage />
                          </div>
                        )}
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
