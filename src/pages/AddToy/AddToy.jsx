import React from 'react';

const AddToy = () => {
    const handleInputFrom = (event) => {
        event.preventDefault();
      
        const form = event.target;
        const picture = form.picture.value;
        const name = form.name.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

      
        const newToy = {
            
          picture,
          name,
          seller,
          email,
          category,
          price,
          rating,
          quantity,
          description
        };
        console.log(newToy);
        fetch('http://localhost:5000/services',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
                
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    };
      
    //     fetch('https://toy-marketplace-server-neon.vercel.app/toys', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(newToy),
    //     })
    //       .then((response) => response.json())
    //       .then((data) => {
    //         console.log(data);
    //         if(data.insertedId){
    //           alert('done');
    //           form.reset();
    //           // navigate('/');
    //       }
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //         // Show an error message
    //       });
    //   };
    return (
        <div className="container mx-auto px-4">
    <div className="flex justify-center items-center min-h-screen">
    <form onSubmit={handleInputFrom}
      id="addToyForm"
      className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 bg-white rounded-lg shadow-lg p-6"
      
    >
      <h2 className="text-2xl font-bold mb-6">Add a Toy</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Picture URL</label>
        <input
          type="text"
          name="picture"
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
          
          required

        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Name</label>
        <input
          type="text"
          name="name"
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
         
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Seller Name</label>
        <input
          type="text"
          name="seller"
          
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Seller Email</label>
        <input
          type="text"
          name="email"        
          className="border border-gray-300 rounded-md px-4 py-2 w-full"        
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Sub-category</label>
        <input
          type="text"
          name="category"
          className="border border-gray-300 rounded-md px-4 py-2 w-full"         
          required
        />
      </div>
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
        <label className="block text-gray-700 font-bold mb-2">Rating</label>
        <input
          type="text"
          name="rating"
          className="border border-gray-300 rounded-md px-4 py-2 w-full"          
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Quantity Available</label>
        <input
          type="text"
          name="quantity"
          className="border border-gray-300 rounded-md px-4 py-2 w-full"         
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Detail Description</label>
        <textarea
          name="description"
          className="border border-gray-300 rounded-md px-4 py-2 w-full h-32"   
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded `}
          
        >
          Add Toy
        </button>
      </div>
    </form>
    </div>
    </div>


    );
  };

export default AddToy;