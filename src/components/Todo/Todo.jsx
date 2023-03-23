import React from 'react';
import './Todo.css'

const Todo = (props) => {

const {title,completed,userId}= props.todo

//  const check = ()=>{
//     if(completed){
//         checked
//     }
//  }
    return (
        <div className='todo'>
            <h3>UserID : {userId}</h3>
            {
                completed ? (<input type="checkbox" name="" id="" checked/>) : (<input type="checkbox" name="" id="" />)
            }
            
            <p>Complete : {String(completed)} </p>
            <h3>Title : {title}</h3>
        </div>
    );
};

export default Todo;