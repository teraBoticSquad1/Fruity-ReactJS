import React from 'react';
import Hero from './Hero/Hero';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import HurryUp from './HurryUp/HurryUp';

const Home = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <Banner></Banner>
            <Category></Category>
            <HurryUp></HurryUp>
            
        </div>
    );
};

export default Home;