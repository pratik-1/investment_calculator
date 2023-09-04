import React from "react";
import Header from "./Header/Header";
import Form from "./Form/Form";
import Results from "./Result/Results";

function App() {

  const [userInput, setUserInput] = React.useState(null)

  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  };
  const yearlyData = [];
  if (userInput) {
    let currentSavings = userInput['current-savings'];
    const yearlyContribution = userInput['yearly-contribution'];
    const expectedReturn = userInput['expected-return'] / 100;
    const duration = userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <Form calculate={calculateHandler} />
      {userInput && <Results returns={yearlyData} initialInvestment={userInput['current-savings']} />}
    </div>
  );
}

export default App;
