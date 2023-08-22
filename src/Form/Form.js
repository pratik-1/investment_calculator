import React from 'react';
import Input from "./Input";
import styles from './Form.module.css';

const initialInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10
}

const Form = (props) => {

    // const [currentSavings,setCurrentSavings] = React.useState('');
    // const [yearlyContribution,setYearlyContribution] = React.useState('');
    // const [expectedReturn,setExpectedReturn] = React.useState('');
    // const [duration, setDuration] = React.useState('');

    // function currentSavingsHandler(event)  {
    //     setCurrentSavings(event.target.value)
    // }
    // function yearlyContributionHandler(event) {
    //     setYearlyContribution(event.target.value)
    // }
    // function expectedReturnHandler(event) {
    //     setExpectedReturn(event.target.value)
    // }
    // function durationHandler(event) {
    //     setDuration(event.target.value)
    // }

    const [inputState, setInputState] = React.useState(initialInput)

    const inputChangeHandler = (input, value) => {
        setInputState((prevInput) => { return { ...prevInput, [input]: +value, }; });
    }

    const resetHandler = (event) => {
        // setCurrentSavings('')
        // setYearlyContribution('')
        // setExpectedReturn('')
        // setDuration('')
        setInputState(initialInput)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        // const userInput = {
        //     'current-savings': currentSavings,
        //     'yearly-contribution': yearlyContribution,
        //     'expected-return': expectedReturn,
        //     'duration': duration
        // }
        props.calculate(inputState);
    }

    return (<form className={styles.form} onSubmit={submitHandler}>
        <div className={styles['input-group']}>
            <Input label="Current Savings ($)" id="current-savings" value={inputState['current-savings']} onChange={(event) => inputChangeHandler('current-savings', event.target.value)} />
            <Input label="Yearly Savings ($)" id="yearly-contribution" value={inputState['yearly-contribution']} onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)} />
        </div>
        <div className={styles['input-group']}>
            <Input label="Expected Interest (%, per year)" id="expected-return" value={inputState['expected-return']} onChange={(event) => inputChangeHandler('expected-return', event.target.value)} />
            <Input label="Investment Duration (years)" id="duration" value={inputState['duration']} onChange={(event) => inputChangeHandler('duration', event.target.value)} />
        </div>
        <p className={styles["actions"]}>
            <button type="reset" onClick={resetHandler} className={styles["buttonAlt"]}>
                Reset
            </button>
            <button type="submit" className={styles["button"]}>
                Calculate
            </button>
        </p>
    </form>);
}

export default Form;