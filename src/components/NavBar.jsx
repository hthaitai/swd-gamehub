import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { CircleUserRound, Menu, X } from "lucide-react";
import { jwtDecode } from "jwt-decode";
import productService from "../api/productService";

const NavBar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profile, setProfile] = useState("");
  const [tokendecoded, setTokendecoded] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State quản lý popup

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("tokenChanged")); // 🚀 Gửi sự kiện cập nhật
    navigate("/login");
  };

  const handleProfile = () => {
    productService
      .getUserById(tokendecoded.userId)
      .then((res) => {
        setProfile(res);
        setIsProfileOpen(true);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  };

  useEffect(() => {
    const updateToken = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("tokenChanged", updateToken); // 🛠 Lắng nghe sự kiện
    return () => window.removeEventListener("tokenChanged", updateToken);
  }, []);
  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setTokendecoded(decodedToken);
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, [token]);
  return (
    <nav className="navbar bg-[#0F0F0F]">
      <a href="/">
      <h1 className="logo">
        <span className="bold">Game</span> | Hub
      </h1>

      </a>
   
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/games"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Games
          </NavLink>
        </li>
        {tokendecoded?.role === "DEVELOPER" ||
        tokendecoded?.role === "DESIGNER" ? (
          <li className="navbar-item">
            <NavLink
              to="/assets"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              Assets
            </NavLink>
          </li>
        ) : null}
      </ul>
      {token ? (
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-white p-2"
          >
            <Menu size={24} />
          </button>
          {dropdownOpen && (
            <div className="absolute bg-black bg-opacity-60 right-0 mt-2 w-48 shadow-lg rounded-lg py-2">
              <div className="px-4 py-2 border-b text-sm font-semibold">
                {tokendecoded?.username || "User"} ({tokendecoded?.role})
              </div>
              <button
                onClick={() => {
                  handleProfile();
                  setDropdownOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-500"
              >
                Profile
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-500">
                Settings
              </button>
              <button
                onClick={() => {
                  handleLogout();
                  setDropdownOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-red-500"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link to="/login">
          <button className="sign-in-btn relative bg-black text-white border border-white px-4 py-2 rounded-lg overflow-hidden transition-all duration-300 hover:border-white hover:shadow-white hover:shadow-md">
            <CircleUserRound
              className="sign-in-icon relative z-10"
              strokeWidth={1}
            />
            <span className="relative z-10">Sign in</span>
          </button>
        </Link>
      )}

      {/* Popup Profile */}
      {isProfileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-black bg-opacity-80 p-6 rounded-lg shadow-lg h-[500px] w-[500px] relative">
            <button
              className="absolute top-2 right-2"
              onClick={() => setIsProfileOpen(false)}
            >
              <X size={20} />
            </button>
            <div></div>
            <h2 className=" text-lg font-bold mb-4">User Profile</h2>
            {profile ? (
              <div className="text-center">
                <p>
                  <strong>Username:</strong> {profile.username || "N/A"}
                </p>
                <p>
                  <strong>Email:</strong> {profile.email || "N/A"}
                </p>
                <p>
                  <strong>Role:</strong> {profile.roles || "User"}
                </p>
              </div>
            ) : (
              <p>Loading profile...</p>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
