import React, { useEffect } from "react"
import Routes from "./router/Routes"
import ScrollToTop from "./components/ScrollToTop"
import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  }, [])

  return (
    <>
      <ScrollToTop />
      <Routes />
    </>
  )
}

export default App
