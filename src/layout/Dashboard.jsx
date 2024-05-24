import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { IoMdHome } from "react-icons/io";
import { FaUtensils } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // TODO: get asAdmin value from the database
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400 pt-5">
        <ul className="menu flex flex-col gap-3">
          {isAdmin ? (
            <>
              <li className="text-[20px]">
                <NavLink to={"/dashboard/adminHome"}>
                  <IoMdHome />
                  Admin Home
                </NavLink>
              </li>
              <li className="text-[20px]">
                <NavLink to={"/dashboard/addItems"}>
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li className="text-[20px]">
                <NavLink to={"/dashboard/manageItems"}>
                  <FaList />
                  Manage Items
                </NavLink>
              </li>
              <li className="text-[20px]">
                <NavLink to={"/dashboard/bookings"}>
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li className="text-[20px]">
                <NavLink to={"/dashboard/users"}>
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <></>
          )}
          {/* shared nav links */}
          <hr></hr>
          <li className="text-[20px]">
            <NavLink to={"/"}>
              <IoMdHome />
              Home
            </NavLink>
          </li>
          <li className="text-[20px]">
            <NavLink to={"/order/salad"}>
              <FaBars />
              Menu
            </NavLink>
          </li>
          <li className="text-[20px]">
            <NavLink to={"/order/contact"}>
              <FaRegEnvelopeOpen />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
