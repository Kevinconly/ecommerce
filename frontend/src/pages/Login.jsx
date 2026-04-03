import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-linear-60 bg-blue-500 to-yellow-500 h-screen flex items-center justify-center">
      <div className="h-1/2 w-96 bg-linear-180 bg-blue-200 to-yellow-200 rounded-2xl p-4">
        <div>
          <h2 className="text-center uppercase italic text-2xl hover:scale-110 font-bold hover:duration-75">
            Welcome Back!
          </h2>
        </div>
        <div>
          <input
            type="text"
            className="border-2 rounded-md mt-4 content-center w-full p-4 h-12"
            placeholder="Username or Email"
            required
          />
        </div>
                <div>
          <input
            type="password"
            className="border-2 rounded-md mt-4 content-center w-full p-4 h-12"
            placeholder="Password"
            required
          />
        </div>
        <div>
            <p className="text-center p-4">Forgotten Password?</p>
        </div>
        <div className=" flex justify-center pb-4">
            <button className="bg-blue-400 hover:bg-blue-500 w-50 p-2 rounded-2xl text-white mt-4">Login</button>
        </div>
        <hr />
        <div className="p-4">
            <p className="text-sm">Don't Have an Account?
              <Link to="/signup" className="font-bold text-blue-600"> Create new account!</Link>
               </p>
        </div>
        <hr />
        <div className="flex items-center justify-center pt-4">
          <button className="bg-white p-4 rounded-xl" >
     <a href="http://google.com" target="_blank" rel="noopener noreferrer">  Contnue with google</a>
          </button>
        </div>
      </div>
    </div>
  );
}
