import React, { PureComponent } from 'react';
import TopQuotes from './TopQuotes';
import CharacterQuotes from './CharacterQuotes';
import PropTypes from 'prop-types';

function QuotesDisplay({ selected, character }) {
  if(selected === 'character') {
    return (
      <CharacterQuotes count={10} character={character}/>
    );
  }
  else {
    return (
      <TopQuotes count={10} />
    );
  }
}

QuotesDisplay.propTypes = {
  selected: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired
};


export default class App extends PureComponent {
  state = {
    selected: '',
    character: ''
  };

  handleChangeTop = ({ target }) => {
    this.setState({ selected: target.value });
  }

  handleChangeCharacter = ({ target }) => {
    this.setState({ selected: 'character', character: target.value });
  }

  render() {
    return (
      <>
        <button value="top" onClick={this.handleChangeTop}>Get Top Quotes</button>
        <select value={this.state.character} onChange={this.handleChangeCharacter}>
          <option value="" disabled selected>Get Quotes By Character</option>
          <option value="Fry">Fry</option>
          <option value="Leela">Leela</option>
          <option value="Bender">Bender</option>
          <option value="Amy">Amy</option>
        </select>
        <QuotesDisplay selected={this.state.selected} character={this.state.character} />
      </>
    );
  }
}
