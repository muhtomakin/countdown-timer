import React, { useEffect, useState } from 'react';

let timeOutId = 0;

const Timer = (props) => {

    const {timerData} = props;
    const [countdownTime, setCountdownTime] = useState(0);
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const calculateTimeLeft = () => {
        let currentDate = new Date().getTime();
        let difference = countdownTime - currentDate;
        let timeDifference = {
            hours: difference > 0 ? Math.floor((difference / (1000*60*60)) % 24) : 0,
            minutes: difference > 0 ? Math.floor((difference / 1000 / 60) % 60) : 0,
            seconds: difference > 0 ? Math.floor((difference / 1000) % 60) : 0
        };
        timeDifference.hours = timeDifference.hours < 10 ? `0${timeDifference.hours}` : `${timeDifference.hours}`;
        timeDifference.minutes = timeDifference.minutes < 10 ? `0${timeDifference.minutes}` : `${timeDifference.minutes}`;
        timeDifference.seconds = timeDifference.seconds < 10 ? `0${timeDifference.seconds}` : `${timeDifference.seconds}`;
        
        return timeDifference;
    }

    const stopTimer = () => {
        if (timeOutId > 0) {
            clearTimeout(timeOutId)
        }
        props.stopCountdown();
    }

    useEffect(() => {
        let expectedTime = new Date().getTime();
        let { hours, minutes, seconds } = timerData;
        expectedTime += hours > 0 ? hours * 3600000 : 0;
        expectedTime += minutes > 0 ? minutes * 60000 : 0;
        expectedTime += seconds > 0 ? seconds * 1000 : 0;
        setCountdownTime(expectedTime);
        return () => {
            expectedTime = 0;
        };
    }, [timerData]);

    useEffect(() => {
        if (countdownTime > new Date().getTime()) {
            timeOutId = setTimeout(() => {
                setTimeLeft(calculateTimeLeft());
            }, 1000);
        }
        return () => {
            clearTimeout(timeOutId);
        };
    });

    return (
        <div>
            <div>
                <label className="timer-label">{timeLeft.hours}</label>
                <span>Hours</span>
            </div>
            <div>
                <label className="timer-label">{timeLeft.minutes}</label>
                <span>minutes</span>
            </div>
            <div>
                <label className="timer-label">{timeLeft.seconds}</label>
                <span>seconds</span>
            </div>
            <button onClick={stopTimer}>A</button>
        </div>
    );
}

export default Timer;
