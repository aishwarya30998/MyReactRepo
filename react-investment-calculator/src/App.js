import Header from './components/Header';
import UserInvestmentInput from './components/UserInvestmentInput';
import InvestmentResults from './components/InvestmentResults';
import React, {useState} from 'react';

function App() {
  const[userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  };

    const yearlyData = [];

    
    let currentSavings = (userInput && userInput.currentSavings);
    const yearlyContribution = (userInput && userInput.yearlyContribution); 
    const expectedReturn = (userInput && userInput.expectedReturn) / 100;
    const duration = (userInput && userInput.duration);

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
      console.log(yearlyData);
    }
    //return(yearlyData);
  

  return (
    <div>
      <Header />
      <UserInvestmentInput onCalculate = {calculateHandler} />
      {!userInput && <p style={{textAlign: 'center'}}> No Investment calculated yet</p>}
      {userInput && <InvestmentResults  data = {yearlyData} initialInvestment={UserInvestmentInput['current-savings']} />}
    </div>
  );
}

export default App;
