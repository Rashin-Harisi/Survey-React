import React, { useEffect, useState } from 'react';
import './timer.css';



const Timer = () => {
    const [start, setStart] = useState(false);
    const [timerFinished, setTimerFinished] = useState(false);
    
    const [count, setCount] = useState(0);

    const [minutes1, setMinutes1] = useState(2);
    const [minutes2, setMinutes2] = useState(0);

    const [seconds1, setSeconds1] = useState(0);
    const [seconds2, setSeconds2] = useState(0);

    useEffect(() => {
        setStart(true)
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
            if (seconds1 > 0) {
                setSeconds1(seconds1 - 1);
                return
            }
            if (seconds2 > 0) {
                setSeconds2(seconds2 - 1);
                setSeconds1(9);
                return
            }

            if (minutes1 > 0) {
                setMinutes1(minutes1 - 1);
                setSeconds1(9);
                setSeconds2(5);
                return
            }

            if (minutes2 > 0) {
                setMinutes2(minutes2 - 1);
                setMinutes1(9);
                setSeconds1(9);
                setSeconds2(5);
                return
            }
            setTimerFinished(true);
        }, 1000)
    }, [start, count]);

    
    useEffect(()=>{
       if(timerFinished){
        alert('Your time is finished.')
       } 
    },[timerFinished]);

    return (

        <div className='timer'>
            <div className='minutes'>
                <input type='button' value={minutes2} />
                <input type='button' value={minutes1} />
            </div>
            <span className='space'>:</span> 
            <div className='seconds'>
                <input type='button' value={seconds2} />
                <input type='button' value={seconds1} />
            </div>
        </div>



    )
};

export default Timer;