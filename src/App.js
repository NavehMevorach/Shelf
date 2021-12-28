import React, { useEffect } from "react"
import Routes from "./router/Routes"
import ScrollToTop from "./components/ScrollToTop"
import AOS from "aos"
import "aos/dist/aos.css"
import GA4React from "ga-4-react"
const ga4react = new GA4React("G-70NMJDP9ZT")

const initGA = () => {
  ga4react.initialize().then(
    (ga4) => {
      ga4.pageview("path")
      ga4.gtag("event", "pageview", "path") // or your custom gtag event
    },
    (err) => {
      console.error(err)
    }
  )
}

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  }, [])
  useEffect(() => {
    // This line will trigger on a route change
    initGA()
  })

  return (
    <>
      <ScrollToTop />
      <Routes />
    </>
  )
}

export default App
