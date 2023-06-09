import React from 'react';
import {validate} from './validation'

export default function Form({login}){
   
   const [userData, setUserData]= React.useState({
      username:'',
      password:'',

   }) 

   const [errors, setErrors] = React.useState({})
   
function handleInputchange(e){
    setErrors(validate({...userData,[e.target.name]: e.target.value}))
    setUserData({...userData,[e.target.name]: e.target.value})
}

function handleSubmit(e) {

    e.preventDefault();
    login(userData);

}

    return (

<div>

    <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input 
        type='text' 
        name='username' 
        onChange={handleInputchange} 
        value={userData.username} />
        <p style={{color:'red'}}>{errors.username}</p>
        <label htmlFor='password'>Password:</label>
        <input type='password' 
        name='password' 
        onChange={handleInputchange} 
        value={userData.password}/>
        <p>{errors.password}</p>
        <button type='submit'>ENTRAR</button>

    </form>
</div>

    );
}