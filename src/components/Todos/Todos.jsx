import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';
import './Todos.css'

const Todos = () => {
    const [todos,setTodos] = useState([])

    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/todos';
        fetch(url)
        .then(res =>res.json())
        .then(data => setTodos(data))

    }
        
        ,[])




    return (
        <div >
            <h1>Todo list : {todos.length}</h1>
            <div className='todos'>
            {

                todos.map(todo => <Todo 
                todo =  {todo}
                key = {todo.id}
    
    />
)


}
            </div>
        </div>
    );
};

export default Todos;