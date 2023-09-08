import { UserCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/login");
  };
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("name");
  return (
    <nav className="bg-blue-400 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/">
            {" "}
            <div className="flex justify-between">
              <h1 className="text-2xl text-white font-semibold">
                {userName ? userName + "'s" : "My"} Tasks
              </h1>
              <span className="text-xs my-auto ms-3">(Famscominc Assignment)</span>
            </div>
          </Link>
          {token && (
            <div className="flex justify-around">
              <button
                onClick={onLogout}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
              >
                Log Out
              </button>
              <Link to="/useraccount">
                <UserCircleIcon className="w-10 h-10 ms-4 my-auto" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
