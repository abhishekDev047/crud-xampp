import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {

  const {id} = useParams();
  const [student, setStudent] = useState([])
useEffect(() => {
axios.get("http://localhost:8081/read/"+id)
.then(res => {
  console.log(res);
  setStudent(res.data);
})
.catch(err => console.log(err));
},[]);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className='w-50 rounded bg-white p-4 '>
<h2> Student Details</h2>
  
  <h3> <b> Student Id :</b>{student.ID}</h3>
  <h3> <b>Name :</b>{student.Name}</h3>
  <h3><b>Email :</b>{student.Email}</h3>
  <Link to={'/'} className='btn btn btn-primary m-1' >Back</Link>
  <Link to={`/edit/${student.ID}`} className='btn btn btn-info m-1' >Edit</Link>
    </div>
      
  </div>
  )
}

export default Read