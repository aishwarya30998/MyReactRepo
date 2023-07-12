import React, {useState} from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

function App() {
  const[userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) =>{
    setUserList((prevUserList) => {
      return[
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
    <p> lets get started.......</p>
    <AddUser onAdduser={addUserHandler} />
    <UserList user={userList}/>
    </div>
  );
}

export default App;
