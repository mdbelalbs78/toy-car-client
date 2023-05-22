import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllToy = () => {
    const [all,setAll] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setAll(data))
    },[])
    console.log(all);
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead >
      <tr >
        
        <th>Name</th>      
        <th>seller</th>
        <th>email</th>
        <th>category</th>
        <th>price</th>
        <th>quantity</th>
        <th>Button</th>
      </tr>
    </thead>
    <tbody>
      {
        all.map(data => <tr >
            <th>{data.name}</th>           
            <td>{data.seller}</td>
            <td>{data.email}</td>
            <td>{data.category}</td>
            <td>{data.price}</td>         
            <td>{data.quantity}</td>
            <Link to={`/view/${data._id}`}>View Details</Link>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AllToy;