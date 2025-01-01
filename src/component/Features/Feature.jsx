import "./service-02.css";
import { MdDevices } from "react-icons/md";

import { GrUpdate } from "react-icons/gr";

import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { PiMaskHappyFill } from "react-icons/pi";
import { BiCustomize } from "react-icons/bi";
import { LuLeafyGreen } from "react-icons/lu";
export default function Feature() {
  const d = `M18.7,4.6c-0.9,0-1.5-0.7-1.6-1.5s0.7-1.5,1.5-1.6s1.5,0.7,1.6,1.5l0,0C20.2,3.9,19.5,4.6,18.7,4.6z M18.7,12.8
	c-0.9,0-1.5-0.7-1.6-1.5s0.7-1.5,1.5-1.6s1.5,0.7,1.6,1.5l0,0C20.2,12.1,19.5,12.8,18.7,12.8L18.7,12.8z M18.7,21.1
	c-0.9,0-1.5-0.7-1.6-1.5s0.7-1.5,1.5-1.6s1.5,0.7,1.6,1.5l0,0C20.2,20.4,19.5,21,18.7,21.1z M18.7,29.3c-0.9,0-1.5-0.7-1.6-1.5
	s0.7-1.5,1.5-1.6s1.5,0.7,1.6,1.5l0,0C20.2,28.6,19.5,29.3,18.7,29.3L18.7,29.3z M18.7,37.5c-0.9,0-1.5-0.7-1.6-1.5s0.7-1.5,1.5-1.6
	s1.5,0.7,1.6,1.5l0,0C20.2,36.8,19.5,37.5,18.7,37.5z M10.7,4.6c-0.9,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5c0.9,0,1.5,0.7,1.5,1.5l0,0
	C12.2,3.9,11.6,4.6,10.7,4.6L10.7,4.6L10.7,4.6z M10.7,12.8c-0.9,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5c0.9,0,1.5,0.7,1.5,1.5l0,0
	C12.2,12.1,11.6,12.8,10.7,12.8L10.7,12.8z M10.7,21c-0.9,0-1.5-0.7-1.5-1.5S9.8,18,10.7,18s1.5,0.7,1.5,1.5l0,0
	C12.2,20.4,11.6,21,10.7,21C10.7,21.1,10.7,21.1,10.7,21L10.7,21z M10.7,29.3c-0.9,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5
	c0.9,0,1.5,0.7,1.5,1.5l0,0C12.2,28.6,11.6,29.3,10.7,29.3L10.7,29.3L10.7,29.3z M10.7,37.5c-0.9,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5
	c0.9,0,1.5,0.7,1.5,1.5l0,0C12.2,36.8,11.6,37.5,10.7,37.5L10.7,37.5L10.7,37.5z M2.7,4.6c-0.9,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5
	c0.9,0,1.5,0.7,1.5,1.5l0,0C4.3,3.9,3.6,4.6,2.7,4.6L2.7,4.6L2.7,4.6z M2.7,12.8c-0.9,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5
	c0.9,0,1.5,0.7,1.5,1.5l0,0C4.3,12.1,3.6,12.8,2.7,12.8L2.7,12.8L2.7,12.8z M2.7,21c-0.9,0-1.5-0.7-1.5-1.5S1.9,18,2.7,18
	c0.9,0,1.5,0.7,1.5,1.5l0,0C4.3,20.4,3.6,21,2.7,21C2.7,21.1,2.7,21.1,2.7,21L2.7,21z M2.7,29.3c-0.9,0-1.5-0.7-1.5-1.5
	s0.7-1.5,1.5-1.5c0.9,0,1.5,0.7,1.5,1.5l0,0C4.3,28.6,3.6,29.3,2.7,29.3L2.7,29.3L2.7,29.3z M2.7,37.5c-0.9,0-1.5-0.7-1.5-1.5
	s0.7-1.5,1.5-1.5c0.9,0,1.5,0.7,1.5,1.5l0,0C4.3,36.8,3.6,37.5,2.7,37.5L2.7,37.5L2.7,37.5z M18.7,45.6c-0.9,0-1.5-0.7-1.6-1.5
	s0.7-1.5,1.5-1.6s1.5,0.7,1.6,1.5l0,0C20.2,44.9,19.5,45.6,18.7,45.6L18.7,45.6L18.7,45.6z M18.7,53.8c-0.9,0-1.5-0.7-1.6-1.5
	s0.7-1.5,1.5-1.6s1.5,0.7,1.6,1.5l0,0C20.2,53.2,19.5,53.8,18.7,53.8C18.7,53.9,18.7,53.9,18.7,53.8L18.7,53.8z M18.7,62.1
	c-0.9,0-1.5-0.7-1.6-1.5s0.7-1.5,1.5-1.6s1.5,0.7,1.6,1.5l0,0C20.2,61.4,19.5,62.1,18.7,62.1L18.7,62.1z M18.7,70.3
	c-0.9,0-1.5-0.7-1.6-1.5s0.7-1.5,1.5-1.6s1.5,0.7,1.6,1.5l0,0C20.2,69.6,19.5,70.3,18.7,70.3L18.7,70.3L18.7,70.3z M18.7,78.5
	c-0.9,0-1.5-0.7-1.6-1.5s0.7-1.5,1.5-1.6s1.5,0.7,1.6,1.5l0,0C20.2,77.8,19.5,78.5,18.7,78.5L18.7,78.5L18.7,78.5z M10.7,45.6
	c-0.9,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5c0.9,0,1.5,0.7,1.5,1.5l0,0C12.2,44.9,11.6,45.6,10.7,45.6L10.7,45.6z M10.7,53.8
	c-0.9,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5c0.9,0,1.5,0.7,1.5,1.5l0,0C12.2,53.2,11.6,53.8,10.7,53.8C10.7,53.9,10.7,53.9,10.7,53.8
	L10.7,53.8z M10.7,62.1c-0.9,0-1.5-0.7-1.5-1.5S9.8,59,10.7,59s1.5,0.7,1.5,1.5l0,0C12.2,61.4,11.6,62.1,10.7,62.1L10.7,62.1
	L10.7,62.1z M10.7,70.3c-0.9,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5c0.9,0,1.5,0.7,1.5,1.5l0,0C12.2,69.6,11.6,70.3,10.7,70.3L10.7,70.3
	L10.7,70.3z M10.7,78.5c-0.9,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5c0.9,0,1.5,0.7,1.5,1.5l0,0C12.2,77.8,11.6,78.5,10.7,78.5L10.7,78.5
	L10.7,78.5z M2.7,45.6c-0.9,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5c0.9,0,1.5,0.7,1.5,1.5l0,0C4.3,44.9,3.6,45.6,2.7,45.6L2.7,45.6
	L2.7,45.6z M2.7,53.8c-0.9,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5c0.9,0,1.5,0.7,1.5,1.5l0,0C4.3,53.2,3.6,53.8,2.7,53.8
	C2.7,53.9,2.7,53.9,2.7,53.8L2.7,53.8z M2.7,62.1c-0.9,0-1.5-0.7-1.5-1.5S1.9,59,2.7,59c0.9,0,1.5,0.7,1.5,1.5l0,0
	C4.3,61.4,3.6,62.1,2.7,62.1L2.7,62.1L2.7,62.1z M2.7,70.3c-0.9,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5c0.9,0,1.5,0.7,1.5,1.5l0,0
	C4.3,69.6,3.6,70.3,2.7,70.3L2.7,70.3L2.7,70.3z M2.7,78.5c-0.9,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5c0.9,0,1.5,0.7,1.5,1.5l0,0
	C4.3,77.8,3.6,78.5,2.7,78.5L2.7,78.5L2.7,78.5z`;
  return (
    <>
      <section
        className="services-area services-two "
        style={{ marginTop: "120px" }}
      >
        {/*======  Start Section Title Six ======*/}
        <div className="section-title-six">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="content">
                  <h2 className="fw-bold">Why Choose Us</h2>
                  <p>
                    Choose us for innovative, customized web solutions, expert
                    design, reliable support, and affordable pricing that
                    elevates your online presence.
                  </p>
                </div>
              </div>
            </div>
            {/* row */}
          </div>
          {/* container */}
        </div>
        {/*======  End Section Title Six ======*/}
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay=".2s"
            >
              {/* Start Single Service */}
              <div className="single-service">
                <svg
                  className="shape"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 21.5 79.6"
                  style={{ enableBackground: "new 0 0 21.5 79.6" }}
                  xmlSpace="preserve"
                >
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n\t\t\t\t\t\t\t\t.st0 {\n\t\t\t\t\t\t\t\t\tfill: #155BD5;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t",
                    }}
                  />
                  <path className="st0" d={d} />
                </svg>
                <svg
                  className="shape2"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 21.5 79.6"
                  style={{ enableBackground: "new 0 0 21.5 79.6" }}
                  xmlSpace="preserve"
                >
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n\t\t\t\t\t\t\t\t.st0 {\n\t\t\t\t\t\t\t\t\tfill: #155BD5;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t",
                    }}
                  />
                  <path className="st0" d={d} />
                </svg>
                <span className="serial">01</span>
                <div className="service-icon">
                  <LuLeafyGreen />
                </div>
                <h3>Clean & Modern Design</h3>
                <p>
                  Our designs are a blend of simplicity and elegance, tailored
                  to align with contemporary trends. We focus on delivering a
                  visually striking and clutter-free layout that ensures your
                  brand's message is communicated effectively. With attention to
                  detail and modern aesthetics, we create designs that elevate
                  your digital presence and captivate your audience.
                </p>
              </div>
              {/* End Single Service */}
            </div>
            <div
              className="col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay=".4s"
            >
              {/* Start Single Service */}
              <div className="single-service">
                <svg
                  className="shape"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 21.5 79.6"
                  style={{ enableBackground: "new 0 0 21.5 79.6" }}
                  xmlSpace="preserve"
                >
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n\t\t\t\t\t\t\t\t.st0 {\n\t\t\t\t\t\t\t\t\tfill: #155BD5;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t",
                    }}
                  />
                  <path className="st0" d={d} />
                </svg>
                <svg
                  className="shape2"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 21.5 79.6"
                  style={{ enableBackground: "new 0 0 21.5 79.6" }}
                  xmlSpace="preserve"
                >
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n\t\t\t\t\t\t\t\t.st0 {\n\t\t\t\t\t\t\t\t\tfill: #155BD5;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t",
                    }}
                  />
                  <path className="st0" d={d} />
                </svg>
                <span className="serial">02</span>
                <div className="service-icon">
                  <BiCustomize />
                </div>
                <h3>Completely Customizable</h3>
                <p>
                  We understand that every business is unique, and your website
                  should reflect that. Our solutions are fully customizable,
                  giving you the freedom to tailor every element to match your
                  brand's identity and goals. From layouts to functionality, we
                  ensure that your website is as unique as your vision,
                  providing flexibility and personalization that sets you apart.
                </p>
              </div>
              {/* End Single Service */}
            </div>
            <div
              className="col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay=".6s"
            >
              {/* Start Single Service */}
              <div className="single-service">
                <svg
                  className="shape"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 21.5 79.6"
                  style={{ enableBackground: "new 0 0 21.5 79.6" }}
                  xmlSpace="preserve"
                >
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n\t\t\t\t\t\t\t\t.st0 {\n\t\t\t\t\t\t\t\t\tfill: #155BD5;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t",
                    }}
                  />
                  <path className="st0" d={d} />
                </svg>
                <svg
                  className="shape2"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 21.5 79.6"
                  style={{ enableBackground: "new 0 0 21.5 79.6" }}
                  xmlSpace="preserve"
                >
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n\t\t\t\t\t\t\t\t.st0 {\n\t\t\t\t\t\t\t\t\tfill: #155BD5;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t",
                    }}
                  />
                  <path className="st0" d={d} />
                </svg>
                <span className="serial">03</span>
                <div className="service-icon">
                  <GrUpdate />
                </div>
                <h3>Regular Updates</h3>
                <p>
                  We ensure your website remains modern and fully functional
                  with consistent updates. From implementing the latest
                  technologies to refining features, we keep your platform
                  secure, optimized, and aligned with industry trends. Regular
                  updates mean your website evolves with your business, staying
                  relevant and delivering the best experience to your audience.
                </p>
              </div>
              {/* End Single Service */}
            </div>
            <div
              className="col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay=".2s"
            >
              {/* Start Single Service */}
              <div className="single-service">
                <svg
                  className="shape"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 21.5 79.6"
                  style={{ enableBackground: "new 0 0 21.5 79.6" }}
                  xmlSpace="preserve"
                >
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n\t\t\t\t\t\t\t\t.st0 {\n\t\t\t\t\t\t\t\t\tfill: #155BD5;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t",
                    }}
                  />
                  <path className="st0" d={d} />
                </svg>
                <svg
                  className="shape2"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 21.5 79.6"
                  style={{ enableBackground: "new 0 0 21.5 79.6" }}
                  xmlSpace="preserve"
                >
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n\t\t\t\t\t\t\t\t.st0 {\n\t\t\t\t\t\t\t\t\tfill: #155BD5;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t",
                    }}
                  />
                  <path className="st0" d={d} />
                </svg>
                <span className="serial">04</span>
                <div className="service-icon">
                  <RiMoneyDollarCircleFill />
                </div>
                <h3>Simple Pricing</h3>
                <p>
                  We believe in transparency and simplicity when it comes to
                  pricing. Our straightforward pricing structure ensures there
                  are no hidden costs or surprises. With clear packages tailored
                  to your needs, you can easily choose the best solution for
                  your business without the hassle of complicated fees.
                </p>
              </div>
              {/* End Single Service */}
            </div>
            <div
              className="col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay=".4s"
            >
              {/* Start Single Service */}
              <div className="single-service">
                <svg
                  className="shape"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 21.5 79.6"
                  style={{ enableBackground: "new 0 0 21.5 79.6" }}
                  xmlSpace="preserve"
                >
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n\t\t\t\t\t\t\t\t.st0 {\n\t\t\t\t\t\t\t\t\tfill: #155BD5;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t",
                    }}
                  />
                  <path className="st0" d={d} />
                </svg>
                <svg
                  className="shape2"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 21.5 79.6"
                  style={{ enableBackground: "new 0 0 21.5 79.6" }}
                  xmlSpace="preserve"
                >
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n\t\t\t\t\t\t\t\t.st0 {\n\t\t\t\t\t\t\t\t\tfill: #155BD5;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t",
                    }}
                  />
                  <path className="st0" d={d} />
                </svg>
                <span className="serial">05</span>
                <div className="service-icon">
                  <MdDevices />
                </div>
                <h3>Fully Responsive</h3>
                <p>
                  Our websites are designed to deliver a seamless experience
                  across all devices. Whether it’s a desktop, tablet, or
                  smartphone, we ensure your website looks stunning and
                  functions flawlessly. With a fully responsive design, your
                  audience can connect with your brand anytime, without
                  compromise.
                </p>
              </div>
              {/* End Single Service */}
            </div>
            <div
              className="col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay=".6s"
            >
              {/* Start Single Service */}
              <div className="single-service">
                <svg
                  className="shape"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 21.5 79.6"
                  style={{ enableBackground: "new 0 0 21.5 79.6" }}
                  xmlSpace="preserve"
                >
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n\t\t\t\t\t\t\t\t.st0 {\n\t\t\t\t\t\t\t\t\tfill: #155BD5;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t",
                    }}
                  />
                  <path className="st0" d={d} />
                </svg>
                <svg
                  className="shape2"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 21.5 79.6"
                  style={{ enableBackground: "new 0 0 21.5 79.6" }}
                  xmlSpace="preserve"
                >
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n\t\t\t\t\t\t\t\t.st0 {\n\t\t\t\t\t\t\t\t\tfill: #155BD5;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t",
                    }}
                  />
                  <path className="st0" d={d} />
                </svg>
                <span className="serial">06</span>
                <div className="service-icon">
                  <PiMaskHappyFill />
                </div>
                <h3>User Friendly</h3>
                <p>
                  We create websites that are intuitive and easy to navigate,
                  ensuring a smooth experience for all users. With thoughtful
                  layouts and streamlined functionality, we make it simple for
                  your visitors to find what they need, keeping them engaged and
                  satisfied with every interaction.
                </p>
              </div>
              {/* End Single Service */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
