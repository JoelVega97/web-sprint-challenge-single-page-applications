import React, {useState, useEffect} from "react";
import { Route, Link, Switch } from 'react-router-dom'
import formSchema from './formSchema'
import * as yup from 'yup'
import PizzaForm from './PizzaForm'
import HomePage from './Homepage'
//import Order from './Order'




//Empty Form Values

const initialValues = {

  //Text Values
  specialInfo: '',
  name: '',
  //Dropdown Values
  size: '',
  //Checkboxes
  toppings: {
    pepperoni: false,
    sausage: false,
    onions: false,
    chicken: false,
    jalapeno: false,
  },
}

const initalErrors = {
  name: '',
  size: ''
}

const initalPizzas = []
const initialDisabled = true


const App = () => {

  const [values, setValues] = useState(initialValues)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [pizzas, setPizzas] = useState(initalPizzas)
  const [errors, setErrors] = useState(initalErrors)



  const postNewPizza = newPizza => {

    setPizzas([...pizzas, newPizza])
    setValues(initialValues)

  }
  
  const inputChange = (name, value) => {
    yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setErrors({
        ...errors, [name]: ''
      })
    })
    .catch(err => {
      setErrors({
        ...errors, [name]: err.errors[0]
      })
    })

    setValues({
      ...values,
      [name]: value
    })
  }

  const checkBox = (name, checked) => {
    setValues({
      ...values,
      toppings: {
        ...values.toppings,
        [name]: checked,
      }
    })
  }

  const submit = () => {

    const newPizza = {
      specialInfo: values.specialInfo.trim(),
      name: values.name.trim(),
      size: values.size,
      sauce: values.sauce,
      toppings: Object.keys(values.toppings).filter(top => values.toppings[top])
    }

    postNewPizza( newPizza )

  }



  useEffect(() => {
    formSchema.isValid(values)
      .then(valid => {
        setDisabled(!valid);
      }
    )}, [values])

  return (
    <>
      <Switch>

        <Route path = '/pizza/order'>
          {/* <Order details = {pizzas} /> */}
        </Route>

        <Route path = '/pizza'>
          <PizzaForm 
                values = {values}
                checkbox = {checkBox}
                submit = {submit}
                disabled = {disabled}
                errors = {errors}
                change = {inputChange} 
                />
        </Route>
        

      <Route path = '/'>
        <HomePage />              
      </Route>

      </Switch>
    </>
  );
};
export default App;
