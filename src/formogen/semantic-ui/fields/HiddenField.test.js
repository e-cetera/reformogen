import { HiddenField } from './HiddenField';


it('<HiddenField />', () => {
  const wrapper = shallow(
    <HiddenField
      type='HiddenField'
      name='HiddenField: name'
    />
  );
  expect(wrapper).toMatchSnapshot();
});
