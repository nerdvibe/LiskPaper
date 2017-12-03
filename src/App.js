import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./bulma.css";
import "./App.css";

import Head from "./views/base/Header";
import Footer from "./views/base/Footer";
import Landing from "./views/Landing";
import StepOne from "./views/walletgenerator/StepOne";
import WalletInfo from "./views/walletgenerator/generate/WalletInfo";
import How from "./views/How";
import "font-awesome/css/font-awesome.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <section className="hero is-info is-fullheight">
            <Head />

            <div className="hero-body">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/start" component={StepOne} />
                <Route path="/create-wallet" component={WalletInfo} />
                <Route path="/how-it-works" component={How} />
                <Route component={Landing} />
              </Switch>
            </div>

            <Footer />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
