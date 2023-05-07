import React, { useState } from "react";
import axios from 'axios'
import "./RegisterPage.scss";
import swal from "sweetalert";
import { icons } from "react-icons";
  
function Register() {
  const BASE_URL = "http://localhost:8080"
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
 

  async function save(event) {
    
    event.preventDefault()
    const newAcc = {
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      Password: Password,
      };
    
      console.log("user", newAcc)
      await axios.post(`${BASE_URL}/auth/register`, newAcc)
      .then(() => {
        swal({
          text: "Sign up success",
          icon: "succes"
        });
      })
      .catch((err) => console.log("err", err));
      
      localStorage.setItem('firstName', FirstName)
      localStorage.setItem('lastName', LastName)
      localStorage.setItem('email', Email)
      localStorage.setItem('password', Password)
     
  }
  
  return (
    <>
      <p className="registerTitle">Registration Form</p>
  
      <form className="registerForm">
        <input type="text"  placeholder="First Name" value={FirstName} onChange={(event) => {setFirstName(event.target.value)}} />
        <input type="text"  placeholder="Last Name" value={LastName} onChange={(event) => {setLastName(event.target.value)}} />
        <input type="email" placeholder="Email" value={Email} onChange={(event) => {setEmail(event.target.value)}}/>
        <input type="password" placeholder="Password" value={Password} onChange={(event) => {setPassword(event.target.value)}}/>
        <button type={"button"} onClick={save} className="btn btn-primary" style={{ backgroundColor: "#a1eafb" }}> Submit</button> 
      </form>
      
    </>
  );
}
export default Register;