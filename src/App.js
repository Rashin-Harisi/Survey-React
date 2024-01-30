
import { useState } from 'react';
import './App.css';
import Questions from './components/questions/questions';

function App() {
  const [value, setValue] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleChange = (event) => {
    if (event) event.preventDefault();
    setValue(event.target.value)
  }
  const handleClick = () => {
    alert(`Dear ${value}, welcome to the survey. Please note that you have 2 minutes to answer each questions.`);
    setButtonClicked(true);
  }


  return (
    <div className="App">
      {!buttonClicked ? (
        <>
          <div className='welcome'>The survey is about the Psychology topic. </div>
          <div className='info'>
            <form>
              <label form='name'>Please Enter Your Full-Name: </label>
              <input className='name' id='name' type='text' required placeholder='e.x Rashin Harisi' onChange={handleChange} />
              <label form='age'>Please Enter Your Age: </label>
              <input className='age' id='age' type='text' required placeholder='e.x 33' />
              <input className='submit' type='submit' value='Start' onClick={handleClick} />
            </form>
          </div>
        </>
      ) : (<Questions />)
      }




    </div>
  );
}

export default App;
