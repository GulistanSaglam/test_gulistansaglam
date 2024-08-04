import React, { useState } from 'react'
import style from './signup.module.css'
import { useDispatch } from 'react-redux'
import { signUpUser } from '../reduxStore/userSlice'

const Signup = () => {

  const [fields, setFields] = useState({
    first_name: '',
    last_name: '',
    username: '',
    country: '',
    email: '',
    password: '',
    user_type: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value
    }));
  }

  const dispatch = useDispatch();

  const handleSignup = (e) => {
    e.preventDefault();
    // console.log(fields);

    let userInfo = {
      first_name: fields.first_name,
      last_name: fields.last_name,
      username: fields.username,
      country: fields.country,
      email: fields.email,
      password: fields.password,
      user_type: fields.user_type
    };

    dispatch(signUpUser(userInfo));
  }



  return (
    <div className={style.container}>
      <p>SIGN UP</p>
      <form className={style.form} onSubmit={handleSignup}>
        <input type="text" id='first_name' name='first_name' placeholder='First Name' value={fields.first_name} onChange={handleChange} required />
        <input type="text" id='last_name' name='last_name' placeholder='Last Name' value={fields.last_name} onChange={handleChange} required />
        <input type="text" id='username' name='username' placeholder='Username' value={fields.username} onChange={handleChange} required />
        <input type="text" id='country' name='country' placeholder='Country' value={fields.country} onChange={handleChange} required />

        <input type="text" id='email' name='email' placeholder='E-mail Address' value={fields.email} onChange={handleChange} required />
        <input type="password" id='password' name='password' placeholder='Password' value={fields.password} onChange={handleChange} required />
        <select
          id="user_type"
          name="user_type"
          required
          value={fields.user_type}
          onChange={handleChange}
        >
          <option value="selectionType">Select User Type*</option>
          <option value="researcher">Researcher</option>
          <option value="investor">Investor</option>
          <option value="institution_staff">Institution staff</option>
          <option value="service_provider">Service provider</option>
        </select>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup