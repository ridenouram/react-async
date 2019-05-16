import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quotes from './Quotes';
import getQuotes from '../services/getQuotes';

export default class TopQuotes extends PureComponent {
  static propTypes = {
    count: PropTypes.number.isRequired
  };

  state = {
    quotes: []
  };

  componentDidMount() {
    getQuotes(this.props.count)
      .then(quotes => this.setState({ quotes }));
  }

  render() {
    return (
      <container>

      </container>
    );
  }
}
