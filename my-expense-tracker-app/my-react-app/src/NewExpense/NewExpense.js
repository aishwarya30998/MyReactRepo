import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
    const expenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //console.log('newexpense'+expenseData[0]);
        props.onAddExpense(expenseData);
    };

    return(
        <div className='new-expense'>
            <ExpenseForm onsaveExpenseData = {expenseDataHandler} />
        </div>
    );
};

export default NewExpense;