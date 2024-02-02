import React, { useEffect, useState } from 'react';
import './timer.css';



const Timer = () => {
    function initialTimer(){
        const storedMinutes = localStorage.getItem('TimerMinutes');
        const storedSeconds = localStorage.getItem('TimerSeconds');

        if (storedMinutes === null || storedSeconds === null){
            localStorage.setItem('TimerMinutes', '1');
            localStorage.setItem('TimerSeconds', '59');    
        }        
    }
   

    const [timerFinished, setTimerFinished] = useState(false);
    const [count, setCount] = useState(0);
    //initialTimer();
    const [minutes, setMinutes] = useState(() => {
        initialTimer();
        return parseFloat(localStorage.getItem('TimerMinutes'));
    });
    const [seconds, setSeconds] = useState(() => {
        initialTimer();
        return parseFloat(localStorage.getItem('TimerSeconds'));
    });

    console.log(minutes, seconds, timerFinished)
    useEffect(() => {
        if (!timerFinished) {
            let timeOut = setTimeout(() => {
                setCount(count + 1)
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                    return
                } else if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    setTimerFinished(true)
                    localStorage.setItem('TimerMinutes','0')
                    localStorage.setItem('TimerSeconds','0')
                } 
            }, 1000);
            return () => clearTimeout(timeOut);
        }
        alert('Your time is finished! please note that you cannot change your answer anymore.')
    }, [count]);




    return (
        <div className='timer'>
            <div className='minutes'>
                <input type='button' value={minutes} />
            </div>
            <span className='space'>:</span>
            <div className='seconds'>
                <input type='button' value={seconds} />
            </div>
        </div>
    )
};

export default Timer;