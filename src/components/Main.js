import React, { useEffect, useState } from 'react';
import Input from './Input';
import Timer from './Timer';

const Main = (props) => {

    const timerValue = {
        hours: 0,
        minutes: 0,
        seconds: 0
    }
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [timer, setTimer] = useState(timerValue);

    const startCountdown = (timerData) => {
        setTimer(timerData);
        setIsTimerRunning(!isTimerRunning);
    }
    const stopCountdown = () => {
        setTimer(timerValue);
        setIsTimerRunning(!isTimerRunning);
    }


    return (
        <div>
            {isTimerRunning ? (
                <Timer timerData={timer} stopCountdown={stopCountdown} />
            ) : (
                <Input startCountdown={startCountdown} />
            )}
        </div>
    );
}

export default Main;
