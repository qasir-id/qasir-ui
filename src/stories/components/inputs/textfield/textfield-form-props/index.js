// Vendors
import React from 'react';

// Components
import TextField from 'components/inputs/TextField';

export const TextFieldFormPropsText = (props) => (
  <TextField type="text" label="Text" defaultValue="Hello World" variant="outlined" {...props} />
);

export const TextFieldFormPropsRequired = (props) => (
  <TextField required label="Required" defaultValue="Hello World" variant="outlined" {...props} />
);

export const TextFieldFormPropsDisabled = (props) => (
  <TextField disabled defaultValue="Disabled" variant="outlined" labelWidth={0} {...props} />
);

export const TextFieldFormPropsPassword = (props) => (
  <TextField label="Password" type="password" autoComplete="current-password" variant="outlined" {...props} />
);

export const TextFieldFormPropsReadonly = (props) => (
  <TextField
    label="Read Only"
    defaultValue="Hello World"
    InputProps={{
      readOnly: true,
    }}
    variant="outlined"
    {...props}
  />
);

export const TextFieldFormPropsNumber = (props) => (
  <TextField
    label="Number"
    type="number"
    InputLabelProps={{
      shrink: true,
    }}
    variant="outlined"
    {...props}
  />
);

export const TextFieldFormPropsSearch = (props) => (
  <TextField
    label="Search field"
    type="search"
    variant="outlined"
    endIcon={<img src="component/assets/icons/close.svg" />}
    {...props}
  />
);

export const TextFieldFormPropsHelpertext = (props) => (
  <TextField
    label="Helper text"
    defaultValue="Hello World"
    helperText="Some important text"
    variant="outlined"
    {...props}
  />
);

const TextFieldFormProps = () => (
  <>
    {TextFieldFormPropsText()}
    {TextFieldFormPropsRequired()}
    {TextFieldFormPropsDisabled()}
    {TextFieldFormPropsPassword()}
    {TextFieldFormPropsReadonly()}
    {TextFieldFormPropsNumber()}
    {TextFieldFormPropsSearch()}
    {TextFieldFormPropsHelpertext()}
  </>
);

export default TextFieldFormProps;
