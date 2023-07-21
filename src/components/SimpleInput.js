import { useRef, useState } from 'react';


const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [entereNameTouched, setEnteredNameTouched] = useState(false);
    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
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

    const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsValid;

    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-contro'

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input ref={nameInputRef} type='text' id='name' value={enteredName} onChange={nameInputChangeHandler} />
                {enteredNameIsValid && <p className='error-text'> Name must not be empty. </p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;