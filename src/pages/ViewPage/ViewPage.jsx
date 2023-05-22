import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ViewPage = () => {
  const toyDetails = useLoaderData();
  const {
    category,
    description,
    email,
    name,
    picture,
    price,
    quantity,
    rating,
    seller,
  } = toyDetails;
  console.log(toyDetails.picture);
  return (
    <div>
      <div className="card w-3/4 mx-auto my-12 bg-base-100 shadow-xl">
        <div className="card-body w-3/4 mx-auto">
         <div className="w-52 h-50 text-center mx-auto">
         <img className="w-52 h-50 "  src={picture} alt="" />
         </div>
          <div className="text-center">
            <p>email:{email}</p>
            <p>{description}</p>
            <p>name:{name}</p>
            <p>price:{price}</p>
            <p>quantity:{quantity}</p>
            <p>category:{category}</p>
            <p> <FaStar/> rating:{rating}</p>
            <p>seller:{seller}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
