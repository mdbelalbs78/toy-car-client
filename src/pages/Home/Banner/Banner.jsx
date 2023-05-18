import React from "react";
import img1 from '../../../assets/banner1.jpg'
import img2 from '../../../assets/banner.2.jpg'
import img3 from '../../../assets/banner3.jpg'
import img4 from '../../../assets/banner4.jpg'
const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
    <div id="slide1" className="carousel-item relative w-full">
      <img
        src={img1}
        className="w-full "
      />
      <div className="absolute rounded-xl flex items-center h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
       <div className='text-white space-y-7 w-1/2 pl-12'>
          <h2 className='text-6xl text-white font-bold  '>Premium Toy Cars Rental New York</h2>
          <p>Don't deny yourself the pleasure of driving the best premium cars from around the world here and now</p>
          <div >
          <button className="btn btn-primary font-semibold mr-5">Premium</button>
         
          </div>
       </div>
      </div>
      <div className="absolute flex justify-center transform -translate-y-1/2 left-0 right-0 bottom-0">
        <a href="#slide4" className="btn btn-circle mr-5">
          left
        </a>
        <a href="#slide2" className="btn btn-circle">
          right
        </a>
      </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
    <img
        src={img2}
        className="w-full "
      />
      <div className="absolute rounded-xl flex items-center h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
       <div className='text-white space-y-7 w-1/2 pl-12'>
       <h2 className='text-6xl text-white font-bold  '>Premium Toy Cars Rental New York</h2>
          <p>Don't deny yourself the pleasure of driving the best premium cars from around the world here and now</p>
          <div >
          <button className="btn btn-primary font-semibold mr-5">Premium</button>

          </div>
       </div>
      </div>
      <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href="#slide1" className="btn btn-circle mr-5">
          Left
        </a>
        <a href="#slide3" className="btn btn-circle">
          Right
        </a>
      </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
    <img
        src={img3}
        className="w-full "
      />
      <div className="absolute rounded-xl flex items-center h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
       <div className='text-white space-y-7 w-1/2 pl-12'>
       <h2 className='text-6xl text-white font-bold  '>Premium Toy Cars Rental New York</h2>
          <p>Don't deny yourself the pleasure of driving the best premium cars from around the world here and now</p>
          <div >
          <button className="btn btn-primary font-semibold mr-5">Premium</button>
          </div>
       </div>
      </div>
     <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href="#slide2" className="btn btn-circle mr-5">
          left
        </a>
        <a href="#slide4" className="btn btn-circle">
         right
        </a>
      </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full">
    <img
        src={img4}
        className="w-full "
      />
      <div className="absolute rounded-xl flex items-center h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
       <div className='text-white space-y-7 w-1/2 pl-12'>
       <h2 className='text-6xl text-white font-bold  '>Premium Toy Cars Rental New York</h2>
          <p>Don't deny yourself the pleasure of driving the best premium cars from around the world here and now</p>
          <div >
          <button className="btn btn-primary font-semibold mr-5">Premium</button> 
          </div>
       </div>
      </div>
      <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href="#slide3" className="btn btn-circle mr-5">
          left
        </a>
        <a href="#slide1" className="btn btn-circle">
          right
        </a>
      </div>
    </div>
  </div>
  );
};

export default Banner;
