"use client"
import { MyContext } from '@/Helper/Context';
import Gameplay from '@/components/Gameplay';
import StartGame from '@/components/StartGame';
import React, { useContext, useState } from 'react'
import styled from "styled-components";


const page = () => {
const [isGameStarted, setIsGameStarted] = useState(true);

const toggle = ()=>{
  setIsGameStarted((prev) =>! prev);
}
  const user =  useContext(MyContext);
    

  return (
  <>
   {isGameStarted ? <Gameplay/> : <StartGame toggle={toggle} />}
  </>
  
  );
}

export default page;