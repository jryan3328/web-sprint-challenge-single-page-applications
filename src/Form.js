import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react';


const Form = (props) => {
    const { values, submit, change, errors, disabled} = props
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name, value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <div className = "formDiv">
            <h1>Build Your Pizza!</h1>
            
            <form onSubmit = {onSubmit}>
                <div className = 'errors'>
                    <p>{errors.name}</p>
                    <p>{errors.size}</p>
                </div>

                <label><h3>Name On Order</h3>
                    <h4>Required</h4>
                    <input name = "name" type="text" value = {values.name} onChange={onChange}/>
                </label>
                
                <label><h3>Choice of size</h3>
                    <h4>Required</h4>
                    <select
                    onChange={onChange}
                    value={values.size}
                    name='size'>
                        <option value = ''>--Select size--</option>
                        <option value = 'small'>Personal</option>
                        <option value = 'medium'>12"</option>
                        <option value = 'large'>14"</option>
                    </select>
                </label>

                <label><h3>Toppings</h3>
                    <h4>Choose up to 4</h4>
                    <label>Pepperoni
                    <input 
                        type='checkbox'
                        name='pepperoni'
                        onChange={onChange}
                    />
                    </label>
                    
                    <label>Onions
                    <input 
                        type='checkbox'
                        name='onions'
                        onChange={onChange}
                        />
                    </label>

                    <label>Olives
                    <input 
                        type='checkbox'
                        name='olives'
                        onChange={onChange}
                        />
                    </label>


                    <label>Peppers
                    <input 
                        type='checkbox'
                        name='peppers'
                        onChange={onChange}
                        />
                    </label>
                </label>

                <label><h3>Special Instructions</h3>
                <h4></h4>
                <input style = {{width: '90%', marginLeft:'4%'}} name = 'instructions' type = 'text' onChange={onChange} value = {values.instructions}/>
                </label>

                <button id = "submit" disabled={disabled}>Place Order</button>
            </form>
        </div>
    );
    };
export default Form;