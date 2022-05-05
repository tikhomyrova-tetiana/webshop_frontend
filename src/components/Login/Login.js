import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'

function Login() {

    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [login, setLogin] = useState(null)

    const onSubmit = async ({email, password}) => {
        try {
            const response = await axios.post('http://localhost:4000/auth/login', {email: email, password: password})
            const login = response.data
        } catch(error) {
            console.log(error.message)
        }
    }

    return (
           <div>
                <form className="submit-form">
             <h1>Login</h1>
             <h5>Welcome! Log in</h5>
             <div>
                 <h5>Email Address</h5>
                 <input value={inputEmail} onChange={(event) => setInputEmail(event.target.value)}></input>
             </div>
             <div>
                 <h5>Password</h5>
                 <input value={inputPassword} onChange={(event) => setInputPassword(event.target.value)}></input>
             </div>
             <button type="submit" onClick={(event) => onSubmit(inputEmail, inputPassword)}>Register</button>
            </form>
            <div>
                { login ? (`Welcome ${login.name}`) : (<p>Something went wrong</p>)}
            </div>
           </div>
         )
}

export default Login