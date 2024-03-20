import React from 'react'
import { useState } from 'react'

const ShowHide = () => {
    const [toggle, setToggle] = useState(false)

    let handleClick = () => {
        return setToggle(prev => !prev)
    }
    return (
        <>
            <button onClick={handleClick}>Show/Hide</button>
            {toggle && <div> Welcome to React Challenges</div>}
        </>
    )
}

export default ShowHide