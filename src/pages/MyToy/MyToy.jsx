import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Link } from 'react-router-dom';

const MyToy = () => {

    const [myToy,setMyToy] = useState([])
    const {user} = useContext(AuthContext)

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/services/${id}`, {
          method: 'DELETE'
          
        }) 
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount > 0){
              const remaining = myToy.filter(d => d._id !== id)
              setMyToy(remaining)
          }
        })
    }

  
    
    useEffect(()=>{
        fetch(`http://localhost:5000/servicess/${user.email}`)
        .then(res => res.json())
        .then(data => setMyToy(data))
    },[])
  console.log(myToy,user);
    return (
        <div>
            <div className="overflow-x-auto">
              
  <table className="table w-full">
    
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
            <th><Link to={`/updateToy/${data._id}`} className="btn btn-success">Update</Link></th>
            <th><button onClick={()=>handleDelete(data._id)} className="btn btn-error">Delete</button></th>
          </tr>)
      }
      
    </tbody>
  </table>

  

</div>
            
        </div>
    );
};

export default MyToy;