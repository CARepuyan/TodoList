import React from 'react';
import ToDoList from './components/ToDoList';
import "./App.css";


const App = () => {
  const [inputText, setInputText] = React.useState("");
  const [todolist, setTodoList] = React.useState([
  //   {
  //     task: "shower",
  // },
  // {
  //     task: "cook",
  // },
  // {
  //     task: "eat",
  // }
  ]);
  return (
    <div className='input' >
      <div className="input-group mb-3">
        <input className="form-control"  placeholder='Add To Do...' value={inputText} onChange={(event) => setInputText(event.target.value)} type="text"/>
        
        <button className="btn btn-outline-success" onClick={() => {
          setTodoList([...todolist, {task:inputText}]) 
          setInputText("")
          }}> Submit </button>
      </div>
      <div className='container'>
        <ToDoList items={todolist}/>
      </div>
    </div>
  )
};
export default App;