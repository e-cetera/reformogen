import { AutocompleteMultipleChoiceField } from './AutocompleteMultipleChoiceField';


it('<AutocompleteMultipleChoiceField />', () => {
  const wrapper = shallow(
    <AutocompleteMultipleChoiceField
      type='AutocompleteMultipleChoiceField'
      name='AutocompleteMultipleChoiceField: name'
      verbose_name='AutocompleteMultipleChoiceField: verbose_name'
      help_text='AutocompleteMultipleChoiceField: help_text'
      displayOptions={ { width: 1 } }
    />
  );
  expect(wrapper).toMatchSnapshot();
});
