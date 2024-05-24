import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
      .then(()=>{
        const userInfo = {
          name: data.name,
          email: data.email
        }
        axiosPublic.post('/users', userInfo)
        .then(res => {
          if(res.data.insertedId){
            Swal.fire({
              title: "Good job!",
              text: "You clicked the button!",
              icon: "success"
            });
            navigate("/")
          }
        })
        
      })
      .catch(error => console.log(error))
    });
  };
  return (
    <div class="w-full mt-60 border max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div class="px-6 py-4">
        <div class="flex justify-center mx-auto">
          <img
            class="w-auto h-7 sm:h-8"
            src="https://merakiui.com/images/logo.svg"
            alt=""
          />
        </div>

        <h3 class="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
          Welcome Back
        </h3>

        <p class="mt-1 text-center text-gray-500 dark:text-gray-400">
          Login or create account
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="w-full mt-4">
            <input
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              placeholder="Type Your Name"
              aria-label="Email Address"
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && <p>password required</p>}
          </div>
          <div class="w-full mt-4">
            <input
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              placeholder="Type Your Photo URL"
              aria-label="Email Address"
              {...register("photoURL", { required: true })}
            />
            {errors.PhotoURL?.type === "required" && <p>password required</p>}
          </div>
          <div class="w-full mt-4">
            <input
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && <p>password required</p>}
          </div>
          <div class="w-full mt-4">
            <input
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="Password"
              aria-label="Password"
              {...register("password", {
                minLength: 6,
                maxLength: 8,
                required: true,
              })}
            />
            {errors.password?.type === "required" && <p>password required</p>}
          </div>
          <div className="mt-3">
            <input
              type="submit"
              value={"SignUp"}
              className="btn text-white btn-primary w-full"
            />
          </div>

          {/* <input defaultValue="test" {...register("example")} /> */}
          {/* <input type="submit"  /> */}
        </form>
      </div>

      <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span class="text-sm text-gray-600 dark:text-gray-200">
          Don't have an account?{" "}
        </span>

        <span
          href="#"
          class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
        >
          <Link to={"/login"}>Login</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
