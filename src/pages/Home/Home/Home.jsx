import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Category from '../Category/Category';
import About from '../About/About';

const Home = () => {
    return (
        <div>
             <Helmet>
            <title>Home</title>
           
        </Helmet>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <About></About>
        </div>
    );
};

export default Home;