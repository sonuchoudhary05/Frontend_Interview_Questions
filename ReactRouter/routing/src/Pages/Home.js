import React from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if(email && password){
      console.log("Navigate to posts")
      navigate("/posts")
    }
  }
  
  return (
    <div>
     <form onSubmit = {() => handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <textarea id="password" name="password"></textarea>
        <button type="submit">Submit</button>
     </form>
    </div>
  )
}

export default Home
