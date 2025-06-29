import React, {useEffect, useState} from "react";

function Intro(){
    const[todos, setTodos] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then((res)=> res.json())
        .then((data)=>{
            setTodos(data);
        })
        .catch((error)=>{
            console.error(error);
        });
    }, [])

    return(
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>
                    {todo.title} - {todo.completed ? "👍" : "👎"}
                </li>
            ))}
        </ul>
    )
}

export default Intro;