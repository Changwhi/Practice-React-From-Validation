import { useEffect, useState } from 'react';


const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [entereNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);


    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && entereNameTouched;

    let emailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const enteredEmailIsValid = enteredEmail.match(emailformat);
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;


    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    } else {
        formIsValid = false;
    }

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    const emailInputChangeHandler = event => {
        setEnteredEmail(event.target.value);
    };

    const nameInputBlurHandler = event => {
        setEnteredNameTouched(true);
    };

    const emailInputBlurHandler = event => {
        setEnteredEmailTouched(true);
    };
    const formSubmissionHandler = event => {
        event.preventDefault();

        setEnteredNameTouched(true);
        setEnteredEmailTouched(true);
        if (!enteredNameIsValid && !enteredEmailIsValid) {
            return;
        }
        console.log(enteredName);
        setEnteredName("");
        setEnteredEmail("");

        setEnteredNameTouched(false);
        setEnteredEmailTouched(false);
    };


    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'
    const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control'

    return (
        <form onSubmit={formSubmissionHandler}>
            <label htmlFor='name'>Your Name</label>
            <div className={nameInputClasses}>
                <input onBlur={nameInputBlurHandler} type='text' id='name' value={enteredName} onChange={nameInputChangeHandler} />
                {nameInputIsInvalid && <p className='error-text'> Name must not be empty. </p>}
            </div>
            <label htmlFor='name'>E-Mail</label>
            <div className={emailInputClasses}>
                <input onBlur={emailInputBlurHandler} type='text' id='name' value={enteredEmail} onChange={emailInputChangeHandler} />
                {emailInputIsInvalid && <p className='error-text'> Email must not be empty. </p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid} >Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
