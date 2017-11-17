import React from 'react';
import PropTypes from 'prop-types';

const Welcome = ({ welcomeMessage }) => (
  <div id='welcome-pane'>
    <h4 id='welcome'>{welcomeMessage}</h4>
  </div>
);

Welcome.propTypes = {
  welcomeMessage: PropTypes.string.isRequired,
};

export default Welcome;
