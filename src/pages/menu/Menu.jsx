import React from 'react';
import Cover from '../../shared/Cover';
import image from '../../assets/menu/banner3.jpg'
import PopularMenu from './../home/PopularMenu';
import SectionTitle from './../../components/SectionTitle';

const Menu = () => {
    return (
        <div>
            <Cover image={image} title={"OUR MENU"} paragraph={"Would you like to try a dish?"}></Cover>
            <SectionTitle subHading={"---Check it out---"} hading={"FROM OUR MENU"}></SectionTitle>
            <PopularMenu></PopularMenu>
            <Cover image={image} title={"OUR MENU"} paragraph={"Would you like to try a dish?"}></Cover>
            <PopularMenu></PopularMenu>
            <Cover image={image} title={"OUR MENU"} paragraph={"Would you like to try a dish?"}></Cover>
            <PopularMenu></PopularMenu>
            <Cover image={image} title={"OUR MENU"} paragraph={"Would you like to try a dish?"}></Cover>
            <PopularMenu></PopularMenu>
            <Cover image={image} title={"OUR MENU"} paragraph={"Would you like to try a dish?"}></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;