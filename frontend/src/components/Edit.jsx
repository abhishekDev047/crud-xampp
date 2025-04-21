import React from 'react';
import { useNavigate } from 'react-router-dom';


function Edit() {
    const navigate = useNavigate();

    const handleSubmit= ()=>{
     navigate('/read');
    };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className='w-50 rounded bg-white p-3 '>

      <h2>Update Details  </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Enter Name" className="form-control"/>
            </div>
            <div className="mb-2">
              <label htmlFor="">E-mail</label>
              <input type="email" placeholder="Enter E-mail" className="form-control"/>
            </div>
            <button type="submit"  className="btn btn-success"> Update </button>
          </form>
      </div>
        
    </div>
  )
}

export default Edit