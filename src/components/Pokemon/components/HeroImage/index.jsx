import React from 'react';
import PropTypes from 'prop-types';

const HeroImage = ({ url }) => <img src={url} alt={url} />;

HeroImage.propTypes = {
  url: PropTypes.string.isRequired,
};

export default HeroImage;
