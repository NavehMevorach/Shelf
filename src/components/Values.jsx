import React from "react"
import globe from "./../assets/images/icon/globe.svg"
import wallet from "./../assets/images/icon/wallet.svg"
import time from "./../assets/images/icon/time-history.svg"

const FeatureContent = [
  {
    icon: wallet,
    title: "Access More, Pay Less.",
    subTitle: `Get access to what you need for a fraction of the price. `,
  },
  {
    icon: time,
    title: "Save Storage Area.",
    subTitle: `Keep you home clean from unused items.`,
  },
  {
    icon: globe,
    title: "Save the Planet.",
    subTitle: `Use the world inventory in a sustainable way. `,
  },
]

const FancyFeatureTwelve = () => {
  return (
    <div className="row justify-content-center pt-50 md-pt-20">
      {FeatureContent.map((val, i) => (
        <div className="col-lg-4 col-md-6" key={i}>
          <div className="block-style-seventeen mt-40">
            <div className="icon d-flex align-items-center justify-content-center">
              <img src={val.icon} alt="icon" />
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
  )
}

export default FancyFeatureTwelve
