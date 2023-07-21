import { useRef, useState } from 'react';


const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [entereNameTouched, setEnteredNameTouched] = useState(false);
    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    const nameInputBlurHandler = event => {
        setEnteredNameTouched(true);

        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        }



    };
    const formSubmissionHandler = event => {
        event.preventDefault();

        setEnteredNameTouched(true);

        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        }
        setEnteredNameIsValid(true);

        console.log(enteredName);
        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);

        nameInputRef.current.value = ''; // for Ref but not ideal way, Don't manipulate the DOM
        setEnteredName("");
    };

    const nameInputIsInvalid = !enteredNameIsValid && entereNameTouched;

    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-contro'

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input onBlur={nameInputBlurHandler} ref={nameInputRef} type='text' id='name' value={enteredName} onChange={nameInputChangeHandler} />
                {nameInputIsInvalid && <p className='error-text'> Name must not be empty. </p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
