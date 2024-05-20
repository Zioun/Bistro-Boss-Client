import React from "react";
import MenuItem from "../../shared/MenuItem";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 py-5">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}><button className="btn btn-neutral my-5">Order Now</button></Link>
    </div>
  );
};

export default MenuCategory;
