import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';


export function HiddenField(props) {
  return (
    <Form.Field style={ { height: 0, display: 'none' } }>
      <Form.Input
        name={ props.name }
        value={ props.value }
        type='hidden'
      />
    </Form.Field>
  );
}

HiddenField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string
};
