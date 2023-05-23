import React, {  useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const AllToy = () => {
    const [all,setAll] = useState([])

    const [toySearch,setToySearch] = useState('')

    const handleSearch = () => {
         fetch(`http://localhost:5000/search/${toySearch}`)
         .then(res => res.json())
         .then(data => {
          setAll(data)
         })
    }

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setAll(data))
    },[])
    console.log(all);
    return (
        <div>
           <Helmet>
            <title>All Toy</title>
           
        </Helmet>
         <div className='text-center m-10'>
         <input onChange={(e)=>setToySearch(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
         <button onClick={handleSearch} className='bg-blue-400 p-3 ms-3'>Click</button>
         </div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
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