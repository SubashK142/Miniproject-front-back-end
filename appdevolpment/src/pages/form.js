import React, { useState } from 'react'
import axios from 'axios';
import Navbar from '../navbar';
import { useNavigate } from 'react-router-dom';

export default function Form() {
    const [name,setName] = useState('');
    const [email,setEmail]=useState('');
    const [feedback,setFeedback]=useState('');
    const navigate=useNavigate('');
   const handleChange=(e,setter)=>{
    setter(e.target.value);
    
}

const handleSubmit=(e)=>{
    e.preventDefault();
    const data={
        name:name,
        email:email,
        feedback:feedback

      }
  
   axios.post('http://localhost:8181/api/v1/demo/send',data,{
    headers: {
      // "Authorization": `Bearer ${token}`,
      'Content-Type': 'application/json',
      "Authorization":`Bearer ${localStorage.getItem('token')}`
    },
   })
   .then((res)=>{
      console.log(res.data)
      alert("Thanks For Your Valuable Feedback");
      navigate('/home');

     })
}
  return (
    <>
   <div>
   <Navbar/>
   </div>
    <div style={{backgroundColor:'black',height:'92vh'}}>
      <form onSubmit={handleSubmit} style={{color:'white',marginLeft:500,paddingTop:150,padding:30}}>
      <h1 style={{marginTop:30,marginRight:500,marginBottom:100}}>Share Your feedback</h1>
      <label htmlFor="new-username">Username</label>
        <input value={name} onChange={(e) => handleChange(e,setName)} className="margin" type="text" id="new-username" name="new-username" required placeholder="Enter your first" />
      
        <label htmlFor="new-username">Email</label>
        <input value={email} onChange={(e) => handleChange(e,setEmail)} className="margin" type="text" id="new-username" name="new-username" required placeholder="Enter your email" />
      
        <label htmlFor="new-username">explain your problem</label>
        <input styel={{heigth:300}} value={feedback} onChange={(e) => handleChange(e,setFeedback)} className="margin" type="text" id="new-username" name="new-username" required placeholder="Enter your feedback" />
      
   
    <button type='submit'>submit</button>
      </form>
    </div>
    </>
  )
}
