import React from 'react';

const PopularMenu = ({item}) => {
    const {name,recipe,image,price} = item;
    return (
        <div className='flex gap-2 items-center'>
            <div><img src={image} alt="" /></div>
            <div>
                <h1>{name}</h1>
                <p>{recipe}</p>
            </div>
            <div>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default PopularMenu;
