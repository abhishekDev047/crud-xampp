import React from "react";
import { useNavigate } from "react-router-dom";

function create() {

  const navigate = useNavigate();

  const handleSubmit= ()=>{
   navigate('/');
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className='w-50 rounded bg-white p-3 '>
        <h2>Add s Student </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Enter Name" className="form-control"/>
            </div>
            <div className="mb-2">
              <label htmlFor="">E-mail</label>
              <input type="email" placeholder="Enter E-mail" className="form-control"/>
            </div>
            <input type="submit" className="btn btn-success"/>
          </form>
      </div>
    </div>
  );
}

export default create;
