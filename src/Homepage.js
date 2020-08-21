import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`

 background-color: #FFF275;

 header{
     display:flex;
     background-color: #FF3C38;
     padding-top: 2%;
     align-items: center;
     justify-content:space-around
 }

 h1{
     font-size: 3.0rem;
 }

 nav a{
     text-decoration: none;
     font-size: 1.8rem;
     margin: 15%;
     color: black;
 }

 #main-body{
     margin: 5%;
     display: flex;
     flex-direction: column;
     align-items: center;
 }

 #main-body h2{
     font-size: 3.5rem
 }

 #main-body a{
    text-decoration: none;
    font-size: 2.5rem;
    color: #FF3C38;
    border: solid #0A2E36 5px;
    padding: 1.5%;
    border-radius: 15px;
    background-color: #0A2E36;
    margin-top: 4%;
 } 

 #fake-food{
     display: flex;
     justify-content:space-around;
 }

 #fake-food div{
    display: flex;
    flex-direction: column; 
    align-items: center;
    width: 25%;
    text-align: center;
 }

 #fake-food img{
     width: 250%;
 }

`

export default function HomePage(props){
    
    return (
        <>
    <StyledDiv>
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to = '/'>Home</Link >
          <Link to = '/help'>Help</Link >
        </nav>
      </header>

      <div id = 'main-body'>
        <h2>Why not eat while coding?</h2>
        <Link to = '/pizza'>Pizza!!</Link>
      </div>

      <div id = 'fake-food'>

        <div id = 'burger'>
            <div className = 'img-container'>
              <img src = 'https://images.unsplash.com/photo-1508736793122-f516e3ba5569?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt = '' height = '250px' ></img>
            </div>
            <p>Durger's Burgers</p>
            <p>$ - American - Burgers</p>
        </div>

        <div id = 'sushi'>
            <div className = 'img-container'>
              <img src = 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt = '' height = '250px'></img>
            </div>
          <p>Sushi Barr</p>
          <p>$$ - Japanese - Sushi</p>
        </div>

        <div id = 'pancake'>
          <div  className = 'img-container'>
            <img src = 'https://images.unsplash.com/photo-1587339144367-f1cacbecac82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt = '' height = '250'></img>
          </div>
          <p>Pancake King</p>
          <p>$ - American - Breakfest</p>
        </div>

      </div>
    </StyledDiv>
        </>
    )

}