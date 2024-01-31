import React from 'react';
import MultiChoicesQuestions from '../miltipleChoise/multiChoises';

const SingleQuestion = ()=>{
    return(
        <div className='box'>
            <MultiChoicesQuestions Question='How often do you experience stress or anxiety in your daily life?' Options={["Rarely","Occasionally","Frequently", "Almost Daily"]} />
        </div>
    )
};

export default SingleQuestion;