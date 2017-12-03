import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <nav className="is-fullwidth has-text-centered">
        <div className="container">
          <p className="footer-text">
            Built with <i className="fa fa-heart" /> by{" "}
            <a
              href="lisk://main/voting/vote?votes=carbonara"
              className="footer-link"
            >
              carbonara
            </a>{" "}
            and{" "}
            <a href="http://liskelite.com" className="footer-link">
              Lisk Elite
            </a>. <span className="hide-print">Vote Lisk Elite to earn the biggest rewards weekly.</span>
          </p>
        </div>
      </nav>
    );
  }
}

export default Footer;



