import React from "react";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title">{price}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
