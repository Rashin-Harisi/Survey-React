import React, { useEffect, useState } from 'react';
import './questions.css';

const Questions =({setButtonClicked}) =>{
    const [name, setName]= useState('')
    const [clicked, setClicked]= useState(false)
    const handleClick = ()=>{
        localStorage.setItem ('buttonClicked', 'false');
        setButtonClicked(false);
        setClicked(true)
    }
    useEffect(()=>{
        const userName = localStorage.getItem('Name');
        setName(userName);
    },[])
    return(
        <div className='questionBox'>
            {!clicked? (<>
            <p className='explanation'>Hello {name}. Welcome to the survey. There are 10 questions to evaluate your current mental situation. Please note that you have 2 minutes to answer each question, and at the end of the time you cannot change your answer. Please choose the option which is the closest one to your answer. If you are ready please click the button.  </p>
                <input type='submit' className='startButton' onClick={handleClick} value="Lest's Start!" />
            </>):''}
            
        </div>
    )
} ;

export default Questions;