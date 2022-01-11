import React from "react"

const FeatureContent = [
  {
    icon: "1",
    title: "You Choose",
    subTitle: `Use our app to select an item to rent.`,
  },
  {
    icon: "2",
    title: "We Provide",
    subTitle: `We will deliver it to you wherever your'e, under Two Hours`,
  },
  {
    icon: "3",
    title: "And We Pick it Up",
    subTitle: `We will come pick it up
    when you finish using it `,
  },
]
function Providers() {
  return (
    <div
      className="fancy-feature-twelve lg-container pt-80  md-pt-80"
      id="how-it-works">
      <div className="container">
        <div className="title-style-six text-center md-mb-20">
          <div className="row">
            <div className="col-xl-10 col-lg-11 m-auto">
              <div className="upper-title">How it works</div>
              <h2>
                Renting Made <span>Easy.</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center pt-50 md-pt-20">
          {FeatureContent.map((val, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="block-style-seventeen mt-40">
                <div className="icon d-flex align-items-center justify-content-center">
                  <p className="static-text">{val.icon} </p>
                </div>
                <div className="static-text">
                  <h3>{val.title}</h3>
                  <p>{val.subTitle}</p>
                </div>
                {/* <div className="hover-text">{val.hoverText}</div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Providers
