import React from "react"
import { Helmet } from "react-helmet"
import HeaderLandingDark from "../components/header/HeaderLandingDark"
import Hero from "../components/Hero"
import ValuesSection from "../components/ValuesSection"
import UserFlow from "../components/UserFlow"
import Partnerships from "../components/Partnerships"
import PartnershipsTwo from "../components/PartnershipsTwo"
import LastCta from "../components/LastCta"
import FooterSection from "../components/FooterSection"
import Providers from "../components/Providers"
import About from "../components/About"
import Items from "../components/Items"

const ProductLandingDark = () => {
  return (
    <div className="main-page-wrapper font-gordita dark-style lg-container p0">
      <Helmet>
        <title>Shelf - Beyond Ownership</title>
      </Helmet>
      <HeaderLandingDark />
      <Hero />
      <About />
      <ValuesSection />
      <Items />
      {/* <UserFlow /> */}
      <Providers />
      {/* <Partnerships /> */}
      <PartnershipsTwo />
      <LastCta />
      <FooterSection />
    </div>
  )
}

export default ProductLandingDark
