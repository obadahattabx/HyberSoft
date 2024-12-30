import "./Ourcompany.css";
import img from "/src/assets/images/company/about.jpg";
export default function Ourcompany() {
  return (
    <>
      <div className="container-xxl py-5 ">
        <div className="container ">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img className="img-fluid w-100" src={img} />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4"> About Our Company</h1>
              <p className="mb-4">
                At HyberSoft, we specialise in delivering high-quality, custom
                web development solutions that meet your business needs. Our
                team of expert developers and designers works tirelessly to
                create clean, modern, and responsive websites that provide a
                seamless user experience. Whether you're looking to build a
                brand-new website, redesign an existing one, or develop a web
                application, we are here to turn your ideas into reality.
              </p>

              <a className="btn btn-primary py-3 px-5 mt-3 d-none" href>
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
