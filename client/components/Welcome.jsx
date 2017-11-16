import React from 'react';
import PropTypes from 'prop-types'

const Welcome = ({welcomeMessage}) => {
  return (
    <h4 id='welcome'>{welcomeMessage}</h4>
  )
}

Welcome.propTypes = {
  welcomeMessage: PropTypes.string
};

export default Welcome;