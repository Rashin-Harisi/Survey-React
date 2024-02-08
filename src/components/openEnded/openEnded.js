import React, { useState,useEffect } from 'react';
import './openEnded.css';
import Timer from '../timer/timer'




const OpenEndedQuestion = ({ Question, ID, onAnswerChange}) => {
    const [question] = useState(Question); //question should be an string
   
    const handleChange = (event) => {
       
        if (event) event.preventDefault();
        let value = event.target.value;
        onAnswerChange(value)
        localStorage.setItem(question, value);
        
    }

    const [timerValue,setTimerValue]= useState(0);
    const handleTimerValue = (time)=>{
        setTimerValue(time);
    }
    //JSON.stringify(localStorage.setItem(ID,timerValue));
    //console.log("OpenEndedQuestion",timerValue)
    return (
        <div className='questionBox'>
            <div className='timer'><Timer onChangeTimer={handleTimerValue} ID={ID}/></div>
            <div className='openEndedQuestion'>
                <p className='question'>{question}</p>
                <input className='answer' type='text' placeholder='Please Write your answer here.' onChange={handleChange} required />
            </div>
        </div>

    )
};
export default OpenEndedQuestion;
