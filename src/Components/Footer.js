import { BiCopyright } from "react-icons/bi";
import { FcLike } from "react-icons/fc";

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-1 w-full bg-softPeach font-serif py-2 mt-auto ">
      <div className="flex flex-wrap">
        <h1>Created by</h1>
        <div>
          <FcLike className=" mt-1 ml-1" />
        </div>
      </div>
      <h1 className="text-warmRed"> Harsh Bhoir</h1>
      <h1>
        <BiCopyright className="mt-1 font-bol" />
      </h1>
      <h1>2024</h1>
      <h1>Food Mania</h1>
    </div>
  );
};

export default Footer;
