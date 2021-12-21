import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ScrollTopBehaviour from "../components/ScrollTopBehaviour"
import ProductLandingDark from "../views/ProductLandingDark"
import NotFound from "../views/NotFound"


const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={ProductLandingDark} />
          <Route exact path="/404" component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}

export default Routes
