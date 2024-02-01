import React from 'react';
import MultiChoicesQuestions from '../miltipleChoise/multiChoises';
import OpenEndedQuestion from '../openEnded/openEnded';

const SingleQuestion = ()=>{
    return(
        <div className='box'>
            <OpenEndedQuestion Question='How satisfied are you with your current relationships (family, friends, romantic)?'/>
        </div>
    )
};

export default SingleQuestion;