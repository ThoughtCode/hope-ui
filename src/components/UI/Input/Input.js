import React from 'react';
import TextField from 'material-ui/TextField';


const input = ( props ) => {
    let inputElement = null;
    let errorText = null;
    if (props.invalid && props.shouldValidate && props.touched) {
        errorText = props.errorText;
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <TextField
                autoComplete='off'
                errorText={errorText}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
                />;
            // <input
            //     className={inputClasses.join(' ')}
            //     onChange={props.changed} />;
            break;
        // case ( 'textarea' ):
        //     inputElement = <textarea
        //         className={inputClasses.join(' ')}
        //         {...props.elementConfig}
        //         value={props.value}
        //         onChange={props.changed} />;
        //     break;
        // case ( 'select' ):
        //     inputElement = (
        //         <select
        //             className={inputClasses.join(' ')}
        //             value={props.value}
        //             onChange={props.changed}>
        //             {props.elementConfig.options.map(option => (
        //                 <option key={option.value} value={option.value}>
        //                     {option.displayValue}
        //                 </option>
        //             ))}
        //         </select>
        //     );
        //     break;
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