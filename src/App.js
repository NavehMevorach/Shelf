import React, { useEffect } from "react"
import Routes from "./router/Routes"
import ScrollToTop from "./components/ScrollToTop"
import AOS from "aos"
import "aos/dist/aos.css"
import ReactGA from "react-ga"

const initReactGA = () => {
  ReactGA.initialize("G-BHDVVSZ738")
  ReactGA.pageview(window.location.pathname + window.location.search)
  ReactGA.pageview("/#about")
  ReactGA.pageview("/#why")
  ReactGA.pageview("/#ride")
}
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  }, [])
  useEffect(() => {
    initReactGA()
    console.log("GA was initiated")
  }, [])

  return (
    <>
      <ScrollToTop />
      <Routes />
    </>
  )
}

export default App
