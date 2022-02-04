import React from "react";
// Making a new todolist component
const TodoList=(props)=>{
    return (<>
    <div className="todo_style">
    
    <li>{props.text}</li>
    <button onClick={()=>{props.onSelect(props.id);}}>Delete</button>
    <button>Edit</button>
    </div>
    </>)
    

};
export default TodoList;