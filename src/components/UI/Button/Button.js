import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
  };

const button = (props) => (
    <RaisedButton 
        type="submit" 
        label={props.label} 
        primary={true} 
        style={style} 
        disabled={props.disabled}/>
    // <button
    //     disabled={props.disabled}
    //     className={[classes.Button, classes[props.btnType]].join(' ')}
    //     onClick={props.clicked}>{props.children}</button>
);

export default button;