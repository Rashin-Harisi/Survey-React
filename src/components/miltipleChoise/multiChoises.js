import React, { useState } from 'react';
import Layout from '../layout/layout';
import './multiCoises.css';

const MultiChoicesQuestions = ({ Question, Options }) => {
    const [options, setOptions] = useState(Options);//Options should be an array;
    const [question, setQuestion] = useState(Question);//Question should be a string;

    console.log('options', options)

    return (
        <div className='multiChoicesQuestion'>
            <Layout>
                <p className='question'>{question}</p>
                <ul className='options'>
                    {options.map((option) =>
                        <li key={option}> <input type='checkBox' /> {option}</li>
                    )}
                </ul>
            </Layout>

        </div>
    )
};

export default MultiChoicesQuestions