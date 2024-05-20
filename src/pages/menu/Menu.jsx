import React from 'react';
import Cover from '../../shared/Cover';
import image from '../../assets/menu/banner3.jpg'
import desserts from '../../assets/menu/dessert-bg.jpeg'
import SectionTitle from './../../components/SectionTitle';
import useMenu from '../../hooks/useMenu';
import MenuCategory from './MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category == 'popular')
    const dessert = menu.filter(item => item.category == 'dessert')
    const pizza = menu.filter(item => item.category == 'pizza')
    const salad = menu.filter(item => item.category == 'salad')
    const soup = menu.filter(item => item.category == 'soup')
    return (
        <div>
            <Cover image={image} title={"OUR MENU"} paragraph={"Would you like to try a dish?"}></Cover>
            <SectionTitle subHading={"---Don't miss---"} hading={"TODAY'S OFFER"}></SectionTitle>
            <MenuCategory items={popular} title={"popular"}></MenuCategory>

            <Cover image={desserts} title={"DESSERTS"} paragraph={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
            <MenuCategory items={dessert} title={"dessert"}></MenuCategory>

            <Cover image={desserts} title={"PIZZA"} paragraph={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
            <MenuCategory items={pizza} title={"pizza"}></MenuCategory>

            <Cover image={desserts} title={"SALAD"} paragraph={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
            <MenuCategory items={salad} title={"salad"}></MenuCategory>

            <Cover image={desserts} title={"SOUP"} paragraph={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
            <MenuCategory items={soup} title={"soup"}></MenuCategory>
            
        </div>
    );
};

export default Menu;