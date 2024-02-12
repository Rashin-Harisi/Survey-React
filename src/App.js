
import { useEffect, useState } from 'react';
import './App.css';
import Info from './components/info/info';

function App() {
  const [value, setValue] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);

/*
  useEffect(() => {
    const storedButtonClicked = localStorage.getItem('buttonClicked');
    if (storedButtonClicked) {
      setButtonClicked(true);
    }
  }, []);
*/

  const handleChange = (event) => {
    if (event) event.preventDefault();
    let name = event.target.value;
    localStorage.setItem('Name', `${name}`)
    setValue(name)
  }
  const handleClick = () => {
    setButtonClicked(true);
    //localStorage.setItem('buttonClicked', 'true')
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
      ) : (<Info />)
      }
    </div>
  );
}

export default App;
