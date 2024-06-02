import React, { useState } from 'react'

const NumberSelector = ({error,selectedNumber,setSelectedNumber}) => {
    const numbers = [1, 2, 3, 4, 5, 6]; 
    
    return (
       
        <div className='flex flex-col -mt-24 p-1'>
           <p className='flex flex-row-reverse mr-8 text-red-700 font-medium '>{error} </p>
        <div className='flex flex-row-reverse '>
        {numbers.map((number) => (
          <div
            key={number}  onClick={()=>{setSelectedNumber(number)}}
            className={`box-border h-20 w-20 border-2 grid place-items-center mr-8 p-6 ${
                selectedNumber === number ? 'bg-black text-white border-4' : 'border-green-600'
              }`}
          >
            {number}   
          </div>
        ))}
         </div>
         <div className='flex flex-row-reverse mt-2 mx-2 font-bold text-lg font-serif mr-8'>

        
         <p>Select number</p>
         </div>
      </div>
    );
  };
  
  export default NumberSelector;