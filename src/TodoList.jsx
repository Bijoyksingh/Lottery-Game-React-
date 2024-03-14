import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
        const [todos, setTodos] = useState([{task:"1st task", id:uuidv4(), isDone:false}]);
        let [newTodo, setNewTodo] = useState([""]);
    
        let addNewTask =()=>{
            setTodos((prevTodos)=>{
                return[...prevTodos,{task:newTodo, id:uuidv4(), isDone:false}]
            });
            setNewTodo("");
        };
    
        let updateTodoValue = (event)=>{
            setNewTodo(event.target.value);
        }

        let deleteTodo=(id)=>{
            setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id!=id));
        }
        let upperCaseAll=()=>{
            setTodos((prevTasks)=>
            prevTasks.map((todo)=>{
                    return{
                        ...todo,
                        isDone:true,
                    };
                })
            );
        };

        let markAsDone= (id)=>{
            setTodos((prevTasks)=>
            prevTasks.map((todo)=>{
                if(todo.id==id){
                    return{
                        ...todo,
                        isDone:true,
                    };
                }else{
                    return todo;
                }
                })
            );
        }
        return(
            <div>
                <h3>Todo List</h3>
                <input placeholder="Add New Task" value={newTodo} onChange={updateTodoValue}/>
                <br />
                <button onClick={addNewTask}>Add Task</button>
                <h4>Task List</h4>
                <ul>
                    {todos.map((todo)=>(
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine:"line-through"}: {}}>{todo.task}</span>
                            <button onClick={()=>deleteTodo(todo.id)}>Dlt</button>
                            <button onClick={()=>markAsDone(todo.id)}>Done</button>
                            </li>
                    ))}
                </ul>
                <button onClick={upperCaseAll}>UpperCaseAll</button>
            </div>
        )
}