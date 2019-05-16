import React from 'react';
import PropTypes from 'prop-types';

export default function Quote({ character, image, quote }) {
  return (
    <container style={{ border: 'black 3px' }}>
      <h3>{character}</h3>
      <img src={image} />
      <p>{quote}</p>
    </container>
  );
}

Quote.propTypes = {
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired
};

