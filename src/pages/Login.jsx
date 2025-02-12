import React from "react"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="flex flex-col w-80 space-y-3">
        <h1 className="normal-case font-bold">Sign in</h1>
        
        <input
          className="bg-black w-full h-10 border-b border-gray-300 focus:outline-none focus:border-white"
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          className="bg-black w-full h-10 border-b border-gray-300 focus:outline-none focus:border-white"
          name="password"
          type="password"
          placeholder="Password"
        />

        <div className="flex">
          <p className="normal-case tracking-normal text-xs text-gray-300">
            Don't have an account?{" "}
            <Link className="hover:text-white hover:underline" to="/register">
              Register
            </Link>
          </p>
        </div>

        <div className="flex justify-end">
          <button className="mt-14 bg-white text-black font-bold text-sm p-[4px_32px] rounded-md border border-transparent hover:bg-black hover:text-white hover:border-white">
            Sign in
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
