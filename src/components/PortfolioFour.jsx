import React from "react"
import { Link } from "react-router-dom"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import SimpleReactLightbox from "simple-react-lightbox"
import { SRLWrapper } from "simple-react-lightbox"
import img_15 from "./../assets/images/assets/img_15.jpg"
import img_16 from "./../assets/images/assets/img_16.jpg"
import img_17 from "./../assets/images/assets/img_17.jpg"
import img_20 from "./../assets/images/assets/img_20.jpg"

const TabListContent = [
  "Entertainment",
  "Kitchen",
  "Party",
  "Music",
  "Photography",
]

const Entertainment = [
  {
    img: img_20,
    title: "The Gang Blue",
    meta: "Development, Design",
    dalayAnimation: "",
  },
  {
    img: img_20,
    title: "Core WordPress",
    meta: "Development, Plugin",
    dalayAnimation: "100",
  },
  {
    img: img_20,
    title: "Platform Audit",
    meta: "Development, Branding",
    dalayAnimation: "200",
  },
  {
    img: img_20,
    title: "Medieval origins",
    meta: "Development, Design",
    dalayAnimation: "0",
  },
  {
    img: img_20,
    title: "Designer’s Checklist",
    meta: "Development, Plugin",
    dalayAnimation: "100",
  },
  {
    img: img_20,
    title: "Motivation defining Moment",
    meta: "Development, Design",
    dalayAnimation: "200",
  },
]

const Kitchen = [
  {
    img: "img_16",
    title: "Core WordPress",
    meta: "Development, Plugin",
    dalayAnimation: "100",
  },
  {
    img: "img_18",
    title: "Medieval origins",
    meta: "Development, Design",
    dalayAnimation: "0",
  },
  {
    img: "img_22",
    title: "Lets catch amd",
    meta: "Development, Design",
    dalayAnimation: "100",
  },
]

const Party = [
  {
    img: "img_17",
    title: "Platform Audit",
    meta: "Development, Branding",
    dalayAnimation: "200",
  },
  {
    img: "img_19",
    title: "Designer’s Checklist",
    meta: "Development, Plugin",
    dalayAnimation: "100",
  },
  {
    img: "img_21",
    title: "Experience WordCamp",
    meta: "Development, Design",
    dalayAnimation: "0",
  },
  {
    img: "img_23",
    title: "Experience WordCamp",
    meta: "Development, Branding",
    dalayAnimation: "200",
  },
]

const Music = [
  {
    img: "img_15",
    title: "The Gang Blue",
    meta: "Development, Design",
    dalayAnimation: "",
  },
  {
    img: "img_18",
    title: "Medieval origins",
    meta: "Development, Design",
    dalayAnimation: "0",
  },

  {
    img: "img_20",
    title: "Motivation defining Moment",
    meta: "Development, Design",
    dalayAnimation: "200",
  },
]

const Photography = [
  {
    img: "img_16",
    title: "Core WordPress",
    meta: "Development, Plugin",
    dalayAnimation: "100",
  },
  {
    img: "img_17",
    title: "Platform Audit",
    meta: "Development, Branding",
    dalayAnimation: "200",
  },
  {
    img: "img_21",
    title: "Experience WordCamp",
    meta: "Development, Design",
    dalayAnimation: "0",
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
                  <div className="portfolio-block-two position-relative">
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        src={item.img}
                        alt={item.meta}
                        className="w-100 h-100 tran4s img-meta"
                      />
                      <div className="fancybox">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                      </div>
                    </div>
                    <div className="hover-content">
                      <h3>
                        <Link to="/portfolio-details-v1">{item.title}</Link>
                      </h3>
                      <div className="tag">{item.meta}</div>
                    </div>
                    {/* /.hover-content */}
                  </div>
                  {/* /.portfolio-block-two */}
                </div>
              ))}
            </div>
            {/* single mixitUp-container */}
          </TabPanel>
          <TabPanel>
            <div className="mixitUp-container gutter-space-one d-flex flex-wrap">
              {Kitchen.map((item, i) => (
                <div
                  className={`mix ${item.imgClass}`}
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={item.dalayAnimation}>
                  <div className="portfolio-block-two position-relative">
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        src={img_15}
                        alt={item.meta}
                        className="w-100 h-100 tran4s img-meta"
                      />
                      <div className="fancybox">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                      </div>
                    </div>
                    <div className="hover-content">
                      <h3>
                        <Link to="/portfolio-details-v1">{item.title}</Link>
                      </h3>
                      <div className="tag">{item.meta}</div>
                    </div>
                    {/* /.hover-content */}
                  </div>
                  {/* /.portfolio-block-two */}
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mixitUp-container gutter-space-one d-flex flex-wrap">
              {Party.map((item, i) => (
                <div
                  className={`mix ${item.imgClass}`}
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={item.dalayAnimation}>
                  <div className="portfolio-block-two position-relative">
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        src={img_15}
                        alt={item.meta}
                        className="w-100 h-100 tran4s img-meta"
                      />
                      <div className="fancybox">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                      </div>
                    </div>
                    <div className="hover-content">
                      <h3>
                        <Link to="/portfolio-details-v1">{item.title}</Link>
                      </h3>
                      <div className="tag">{item.meta}</div>
                    </div>
                    {/* /.hover-content */}
                  </div>
                  {/* /.portfolio-block-two */}
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mixitUp-container gutter-space-one d-flex flex-wrap">
              {Music.map((item, i) => (
                <div
                  className={`mix ${item.imgClass}`}
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={item.dalayAnimation}>
                  <div className="portfolio-block-two position-relative">
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        src={img_15}
                        alt={item.meta}
                        className="w-100 h-100 tran4s img-meta"
                      />
                      <div className="fancybox">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                      </div>
                    </div>
                    <div className="hover-content">
                      <h3>
                        <Link to="/portfolio-details-v1">{item.title}</Link>
                      </h3>
                      <div className="tag">{item.meta}</div>
                    </div>
                    {/* /.hover-content */}
                  </div>
                  {/* /.portfolio-block-two */}
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mixitUp-container gutter-space-one d-flex flex-wrap">
              {Photography.map((item, i) => (
                <div
                  className={`mix ${item.imgClass}`}
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={item.dalayAnimation}>
                  <div className="portfolio-block-two position-relative">
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        src={img_15}
                        alt={item.meta}
                        className="w-100 h-100 tran4s img-meta"
                      />
                      <div className="fancybox">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                      </div>
                    </div>
                    <div className="hover-content">
                      <h3>
                        <Link to="/portfolio-details-v1">{item.title}</Link>
                      </h3>
                      <div className="tag">{item.meta}</div>
                    </div>
                    {/* /.hover-content */}
                  </div>
                  {/* /.portfolio-block-two */}
                </div>
              ))}
            </div>
          </TabPanel>
        </SRLWrapper>
      </Tabs>
    </SimpleReactLightbox>
  )
}

export default PortfolioFour
