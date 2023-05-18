import React from "react";
import img5 from "../../../assets/gall5.jpg";
import img1 from "../../../assets/gall1.jpg";
import img2 from "../../../assets/gall2.jpg";
import img3 from "../../../assets/gall3.jpg";
import img4 from "../../../assets/gall4.jpg";

const Gallery = () => {
  return (
    <div className="mt-5">
      <h2 className="text-5xl font-bold  text-center p-3">Our Gallery</h2>
      <p className="font-bold text-center">Don't deny yourself the pleasure of driving the best  premium cars <br /> from around the world here and now</p>
      <section className="py-4 dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={img5}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />

          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img1}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img2}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img3}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img4}
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
