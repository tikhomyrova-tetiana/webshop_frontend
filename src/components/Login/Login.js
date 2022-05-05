import React from 'react'
import axios from "axios";
import './styles.css'
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import { Button } from '@mui/material';

function Login() {

    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [token, setToken] = useState(null)

    useEffect(() => {
        const onSubmit = async () => {
        try {
            const token = await axios.post('http://localhost:4000/auth/login', {email: "john@gmail.com", password: "password"})
            setToken(token.data)
            console.log(token.data)
        } catch(error) {
            console.log(error.message)
        }
    }
        onSubmit()
    }, [])
    
    return (
           <div className="login-form">
                <div>
                    <div>
                        <h1>Login</h1>
                        <h2>Welcome! Log in</h2>
                    </div>
                    <div>
                        <h3>Email Address</h3>
                        <input value={inputEmail} onChange={(event) => setInputEmail(event.target.value)}></input>
                    </div>
                    <div>
                        <h3>Password</h3>
                        <input value={inputPassword} onChange={(event) => setInputPassword(event.target.value)}></input>
                    </div>
                    <div><Button variant="outlined" color="secondary" size="small" type="submit" onClick={(event) => setToken()}>Register</Button></div>
                </div>
                <div>
                    { token ? (`Welcome ${token}`) : (<p>Something went wrong</p>)}
                </div>
           </div>
         )
}

export default Login