import styles from './Results.module.css';
import indexstyles from '../Header/Header.module.css';

const Results = (props) => {
  if (props.returns.length === 0) {
    return <h2 className={indexstyles['header']}>No expenses found.</h2>
  }
  return (<table className={styles['result']}>
    <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
      {props.returns.map(calculation =>
        <tr>
          <td>{calculation.year}</td>
          <td>${calculation.savingsEndOfYear.toFixed(2)}</td>
          <td>${calculation.yearlyInterest.toFixed(2)}</td>
          <td>${(calculation.savingsEndOfYear - props.initialInvestment - calculation.yearlyContribution * calculation.year).toFixed(2)}</td>
          <td>${(props.initialInvestment + calculation.yearlyContribution * calculation.year).toFixed(2)}</td>
        </tr>)}

    </tbody>
  </table>);
}

export default Results;