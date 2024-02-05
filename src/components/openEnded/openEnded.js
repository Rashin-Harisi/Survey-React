import React, { useState } from 'react';
import './openEnded.css';
import Timer from '../timer/timer';



const OpenEndedQuestion = ({ Question, Answer, onAnswerChange }) => {
    const [question] = useState(Question); //question should be an string    
    
  
    
    const handleChange = (event) => {
        if (event) event.preventDefault();
        let value = event.target.value;
        onAnswerChange(value)
        localStorage.setItem(question, value);
    }
    

    return (
        <div className='questionBox'>
            <div className='timer'><Timer/></div>
            <div className='openEndedQuestion'>
                <p className='question'>{question}</p>
                <input className='answer' type='text' placeholder='Please Write your answer here.' onChange={handleChange} required />
            </div>
        </div>

    )
};
export default OpenEndedQuestion;
