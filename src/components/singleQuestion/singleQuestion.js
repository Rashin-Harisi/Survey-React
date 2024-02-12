import React, { useEffect, useState } from 'react';
import MultiChoicesQuestions from '../miltipleChoise/multiChoises';
import OpenEndedQuestion from '../openEnded/openEnded';
import ListOfQuestions from '../../ListOfQuestions';
import './singleQuestion.css';
import Finish from '../finish/finish';

const SingleQuestion = () => {
    const [answers, setAnswers] = useState([]);
    const [disabledButtonPrevious, setDisabledButtonPrevious] = useState(false);
    const [disabledButtonNext, setDisabledButtonNext] = useState(false);
    const [questionFinished, setQuestionFinished] = useState(false);
    const [finishClicked, setFinishClicked] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion]= useState("");
    
    useEffect(() => {
        localStorage.setItem("Answers", JSON.stringify(answers));
    }, [answers]);
    //console.log('answers',answers)
    
/*
    useEffect(()=>{
        const storedFinishClicked = localStorage.getItem("FinishClicked");
        if (storedFinishClicked === 'true'){
            setFinishClicked(true)
        }
    },[]);
*/

    useEffect(()=>{
        setCurrentQuestion(ListOfQuestions[currentQuestionIndex]);
    },[currentQuestionIndex])


    const handlePreviousClicked = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setDisabledButtonPrevious(false)
        }
        setDisabledButtonNext(false);
        setDisabledButtonPrevious(currentQuestionIndex === 0)
    };


    const handleNextClicked = () => {
        if (currentQuestionIndex < ListOfQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setDisabledButtonNext(false)
        }
        setDisabledButtonPrevious(false);
        //setDisabledButtonNext(currentQuestionIndex === ListOfQuestions.length - 1);
        setQuestionFinished(currentQuestionIndex === ListOfQuestions.length - 1);

    };
    //const currentQuestion = ListOfQuestions[currentQuestionIndex];

    const handleAnswer = (newAnswer) => {
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
    const handleFinishClick = () => {
        setFinishClicked(true);
        //localStorage.setItem('FinishClicked', 'true');
    }
    
    return (
        <div className='box'>
            {!finishClicked ? (<>
                <div className='children'>
                    {currentQuestion.hasOwnProperty('options') ?
                        <MultiChoicesQuestions ID={currentQuestion.id} Question={currentQuestion.title} Options={currentQuestion.options} onAnswerChange={handleAnswer} /> :
                        <OpenEndedQuestion ID={currentQuestion.id} Question={currentQuestion.title} onAnswerChange={handleAnswer} />
                    }
                </div>
                <div className='buttons'>
                    <input type='button' className='previous' value='Previous' onClick={handlePreviousClicked} disabled={disabledButtonPrevious} />
                    {!questionFinished ? <input type='button' className='next' value='Next' onClick={handleNextClicked} />
                        : <input type='button' className='next' value='Finish' onClick={handleFinishClick} />}
                </div>
            </>) : <Finish Answer={answers}/>}

        </div>

    )
};

export default SingleQuestion;