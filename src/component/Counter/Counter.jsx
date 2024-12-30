import './Counter.css';
export default function Counter() {
  return (
    <>
      <section className="video-area">
        <div className="video-wrapper img-bg">
          <div className="container">
            <div className="text-center video-content">
              <h1 className="text-white mb-60">Learn More About ClassiList</h1>
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
                            <i className="lni lni-layers" />
                        </div>
                        <span className="count">30</span>
                        <span>Projects Number</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-counter">
                        <div className="icon">
                            <i className="lni lni-map-marker" />
                        </div>
                        <span className="count">25</span>
                        <span>Happy Client</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-counter">
                        <div className="icon">
                            <i className="lni lni-users" />
                        </div>
                        <span className="count">1251</span>
                        <span>Working Hour</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-counter">
                        <div className="icon">
                            <i className="lni lni-briefcase" />
                        </div>
                        <span className="count">89</span>
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
