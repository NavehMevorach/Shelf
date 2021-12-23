import React from "react"
import plus from "./../assets/images/icon/plus.svg"
import coin from "./../assets/images/icon/coin.svg"
import laughing from "./../assets/images/icon/laughing.svg"

const FeatureContent = [
  {
    icon: plus,
    title: "Add",
    subTitle: `Become an item provider by adding an item to the platform`,
    hoverText: `Bring all team slit managment task quis togather.`,
  },
  {
    icon: coin,
    title: "Earn",
    subTitle: `Start earning fees from ongoing transactions. It’s simple as that`,
    hoverText: `  Bring all team slit managment task quis togather.`,
  },
  {
    icon: laughing,
    title: "Rest",
    subTitle: `With our item management suite, you don't need to do a thing`,
    hoverText: `  Bring all team slit managment task quis togather.`,
  },
]
function Providers() {
  return (
    <div
      className="fancy-feature-twentySeven lg-container pt-80 md-mt-80 md-pt-60"
      id="providers">
      <div className="container">
        <div className="title-style-six text-center md-mb-20">
          <div className="row">
            <div className="col-xl-10 col-lg-11 m-auto">
              <div className="upper-title">Providers</div>
              <h2>
                Becoming an item provider <br />
                and <span>Earn</span> Money <span>Effortlessly</span>
              </h2>
              <p className="mt-40 md-mt-30">
                Join the community-driven mobility revolution by listing an item
                to the shelf app and start earning fees, with just three easy
                steps!
              </p>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  )
}

export default Providers
