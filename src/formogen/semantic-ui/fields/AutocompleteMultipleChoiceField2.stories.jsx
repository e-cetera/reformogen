import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { AutocompleteMultipleChoiceField } from './AutocompleteMultipleChoiceField2';

const stories = storiesOf('AutocompleteMultipleChoiceField', module);

const Example = () => {
  const [value, setValue] = useState(null);

  return (
    <>
      <AutocompleteMultipleChoiceField
        type='AutocompleteMultipleChoiceField'
        name='languages'
        verbose_name='Languages'
        value={ value }
        choices={ [
          [1, 'Russian'],
          [2, 'English'],
          [3, 'French']
        ] }
        required={ false }
        editable={ true }
        displayOptions={ { width: 1 } }
        // getOptionLabel={ ([, name]) => name }
        // getOptionValue={ ([id]) => id }
        onChange={ (e, { value: newValue }) => setValue(newValue) }
      />
      <hr />
      <pre>
        value: { JSON.stringify(value, undefined, 2) }
      </pre>
    </>
  );
};

stories.add('default', () => {
  return (
    <div style={ { padding: 20 } }>
      <Example />
    </div>
  );
});
