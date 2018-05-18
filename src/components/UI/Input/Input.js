import React from 'react';
import TextField from 'material-ui/TextField';

const input = ( props ) => {
  let inputElement = null;
  let errorText = null;
  let error = null;
  if (props.invalid && props.shouldValidate && props.touched) {
    errorText = props.errorText;
    error = true;
  }
  switch ( props.elementType ) {
    case ( 'input' ):
      inputElement = <TextField
        error={error}
        helperText={errorText}
        id={props.id}
        autoComplete="off"
        label={props.label}
        value={props.value}
        onChange={props.changed}
        {...props.elementConfig}
        margin="normal"
      />
      break;
    case ('select'):
      inputElement = <TextField
        select
        error={error}
        helperText={errorText}
        id={props.id}
        autoComplete="off"
        label={props.label}
        value={props.value}
        onChange={props.changed}
        {...props.elementConfig}
        margin="normal"
      />
      break;
    default:
      inputElement = <TextField
        autoComplete='off'
        errorText={props.errorText}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
      />;
  }
  return (
      <div>
          {inputElement}
      </div>
  );
};

export default input;
