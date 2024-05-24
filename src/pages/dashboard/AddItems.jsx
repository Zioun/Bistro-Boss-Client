import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = {image: data.image[0]};
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers:{
            'content-type':'multipart/form-data'
        }
    });
    if(res.data.success){
        //now send the menu item data to the server with the image url
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: res.data.data.display_url
        }
        const menuRes = await axiosSecure.post('/menu', menuItem);
        console.log(menuRes.data)
        if(menuRes.data.insertedId){
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    console.log(res.data);
  };
  return (
    <div className="px-20">
      <SectionTitle
        subHading={"---Check it out---"}
        hading={"FROM OUR MENU"}
      ></SectionTitle>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name?.type === "required" && <p role="alert">Name required</p>}
        <select
          defaultValue={"default"}
          {...register("category", { required: true })}
          className="select select-bordered w-full"
          aria-invalid={errors.category ? "true" : "false"}
        >
          <option disabled value="default">
            Select a category
          </option>
          <option value="salad">Salad</option>
          <option value="pizza">Pizza</option>
          <option value="soup">Soup</option>
          <option value="dessert">Dessert</option>
          <option value="drinks">Drinks</option>
        </select>
        {errors.category?.type === "required" && (
          <p role="alert">Category required</p>
        )}
        <input
          {...register("price", { required: true })}
          type="number"
          placeholder="Type here"
          className="input input-bordered w-full"
          aria-invalid={errors.price ? "true" : "false"}
        />
        {errors.price?.type === "required" && (
          <p role="alert">Price required</p>
        )}
        <textarea
          {...register("recipe")}
          className="textarea textarea-bordered"
          placeholder="Bio"
          aria-invalid={errors.recipe ? "true" : "false"}
        ></textarea>
        {errors.recipe?.type === "required" && (
          <p role="alert">Recipe required</p>
        )}
        <input
          {...register("image")}
          type="file"
          className="file-input file-input-bordered w-full"
          aria-invalid={errors.image ? "true" : "false"}
        />
        {errors.image?.type === "required" && (
          <p role="alert">Image required</p>
        )}
        <button className="btn btn-neutral">Add Item</button>
      </form>
    </div>
  );
};

export default AddItems;
