import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { SketchPicker } from 'react-color';
import _ from 'lodash';

import { errorsType } from '../../fieldPropTypes';
import { FieldLabel } from '../FieldLabel';
import { ErrorsList } from '../ErrorsList';

import './ColorField.css';


ColorField.propTypes = {
  value: PropTypes.string,
  errors: errorsType,

  required: PropTypes.bool,
  editable: PropTypes.bool,

  help_text: PropTypes.string,
  helpTextOnHover: PropTypes.bool,

  onChange: PropTypes.func,
};

export function ColorField(props) {
  const [isOpened, setIsOpened] = useState(false);

  const handleToogle = useCallback(() => {
    setIsOpened(!isOpened);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpened(false);
  }, []);

  return (
    <Form.Field
      className="ColorField"
      required={ props.required }
      disabled={ !props.editable }
      error={ !_.isEmpty(props.errors) }
    >
      <FieldLabel { ...props } />
      
      <div className="ColorField__Swatch" onClick={ handleToogle }>
        <div className="ColorField__Color" style={ { background: props.value } } />
      </div>

      { isOpened ? (
        <div className="ColorField_Popover">
          <div className="ColorField_Cover" onClick={ handleClose } />
          <SketchPicker
            color={ props.value }
            onChangeComplete={ props.onChange }
          />
        </div>
      ) : null }

      { !props.helpTextOnHover
        ? <span className='help-text'>{ props.help_text }</span>
        : ''
      }
      <ErrorsList messages={ props.errors } />
    </Form.Field>
  );
}
