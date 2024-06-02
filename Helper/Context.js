"use client"
import React, { createContext, useState } from 'react'

export const MyContext=    createContext();

const Context = ({children}) => {
    const [currentDice, setCurrentDice] = useState(1);
    
    const generateRandomNumber = (min,max)=>{
        const randomNumber = Math.floor(Math.random() * ( max - min ) + min);
    setCurrentDice(randomNumber); 
    };
       
    return (
    <div>
    <MyContext.Provider  value={{ currentDice , generateRandomNumber,setCurrentDice }}>
        {children}
    </MyContext.Provider>
    </div>
  )
}

export default Context