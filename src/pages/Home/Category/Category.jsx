import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Category = () => {

    const [category,setCategories] = useState('')

  const [categorys, setCategoris] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/toyCategory/${category}`)
      .then((res) => res.json())
      .then((data) => setCategoris(data));
  }, [category]);

  const handleToy = (e) => {
    setCategories(e.target.value)
    console.log(e.target.value);
  }

  console.log(categorys);
  return (
    <div className="text-center">
      <Tabs>
        <TabList>
         

          <Tab><input onClick={handleToy} type="submit" value="car toy" /></Tab>
          <Tab><input onClick={handleToy} type="submit" value="bus toy" /></Tab>
          <Tab><input onClick={handleToy} type="submit" value="tarck toy" /></Tab>
         

        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-3  sm:grid-cols gap-4">
            {categorys.slice(0, 3).map((data) => (
              <div key={data._id}>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={data.picture}
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{data.name}</h2>
                    <p>{data.price}</p>
                    <p>{data.rating}</p>
                    <div className="card-actions">
                    <Link to={`/view/${data._id}`}>View Details</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3  sm:grid-cols gap-4">
            {categorys.slice(0, 3).map((data) => (
              <div key={data._id}>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={data.picture}
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{data.name}</h2>
                    <p>{data.price}</p>
                    <p>{data.rating}</p>
                    <div className="card-actions">
                    <Link to={`/view/${data._id}`}>View Details</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3  sm:grid-cols gap-4">
            {categorys.slice(0, 3).map((data) => (
              <div key={data._id}>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={data.picture}
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{data.name}</h2>
                    <p>{data.price}</p>
                    <p>{data.rating}</p>
                    <div className="card-actions">
                    <Link to={`/view/${data._id}`}>View Details</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
