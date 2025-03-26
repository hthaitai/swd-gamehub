import React, { useState, useRef, useEffect } from "react";
import accountData from "../data/accountData";
import productService from "../api/productService";
import { jwtDecode } from "jwt-decode";

function Profile() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const accountSignInRef = useRef(null);
  const personalInfoRef = useRef(null);
  const paymentHistoryRef = useRef(null);
  const [tokenUser, setTokenUser] = useState("");
  const [user, setUser] = useState({});
  const isValid =
    currentPassword &&
    newPassword &&
    confirmPassword &&
    newPassword === confirmPassword &&
    newPassword !== currentPassword;

  const handleScrollToSection = (ref) => {
    if (ref.current) {
      const offset = 100; // Điều chỉnh khoảng trống theo chiều cao của navbar
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  const handleProfile = () => {
    productService
      .getUserById(tokenUser)
      .then((res) => {
        setUser(res);
        console.log(res);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
        setTokenUser(decodedToken.userId);
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, []);

  useEffect(() => {
    if (tokenUser) {
      handleProfile();
    }
  }, [tokenUser]);
  return (
    <div className="flex items-start justify-center mt-[150px]">
      {/* Sidebar */}
      <div className="fixed top-30 left-20 h-[800px] w-[500px] flex-shrink-0 flex flex-col">
        <h1 className="text-5xl font-extrabold h-[180px]">
          Account Management
        </h1>
        <div className="flex flex-col gap-y-4">
          {[
            {
              icon: "fa-user",
              text: "PERSONAL INFORMATION",
              ref: personalInfoRef,
            },
            { icon: "fa-key", text: "ACCOUNT SIGN-IN", ref: accountSignInRef },

            {
              icon: "fa-cart-shopping",
              text: "PAYMENT HISTORY",
              ref: paymentHistoryRef,
            },
          ].map((item, index) => (
            <div
              key={index}
              role="button"
              className="flex items-center hover:text-blue-500 cursor-pointer"
              onClick={() => handleScrollToSection(item.ref)}
            >
              <i
                className={`fa-solid ${item.icon} mr-4 fa-lg`}
                aria-hidden="true"
              ></i>
              <button className="font-semibold text-xl">{item.text}</button>
            </div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex ml-32 flex-col w-[1000px] space-y-8">
        {/* Personal Information Section */}
        <div
          ref={personalInfoRef}
          className=" h-[800px] gray-color flex rounded-sm "
        >
          <div className="w-[480px] flex flex-col">
            <p className="ml-10 text-6xl font-bold mt-12">
              Personal Information
            </p>
            <p className="ml-10 w-[300px] mt-6 font-semibold text-gray-300">
              This information is private and will not be shared with other
              users.{" "}
            </p>
          </div>
          <div className="w-[640px] bg-[#292727]">
            <div className="m-24 flex flex-col">
              <div>
                <h1 className="mt-2 font-bold">Username</h1>
                <p className="w-[400px] mt-2 bg-[#383636]  p-3 rounded-md text-gray-200 focus:outline-none">
                  {user.username}
                </p>
              </div>
              <div>
                <h1 className="mt-2 font-bold">Email</h1>
                <p className="w-[400px] mt-2 bg-[#383636]  p-3 rounded-md text-gray-200 focus:outline-none">
                  {user.email}
                </p>
              </div>
              <div>
                <h1 className="mt-2 font-bold">User Type</h1>
                <p className="w-[400px] mt-2 bg-[#383636]  p-3 rounded-md text-gray-200 focus:outline-none">
                  {user.roles}
                </p>
              </div>
              <div>
                <h1 className="mt-2 font-bold">Created Account Date</h1>
                <p className="w-[400px] mt-2 bg-[#383636]  p-3 rounded-md text-gray-200 focus:outline-none">
                  {user.create_at}
                </p>
              </div>
            </div>
          </div>{" "}
        </div>
        {/* Account Sign-In Section */}
        <div
          ref={accountSignInRef}
          className="h-[600px] rounded-sm gray-color flex"
        >
          <div className="w-[440px] flex flex-col">
            <p className="ml-10 text-6xl font-bold mt-12">Account Sign-In</p>
            <p className="ml-10 w-[300px] mt-6 font-semibold text-gray-300">
              We recommend that you periodically update your password to help
              prevent unauthorized access to your account.
            </p>
          </div>
          <div className="w-[640px] bg-[#292727]">
            <div className="m-24 flex flex-col">
              <form className="flex flex-col gap-4">
                <p className="font-bold text-4xl mb-6">Change password</p>
                <input
                  className="w-full bg-transparent border-2 border-[#333131] p-3 rounded-md text-gray-200 focus:outline-none"
                  type="password"
                  placeholder="Current Password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <input
                  className="w-full bg-transparent border-2 border-[#333131] p-3 rounded-md text-gray-200 focus:outline-none"
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                  className="w-full bg-transparent border-2 border-[#333131] p-3 rounded-md text-gray-200 focus:outline-none"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  className={`w-full p-3 rounded-md ${
                    isValid
                      ? "bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
                      : "bg-gray-600 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!isValid}
                >
                  SAVE CHANGES
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Payment History Section */}
        <div
          ref={paymentHistoryRef}
          className="h-[300px] gray-color flex items-center justify-center"
        >
          PAYMENT HISTORY
        </div>
      </div>
    </div>
  );
}

export default Profile;
