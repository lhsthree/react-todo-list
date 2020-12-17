import React, { useState } from 'react'

export default function TodoList({ setTodos, todos, deleteTodo }) {
	

	return(
 <ul>
 	{todos.map((todo, index)=> (
 		
 		<li key={index}>
 			<input 
 				type="checkbox"/>{todo}
 				<button
 					onClick={() => {
 						deleteTodo(index)
 					}} 
 					>
 					delete {todo}
 				</button>
 		</li>
 	))}

 </ul>
 )
}
