import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const MyToy = () => {

    const [myToy,setMyToy] = useState([])
    const {user} = useContext(AuthContext)
    
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${user.email}`)
        .then(res => res.json())
        .then(data => setMyToy(data))
    },[])
  console.log(myToy,user);
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead >
      <tr >
        
        <th>price</th>
        <th>available</th>
        <th>quantity</th>
        <th>description</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        myToy.map(data => <tr >
            
            <td>{data.available}</td>
            <td>{data.price}</td>         
            <td>{data.quantity}</td>
            <th>{data.description}</th>
            <th><button className="btn btn-success">Update</button></th>
            <th><button className="btn btn-error">Delete</button></th>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default MyToy;