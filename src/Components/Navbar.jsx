import {  NavLink} from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar bg-base-100 container mx-auto">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 gap-3 w-36 p-2 shadow"
          >
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "  text-sky-500" : "hover:text-sky-500"}`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ?  "  text-sky-500" : "hover:text-sky-500"}`
              }
              to="/Users"
            >
              Users
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ?  "  text-sky-500" : "hover:text-sky-500"}`
              }
              to="/addUsers"
            >
             Add User
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ?  "  text-sky-500" : "hover:text-sky-500"}`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">User Management</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 px-1">
          <NavLink
            className={({ isActive }) =>
              `${isActive ?  "   text-sky-500" : "hover:text-sky-500"}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ?  "   text-sky-500" : "hover:text-sky-500"}`
            }
            to="/Users"
          >
           Users
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ?  "  text-sky-500" : "hover:text-sky-500"}`
            }
            to="/addUsers"
          >
            Add Users
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-3">
    
        

      </div>
    </div>
  );
};

export default Navbar;