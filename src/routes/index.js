import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Loader from "./loader";

// ROUTES
import OnPageChange from "../utilities/hocs/OnPageChange";

// HEADER & FOOTER
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

// LAZY IMPORT
const Landing = lazy(() => import("../components/landing"));
const Media = lazy(() => import("../components/media"));
const Statistics = lazy(() => import("../components/statistics"));

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <OnPageChange>
            <Header />
            <Switch>
              <Route exact path={["/", "/gaas"]} component={Landing} />
              <Route exact path={"/media"} component={Media} />
              <Route exact path={"/statistics"} component={Statistics} />
              <Redirect to={"/"} />
            </Switch>
            <Footer />
          </OnPageChange>
        </Suspense>
      </BrowserRouter>
    );
  }
}
