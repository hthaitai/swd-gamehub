import React from "react"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="flex flex-col w-80 space-y-3">
        <h1 className="normal-case font-bold">Register</h1>

        <input
          className="bg-black w-full h-10 border-b border-gray-300 focus:outline-none focus:border-white"
          name="username"
          type="text"
          placeholder="Email"
        />
        <input
          className="bg-black w-full h-10 border-b border-gray-300 focus:outline-none focus:border-white"
          name="password"
          type="password"
          placeholder="Password"
        />

        <div>
          <div>
            <input name="role-developer" type="checkbox" />
            <label className="text-sm ml-2" for="role-developer">
              Developer
            </label>
          </div>
          <div>
            <input name="role-designer" type="checkbox" />
            <label className="text-sm ml-2" for="role-designer">
              Graphic Designer
            </label>
          </div>
        </div>

        <div className="flex">
          <p className="normal-case tracking-normal text-xs text-gray-300">
            Have an account?{" "}
            <Link className="hover:text-white hover:underline" to="/login">
              Sign in
            </Link>
          </p>
        </div>

        <div className="flex justify-end">
          <button className="mt-14 bg-white text-black font-bold text-sm p-[4px_32px] rounded-md border border-transparent hover:bg-black hover:text-white hover:border-white">
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
