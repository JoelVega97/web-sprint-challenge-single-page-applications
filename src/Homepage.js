import React from 'react'
import {Link} from 'react-router-dom'

export default function HomePage(props){
    
    return (
        <>
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

        </>
    )

}