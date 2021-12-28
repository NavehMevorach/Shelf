import React, { useEffect } from "react"
import Routes from "./router/Routes"
import ScrollToTop from "./components/ScrollToTop"
import AOS from "aos"
import "aos/dist/aos.css"
import ReactGA from "react-ga"

const initGA = () => {
  console.log("GA init")
  ReactGA.initialize("G-YKV8HVMHG2")
}
const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
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
    logPageView()
  })

  return (
    <>
      <ScrollToTop />
      <Routes />
    </>
  )
}

export default App
