import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from './Card';

export default function Expenses(props) {
  const[filteredYear, setFilteredYear] = useState('2022');

  const YearChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>No expenses found.</p>;

  if(filteredExpenses.length > 0){
    expenseContent = filteredExpenses.map((expense) =>(  
      <ExpenseItem 
      key = {expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
    ));
  }


    return(
      <div>
        <Card className = 'expenses'>
          <ExpensesFilter onChangeYear={YearChangeHandler}/>
        {expenseContent}  
        </Card>
        </div>

    );
};