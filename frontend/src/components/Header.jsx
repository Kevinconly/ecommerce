import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="top-0 h-16 text-center bg-blue-800 flex flex-row items-center text-xl p-4 gap-4">
      <div className="mr-60">
        <Link to="/">
          <img src="./assets/react.svg" alt="logo" />
        </Link>
      </div>
      <div className="flex gap-1 ml-36">
        <input
          type="text"
          placeholder="serach for product"
          className="rounded-2xl text-white"

        />
        <button className="bg-blue-400 hover:bg-blue-500 w-50  rounded-2xl text-white p-2">
          search
        </button>
      </div>
      <div className="ml-68">
        <ul className="flex text-center lg:gap-4 md:gap-3.5 sm:gap-2.5 text-white ">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
           <Link to="">Cart</Link> 
            </li>
          <li>
            <Link to="">Account</Link>
            </li>
          <li>
            <Link to="/login">Login</Link>
            </li>
        </ul>
      </div>
    </div>
  );
}
