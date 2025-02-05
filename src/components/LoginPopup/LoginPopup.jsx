import React, { useEffect, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const LoginPopup = ({ setShowLogin }) => {

  const { url, setToken } = useContext(StoreContext)

  const [currState, setCurrState] = useState('Login')
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    console.log(data)
  }, [data])

  const onhandleChange = (e) => {
    setData(data => ({ ...data, [e.target.name]: e.target.value }))
  }

  const onLogin = async (e) => {
    e.preventDefault()
    let newUrl = url
    if (currState === "Login") {
      newUrl = `${url}/api/user/login`
    } else {
      newUrl = `${url}/api/user/register`
    }
    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token)
      localStorage.setItem('token', response.data.token)
      // alert("Login successful")
      setShowLogin(false)
    }
    else {
      alert(response.data.error)
    }
    console.log(result)
  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div action="" className="login-popup-inputs">
          {currState === "Login" ? <> </> : <input name='name' onChange={onhandleChange} value={data.name} type="text" placeholder="Your name" required />}
          <input name='email' onChange={onhandleChange} value={data.email} type="text" placeholder="Email" required />
          <input name='password' onChange={onhandleChange} value={data.password} type="password" placeholder="Password" required />
        </div>
        <button type='submit'>{currState === "Sign up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>I agree to the terms and conditions</p>
        </div>
        {currState === "Login" ?
          <p>Create a new account ? <span onClick={() => setCurrState("Sign up")}>Click here</span></p>
          : <p>Already have an account ? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        }

      </form>
    </div>
  )
}

export default LoginPopup
