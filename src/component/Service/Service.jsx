import { LuAppWindow } from "react-icons/lu";
import "./Service.css";
import { SiAffinitydesigner } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
export default function Service() {
  return (
    <>
      <section className="service-area pt-110 pb-110">
        <div className="container">
          <div className="row">
            <div className="mx-auto col-xl-6 col-lg-7 col-md-10">
              <div className="text-center section-title mb-60">
                <h1>Services</h1>
                <p>
                  We offer expert web application development, custom UI/UX
                  design, website redesign, and reliable technical support to
                  enhance your online presence.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center d-flex  flex-wrap  ">
            <div className="col-lg-6 col-md-6 col-sm-8 col-11 ">
              <div className="single-service">
                <div className="icon">
                  <LuAppWindow />
                </div>
                <div className="service-content">
                  <h3>Web Application Development</h3>
                  <p>
                    Development of robust, scalable web applications tailored to
                    your business processes and goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-8 col-11">
              <div className="single-service">
                <div className="icon">
                  <SiAffinitydesigner />
                </div>
                <div className="service-content">
                  <h3>UI/UX Design</h3>
                  <p>
                    Designing intuitive user interfaces and seamless user
                    experiences that engage and retain your visitors.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-8 col-11">
              <div className="single-service">
                <div className="icon">
                  <MdOutlineDesignServices />
                </div>
                <div className="service-content">
                  <h3>Website Redesign</h3>
                  <p>
                    Refresh your existing website with a modern design, improved
                    user experience, and enhanced functionality.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-8 col-11">
              <div className="single-service">
                <div className="icon">
                  <BiSupport />
                </div>
                <div className="service-content">
                  <h3>Technical Support</h3>
                  <p>
                    Provide expert troubleshooting, system optimization, and
                    technical assistance to ensure your website operate without
                    interruption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
