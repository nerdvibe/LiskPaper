import React, { Component } from "react";
import Toolbar from "./Toolbar";
import WalletVisualizer from "./WalletVisualizer";
import InfoBox from "./InfoBox";
import AnimationsWrapper from "../../../lib/AnimationWrapper";

import { parse } from "qs";

import { generateWallet } from "../../../logic/wallets";
import * as images from "./styles/index";

import "./styles/index";

const themes = {
  paperLightBlue: {
    label: "Paper Light Blue",
    image: images.paperLightBlue,
    style: "baseWallet",
    message_length: 88
  },
  christmasOne: {
    label: "Christmas Gift",
    image: images.christmasOne,
    style: "christmasOne",
    message_length: 59
  },
  paperChristmas: {
    label: "Paper Christmas",
    image: images.paperChristmas,
    style: "baseWallet",
    message_length: 88
  },
  christmasTree: {
    label: "Christmas Tree",
    image: images.christmasTree,
    style: "christmasTree",
    message_length: 88
  },
  veryLightBlue: {
    label: "Very Light Blue",
    image: images.veryLightBlue,
    style: "baseWallet",
    message_length: 88
  },
  PaperDarkBlue: {
    label: "Paper Dark Blue",
    image: images.PaperDarkBlue,
    style: "baseWallet",
    message_length: 88
  },
  blueNet: {
    label: "Blue Net",
    image: images.blueNet,
    style: "baseWallet",
    message_length: 88
  },
  blueOne: {
    label: "Blue Standard",
    image: images.blueOne,
    style: "blueOne",
    message_length: 52
  }
};

class WalletInfo extends Component {
  query = {};

  constructor(props) {
    super(props);

    const default_image = themes.paperLightBlue;
    this.query = parse(this.props.location.search.substr(1));

    this.state = {
      wallet: {},
      image: default_image.image,
      style: default_image.style,
      name: default_image.name,
      label_theme: default_image.label,
      themeName: "paperLightBlue",
      showInsert: false
    };
  }

  componentWillMount() {
    if (this.query.blueprint) return;
    this.query.created
      ? this.setState({ showInsert: true })
      : this.createWallet();
  }

  createWallet = () => {
    generateWallet(wallet => {
      this.setState({
        wallet
      });
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

    return (
      <div className="container has-text-centered">
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
      </div>
    );
  }
}

export default WalletInfo;
