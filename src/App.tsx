import React from 'react';
import './App.css';
import First from './components/first';
import {FirstList} from './model/reminder';
import StateHook from './components/stateHook';

const list: FirstList[]=[
  {id:1,title:"Reminder1"}
]



function App() {
  return (
    <div className="App">
      <button className='btn btn-danger mt-2'>click</button>
      <First items={list}/>
      <StateHook />
    </div>
  );
}

export default App; 
