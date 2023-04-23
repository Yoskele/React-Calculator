import { useState } from 'react';
import './App.css';

function App() {
  const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.']
  const specialCharacters = ['/','*','-','+',];
  const [input, setInput] = useState('')
  const [answer, setAnswer] = useState(null)

  const validateList = () => {
    try{
      // Learned from ChatGPT
      //eval Takes our user input thats  a string '20+20' eval convert into a number with the right answer.
      setAnswer(eval(input))
    }catch(error){
      console.log('error', error)
    }
  }
  const deleteCharacter = () => {
    setInput(input.slice(0, -1));
  }
  return (
    <div className="App">
      <div className='calulator-body'>
        <div className='display-container'>
          {
            input ? (<h2>{input}</h2>) : (<p>.</p>) 
          }
          {
            answer ? (<h3 style={{color:'orange'}}>{answer}</h3>) : (<></>) 
          }
        </div>
        <div className='body-wrapper'> 
          <div className='button-container'>
            <div className='number-container'>
              {
                numbers.map(number=> 
                  <div 
                    onClick={() => setInput(input + number)}
                    className='button'
                  >
                    <b>{number}</b>
                  </div>
                )
              }
              <div
                onClick={() => validateList()}
                className='button'>
                =
              </div>
            </div>
            <div className='special-numbers'>
              {
                specialCharacters.map(sNumber => 
                  <div 
                    onClick={() => setInput(input + sNumber)}
                    className='button'>
                    <b>{sNumber}</b>
                  </div>
                )
              }
            </div>
          </div>
          <div className='submitContainer'>
            <button style={{background:'green', cursor:'pointer'}} onClick={() => validateList()}>Submit</button>
            <button style={{background:'#046250', cursor:'pointer'}} onClick={() => deleteCharacter()}>Erase</button>
            <button style={{background:'red', cursor:'pointer'}} onClick={() => setInput('')}>Delete All</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

