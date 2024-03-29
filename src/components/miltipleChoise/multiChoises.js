import React, { useEffect, useState } from 'react';
import './multiCoises.css';
import Timer from '../timer/timer';


const MultiChoicesQuestions = ({ Question, Options,ID,onAnswerChange}) => {
    const [options] = useState(Options);//Options should be an array of 4 strings;
    const [question] = useState(Question);//Question should be a string;
    const [status,setStatus]= useState([false,false,false,false,false]);
   
    //check if another option was checked, the handleStatus function is for being sure that just the checked option's status would be true.   
    const handleStatus = (option)=>{ 
        if (status.includes(true)){
            let indexTrue=status.indexOf(true)
            setStatus((status)=>{
                const newStatusTrue = [...status];
                newStatusTrue[indexTrue]=false;
                return newStatusTrue})
        }
        let index=options.indexOf(option);
        setStatus((status)=>{
            const newStatus = [...status];
            newStatus[index]=true;
            return newStatus
        })
    }
    localStorage.setItem('checkedOption', status);

    const handleInputChanges = (option)=>{
        handleStatus(option);
    };

    useEffect(()=>{
        let indexAnswer= status.indexOf(true);
        let newOption = options[indexAnswer];
        onAnswerChange(newOption);
        localStorage.setItem(`${question}`, newOption)
    },[status])

    const [timerValue,setTimerValue]= useState(0);
    const handleTimerValue = (time)=>{
        setTimerValue(time);
    }
    
    //JSON.stringify(localStorage.setItem(ID,timerValue));
    //console.log("MultiChoicesQuestions",timerValue)
    return (
        <div className='QuestionBox'>
            <div className='timer'><Timer ID={ID} onChangeTimer={handleTimerValue}/></div>
            <div className='multiChoicesQuestion'>
                <p className='question'>{question}</p>
                <ul className='options'>
                    {options.map((option,index) =>
                        <li key={index}> <input type='radio'name='options' onChange={()=>handleInputChanges(option)}
                        checked={status[index]}/> {option}</li>
                    )}
                </ul>

        </div>
        </div>
        
    )
};

export default MultiChoicesQuestions