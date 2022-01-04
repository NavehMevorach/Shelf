import React from "react"
import appOne from "./../assets/images/assets/appOne.png"
import appTwo from "./../assets/images/assets/appTwo.png"
import appThree from "./../assets/images/assets/appThree.png"

function UserFlow() {
  return (
    <div className="fancy-feature-seven" id="how-it-works">
      <div className="container">
        <div className="block-wrapper">
          <div className="block-style-nine">
            <div className="row">
              <div
                className="col-lg-5 order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200">
                <div className="text-wrapper">
                  <h6>LOCATE</h6>
                  <h3 className="title">Locate a vehicle nearby</h3>
                  <p className="font-gordita">
                    Use the shlef app to find and navigate to a nearby vehicel.
                    you can filter them by type, battery cost and location.
                  </p>
                </div>{" "}
                {/* /.text-wrapper */}
              </div>
              <div
                className="col-lg-7 col-md-9 m-auto order-lg-last "
                data-aos="fade-left"
                data-aos-duration="1200">
                <div className="illustration-holder illustration-holder--end ">
                  <img src={appOne} alt="illustrator" />
                </div>{" "}
                {/* /.illustration-holder */}
              </div>
            </div>
          </div>
          <div className="block-style-nine">
            <div className="row ">
              <div
                className="col-lg-7 col-md-9 m-auto block-style-nine-col-second"
                data-aos="fade-right"
                data-aos-duration="1200">
                <div className="illustration-holder">
                  <img src={appTwo} alt="illustrator" />
                </div>{" "}
              </div>
              <div
                className="col-lg-5 block-style-nine-col-first"
                data-aos="fade-left"
                data-aos-duration="12000">
                <div className="text-wrapper">
                  <h6>UNLOCK</h6>
                  <h3 className="title">
                    Unlock the smart lock with the Shelf app
                  </h3>
                  <p className="font-gordita">
                    When you arrive at the vehicle, scan the lock and get the
                    vehicle item to ensure you come to the right one. Then
                    unlock the lock through the app.
                  </p>
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="block-style-nine">
            <div className="row ">
              <div
                className="col-lg-5"
                data-aos="fade-right"
                data-aos-duration="1200">
                <div className="text-wrapper">
                  <h6>RIDE</h6>
                  <h3 className="title font-gordita">
                    Ride with pride because you just helped the planet :)
                  </h3>
                  <p className="font-gordita">
                    With each ride, you cut co2 emissions. Sharing micro
                    mobility transportation is the future of sustainable urban
                    mobility, and you should be proud that you are part of this
                    revolution.
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
              <div
                className="col-lg-7 col-md-9 m-auto"
                data-aos="fade-left"
                data-aos-duration="1200">
                <div className="illustration-holder illustration-holder--end">
                  <img src={appThree} alt="illustrator" />
                </div>
                {/* /.illustration-holder */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserFlow
