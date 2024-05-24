import React from "react";
import useAuth from "../hooks/useAuth";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const {user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const from = location.state?.from?.pathname || "/";

  const handleAddToCart = food => {
    if(user && user.email){
      const cartItem = {
        menuId : _id,
        email : user.email,
        name,
        image,
        price
      }

      axiosSecure.post('/carts', cartItem)
      .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added`,
            showConfirmButton: false,
            timer: 1500
          });
          //refetch cart to update the cart items 
          refetch()
        }
      })
      

    }else{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state:{from:location}})
        }
      });
    }
  }

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
          <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
