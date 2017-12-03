import React, { Component } from "react";
import AnimationsWrapper from "../lib/AnimationWrapper";

class How extends Component {
  render() {
    return (
      <div className="container has-text-centered">
        <AnimationsWrapper>
          <div className="columns">
            <div className="column is-8 is-offset-2 has-text-left">
              <h1 className="title top35">What is a paper wallet?</h1>
              <p>
                One of the most exciting things you can do with your Lisk is to
                send them to a piece of paper.
              </p>
              <p>
                First of all, the first rule of crypto-club is: Your keys — Your
                Lisk, Not your keys — Not your Lisk.
              </p>
              <p>
                In the most specific sense, a Lisk paper wallet is a document
                containing all of the data necessary to access a the wallet from
                Lisk Nano.
                <br />
              </p>
              <h2 className="title top35">
                What are the benifits of having a paper wallet?
              </h2>
              <p>
                A paper wallet can be generated offline and allows you to have a
                copy of your copy literally on a piece of paper
              </p>
              <h2 className="title top35">
                What can I do with a paper wallet?
              </h2>
              <p>
                With a Lisk paper wallet you can store you Lisk passphrase away
                of a computer. If the paper wallet is stored properly then this
                might be considered an extra layer of security in storing your
                passphrase
              </p>
              <p>
                Another use case of a paper wallet is to gift it to friends for
                example for Christmas. Let's say you want to give 10 Lisk to
                John, but John doesn't know how to create a Lisk wallet. You
                could create a Lisk Paper Wallet for John, send some Lisk to the
                generated address and then gift the paper wallet to him.
              </p>
              <h2 className="title top35">
                How do I generate the paper wallet offline?
              </h2>
              <p>
                The code of <a href="https://liskpaper.com">liskpaper.com</a> is open source. You can improve it and
                submit a PR to the repository. If you need assistance, feel free
                to contact carbonara on the Lisk.chat.
              </p>
              <p>
                The safest way to generate a wallet is to download the
                application here, transfer it into an usb drive, start an
                offline linux distribution, and open the index.html.
              </p>
              <p>
                If you don't want to bother to use an offline linux
                distribution, you can just download{" "}
                <a href="https://github.com/xunga/LiskPaper/releases/tag/1.0">liskpaper.zip
                  from here</a>, unzip it and execute the index.html. There is no need
                to be connected to internet while running the liskpaper app.
              </p>
            </div>
          </div>
        </AnimationsWrapper>
      </div>
    );
  }
}

export default How;
