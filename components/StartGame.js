import React from 'react'
import styled from 'styled-components'

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
        <img src="/images/dices.png" alt="dice" />
        </div>
         <div className='content'>
           <h1> Dice Game </h1> 
           <Button onClick={toggle}>Play Now</Button>
         </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
display: flex;
justify-content:center;   
align-items: center;
margin: 0 auto;
height: 100vh;
max-width: 1180px;

.content{
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
}

font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-weight: bolder;

`;

const Button = styled.button`
min-width: 220px;
color: white;
font-size: 16px;
background-color: black;
border-radius: 5px;
padding: 10px 15px;

&:hover{
    background-color: grey;
}
`;