import "./slider-01.css";
import img from "../../assets/images/banner.png";
import img2 from "../../assets/images/slider/2.jpg";
import img3 from "../../assets/images/slider/3.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
export default function Home() {
  // const styles={backgroundImage: `url(${/assets/images/})`}
  return (
    <>
      <section className="slider-area slider-one ">
        <div className="bd-example">
          <div
            id="carouselOne"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-bs-target="#carouselOne"
                data-bs-slide-to={0}
                className="active"
              />
              <li data-bs-target="#carouselOne" data-bs-slide-to={1} />
              <li data-bs-target="#carouselOne" data-bs-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div
                className="carousel-item bg_cover active"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-xl-6 col-lg-7 col-sm-10">
                        <h2 className="carousel-title">
                          Unlimited Friendly &amp; Easy Customisable
                        </h2>
                        <p className="text">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard.
                        </p>
                        <ul className="carousel-btn rounded-buttons">
                          <li>
                            <a
                              className="btn primary-btn rounded-full"
                              href="javascript:void(0)"
                            >
                              GET STARTED
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn primary-btn-outline rounded-full"
                              href="javascript:void(0)"
                            >
                              DOWNLOAD
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* row */}
                  </div>
                  {/* container */}
                </div>
                {/* carousel caption */}
              </div>
              {/* carousel-item */}
              <div
                className="carousel-item bg_cover"
                style={{ backgroundImage: `url(${img2})` }}
              >
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-xl-6 col-lg-7 col-sm-10">
                        <h2 className="carousel-title">
                          Unlimited Friendly &amp; Easy Customisable
                        </h2>
                        <p className="text">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard.
                        </p>
                        <ul className="carousel-btn rounded-buttons">
                          <li>
                            <a
                              className="btn primary-btn rounded-full"
                              href="javascript:void(0)"
                            >
                              GET STARTED
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn primary-btn-outline rounded-full"
                              href="javascript:void(0)"
                            >
                              DOWNLOAD
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* row */}
                  </div>
                  {/* container */}
                </div>
                {/* carousel caption */}
              </div>
              {/* carousel-item */}
              <div
                className="carousel-item bg_cover"
                style={{ backgroundImage: `url(${img3})` }}
              >
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-xl-6 col-lg-7 col-sm-10">
                        <h2 className="carousel-title">
                          Unlimited Friendly &amp; Easy Customisable
                        </h2>
                        <p className="text">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard.
                        </p>
                        <ul className="carousel-btn rounded-buttons">
                          <li>
                            <a
                              className="btn primary-btn rounded-full"
                              href="javascript:void(0)"
                            >
                              GET STARTED
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn primary-btn-outline rounded-full"
                              href="javascript:void(0)"
                            >
                              DOWNLOAD
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* row */}
                  </div>
                  {/* container */}
                </div>
                {/* carousel caption */}
              </div>
              {/* carousel-item */}
            </div>
            {/* carousel-inner */}
            <a
              className="carousel-control-prev"
              href="#carouselOne"
              role="button"
              data-bs-slide="prev"
            >
              <FaArrowLeft />
            </a>
            <a
              className="carousel-control-next"
              href="#carouselOne"
              role="button"
              data-bs-slide="next"
            >
              <FaArrowRight />
            </a>
          </div>
          {/* carousel */}
        </div>
        {/* bd-example */}
      </section>
    </>
  );
}
