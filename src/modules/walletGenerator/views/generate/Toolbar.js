import React, { Component } from "react";

class Toolbar extends Component {
  setMessage = e => {
    let max_message = false;
    let message = e.target.value;
    const length_max_message = this.props.themes[this.props.themeName]
      .message_length;
    message = message.substring(0, length_max_message);
    if (message.length >= length_max_message) max_message = true;

    this.props.setMessage(message, max_message);
  };

  renderSecondaryToolbar = () => {
    if (this.props.showInsert)
      return (
        <div className="is-second-row">
          <div className="columns">
            <div className="column is-4 is-offset-2">
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <label htmlFor="message-input">
                        {" "}<i
                          className="fa fa-address-card-o fa-fw"
                          aria-hidden="true"
                        />{" "}
                        Address:
                      </label>
                      <input
                        className="input message-input"
                        type="text"
                        placeholder="Add an address"
                        onChange={e => this.props.setAddress(e)}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-4">
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <label htmlFor="message-input">
                        {" "}<i
                          className="fa fa-key fa-fw"
                          aria-hidden="true"
                        />{" "}
                        Passphrase:
                      </label>
                      <input
                        className="input message-input"
                        type="text"
                        placeholder="Add a passphrase"
                        onChange={e => this.props.setPassphrase(e)}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  };

  render() {
    return (
      <div className="tools has-text-right bottom20 hide-print">
        <div className="columns">
          <div className="column is-4">
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <label htmlFor="message-input">
                      {" "}<i
                        className="fa fa-envelope fa-fw"
                        aria-hidden="true"
                      />{" "}
                      Message:
                    </label>
                    <input
                      className="input message-input"
                      type="text"
                      placeholder="Add a message"
                      onChange={e => this.setMessage(e)}
                    />
                    {this.props.max_message
                      ? <span className="has-text-warning">
                          <strong>Maximum length of the message reached</strong>
                        </span>
                      : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-3">
            <div className="field">
              <div className="control has-icons-left centered">
                <div className="select">
                  <select onChange={this.props.changeTheme}>
                    {Object.keys(this.props.themes).map(theme => {
                      return (
                        <option
                          key={theme}
                          value={theme}
                          selected={this.props.themeName === theme}
                        >
                          {" "}{this.props.themes[theme].label}{" "}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="icon is-small is-left iconized">
                  <i className="fa fa-paint-brush has-text-dark-grey" />
                </div>
              </div>
            </div>
          </div>

          <div className="column is-5">
            <button className="button is-dark right10" onClick={window.print}>
              <i className="fa fa-download fa-fw" />Print
            </button>
            <button
              className="button is-primary"
              onClick={this.props.createWallet}
            >
              <i className="fa fa-refresh fa-fw" aria-hidden="true" /> Generate
              a new wallet
            </button>
          </div>
        </div>
        {this.renderSecondaryToolbar()}
      </div>
    );
  }
}

export default Toolbar;
