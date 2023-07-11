import React, { useState } from 'react';

const initialUserInput = {
    currentSavings: 10000,
    yearlyContribution: 1200,
    expectedReturn: 7,
    duration: 10,
  };

const UserInvestmentInput = (props) =>{
const[userInput, setUserInput] = useState(initialUserInput);

    const submitHandler = (event) =>{
        event.preventDefault();
        props.onCalculate(userInput);
    };

    const resetHandler = () =>{
        setUserInput(initialUserInput);
    };

    const inputChangeHandler = (input, value) =>{
        setUserInput((prevInput) => {
            return{
                ...prevInput,
                [input]: +value,
            };
        });
        console.log(input, value);
    };

    return(
        <div>
        <form onSubmit={submitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="currentSavings">Current Savings ($)</label>
            <input onChange = {(event) => 
            inputChangeHandler('currentSavings', event.target.value)
        }
        value = {userInput.currentSavings}
        type="number" id="currentSavings" />
          </p>
          <p>
            <label htmlFor="yearlyContribution">Yearly Savings ($)</label>
            <input onChange = {(event) => 
                inputChangeHandler('yearlyContribution', event.target.value)} 
                value = {userInput.yearlyContribution}
                type="number" id="yearlyContribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expectedReturn">
              Expected Interest (%, per year)
            </label>
            <input onChange = {(event) => 
                inputChangeHandler('expectedReturn', event.target.value)}
                value = {userInput.expectedReturn} 
                type="number" id="expectedReturn" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input onChange = {(event) => 
                inputChangeHandler('duration', event.target.value)} 
                value = {userInput.duration}
                type="number" id="duration" />
          </p>
        </div>
        <p className="actions">
          <button onClick = {resetHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
        </div>

    );
}

export default UserInvestmentInput;