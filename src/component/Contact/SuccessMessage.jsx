const SuccessMessage = () => {
  return (
    <div
      className="position-fixed  bottom-50 start-0  w-100 0 "
      style={{
        zIndex: 60,
      }}
    >
      <div className="container py-12">
        <div className="d-flex justify-content-center">
          <div
            className="alert alert-success bg-success px-8 border-0 "
            role="alert"
          >
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0 pe-6 ">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="15.5"
                    stroke="#5B627C"
                  ></rect>
                  <line
                    x1="9.35355"
                    y1="16.6464"
                    x2="13.3536"
                    y2="20.6464"
                    stroke="#19191B"
                  ></line>
                  <line
                    x1="23.3536"
                    y1="11.3536"
                    x2="13.3536"
                    y2="21.3536"
                    stroke="#19191B"
                  ></line>
                </svg>
              </div>
              <div className="py-2 ps-5 border-start border-dark-light border-opacity-10">
                <span className="d-inline-block fw-semibold">
                  Success Send Message.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
