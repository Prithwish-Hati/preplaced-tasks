import React from 'react'
import { useState } from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(0)

    const handleStart = () => {
        //using window.myTimer to make the variable global
        window.myTimer = setInterval(() => {
            setTimer((prev) => prev + 1)
        }, 1000)
    }
    const handleStop = () => {
        clearInterval(window.myTimer)
    }
    const handleReset = () => {
        clearInterval(window.myTimer);
        setTimer(0)
    }

    return (
        <div>
            <h1>Timer</h1>
            <p>
                {/* Math.trunc() only returns integers */}
                <span>{Math.trunc(timer / 60)} mins{" "}</span>
                <span>{timer % 60} secs</span>
            </p>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Timer