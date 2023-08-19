import React from 'react';
import Input from "./Input";
import styles from './Form.module.css';

const Form = (props) => {

    const [currentSavings,setCurrentSavings] = React.useState('');
    const [yearlyContribution,setYearlyContribution] = React.useState('');
    const [expectedReturn,setExpectedReturn] = React.useState('');
    const [duration, setDuration] = React.useState('');

    function currentSavingsHandler(event)  {
        setCurrentSavings(event.target.value)
    }
    function yearlyContributionHandler(event) {
        setYearlyContribution(event.target.value)
    }
    function expectedReturnHandler(event) {
        setExpectedReturn(event.target.value)
    }
    function durationHandler(event) {
        setDuration(event.target.value)
    }

    const resetHandler = (event) => {
        setCurrentSavings('')
        setYearlyContribution('')
        setExpectedReturn('')
        setDuration('')
        props.reset()
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const userInput = {
            'current-savings': currentSavings,
            'yearly-contribution': yearlyContribution,
            'expected-return': expectedReturn,
            'duration': duration
        }
        props.calculate(userInput);
    }

    return (<form className={styles.form} onSubmit={submitHandler}>
        <div className={styles['input-group']}>
            <Input label="Current Savings ($)" id="current-savings" value={currentSavings} onChange={ currentSavingsHandler} />
            <Input label="Yearly Savings ($)" id="yearly-contribution" value={ yearlyContribution} onChange={yearlyContributionHandler} />
        </div>
        <div className={styles['input-group']}>
            <Input label="Expected Interest (%, per year)" id="expected-return" value={expectedReturn} onChange={ expectedReturnHandler} />
            <Input label="Investment Duration (years)" id="duration" value={duration} onChange={ durationHandler} />
        </div>
        <p className={styles["actions"]}>
            <button type="reset" onClick={ resetHandler} className={styles["buttonAlt buttonAlt:hover"]}>
            Reset
          </button>
          <button type="submit" className={styles["button button:hover"]}>
            Calculate
          </button>
        </p>
      </form>);
}

export default Form;