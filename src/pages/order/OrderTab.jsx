import React from "react";
import FoodCard from "../../components/FoodCard";

const OrderTab = ({item}) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {item.map((salad) => (
        <FoodCard key={salad._id} item={salad}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
