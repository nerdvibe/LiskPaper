import React, { Component } from "react";

class InfoBox extends Component {
  renderExtraBox = wallet => {
    if (wallet.publicKey && wallet.privateKey) {
      return (
        <div className="notification is-warning has-text-left info-box extra-details">
          <h1 className="title is-5 has-text-dark title-mod">
            {" "}Extra details regarding this wallet{" "}
          </h1>

          <p>
            <strong>Public Key:</strong> <br />
            {wallet.publicKey}
          </p>
          <p className="top20">
            <strong>Private Key:</strong> (Do not share this information with
            anybody) <br />
            {wallet.privateKey}
          </p>
        </div>
      );
    }
  };

  render() {
    let wallet = { ...this.props.wallet };

    if (!wallet || !wallet.address)
      wallet = {
        address: "_________________________________________"
      };

    return (
      <div className="container infos">
        <div className="notification is-warning has-text-left info-box notification-topped">
          <h1 className="title is-5 has-text-dark">What to do now?</h1>
          <p className="">
            This is a real wallet. You can use it for yourself in order to store
            your Lisk or you top it up and gift it to a friend.<br />
            Now you can access this wallet with Lisk Nano by entering the 12
            words passphrase. The balance at the moment of the creation is 0
            Lisk. You will need to send some Lisk to the address{" "}
            {wallet.address} (e.g. from an exchange) in order to make it show in
            the block explorer.
            <br />
            <br />
            <strong>Never ever give to anybody your passphrase</strong>. Whoever
            has this passphrase can access the Lisk contained in this wallet.
            Make sure that you store this paper wallet carefully and you make a
            backup of it. If you loose this credentials there is no way to get
            them back.
            <br />
            <br />
            Now you can print this wallet, save it as pdf and store it for
            yourself or eventually gift it to one of your friends.
            <br />
            <br />
          </p>
        </div>
        {this.renderExtraBox(wallet)}
        <div className="notification is-warning has-text-left info-box notification-topped hide-print">
          <h1 className="title is-5 has-text-dark">Disclaimer</h1>
          <p className="">
            By using this software you accept the terms and conditions. This
            software is provided "as is", without warranty of any kind, express
            or implied, including but not limited to the warranties of
            merchantability, fitness for a particular purpose and
            noninfringement. in no event shall the authors or copyright holders
            be liable for any claim, damages or other liability, whether in an
            action of contract, tort or otherwise, arising from, out of or in
            connection with the software or the use or other dealings in the
            software.
            <br />
            <br />
          </p>
        </div>
      </div>
    );
  }
}

export default InfoBox;
