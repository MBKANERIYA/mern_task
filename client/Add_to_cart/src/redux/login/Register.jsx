import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Register = () => {

  let [data, setData] = useState({})
  let [message, setMessage] = useState("")
  let navigate = useNavigate()

  console.log(data);

  let addData = async (e) => {
    e.preventDefault()
    try {
      let registration = await axios.post("http://localhost:3001/v1/user/create", data)
      console.log(registration.data.user);
      setData({ email: "", password: "" })
      setMessage('Registration successful!');
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      console.log(err.message);
    }
  }

  let handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  return (
    <div className="div">
      <input type="text" name='email' value={data.email} onChange={handleData} />
      <input type="text" name='password' value={data.password} onChange={handleData} />
      <button onClick={addData}>add</button>
      <h1>{message}</h1>
    </div>
  )
}

export default Register