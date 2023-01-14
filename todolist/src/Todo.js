import React from "react";

const Todo=(props)=>{
    return (
    <div>
        <lu className='todo`s'>
            <li  className={props.id}>
                  {props.content}
            </li>
        </lu>
    </div>
    )
}


export default Todo;