import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quotes from './Quotes';
import getQuotesByCharacter from '../services/getQuotesByCharacter';
import style from './Quote.css';

export default class CharacterQuotes extends PureComponent {
  static propTypes = {
    count: PropTypes.number.isRequired,
    character: PropTypes.string.isRequired
  };

  state = {
    quotes: []
  };

  componentDidMount() {
    getQuotesByCharacter(this.props.count, this.props.character)
      .then(quotes => this.setState({ quotes }));
  }

  render() {
    return (
      <container className={style.Quotes}>
        <Quotes quotes={this.state.quotes}/>
      </container>
    );
  }
}

