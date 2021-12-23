import React from "react"
import Values from "./Values"
function ValuesSection() {
  return (
    <div className="fancy-feature-twelve md-pt-100" id="why">
      <div className="bg-wrapper">
        <div className="container">
          <div className="title-style-six text-center">
            <h2>
              Unlock the <span>True Potential</span> <br />
              of <span>Community-Driven</span> Micro-Mobility
            </h2>
          </div>
          {/* End .row */}
          <Values />
        </div>
      </div>
    </div>
  )
}

export default ValuesSection
