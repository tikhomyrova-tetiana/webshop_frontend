import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Signup() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [submit, setSubmit] = useState(null);

  // useEffect(() => {
  //     const onSubmit = async () => {
  //         const submit = await axios.post(`http://localhost:4000/auth/signup`, {name: name, email: email, password: password})
  //         setSubmit(submit.data)
  //     }
  //     onSubmit()
  // }, [])

  return (
    <form>
      <h1>Register</h1>
      <h5>Welcome! Create an account</h5>
      <div>
        <h5>Name</h5>
        <input onChange=""></input>
      </div>
      <div>
        <h5>Email Address</h5>
        <input onChange=""></input>
      </div>
      <div>
        <h5>Password</h5>
        <input onChange=""></input>
      </div>
      <button type="submit" onClick={(event) => setSubmit(event.target.value)}>
        Register
      </button>
    </form>
  );
}

export default Signup;
