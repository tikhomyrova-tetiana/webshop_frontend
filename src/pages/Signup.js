import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Signup() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [submit, setSubmit] = useState("");

  // useEffect(() => {
  //     const details = async () => {
  //         const detailsResponse = await axios.create(`http://localhost:4000/auth/signup`)
  //         setProductDetail(detailsResponse.data)
  //     }
  //     details()
  // }, [])

  return (
    <div className="submit-form">
      <h1>Register</h1>
      <h5>Welcome! Create an account</h5>
      <div>
        <h5>Name</h5>
        <input></input>
      </div>
      <div>
        <h5>Email Address</h5>
        <input></input>
      </div>
      <div>
        <h5>Password</h5>
        <input></input>
      </div>
      <button type="submit" onClick={(event) => setSubmit(event.target.value)}>
        Register
      </button>
    </div>
  );
}

export default Signup;
