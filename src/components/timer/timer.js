import React, { useEffect, useState } from 'react';
import './timer.css';



const Timer = ({ onChangeTimer, ID }) => {
    const [finishedTime, setFinishedTime] = useState(false);

    const initial = () => {
        const Time = localStorage.getItem(ID);
        if (Time === null) {
            localStorage.setItem(ID, JSON.stringify(10))
        } else if (Time === 0) {
            setFinishedTime(true)
        }
    }


    const storedTime = JSON.parse(localStorage.getItem(ID)) || (() => {
        initial();
        return JSON.parse(localStorage.getItem(ID))
    });
    // console.log ('storedTime',storedTime)
    const [time, setTime] = useState(storedTime)
    const [count, setCount] = useState(0);


    useEffect(() => {
        if (!finishedTime) {
            let timeOut = setTimeout(() => {
                setCount(count + 1);
                if (time > 0) {
                    setTime(time - 1)
                    localStorage.setItem(ID, JSON.stringify(time - 1));
                } else {
                    setFinishedTime(true);
                    alert('Your Time is finished.')
                }
            }, 1000)
            return () => clearTimeout(timeOut)
        }
    }, [count, time, finishedTime, ID])

    useEffect(() => {
        onChangeTimer(time)
    }, [time])


    return (
        <div className='timer'>
            <div className='minutes'>
                <p>Remaining Time : <input type='button' value={time} /></p>
            </div>
        </div>
    )
};

export default Timer;