import React from "react"
import appOne from "./../assets/images/assets/appOne.png"
import appTwo from "./../assets/images/assets/appTwo.png"

function UserFlow() {
  return (
    <div className="fancy-feature-seven">
      <div className="container">
        <div className="title-style-six text-center mb-250 md-mb-150">
          <h2>
            Unlock the true <span>Potential</span> <br />
            of Community-Driven Micro-Mobility
          </h2>
        </div>

        <div className="block-wrapper" id="user-flow">
          <div className="block-style-nine">
            <div className="row align-items-center">
              <div
                className="col-lg-5 order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200">
                <div className="text-wrapper">
                  <h6>LOCATE</h6>
                  <h3 className="title">
                    Locate a vehicle near by
                  </h3>
                  <p className="font-gordita">
                    Run your box office as it’s own website, embed it into your
                    website with a simple piece of HTML or widget, or put it on
                    your Facebook page*. All with a reliable, mobile-friendly
                    design.
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
            <div className="row align-items-center">
              <div
                className="col-lg-7 col-md-9 m-auto block-style-nine-col-second"
                data-aos="fade-right"
                data-aos-duration="1200">
                <div className="illustration-holder">
                  <img src={appTwo} alt="illustrator" />
                </div>{" "}
                {/* /.illustration-holder */}
              </div>
              <div
                className="col-lg-5 block-style-nine-col-first"
                data-aos="fade-left"
                data-aos-duration="1200">
                <div className="text-wrapper">
                  <h6>NLOCK</h6>
                  <h3 className="title">
                    Unloack the smart lock with the Shlef app
                  </h3>
                  <p className="font-gordita">
                    Set-up a simple, professional box-office page on your site
                    (or standalone) in minutes. Then design & customise it as
                    much (or as little) as you like with our user-friendly
                    dashboard.
                  </p>
                </div>{" "}
                {/* /.text-wrapper */}
              </div>
            </div>
          </div>
          <div className="block-style-nine">
            <div className="row align-items-center">
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
                    Set-up a simple, professional box-office page on your site
                    (or standalone) in minutes. Then design and customise it as
                    much (or as little) as you like with our user-friendly
                    dashboard
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
              <div
                className="col-lg-7 col-md-9 m-auto"
                data-aos="fade-left"
                data-aos-duration="1200">
                <div className="illustration-holder illustration-holder--end">
                  <img src={appOne} alt="illustrator" />
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
