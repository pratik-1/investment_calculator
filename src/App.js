import React from "react";
import Header from "./Header/Header";
import Form from "./Form/Form";
import Returns from "./Result/Results";

function App() {

  const [yearData, setYearData] = React.useState([])

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    let investedCapital = +userInput['yearly-contribution']; // feel free to change the shape of this input object!
    let totalInterest = 0
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    const yearlyData = []; // per-year results

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      investedCapital += investedCapital * i + 1;
      totalInterest += yearlyInterest;

      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: totalInterest,
        investedCapital: investedCapital
      });
    }
    // do something with yearlyData ...
    return yearlyData

  };
  const getCalculations = (userInput) => {
    setYearData(prevYearData => calculateHandler(userInput))
  }

  const resetTable = (events) => {
    setYearData(prevYearData => [])
  }

  return (
    <div>
      <Header />
      <Form calculate={getCalculations} reset={resetTable}/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <Returns returns={yearData} />
    </div>
  );
}

export default App;
