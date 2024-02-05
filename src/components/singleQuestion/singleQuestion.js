import React, { useEffect, useState } from 'react';
import MultiChoicesQuestions from '../miltipleChoise/multiChoises';
import OpenEndedQuestion from '../openEnded/openEnded';
import ListOfQuestions from '../../ListOfQuestions';
import Timer from '../timer/timer';
import './singleQuestion.css'

const SingleQuestion = () => {
    const [answers,setAnswers] = useState([]);
    console.log(answers)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    
    const listOfQuestions = ListOfQuestions;
    //console.log(listOfQuestions)

    const handlePreviousClicked = () => {
      if(currentQuestionIndex>0){
        setCurrentQuestionIndex(currentQuestionIndex - 1)
      }
    };

    const handleNextClicked = () => {
        if(currentQuestionIndex < ListOfQuestions.length -1){
            setCurrentQuestionIndex(currentQuestionIndex + 1)
          }
    };
    const currentQuestion= ListOfQuestions[currentQuestionIndex];

    const handleAnswer= (newAnswer)=>{
        setAnswers((prevAnswers) => {
            const updatedAnswers = [...prevAnswers];
            const currentQuestionObject = ListOfQuestions[currentQuestionIndex];

            // Find the index of the current question's answer in the array
            const existingAnswerIndex = updatedAnswers.findIndex(
                (answer) => answer.title === currentQuestionObject.title
            );

            // If the answer already exists, update it; otherwise, push a new answer
            if (existingAnswerIndex !== -1) {
                updatedAnswers[existingAnswerIndex].answer = newAnswer;
            } else {
                updatedAnswers.push({ title: currentQuestionObject.title, answer: newAnswer });
            }
            return updatedAnswers;
        })
    }
    
    return (
        <div className='box'>
            <div className='timer'><Timer /></div>
            <div className='children'>
                {currentQuestion.hasOwnProperty('options')?
                    <MultiChoicesQuestions Question={currentQuestion.title} Options={currentQuestion.options} Answer={answers} onAnswerChange={handleAnswer}/> :
                    <OpenEndedQuestion Question={currentQuestion.title} Answer={answers} onAnswerChange={handleAnswer}/>
                }
            </div>
            <div className='buttons'>
                <input type='button' className='previous' value='Previous' onClick={handlePreviousClicked} />
                <input type='button' className='next' value='Next' onClick={handleNextClicked} />
            </div>
        </div>

    )
};

export default SingleQuestion;