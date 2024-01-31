import React, { useState } from 'react';
import './openEnded.css';
import Layout from '../layout/layout';


const OpenEndedQuestion = ({ Question }) => {
    const [question] = useState(Question); //question should be an string    

    const handleChange = (event) => {
        if (event) event.preventDefault();
        let value=event.target.value;
        localStorage.setItem(question, value);
    }

    
    return (
        <div className='openEndedQuestion'>
            <Layout>
                <p className='question'>{question}</p>
                <input  className='answer' type='text' placeholder='Please Write your answer here.' onChange={handleChange} required/>
            </Layout>

        </div>
    )
};
export default OpenEndedQuestion;
