import React from 'react'
import styled from 'styled-components'
const Totalscore = ({score}) => {
  return (
  <ScoreContainer>
    
    <h1>{score}</h1>
    <p>Total score</p>
    
  </ScoreContainer>   
  )
}

export default Totalscore


const ScoreContainer = styled.div`
  
  max-width: 150px;
  
  text-align: center;
  h1{
   font-size: 100px;
   font-weight: bold;
   line-height: 100px;
   
  }
 

  p{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 26 px;
  }
`