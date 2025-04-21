import React from 'react'
import { Link } from 'react-router-dom'

function Read() {
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className='w-50 rounded bg-white p-4 '>
<h2> Student Details</h2>
  
  <h3>101</h3>
  <h3>Abhishek</h3>
  <h3>abhishek.47@yahoo.com</h3>
  <Link to={'/'} className='btn btn btn-primary m-1' >Back</Link>
  <Link to={'/edit'} className='btn btn btn-info m-1' >Edit</Link>
    </div>
      
  </div>
  )
}

export default Read