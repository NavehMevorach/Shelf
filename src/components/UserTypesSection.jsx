import React from "react"
import UserTypes from "./UserTypes"

function UserTypesSection() {
  return (
    <div
      className="pricing-section-five pt-250 md-mt-150 sm-mt-80 md-pt-80"
      id="pricing">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 order-lg-last">
            <div className="title-style-six pl-5 md-p0">
              <h6 style={{ fontSize: "15px" }}>Join us</h6>
              <h2>
                Its Time to Choose <span>Your</span> Way.
              </h2>
              <p className="text-xs">
                Lorem ipsum dolor on adipisci elit sed do eiusmod liu.
              </p>
            </div>
            {/* /.title-style-six */}
          </div>
          {/* End .col */}

          <div className="col-lg-7">
            <div className="pricing-table-area-five md-mt-60">
              <UserTypes />
            </div>
            {/* /.pricing-table-area-five */}
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
    </div>
  )
}

export default UserTypesSection
