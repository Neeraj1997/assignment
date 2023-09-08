import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changePasswordAction } from "../../store/actions";

function UserAccount() {
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(oldPassword==newPassword)
    {
      return window.alert("New Password can't be same as old")
    }
    if (newPassword != confirmNewPassword) {
      return window.alert("Password does't match");
    }
    dispatch(changePasswordAction({currentPassword:oldPassword,newPassword:newPassword}))
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="oldPassword" className="block text-gray-700">
              Old Password
            </label>
            <input
              type="password"
              id="oldPassword"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
              placeholder="Enter your old password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-gray-700">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmNewPassword" className="block text-gray-700">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmNewPassword"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
              placeholder="Confirm your new password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600"
            >
              Change Password
            </button>
          </div>

          <div className="text-center">
            <p>
              Back to{" "}
              <Link to="/" className="text-indigo-500 underline">
                Dashboard
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserAccount;
