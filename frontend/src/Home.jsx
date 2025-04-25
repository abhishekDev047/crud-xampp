import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";

function Home() {
  const [data , setData] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:8081")
      .then(res =>{console.log("API Response:", res.data);
       setData(res.data)})
    .catch(err => console.log(err));
    }, []);
    

    const handleDelete = ()=>{
      console.log("delete button is working fine")
    };
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 rounded bg-white p-3 '>
        <h2> Student List</h2>
        <div className="d-flex justify-content-end">
            <Link to = "/create" className="btn btn-success">Create</Link>
        </div>
        <table className='table'>
            <thead>
                <tr>
                   <th>ID</th>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Action</th>
                </tr>
            </thead>
            <tbody>

              {data.map((student,index)=>{
                return <tr key={index}>
                    <td>{student.ID}</td>
                    <td>{student.Name}</td>
                    <td>{student.Email}</td>
                    <td>
                        <Link to={`/read`} className="btn btn-sm btn-info">Read</Link>
                        <Link to={`/edit`} className="btn btn-sm btn-primary mx-2 "> Edit</Link>
                        <button onClick={()=>handleDelete()} className="btn btn-sm btn-danger "> Delete</button>
                    </td>
                </tr>
              })}
            </tbody>
        </table>

    </div>
    </div>
  );
};

export default Home;