import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';





function App() {

  return (
    <div className='App'>
     <ExteranUser></ExteranUser>
    </div>
  );
}

function ExteranUser(){
  const [users, setUser] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data => setUser(data))
  },[])
  return(
    <div>
      <h2>Hello Babgladash</h2>
      <p>{users.length}</p>
      {users.map(user =><Dispaly name={user.name} emal={user.email}></Dispaly>)}
      
    </div>
  )
}

const Dispaly = (props) =>{
  return(
    <div>
      <h2>Name : {props.name}</h2>
      <p>Email : {props.emal}</p>
    </div>
  )
}

export default App;
