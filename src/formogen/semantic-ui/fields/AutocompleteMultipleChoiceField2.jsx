import React from 'react';

import { AutocompleteChoiceField } from './AutocompleteChoiceField2';

const AutocompleteMultipleChoiceField = (props) => {
  return <AutocompleteChoiceField { ...props } />;
};

AutocompleteMultipleChoiceField.propTypes = {
  ...AutocompleteChoiceField.propTypes,
};

AutocompleteMultipleChoiceField.defaultProps = {
  ...AutocompleteChoiceField.defaultProps,
  isMulti: true,
};

export { AutocompleteMultipleChoiceField };
