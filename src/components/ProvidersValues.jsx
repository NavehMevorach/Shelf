import React from "react"

const featuresContent = [
  {
    icon: "1",
    title: "Add",
    desc: "Become an item provider by adding an item to the platform.",
    delayAnimation: "",
  },
  {
    icon: "2",
    title: "Earn",
    desc: "Start earning fees from ongoing transactions. It’s simple as that",
    delayAnimation: "100",
  },
  {
    icon: "3",
    title: "Rest",
    desc: "With our item management suite, you don't need to do a thing.",
    delayAnimation: "200",
  },
]

const ProvidersValues = () => {
  return (
    <div className="row">
      {featuresContent.map((val, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={val.delayAnimation}
          key={i}>
          <div className="block-style-twentySeven">
            <div className="icon d-flex align-items-end justify-content-center">
              <p className="provider-nums">{val.icon}</p>
            </div>
            <h4 className="font-gordita">{val.title}</h4>
            <p>{val.desc}</p>
          </div>
          {/* /.block-style-twentySeven */}
        </div>
      ))}
    </div>
  )
}

export default ProvidersValues
