import React from "react"
import ProvidersValues from "./ProvidersValues"

function Providers() {
  return (
    <div
      className="fancy-feature-twentySeven lg-container pt-60  md-pt-60"
      id="providers">
      <div className="container">
        <div className="title-style-six text-center mb-70 md-mb-20">
          <div className="row">
            <div className="col-xl-10 col-lg-11 m-auto">
              <div className="upper-title">Providers</div>
              <h2>
                <span> Earn Effortlessly</span> <br />
                by becoming an item provider.
              </h2>
              <p className="mt-40 md-mt-30">
                Join the community-driven mobility revolution by listing an item
                to the shelf app and start earning fees, with just three easy
                steps!
              </p>
            </div>
          </div>
        </div>
        <ProvidersValues />
      </div>
    </div>
  )
}

export default Providers
