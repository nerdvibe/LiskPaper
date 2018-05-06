import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./bulma.css";
import "./App.css";

import Head from "./modules/base-ui/Header";
import Footer from "./modules/base-ui/Footer";
import Landing from "./modules/base-ui/Landing";
import Wizard from "./modules/walletGenerator/views/Wizard";
import WalletInfo from "./modules/walletGenerator/views/generate/WalletInfo";
import How from "./modules/howPage/How";
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
                <Route exact path="/start" component={Wizard} />
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
