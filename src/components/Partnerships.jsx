import React from "react"
import Tilt from "react-parallax-tilt"

function Partnerships() {
  return (
    <div
      className="fancy-feature-fourteen mt-150 pt-80 md-pt-150"
      id="partnerships">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-8">
            <div className="title-style-six">
              <h6 style={{ color: "#FF2759", fontSize: "15px" }}>
                Partnerships
              </h6>
              <h2>
                Don't Worry! <br /> We got You <span>Covered</span>
              </h2>
              <p className="text-xs pr-5 mr-5">
                Shelf is working with the finnest Insurance companies out there.
                All items are isnured, all rides are insured so you can be
                always Carefree
              </p>
            </div>
            {/*  /.title-style-six */}
          </div>

          <div className="col-lg-5 ml-auto">
            <div className="right-side md-mt-60">
              <div className="row">
                <div className="col">
                  <Tilt>
                    <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                      <img src="images/logo/logo-17.svg" alt="logo" />
                    </div>
                  </Tilt>
                  <Tilt>
                    <div className="logo-meta d-flex align-items-center justify-content-center ">
                      <img src="images/logo/logo-18.svg" alt="logo" />
                    </div>
                  </Tilt>
                </div>
                {/* End .col */}

                <div className="col">
                  <Tilt>
                    <div className="logo-meta mt-40 d-flex align-items-center justify-content-center ">
                      <img src="images/logo/logo-19.svg" alt="logo" />
                    </div>
                  </Tilt>
                  <Tilt>
                    <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                      <img src="images/logo/logo-20.svg" alt="logo" />
                    </div>
                  </Tilt>
                </div>
                {/* End .col */}
              </div>
            </div>
            {/* /.right-side */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partnerships
