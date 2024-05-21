import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useCart from "../hooks/useCart";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const [cart] =  useCart();
  const handleLogout = () => {
    logOut()
    .then(()=>{})
    .catch(error => console.log(error))
  }

  const links = <>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/menu"}>Menu</NavLink></li>
    <li><NavLink to={"/order"}>Order</NavLink></li>
    <li><button className="btn btn-sm ml-5 mt-1 btn-warning">Cards:{cart.length}</button></li>
  </>
  return (
    <div className="navbar bg-slate-800 text-white border fixed z-10 max-w-screen-xl bg-opacity-75">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <><span onClick={()=>handleLogout()} className="btn btn-sm">Logout</span><span className="btn btn-sm ml-5 ">Name : {user && user.displayName}</span></>: <span className="btn btn-sm"><Link to={"/login"}>Login</Link></span>
        }
      </div>
    </div>
  );
};

export default Navbar;
