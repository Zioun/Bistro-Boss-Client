import React from 'react';
import Slider from './Slider';
import Category from './Category';
import Testimonials from './Testimonials';
import SectionTitle from '../../components/SectionTitle';
import useMenu from '../../hooks/useMenu';
import PopularMenu from './PopularMenu';

const Home = () => {
    const [menu] = useMenu();
    const item = menu.filter(item => item.category === 'popular')
    return (
        <div>
            <Slider></Slider>
            <Category></Category>
            <SectionTitle subHading={"---Check it out---"} hading={"FROM OUR MENU"}></SectionTitle>
            <div className='grid grid-cols-2 gap-5'>
                {item.map(item => <PopularMenu key={item._id} item={item}></PopularMenu>)}
            </div>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;