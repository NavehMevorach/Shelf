import React from "react"
import PortfolioFour from "./PortfolioFour"

function Items() {
  return (
    <div className="fancy-portfolio-four lg-container pt-120" id="items">
      <div className="container">
        <div className="title-style-six text-center md-mb-20">
          <div className="row">
            <div className="col-xl-7 col-lg-11 m-auto">
              <div className="upper-title">A glimpse of</div>
              <h2>
                Our <span>Items</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="">
          <PortfolioFour />
        </div>
      </div>
    </div>
  )
}

export default Items
