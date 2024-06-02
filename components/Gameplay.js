import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Totalscore from './Totalscore'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import { MyContext } from '@/Helper/Context'

const Gameplay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const {currentDice , setCurrentDice} = useContext(MyContext);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");

 
  const generateRandomNumber = (min, max) => {     
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
  
    if(!selectedNumber)
  {  
    setError("You have not picked a number")
    return;
  }
  setError("");

    if (selectedNumber === randomNumber) {
      setScore(score+randomNumber);
    } else {
      setScore(score-2);
    }
  
    setCurrentDice(randomNumber);
     setSelectedNumber(undefined);
  };
  

  return (
    <main>
        <div className='p-2'> 
        <Totalscore score={score}/>
        </div>
        <NumberSelector 
         error={error}
         selectedNumber={selectedNumber} 
          setSelectedNumber={setSelectedNumber}
        />
        <RoleDice currentDice={currentDice} generateRandomNumber={generateRandomNumber} />

    </main>
  )
}

export default Gameplay

