import React, { Component } from "react";
import QRCode from "qrcode.react";

class WalletVisualizer extends Component {
  renderQR = wallet => {
    if (wallet && wallet.address && !!wallet.address.length) {
      return <QRCode value={wallet.address} />;
    } else {
      return <div />;
    }
  };

  render() {
    let wallet = { ...this.props.wallet };

    return (
      <div className="image">
        <img src={this.props.image} alt="" className="" />
        <p className="text-over-address is-size-4 has-text-dark">
          <strong>
            {wallet.address || ""}
          </strong>
        </p>
        <p className="text-over-passphrase is-size-4 has-text-dark">
          <strong>
            {wallet.passphrase || ""}
          </strong>
        </p>
        <p className="text-over-message is-size-4 has-text-dark">
          <strong>
            {this.props.message || ""}
          </strong>
        </p>
        <span className="qr-code">
          {this.renderQR(wallet)}
        </span>
      </div>
    );
  }
}

export default WalletVisualizer;
