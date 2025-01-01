import { GoProjectSymlink } from "react-icons/go";
import "./Counter.css";
import Numcounter from "./Numcounter";
import { ImHappy } from "react-icons/im";
import { IoIosCodeWorking } from "react-icons/io";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { useEffect, useState } from "react";
export default function Counter() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1900); // Check if scroll position is greater than 50
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section className="video-area">
        <div className="video-wrapper img-bg">
          <div className="container">
            <div className="text-center video-content">
              <h1 className="text-white mb-60">Our Achievements</h1>
              {/* <a href="#" className="glightbox video-btn">
                <i className="lni lni-play" />
              </a> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="upraper">
            <div className="count-up-wrapper">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="single-counter">
                    <div className="icon">
                      <GoProjectSymlink />
                    </div>
                    <span className="count">
                      {
                        <Numcounter
                          targetNumber="32"
                          duration="2000"
                          isScroledCounter={isScrolled}
                        />
                      }
                    </span>
                    <span>Projects Number</span>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single-counter">
                    <div className="icon">
                      <ImHappy />
                    </div>
                    <span className="count">
                      {
                        <Numcounter
                          targetNumber="25"
                          duration="2000"
                          isScroledCounter={isScrolled}
                        />
                      }
                    </span>
                    <span>Happy Client</span>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single-counter">
                    <div className="icon">
                      <IoIosCodeWorking />
                    </div>
                    <span className="count">
                      {
                        <Numcounter
                          targetNumber="1251"
                          duration="2000"
                          isScroledCounter={isScrolled}
                        />
                      }
                    </span>
                    <span>Working Hour</span>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single-counter">
                    <div className="icon">
                      <AiOutlineIssuesClose />
                    </div>
                    <span className="count">
                      {
                        <Numcounter
                          targetNumber="89"
                          duration="2000"
                          isScroledCounter={isScrolled}
                        />
                      }
                    </span>
                    <span>Issues Solved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
