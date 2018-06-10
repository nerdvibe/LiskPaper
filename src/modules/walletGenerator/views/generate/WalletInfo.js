import React, { Component } from "react";
import Toolbar from "./Toolbar";
import WalletVisualizer from "./WalletVisualizer";
import InfoBox from "./InfoBox";
import PassphraseGenerator from "./PassphraseGenerator";
import AnimationsWrapper from "../../../base-ui/AnimationWrapper";
import { parse } from "qs";
import { generateWallet } from "../../logic/wallets";
import "./styles/index";
import themes from "./styles/index";

class WalletInfo extends Component {
  query = {};

  constructor(props) {
    super(props);

    const default_image = themes.lightBlue;
    this.query = parse(this.props.location.search.substr(1));

    this.state = {
      wallet: {},
      image: default_image.image,
      style: default_image.style,
      name: default_image.name,
      label_theme: default_image.label,
      themeName: "lightBlue",
      showInsert: false,
      current: "generate"
    };
  }

  componentWillMount() {
    if (this.query.blueprint || this.query.created)
      this.setState({ current: "show" });
    else this.setState({ current: "generate" });

    if (this.query.blueprint) return;
    this.query.created
      ? this.setState({ showInsert: true })
      : this.createWallet();
  }

  createWallet = () => {
    this.setState({
      current: "generate",
      wallet: {}
    });
  };

  changeTheme = e => {
    const theme = themes[e.target.value];
    this.setState({
      label: theme.label,
      image: theme.image,
      style: theme.style,
      themeName: e.target.value
    });
  };

  setMessage = (message, max_message) => {
    this.setState({
      message: message,
      max_message: max_message
    });
  };

  setAddress = e => {
    let wallet = { ...this.state.wallet };
    wallet.address = e.target.value;
    this.setState({
      wallet
    });
  };

  setPassphraseFromGenerator = passphrase => {
    let wallet = { ...this.state.wallet };
    wallet.passphrase = passphrase;
    generateWallet(passphrase, wallet => {
      this.setState({
        wallet,
        current: "show"
      });
    });
  };

  setPassphrase = e => {
    let wallet = { ...this.state.wallet };
    wallet.passphrase = e.target.value;
    wallet.passphrase = wallet.passphrase.substring(0, 122);
    this.setState({
      wallet
    });
  };

  render() {
    let wallet = { ...this.state.wallet };
    const templates = {};
    const { current } = this.state;

    templates.generate = (
      <PassphraseGenerator
        setPassphraseFromGenerator={this.setPassphraseFromGenerator.bind(this)}
      />
    );

    templates.show = (
      <AnimationsWrapper>
        <div className={this.state.style + " image-wrapper"}>
          <WalletVisualizer
            wallet={wallet}
            message={this.state.message}
            image={this.state.image}
          />

          <Toolbar
            wallet={wallet}
            changeTheme={this.changeTheme}
            createWallet={this.createWallet}
            setMessage={this.setMessage}
            max_message={this.state.max_message}
            themeName={this.state.themeName}
            themes={themes}
            showInsert={this.state.showInsert}
            setPassphrase={this.setPassphrase}
            setAddress={this.setAddress}
          />

          <InfoBox wallet={wallet} />
        </div>
      </AnimationsWrapper>
    );

    return (
      <div className="container has-text-centered">
        {templates[current]}
      </div>
    );
  }
}

export default WalletInfo;
