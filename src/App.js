import React, { useEffect } from "react"
import Routes from "./router/Routes"
import ScrollToTop from "./components/ScrollToTop"
import AOS from "aos"
import "aos/dist/aos.css"
import ReactGA from "react-ga"
ReactGA.initialize("G-BHDVVSZ738")

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  }, [])
  useEffect(() => {
    // This line will trigger on a route change
    ReactGA.pageview(window.location.pathname + window.location.search)
  })

  return (
    <>
      <ScrollToTop />
      <Routes />
    </>
  )
}

export default App
