import { useState } from 'react';
import './App.css'
import Footer from './components/Footer';

const App = () => {
  
  const [enteredName, setEnteredName] = useState(" ");

  return (
  <div>
    <h1>hello, {enteredName} </h1>
    <input onChange={(e)=>{
      setEnteredName(e.target.value);
       
    }} type="text" placeholder='your name'></input>
   
   
  </div>
  );
};

export default App;
