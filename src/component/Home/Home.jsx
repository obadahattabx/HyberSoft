import "./slider-01.css";
import img from "../../assets/images/company/banner1.png";
import img2 from "../../assets/images/company/banner4.png";
import img3 from "../../assets/images/company/banner3.png";
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
                style={{ backgroundImage: `url(${img3})` }}
              >
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-xl-6 col-lg-7 col-sm-10">
                        <h2 className="carousel-title">
                          {/* HyberSoft: Your Gateway to Digital Excellence */}
                        </h2>
                        <p className="text">
                          {/* Welcome to HyberSoft, where innovation meets
                          expertise. Our mission is to help businesses thrive in
                          the digital era by delivering cutting-edge web and app
                          solutions tailored to your needs. */}
                        </p>
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
                          Turning Ideas into Digital Masterpieces
                        </h2>
                        <p className="text">
                          Every project starts with an idea. At HyberSoft, we
                          take that idea and transform it into a fully-fledged
                          digital solution, combining creativity, strategy, and
                          technical precision.
                        </p>
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
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-xl-6 col-lg-7 col-sm-10">
                        <h2 className="carousel-title">
                          HyberSoft: Your Gateway to Digital Excellence
                        </h2>
                        <p className="text">
                          Welcome to HyberSoft, where innovation meets
                          expertise. Our mission is to help businesses thrive in
                          the digital era by delivering cutting-edge web and app
                          solutions tailored to your needs.
                        </p>
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
