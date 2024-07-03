import { IMAGE_URL } from "../utils/constant";
import { AiFillStar } from "react-icons/ai";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, costForTwo, cuisines, avgRating, sla, cloudinaryImageId } =
    resData?.info;

  console;

  return (
    <div className="p-2 m-4 w-[240px] h-[280px] bg-offWhite hover:border shadow-2xl rounded-lg ">
      <img
        className=" w-[290px] h-[150px] rounded-md  "
        src={IMAGE_URL + cloudinaryImageId}
      />
      <h3 className=" text-lg font-semibold font-[poppins]  text-warmRed pt-2  line-clamp-1">
        {name}
      </h3>
      <h4 className=" text-black font-[poppins] text-base line-clamp-2 font-medium ">
        Cuisines: {cuisines?.join(", ")}
      </h4>
      <span className=" flex justify-between ">
        <div className="border rounded-md bg-[#57e32c] px-1 w-[48px]">
          <h4 className=" font-[poppins] text-base font-medium text-black flex flex-wrap">
            {<AiFillStar className="mt-[2.5px] text-white" />}
            {avgRating}
          </h4>
        </div>
        <h4 className=" font-[poppins] text-base font-medium text-black">
          {costForTwo}
        </h4>
        <h4 className=" font-[poppins] text-base font-medium text-black">
          {sla?.slaString}
        </h4>
      </span>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute bg-warmRed text-white p-1 rounded-md ml-4">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
