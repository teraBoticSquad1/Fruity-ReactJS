import React from 'react';
import Hero from './Hero/Hero';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import HurryUp from './HurryUp/HurryUp';
import Choose from './ChooseUs/Choose';
import Review from './Client/Review';
import AnyQuestion from './Q&A/AnyQuestion';
import Blog from './Blog/Blog';
import Footer from '../Others/Footer/Footer';
import Product from './Product/Product';

const Home = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <Banner></Banner>
            <Category></Category>
            <Product></Product>
            <HurryUp></HurryUp>
            <Choose></Choose>
            <Review></Review>
            <AnyQuestion></AnyQuestion>
            <Blog></Blog>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;