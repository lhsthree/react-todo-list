import React, {useState} from 'react'
import './App.css';
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default function App() {
  const [todos, setTodos] = useState(["delete", "delete"])

  return (
    <>
    <TodoForm 
    	saveTodo={(todoText) => {
    		const trimmedText = todoText.trim();
    		if (trimmedText.length > 0) {
    			setTodos([...todos, trimmedText])
    		}
    	}} />
    <TodoList 
    	todos={todos}
    	deleteTodo={(todoIndex) => {
    		const newTodos = todos.filter((_, index) => index !== todoIndex)

    		setTodos(newTodos)
    	}}
    />
    </>
  );
}

