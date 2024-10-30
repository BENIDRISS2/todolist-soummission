import { useState } from "react";
import TodoList from "./to-do-list"
import { useTodoContext } from "./to-do-property"

const TodoForm = ()=>{
    const {getNumberOfTodoItems , addTodo} = useTodoContext();
    const [todoItem, setTodoItem]=useState("")
    const handeOnSubmit =(e)=>{
        e.preventDefault();
        if(!todoItem){
            return;
        }
        addTodo(todoItem);
        setTodoItem()
    }
    return (
        <form onSubmit={handeOnSubmit}>
        <h3>Number of todo {getNumberOfTodoItems()}</h3>
        <input type="text" 
        value={todoItem}
        onChange={e=>setTodoItem(e.target.value)}/>
        <button type="submit">Submit</button> 
    </form>
    )
}
export default TodoForm