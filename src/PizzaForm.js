import React from 'react'
import {Link} from 'react-router-dom'

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

        <header>
            <h1>Lambda Eats</h1>
            <nav>
                <Link to = '/'>Home</Link >
                <Link to = '/help'>Help</Link >
            </nav>
        </header>

        <form id = 'form-container' onSubmit = {onSubmit}>
            <div id = 'form-top'>
                <h2>Build Your Own Pizza</h2>
            </div>
            <div className = 'before-input'>
                <h3>Choice of Size</h3>
                <p>Required</p>
                <div className = 'input container'>
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
                </div>
            </div>


        </form>
        </>
    )

}