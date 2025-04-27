import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Create() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please fill all fields!");
      return;
    }
    
    axios.post('http://localhost:8081/create', { name, email })
      .then(res => {
        console.log(res);
        navigate('/'); // Go to home after successful create
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className='w-50 rounded bg-white p-3'>
        <h2>Add a Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label>Name</label>
            <input 
              type="text" 
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter Name" 
              className="form-control" 
            />
          </div>
          <div className="mb-2">
            <label>E-mail</label>
            <input 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter E-mail" 
              className="form-control" 
            />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
