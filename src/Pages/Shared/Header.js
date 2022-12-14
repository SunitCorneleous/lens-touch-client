import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);

  // nav items
  const navItems = (
    <>
      <li className="mx-2">
        <Link to="/">Home</Link>
      </li>
      <li className="mx-2">
        <Link to="/blogs">Blogs</Link>
      </li>
      {user?.uid && (
        <>
          <li className="mx-2">
            <Link to="/myreviews">My Reviews</Link>
          </li>
          <li className="mx-2">
            <Link to="/addservice">Add Service</Link>
          </li>
        </>
      )}
    </>
  );

  // logout handler
  const logOutHandler = () => {
    logOutUser()
      .then(() => {
        // success toast
        const notify = () => toast.success(`logged out successfully`);
        notify();
      })
      .catch(error => {
        const notify = () => toast.error(`log out failed, error: ${error}`);
        notify();
      });
  };

  // user profile or login button
  const userProfile = (
    <>
      {user?.email ? (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user.photoURL} alt="user"></img>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <p className="justify-between">{user.displayName}</p>
            </li>

            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          </ul>
        </div>
      ) : (
        <Link to="/login" className="btn btn-outline btn-primary">
          Login
        </Link>
      )}
    </>
  );

  return (
    <div className="w-10/12 mx-auto my-2">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl md:text-3xl font-bold"
          >
            Lens Touch
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navItems}</ul>
        </div>
        <div className="navbar-end">{userProfile}</div>
      </div>
    </div>
  );
};

export default Header;
