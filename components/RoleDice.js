"use client"
import { MyContext } from '@/Helper/Context';
import React, { useContext, useState } from 'react'

const RoleDice = ({ currentDice, generateRandomNumber }) => {

   return (
    <div className='flex mt-40 flex-col'>
      <div
        className='flex justify-center align-middle cursor-pointer'
        onClick={() => generateRandomNumber(1, 7)}
      >
        <img src={`/images/Dice/dice_${currentDice}.png`} alt={`dice${currentDice}`} />
      </div>
      <div className='flex align-middle justify-center mt-4 font-serif font-bold text-lg'>
        <p>Click on Dice to Roll</p>
      </div>
     
    </div>
  );
};


export default RoleDice