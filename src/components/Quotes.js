import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

export default function Quotes({ quotes }) {
  const quoteCards = quotes.map(quote => (
    <Quote key={quote.quote} character={quote.character} image={quote.image} quote={quote.quote} />
  ));

  return (
    { quoteCards }
  );
}

Quotes.propTypes = {
  quotes: PropTypes.array.isRequired
};
