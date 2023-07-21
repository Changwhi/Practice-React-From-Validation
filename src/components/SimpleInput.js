import { useEffect, useState } from 'react';


const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [entereNameTouched, setEnteredNameTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && entereNameTouched;

    let formIsValid = false;

    if (enteredNameIsValid) {
        formIsValid = true;
    } else {
        formIsValid = false;
    }

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    const nameInputBlurHandler = event => {
        setEnteredNameTouched(true);
    };
    const formSubmissionHandler = event => {
        event.preventDefault();

        setEnteredNameTouched(true);

        if (!enteredNameIsValid) {
            return;
        }
        console.log(enteredName);
        setEnteredName("");
        setEnteredNameTouched(false);
    };


    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input onBlur={nameInputBlurHandler} type='text' id='name' value={enteredName} onChange={nameInputChangeHandler} />
                {nameInputIsInvalid && <p className='error-text'> Name must not be empty. </p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid} >Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
