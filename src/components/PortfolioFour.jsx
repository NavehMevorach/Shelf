import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import SimpleReactLightbox from "simple-react-lightbox"
import { SRLWrapper } from "simple-react-lightbox"

const TabListContent = [
  "Entertainment",
  "Kitchen",
  "Party",
  "Music",
  "Photography",
  "Utilities",
]

const Entertainment = [
  {
    title: "Board Games",
    meta: "Development, Design",
    dalayAnimation: "0",
  },
  {
    title: "Game Console",
    meta: "Development, Plugin",
    dalayAnimation: "100",
  },
  {
    title: "VR Set",
    meta: "Development, Branding",
    dalayAnimation: "200",
  },
  {
    title: "Projector",
    meta: "Development, Design",
    dalayAnimation: "300",
  },
  {
    title: "Surfboard",
    meta: "Development, Plugin",
    dalayAnimation: "400",
  },
]

const Kitchen = [
  {
    title: "Mixer",
    meta: "Development, Plugin",
    dalayAnimation: "0",
  },
  {
    title: "Blender",
    meta: "Development, Design",
    dalayAnimation: "100",
  },
  {
    title: "Rice maker",
    meta: "Development, Design",
    dalayAnimation: "200",
  },
  {
    title: "Waffle Maker",
    meta: "Development, Design",
    dalayAnimation: "300",
  },
  {
    title: "Pancake Maker",
    meta: "Development, Design",
    dalayAnimation: "400",
  },
]

const Party = [
  {
    title: "Cocktail kit",
    meta: "Development, Branding",
    dalayAnimation: "0",
  },
  {
    title: "Party games kit",
    meta: "Development, Plugin",
    dalayAnimation: "100",
  },
  {
    title: "Party Decoration",
    meta: "Development, Design",
    dalayAnimation: "200",
  },
  {
    title: "Chairs",
    meta: "Development, Branding",
    dalayAnimation: "300",
  },
]

const Music = [
  {
    title: "Recording Equipment",
    meta: "Development, Design",
    dalayAnimation: "0",
  },
  {
    title: "Mixer",
    meta: "Development, Design",
    dalayAnimation: "100",
  },

  {
    title: "Instruments",
    meta: "Development, Design",
    dalayAnimation: "200",
  },
  {
    title: "Speakers",
    meta: "Development, Design",
    dalayAnimation: "300",
  },
]

const Photography = [
  {
    title: "Professinal Camera",
    meta: "Development, Plugin",
    dalayAnimation: "0",
  },
  {
    title: "Go-pro",
    meta: "Development, Branding",
    dalayAnimation: "100",
  },
  {
    title: "Video Camera",
    meta: "Development, Design",
    dalayAnimation: "200",
  },
  {
    title: "Tripods",
    meta: "Development, Design",
    dalayAnimation: "300",
  },
  {
    title: "Drones",
    meta: "Development, Design",
    dalayAnimation: "400",
  },
]
const Utilities = [
  {
    title: "Hardware tools",
    meta: "Development, Plugin",
    dalayAnimation: "0",
  },
  {
    title: "Driller",
    meta: "Development, Plugin",
    dalayAnimation: "100",
  },
  {
    title: "Hosting kit",
    meta: "Development, Plugin",
    dalayAnimation: "200",
  },
  {
    title: "Hardware tools",
    meta: "Development, Plugin",
    dalayAnimation: "300",
  },
  {
    title: "Snow Blower",
    meta: "Development, Plugin",
    dalayAnimation: "400",
  },
  {
    title: "Lawn Mower",
    meta: "Development, Branding",
    dalayAnimation: "500",
  },
  {
    title: "Ladder",
    meta: "Development, Design",
    dalayAnimation: "600",
  },
]

const PortfolioFour = () => {
  return (
    <SimpleReactLightbox>
      <Tabs className="portfolio-container">
        <div className="controls po-control-one text-center mb-90 md-mb-50 mt-90 md-mt-60">
          <TabList className="d-flex flex-wrap justify-content-center">
            {TabListContent.map((tab, i) => (
              <Tab key={i}>
                <button type="button" className="control">
                  {tab}
                </button>
              </Tab>
            ))}
          </TabList>
        </div>
        {/* End pc-control-one */}
        <SRLWrapper>
          <TabPanel>
            <div className="mixitUp-container  gutter-space-one d-flex flex-wrap">
              {Entertainment.map((item, i) => (
                <div
                  className="mix"
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={item.dalayAnimation}>
                  <div className="block-style-seventeen block-style-seventeen--items">
                    <div className="static-text">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  {/* /.portfolio-block-two */}
                </div>
              ))}
            </div>
            {/* single mixitUp-container */}
          </TabPanel>
          <TabPanel>
            <div className="mixitUp-container  gutter-space-one d-flex flex-wrap">
              {Kitchen.map((item, i) => (
                <div
                  className="mix"
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={item.dalayAnimation}>
                  <div className="block-style-seventeen block-style-seventeen--items">
                    <div className="static-text">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  {/* /.portfolio-block-two */}
                </div>
              ))}
            </div>
            {/* single mixitUp-container */}
          </TabPanel>
          <TabPanel>
            <div className="mixitUp-container  gutter-space-one d-flex flex-wrap">
              {Party.map((item, i) => (
                <div
                  className="mix"
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={item.dalayAnimation}>
                  <div className="block-style-seventeen block-style-seventeen--items">
                    <div className="static-text">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  {/* /.portfolio-block-two */}
                </div>
              ))}
            </div>
            {/* single mixitUp-container */}
          </TabPanel>
          <TabPanel>
            <div className="mixitUp-container  gutter-space-one d-flex flex-wrap">
              {Music.map((item, i) => (
                <div
                  className="mix"
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={item.dalayAnimation}>
                  <div className="block-style-seventeen block-style-seventeen--items">
                    <div className="static-text">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  {/* /.portfolio-block-two */}
                </div>
              ))}
            </div>
            {/* single mixitUp-container */}
          </TabPanel>
          <TabPanel>
            <div className="mixitUp-container  gutter-space-one d-flex flex-wrap">
              {Photography.map((item, i) => (
                <div
                  className="mix"
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={item.dalayAnimation}>
                  <div className="block-style-seventeen block-style-seventeen--items">
                    <div className="static-text">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  {/* /.portfolio-block-two */}
                </div>
              ))}
            </div>
            {/* single mixitUp-container */}
          </TabPanel>
          <TabPanel>
            <div className="mixitUp-container  gutter-space-one d-flex flex-wrap">
              {Utilities.map((item, i) => (
                <div
                  className="mix"
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={item.dalayAnimation}>
                  <div className="block-style-seventeen block-style-seventeen--items">
                    <div className="static-text ">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  {/* /.portfolio-block-two */}
                </div>
              ))}
            </div>
            {/* single mixitUp-container */}
          </TabPanel>
        </SRLWrapper>
      </Tabs>
    </SimpleReactLightbox>
  )
}

export default PortfolioFour

// <TabPanel>
// <div className="mixitUp-container gutter-space-one d-flex flex-wrap">
//   {Photography.map((item, i) => (
//     <div
//       className={`mix ${item.imgClass}`}
//       key={i}
//       data-aos="fade-right"
//       data-aos-delay={item.dalayAnimation}>
//       <div className="portfolio-block-two position-relative">
//         <div className="d-flex align-items-center justify-content-center">
//           <img
//             src={img_15}
//             alt={item.meta}
//             className="w-100 h-100 tran4s img-meta"
//           />
//           <div className="fancybox">
//             <i className="fa fa-arrows-alt" aria-hidden="true"></i>
//           </div>
//         </div>
//         <div className="hover-content">
//           <h3>
//             <Link to="/portfolio-details-v1">{item.title}</Link>
//           </h3>
//           <div className="tag">{item.meta}</div>
//         </div>
//         {/* /.hover-content */}
//       </div>
//       {/* /.portfolio-block-two */}
//     </div>
//   ))}
// </div>
// </TabPanel>
