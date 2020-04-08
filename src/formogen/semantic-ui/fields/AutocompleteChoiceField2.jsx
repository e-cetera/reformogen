import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import Select from 'react-select';
import { isEmpty } from 'lodash';

import { errorsType, displayOptionsType } from '../../fieldPropTypes';
import { FieldLabel } from '../FieldLabel';
import { ErrorsList } from '../ErrorsList';

const getSingleValue = (choices, value) => {
  const finded = choices.find(([id]) => id === value);

  return finded ? [finded] : null;
};

const getMultiValue = (choices, value) => {
  if (!value) {
    return null;
  }

  const filtered = choices.filter(([id]) => value.includes(id));

  return filtered.length ? filtered : null;
};

const AutocompleteChoiceField = (props) => {
  const {
    name,
    value,
    choices,
    help_text,
    placeholder,
    errors,
  
    required,
    editable,
  
    helpTextOnHover,
    displayOptions: { width } = {},
  
    getOptionLabel,
    getOptionValue,
  
    onChange,

    isMulti,
  } = props;

  const getValue = isMulti
    ? getMultiValue
    : getSingleValue;

  const handleChange = isMulti
    ? (newValues) => {
      onChange(
        null,
        { name, value: newValues ? newValues.map((newValue) => newValue[0]) : null }
      );
    }
    : (newValue) => {
      onChange(
        null,
        { name, value: newValue ? newValue[0] : null }
      );
    };

  return (
    <Form.Field
      required={ required }
      disabled={ !editable }
      width={ width }
      error={ !isEmpty(errors) }
    >
      <FieldLabel { ...props } />
      
      <Select
        clearable={ !required }
        name={ name }
        value={ getValue(choices, value) }
        placeholder={ placeholder }
        options={ choices }
        onChange={ handleChange }

        getOptionLabel={ getOptionLabel }
        getOptionValue={ getOptionValue }

        isMulti={ isMulti }
      />

      {
        !helpTextOnHover 
          ? <span className='help-text'>{ help_text }</span>
          : ''
      }

      <ErrorsList messages={ errors } />
    </Form.Field>
  );
};

AutocompleteChoiceField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  verbose_name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
  choices: PropTypes.arrayOf(PropTypes.array),
  help_text: PropTypes.string,
  placeholder: PropTypes.string,
  errors: errorsType,

  required: PropTypes.bool,
  editable: PropTypes.bool,

  helpTextOnHover: PropTypes.bool,
  displayOptions: displayOptionsType,

  getOptionLabel: PropTypes.func,
  getOptionValue: PropTypes.func,

  onChange: PropTypes.func,

  isMulti: PropTypes.bool,
};

AutocompleteChoiceField.defaultProps = {
  choices: [],
  getOptionLabel: ([, name]) => name,
  getOptionValue: ([id]) => id,

  isMulti: false,
};

export { AutocompleteChoiceField };
