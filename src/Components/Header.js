import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className=" fixed right-0 left-0">
      <div className=" w-full">
        <div className=" flex justify-between bg-brightOrange  h-20  shadow-2xl ">
          <div className=" m-2">
            <img
              className=" w-14 h-14 rounded-full ml-4 bg-opacity-15"
              src={LOGO_URL}
            />
          </div>
          <div className=" flex items-center">
            <ul className=" flex p-6 m-6 font-medium text-base text text-white font-serif">
              <li className=" px-3 cursor-pointer hover:text-black mt-4">
                <Link to="/">Home</Link>
              </li>
              <li className=" px-3  cursor-pointer hover:text-black mt-4">
                <Link to="/about">About</Link>
              </li>
              <li className=" px-3  cursor-pointer hover:text-black mt-4">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className=" px-3  cursor-pointer hover:text-black mt-4 ">
                <Link to="/cart" className="flex flex-wrap">
                  <BsCart4 className="mr-1 mt-[2px] " /> Cart {cartItems.length}{" "}
                </Link>
              </li>
              <li className=" px-3  cursor-pointer hover:text-black mt-4">
                <Link to="/grocery">Grocery</Link>
              </li>
              <li className=" px-3  cursor-pointer hover:text-black mt-4">
                Online Status:{onlineStatus ? "🟢" : "🔴"}
              </li>
              <button
                className="m-2 hover:text-black border border-solid border-black p-2 rounded-md mt-2"
                onClick={() => {
                  loginBtn === "Login"
                    ? setLoginBtn("Logout")
                    : setLoginBtn("Login");
                }}
              >
                {loginBtn}
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
