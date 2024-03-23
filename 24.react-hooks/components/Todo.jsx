import React from 'react'
import { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState('')

    const handleChange = (event) => {
        setTodo(event.target)
        console.log(event.target.select())
    }

    const handleClick = () => {

    }
    return (
        <div>
            <h1>Todo</h1>
            <form action='/dummy'>
                <input type='text' placeholder='Add Todo' onChange={handleChange} />
                <button onClick={handleClick}>Add</button>
                <ul>
                    <li></li>
                </ul>
            </form>
        </div>
    )
}

export default Todo