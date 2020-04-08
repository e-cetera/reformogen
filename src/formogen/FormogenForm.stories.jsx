import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import { FormogenForm } from './FormogenForm';
import { FormComponent } from './semantic-ui/FormComponent';
import { getFieldComponentForType } from './semantic-ui';
import languages from './languages.stories.json';

const stories = storiesOf('FormogenForm', module);

const Example = () => {
  const getFormComponent = () => FormComponent;
  const getFieldComponent = getFieldComponentForType;
  
  const actions = {
    bootstrap: action('bootstrap'),
    cleanup: action('cleanup'),
    loadOptions: action('loadOptions'),
    submit: action('submit'),
  };

  const [value, setValue] = useState([]);

  const metaData = {
    title: 'Title',
    description: 'Description',
    fields: [
      {
        editable: true,
        name: 'name',
        verbose_name: 'Name',
        type: 'CharField',
      },
      {
        editable: true,
        name: 'languages_ids',
        verbose_name: 'Languages',
        type: 'MultipleChoiceField',
        choices: languages,
        value: value,
        onChange: (_, item) => {
          setValue(item.value);
          console.log(value);
        }
      }
    ]
  };

  return (
    <FormogenForm
      formId='example-form'
      getFormComponent={ getFormComponent }
      getFieldComponent={ getFieldComponent }
      actions={ actions }
      metaData={ metaData }
    />
  );
};

stories.add('default', () => {
  return (
    <div style={ { padding: 20 } }>
      <Example />
    </div>
  );
});
