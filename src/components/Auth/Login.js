// src/components/Login.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/actions";
import { useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = dispatch(loginAction({ email: email, password: password }));
    console.log(res);
    // You can dispatch the login data here.
    // For simplicity, we'll just log the data for now.
    console.log({ email, password });
  };
  const userData = useSelector((state) => state.tasks.userDetails);
  const token = localStorage.getItem("token");
  useEffect(() => {
    localStorage.getItem("token") && navigate("/");
  }, [userData, token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600"
            >
              Log In
            </button>
          </div>

          <div className="text-center">
            <p>
              New here? Please{" "}
              <Link to="/signup" className="text-indigo-500 underline">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
