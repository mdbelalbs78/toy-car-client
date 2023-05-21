import React, {  useEffect, useState } from 'react';

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
  <table className="table w-full bg-gray-500">
    {/* head */}
    <thead >
      <tr >
        
        <th>Name</th>
       
        <th>seller</th>
        <th>email</th>
        <th>category</th>
        <th>price</th>
        <th>rating</th>
        <th>quantity</th>
        <th>description</th>
      </tr>
    </thead>
    <tbody>
      {
        all.map(data => <tr >
            <th>{data.name}</th>
            
            <td>{data.seller}</td>
            <td>{data.email}</td>
            <td>{data.category}</td>
            <td>{data.rating}</td>
            <td>{data.price}</td>         
            <td>{data.quantity}</td>
            <th>{data.description}</th>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AllToy;