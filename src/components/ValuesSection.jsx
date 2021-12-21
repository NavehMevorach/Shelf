import React from "react"
import Values from "./Values"
function ValuesSection() {
  return (
    <div className="fancy-feature-twelve  md-pt-50" id="about">
      <div className="bg-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-10 col-md-8 m-auto">
              <div className="title-style-six text-center">
                <h2>
                  Do <span>More</span>, Pay <span>Less</span>
                </h2>
              </div>
              {/* /.title-style-six */}
            </div>
          </div>
          {/* End .row */}
          <Values />
        </div>
      </div>
    </div>
  )
}

export default ValuesSection
