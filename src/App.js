import React, {useState, useEffect} from "react";
import { Route, Link, Switch } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const StyledHeader = styled.header``
const StyledDivMain = styled.div``
const StyledDivFake = styled.div``

//Empty From Values

const initialValues = {

  //Text Values
  specialInfo: '',
  name: '',
  //Dropdown Values
  size: '',
  //Radio
  sauce: '',
  //Checkboxes
  toppings: {
    pepperoni: false,
    sausage: false,
    onions: false,
    chicken: false,
    jalapeno: false,
  },
}

const initalPizzas = []
const initialDisabled = true


const App = () => {

  const [values, setValues] = useState(initialValues)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [pizzas, setPizzas] = useState(initalPizzas)



  const postNewPizza = newPizza => {

    setPizzas([...pizzas, newPizza])
    console.log(pizzas)

  }

  const checkBox = (name, checked) => {
    setValues({
      ...values, 
      [name]: checked
    })
  }

  const submit = () => {

    const newPizza = {
      specialInfo: values.specialInfo.trim(),
      name: values.name.trim(),
      size: values.size,
      sauce: values.sauce,
    }
    postNewPizza( newPizza )

  }

  

  useEffect(() => {}, [values])

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
            <div class = 'img-container'>
              <img src = 'https://images.unsplash.com/photo-1508736793122-f516e3ba5569?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt = '' height = '250px' ></img>
            </div>
            <p>Durger's Burgers</p>
            <p>$ - American - Burgers</p>
        </div>

        <div id = 'sushi'>
            <div class = 'img-container'>
              <img src = 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt = '' height = '250px'></img>
            </div>
          <p>Sushi Barr</p>
          <p>$$ - Japanese - Sushi</p>
        </div>

        <div>
          <div>
            <img src = 'https://images.unsplash.com/photo-1587339144367-f1cacbecac82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt = '' height = '250'></img>
          </div>
          <p>Pancake King</p>
          <p>$ - American - Breakfest</p>
        </div>

      </div>

      <Route path = '/'>
        {/* HomePage */}
      </Route>

      <Route path = '/pizza'>
        {/* Pizza Form */}
      </Route>

    </>
  );
};
export default App;
