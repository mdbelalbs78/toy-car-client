import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Update = () => {

    const updateToy = useParams()
    const {updates,setUpdates} = useState()
    console.log(updateToy);

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        console.log(price,quantity,description);

        const updateClick = {price,quantity,description} 
        console.log(updateClick);
        
        fetch(`http://localhost:5000/services/${updateToy.id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateClick)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
        })
    }



  return (
    <div className="">
      <form onSubmit={handleSubmit}
      id="addUpdateForm"
      className="w-full md:w-3/4 mx-auto lg:w-1/2 xl:w-1/3 bg-white rounded-lg shadow-lg p-6"
      
    >
     
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Price</label>
        <input
          type="text"
          name="price"
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
         
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">quantity</label>
        <input
          type="text"
          name="quantity"
          
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">description</label>
        <input
          type="text"
          name="description"        
          className="border border-gray-300 rounded-md px-4 py-2 w-full"        
          required
        />
      </div> 
      <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded `}
          
        >
          Update
        </button> 
        <Link className="bg-blue-400 text-white font-bold py-2 px-4 rounded mx-3" to='/myToy'>Back</Link>
        
    </form>
    
    </div>
  );
};

export default Update;
