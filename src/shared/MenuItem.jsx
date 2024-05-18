import React from 'react';

const MenuItem = ({item}) => {
    const {name,recipe,image,price} = item;
    return (
        <div className='flex items-center gap-5'>
            <div>
                <img className='h-[100px] object-cover rounded-md' src={image} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <p>{recipe}</p>
            </div>
            <div>{price}</div>
        </div>
    );
};

export default MenuItem;