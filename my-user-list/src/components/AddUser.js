import React, {useState} from 'react';
import Button from './Button';
import Card from './Card';
import ErrorModal from './ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) =>{
    const[userName, setUserName] = useState('');
    const[userAge, setUserAge] = useState('');
    const[error, setError] = useState('');


    const SubmitHandler = (event) =>{
        event.preventDefault();
          if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
              title: 'Invalid input',
              message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
          }
          if (+userAge < 1) {
            setError({
              title: 'Invalid age',
              message: 'Please enter a valid age (> 0 and <100).',
            });
            return;
          }
          props.onAdduser(userName,userAge);
        //console.log(userName,userAge);
        setUserName('');
        setUserAge('');

    };

    function nameChangeHandler(event){
        setUserName(event.target.value);
    }

    function ageChangeHandler(event){
        setUserAge(event.target.value);
    }

    function errorHandler(){
        setError(null);
    }

    return(
        <div>
            {error && (
            <ErrorModal title={error.title}
             message={error.message} 
             onConfirm = {errorHandler}/>)}
        <Card className={classes.input}>
            <form onSubmit={SubmitHandler}>
                <div>
                <p>
                    <label htmlFor='userName'>User Name</label>
                    <input onChange = {nameChangeHandler} 
                    value={userName}
                    type = "string" id="userName" />
                </p>
                <p>
                
                    <label htmlFor='age'> Age (years) </label>
                    <input onChange = {ageChangeHandler} 
                    value ={userAge}
                    type = "number" id = "age" />
                </p>
                </div>
                <Button type = 'submit'>Add User</Button>
            </form>
        </Card>
        </div>
    );
}

export default AddUser;