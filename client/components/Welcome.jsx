import React from 'react';
import PropTypes from 'prop-types';

const Welcome = ({ welcomeMessage }) => (
  <h4 id='welcome'>{welcomeMessage}</h4>
);

Welcome.propTypes = {
  welcomeMessage: PropTypes.string.isRequired,
};

export default Welcome;
