import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AutocompleteChoiceField } from './AutocompleteChoiceField';


export class AutocompleteMultipleChoiceField extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    choices: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
  };

  static defaultProps = {
    choices: []
  };

  state = {
    multiValues: []
  };

  onAddItemToState = value => {
    this.setState({
      multiValues: value
    });
  };

  render() {
    const { multiValues } = this.state;
    const { choices } = this.props;
    const choicesArr = [];

    choices.forEach(choice => {
      choicesArr.push({
        id: choice[0],
        name: choice[1].length ? choice[1] : choice[0].toUpperCase()
      });
    });

    return <AutocompleteChoiceField
      { ...this.props }
      handleAddItemToState={ this.onAddItemToState }
      isMulti={ true }
      choices={ choicesArr }
      multiValues={ multiValues }
      getOptionLabel={ ({ name, title }) => name || title }
      getOptionValue={ ({ id }) => id }
    />;
  }
}
