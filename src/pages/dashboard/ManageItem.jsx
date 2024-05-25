import React from "react";
import SectionTitle from "./../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleMenuDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div>
      <SectionTitle
        subHading={"---Manage All Items---"}
        hading={"Hurry Up"}
      ></SectionTitle>
      <div className="flex flex-col px-20">
        <div className="flex justify-between my-4">
          <h2 className="text-3xl">All Users</h2>
          <h2 className="text-3xl">Total Users {menu.length}</h2>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th></th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {menu.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <img
                        className="w-[70px] rounded-full border border-black"
                        src={item.image}
                        alt=""
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>$ {item.price}</td>
                    <td>{item.email}</td>
                    <td>
                      <Link to={`/dashboard/updateItem/${item._id}`}><button className="btn text-green-700 text-2xl">
                        <FaEdit />
                      </button></Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleMenuDelete(item)}
                        className="btn text-red-700 text-2xl"
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
