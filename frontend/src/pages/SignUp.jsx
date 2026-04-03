import React from "react";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="bg-linear-60 bg-blue-500 to-yellow-500 h-screen flex items-center justify-center">
      <div className=" w-96 bg-linear-180 bg-blue-200 to-yellow-200 rounded-2xl p-4">
        <form action="#" method="post">
        <div>
          <h2 className="text-center uppercase italic text-2xl hover:scale-110 font-bold hover:duration-75">
            Welcome
          </h2>
        </div>
        <div>
          <input
            type="text"
            className="border-2 rounded-md mt-4 content-center w-full h-12 p-4"
            placeholder="Full Name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            className="border-2 rounded-md mt-4 content-center w-full h-12 p-4"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            type="text"
            className="border-2 rounded-md mt-4 content-center w-full h-12 p-4"
            placeholder="Username"
            required
          />
        </div>
        <div>
          <input
            type="password"
            className="border-2 rounded-md mt-4 content-center w-full h-12 p-4"
            placeholder="Create New Password"
            required
          />
        </div>
        <div>
          <input
            type="password"
            className="border-2 rounded-md mt-4 content-center w-full h-12 p-4"
            placeholder="Confirm Passowrd"
            required
          />
        </div>
        <div className="flex flex-row pt-4">
          <input type="checkbox" required />
          <p className="flex pl-2">
            Agree with{" "}
            <b className="text-blue-700 font-bold pl-2">
              Terms & Conditions
            </b>{" "}
          </p>
        </div>
        <div className=" flex justify-center pb-4">
          <button className="bg-blue-400 hover:bg-blue-500 w-50 p-2 rounded-2xl text-white mt-4">
            Sign Up
          </button>
        </div>
        <hr />
        <div className="p-4">
          <p className="text-sm">
            Already Have an Account?
            <Link to="/login" className="pl-1 text-blue-600 font-bold">
              {" "}
              Login
            </Link>
          </p>
        </div>
        <hr />
        <div className="flex items-center justify-center pt-4">
          <button type="submit" className="bg-white p-4 rounded-xl">
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contnue with google
            </a>
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
