import React, { useEffect, useState } from 'react';
import './info.css';
import SingleQuestion from '../singleQuestion/singleQuestion';

const Info = () => {
    const [name, setName] = useState('')
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        const storedButtonClicked = localStorage.getItem('clicked');
        if (storedButtonClicked === 'true') {
            setClicked(true);
        }
    }, []);

    useEffect(() => {
        const userName = localStorage.getItem('Name');
        setName(userName);
    }, []);
    
    const handleClick = () => {
        setClicked(true)
        localStorage.setItem('clicked', 'true');
    }
  
    return (
        <div className='questionBox'>
            {!clicked ? (<>
                <p className='explanation'>Hello {name}. Welcome to the survey. There are 5 questions to evaluate your current mental situation. Please note that you have 1 minutes to answer each question, and at the end of the time you cannot change your answer. Please choose the option which is the closest one to your answer. If you are ready please click the button.  </p>
                <input type='submit' className='startButton' onClick={handleClick} value="Lest's Start!" />
            </>) : <SingleQuestion />}

        </div>
    )
};

export default Info;