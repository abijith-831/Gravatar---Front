import React, { useState } from 'react'
import '../css/form.css'

const Form = ({ onSubmit }) => {

    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        username: '',
        phone: '',
        location: '',
        website: '',
        bio: ''
    });

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name] : e.target.value})
    }

    const handleSubmit = (e)=>{
        console.log('ff',formData);
        e.preventDefault();
        onSubmit(formData);
 
    }

  return (
    <div className='container'>
      <h2>User Profile Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location (City, Country)" onChange={handleChange} required />
        <input type="url" name="website" placeholder="Personal Website or Social Profile" onChange={handleChange} required />
        <textarea name="bio" placeholder="Bio/Short Description" rows="3" onChange={handleChange} required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
