import React from "react";
import logo from '../../../assets/about.jpg'

const About = () => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={logo}
            alt="Album"
          />
        </figure>
        <div className="card-body my-20">
          <h2 className="card-title text-center mx-auto">About Toy Car</h2>
          <p>Founded by ex-Jalopnik editor Ray Wert, Tiny Toy Car is a creative studio specializing in digitial content and advertising strategy for the automotive ...</p>
         
        </div>
      </div>
    </div>
  );
};

export default About;
