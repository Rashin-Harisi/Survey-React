import React, { useEffect, useState } from 'react';
import './finish.css';

const Finish = () => {
    const [Answer, setAnswer] = useState([]);
    const [finishButtonClick, setFinishButtonClick] = useState(false);
    const [name, setName]=useState('');
    useEffect(() => {
        setAnswer(JSON.parse(localStorage.getItem("Answers")))
        setName(localStorage.getItem('Name'))
    }, [])

    const handleClick = () => {
        setFinishButtonClick(true)
    }
    console.log(Answer)
    return (

        <div className='finish'>
            {!finishButtonClick ? (
                <>
                    <p> Dear <b> {name} </b>,we sincerely thank you for your participation. In the table below, your answers are listed. </p>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th style={{"width":"70%", "height": "50px", "paddingTop": "10px"}}>Question</th>
                                <th>Your Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Answer.map((answer) => {
                                return (
                                    <tr key={answer.title}style={{"height": "35px","textAlign":"center","paddingTop": "5px"}}>
                                        <td>{answer.title}</td>
                                        <td>{answer.answer}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <input type='button' value='Done' onClick={handleClick} />
                </>
            ) : ''}



        </div>
    )
};

export default Finish;