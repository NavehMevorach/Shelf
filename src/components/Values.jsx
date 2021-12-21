import React from "react"

const FeatureContent = [
  {
    icon: "78",
    title: "On Demand Mobility",
    subTitle: `Get access to what you need for a fraction of the price. `,
    hoverText: `Bring all team slit managment task quis togather.`,
  },
  {
    icon: "79",
    title: "Earn Frictionlessly",
    subTitle: `Make passive income simply by providing items to the platform`,
    hoverText: `  Bring all team slit managment task quis togather.`,
  },
  {
    icon: "80",
    title: "Ride with Pride ",
    subTitle: `Use the world inventory in a sustainable way. `,
    hoverText: `  Bring all team slit managment task quis togather.`,
  },
]

const FancyFeatureTwelve = () => {
  return (
    <div className="row justify-content-center pt-50 md-pt-20">
      {FeatureContent.map((val, i) => (
        <div className="col-lg-4 col-md-6" key={i}>
          <div className="block-style-seventeen mt-40">
            <div className="icon d-flex align-items-center justify-content-center">
              <img src={`images/icon/${val.icon}.svg`} alt="icon" />
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
