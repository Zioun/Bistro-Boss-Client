import React from 'react';
import Slider from './Slider';
import Category from './Category';
import PopularMenu from './PopularMenu';
import Testimonials from './Testimonials';
import SectionTitle from '../../components/SectionTitle';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Category></Category>
            <SectionTitle subHading={"---Check it out---"} hading={"FROM OUR MENU"}></SectionTitle>
            <PopularMenu></PopularMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;