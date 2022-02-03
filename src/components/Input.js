import React, { useState } from 'react';

const Input = (props) => {

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(2);
    const [seconds, setSeconds] = useState(0);

    const startTimer = () => {
        props.startCountdown({
            hours,
            minutes,
            seconds
        });
    };

    return (
        <>
            <div>
                <input type='number' value={hours} onChange={(e) => setHours(e.target.value)} />     
                <span>Hours</span>
            </div>
            <div>
                <input type='number' value={minutes} onChange={(e) => setMinutes(e.target.value)} />     
                <span>Hours</span>
            </div>
            <div>
                <input type='number' value={seconds} onChange={(e) => setSeconds(e.target.value)} />     
                <span>Hours</span>
            </div>
            <button onClick={startTimer}>P</button>
        </>
    );
}

export default Input;
