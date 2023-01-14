
import React from "react";

const Input=(props)=>{
 
    const handleInput=(e)=>{
        e.preventDefault();
      
        if(e.target[0].value!==''){
        props.setTodo({id:props.todoId,content:`${e.target[0].value}`,isComplited:false});
         props.setID(props.todoId+1)
        }
       
    }
       


    return(
    <div className='input-form'>
     <form onSubmit={handleInput}>
    <input id='title' type='text' placeholder='Enter your assignment' >
    </input>
    </form>
   </div>
    )
}

export default Input;

// 1)Input Component:
    //   get a todo text
    //{id:'bla`,description:'bla',isComplited=false}
    //   making a validation on the string
    //   insert the todo into the todo list
//Todo List:
// render all the todo's
// can mark a todo as completed    