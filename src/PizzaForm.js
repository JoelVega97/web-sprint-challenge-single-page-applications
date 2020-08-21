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

 #form-top{
     text-align: center;
     font-size: 1.55rem;
 }

 .before-input{
     display: flex;
     justify-content: space-between;
     flex-direction:column;
     padding-left: 3%;
 }

 .before-input h3{
     font-size: 1.6rem;
 }

 .before-input p{
     font-size: 1.4rem;
 }

 .input-container{
    margin: 3% 3%;
 }

 #toppings{
    display: flex;
    flex-direction:column;
 }

 #toppings label{
    font-size: 1.3rem;
 }

 button{
     margin: 3%;
 }

`


export default function PizzaForm(props){
    const {values, checkbox, submit, disabled, errors, change} = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onCheckChange = evt => {
        const { name, checked } = evt.target
        checkbox(name, checked)
    }

    const onInputChange = evt => {
        const { name, value } = evt.target
        change(name, value)
    }

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


        <form id = 'form-container' onSubmit = {onSubmit}>
            
            {/* Name */}
            <div id = 'form-top'>
                <h2>Tell me what you want, What you really really want.</h2>
            </div>

            <div className = 'before-input'>
                <h3>What shall we call you?</h3>
                <p>Required</p>
            </div>
            <div className = 'input-container'>
                <label>Name: 
                    <input
                     value = {values.name}
                     onChange = {onInputChange}
                     name = 'name'
                     type = 'text'    
                    />
            <div className = 'error-message'> {errors.name} </div>
                </label>
            </div>


            {/* Size */}
                <div className = 'before-input'>
                    <h3>Choice of Size</h3>
                    <p>Required</p>
                </div>
                <div className = 'input-container'>
                    
                    <select
                     onChange = {onInputChange}
                     value = {values.size}
                     name = 'size'
                    >
                     <option value = ''>-- Choose a Size --</option>
                     <option value = 'small'>Small</option>
                     <option value = 'medium'>Medium</option>
                     <option value = 'large'>Large</option>
                     <option value = 'uge'>Uge</option>
                    </select>
                    <div> {errors.size} </div>
                </div>

                {/* Toppings */}
                <div className = 'before-input'>
                    <h3>What you want on top?</h3>
                    <p>Optional</p>
                </div>

                <div className = 'input-container' id = 'toppings'>
                    
                    <label>Pepperoni
                        <input 
                          type = 'checkbox'
                          name = 'pepperoni'
                          checked = {values.toppings.pepperoni}
                          onChange ={onCheckChange}

                         />
                    </label>

                    <label>Sausage
                        <input 
                          type ='checkbox'
                          name = 'sausage'
                          checked = {values.toppings.sausage}
                          onChange ={onCheckChange}
                        
                        />
                    </label>
                    
                    <label>Onions
                        <input 
                          type ='checkbox'
                          name = 'onions'
                          checked = {values.toppings.onions}
                          onChange ={onCheckChange}
                        
                        />
                    </label>

                    <label>Chicken
                        <input 
                          type ='checkbox'
                          name = 'chicken'
                          checked = {values.toppings.chicken}
                          onChange ={onCheckChange}
                        
                        />
                    </label>

                    <label>Jalapeno
                        <input 
                          type ='checkbox'
                          name = 'jalapeno'
                          checked = {values.toppings.jalapeno}
                          onChange ={onCheckChange}
                        
                        />
                    </label>
                </div>

                {/* Special Info */}

                <div className = 'before-input'>
                    <h3>Anything Extra?</h3>
                </div>
                <div className = 'input-container'>
                    <label>Special Instructions: 
                        <input 
                            value = {values.specialInfo}
                            onChange = {onInputChange}
                            name = 'specialInfo'
                            type = 'text' 
                        />
                    </label>
                </div>

                <button disabled = {disabled}>
                    <p>Order Now!</p>
                    </button>

        </form>
    </StyledDiv>
        </>
    )

}