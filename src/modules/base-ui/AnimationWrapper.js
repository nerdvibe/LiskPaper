import React, {Component} from 'react';
import EasyTransition from 'react-easy-transition';
import PropTypes from 'prop-types';

class AnimationsWrapper extends Component {

  render() {

    return (
      <EasyTransition
        path={this.context.router.route.location.pathname}
        initialStyle={{ opacity: 0 }}
        transition="opacity 0.5s ease-in"
        finalStyle={{ opacity: 1 }}
      >
        {this.props.children}
      </EasyTransition>
    );

  }
};

export default AnimationsWrapper;

AnimationsWrapper.contextTypes = {
  router: PropTypes.object.isRequired,
};
