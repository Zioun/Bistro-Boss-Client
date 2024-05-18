import React, { useEffect, useState } from 'react';
import MenuItem from '../../shared/MenuItem';
import useMenu from './../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category == 'popular')
    return (
        <section>
            <div className='grid grid-cols-2 gap-5 py-5'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;