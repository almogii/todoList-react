import React from "react";
import { useState } from "react";
import Input from "./Input";
import Todo from "./Todo";


const List=(props)=>{

const [todoList,setTodoList]=useState([]);
const [itemId,setItemId]=useState(0);

const AddNewTask=(newTask)=>{
    if(!todoList.includes(newTask)){
    setTodoList([...todoList,newTask])
    }
}





return(
   
<div>
<h1 className="todolist-title">TODO`S</h1>
   <Input setTodo={AddNewTask} setID={setItemId} todoId={itemId}></Input>
   {todoList.map((task)=>{
    return <Todo content={task.content} id={task.id} complited={task.Iscomplited}></Todo>
   })}
</div>
);

}


export default List;






