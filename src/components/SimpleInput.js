import useInput from '../hooks/use-input';


const SimpleInput = (props) => {
    let emailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const {
        isValid: enteredNameIsValid,
        value: enteredName,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput(value => value.trim() !== '');

    const {
        value : enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput(value => value.match(emailformat)
    );

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    } else {
        formIsValid = false;
    }


    const formSubmissionHandler = event => {
        event.preventDefault();

        if (!enteredNameIsValid && !enteredEmailIsValid) {
            return;
        }
        console.log(enteredName);
        console.log(enteredEmail);

        resetNameInput();
        resetEmailInput();
    };


    const nameInputClasses = nameInputHasError? 'form-control invalid' : 'form-control'
    const emailInputClasses = emailInputHasError? 'form-control invalid' : 'form-control'

    return (
        <form onSubmit={formSubmissionHandler}>
            <label htmlFor='name'>Your Name</label>
            <div className={nameInputClasses}>
                <input onBlur={nameBlurHandler} type='text' id='name' value={enteredName} onChange={nameChangeHandler} />
                {nameInputHasError && <p className='error-text'> Name must not be empty. </p>}
            </div>
            <label htmlFor='name'>Your E-Mail</label>
            <div className={emailInputClasses}>
                <input onBlur={emailBlurHandler} type='email' id='email' value={enteredEmail} onChange={emailChangeHandler} />
                {emailInputHasError && <p className='error-text'> Please enter valid email</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid} >Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
