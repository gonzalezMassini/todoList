import React, { useState } from 'react';
import shortid from 'shortid';
import './App.css';

//toDoList :)
const App = () => {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState('');
  const removeItem = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleAdd = () => {
    if (name.length === 0) {
      setName('');
    } else {
      const newTodos = [{ id: shortid.generate(), name }, ...todos];
      setTodos(newTodos);
      setName('');
    }
  };
  const handleOnKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (event.target.value.length === 0) {
        setName('');
      } else {
        const newTodos = [{ id: shortid.generate(), name }, ...todos];
        setTodos(newTodos);
        setName('');
      }
    }
  };
  return (
    <>
      <h2>Enter Todo</h2>
      <input
        className='inputBox'
        type='text'
        onKeyPress={handleOnKeyPress}
        onChange={handleChange}
        value={name}
      />
      <button className='btn' onClick={handleAdd}>
        +
      </button>
      {todos.map((todo) => {
        let { id, name } = todo;
        return (
          <div key={id} className='item'>
            <h4 className='txtItem'>{name} </h4>
            <button className='btnItem' onClick={() => removeItem(id)}>
              -
            </button>
          </div>
        );
      })}
      <br />
      <button className='btnClr' onClick={() => setTodos([])}>
        clear items
      </button>
    </>
  );
};
export default App;
