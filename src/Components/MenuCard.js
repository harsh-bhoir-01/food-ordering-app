import { useDispatch } from "react-redux";
import { FOOD_URL } from "../utils/constant";
import { addItems } from "../utils/cartSlice";

const MenuCard = ({ items }) => {
  console.log("Menu cards");
  // const { itemCards } = items;
  const itemCards = items.itemCards != null ? items.itemCards : items;

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div className=" cursor-pointer">
      {itemCards?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className=" flex justify-between border-t-[2px] border-t-[#F0F0f0] mx-auto h-[210px] hover:bg-[#F0F0F0] "
        >
          <div>
            <div className=" pt-6 font-serif w-[500px]">
              <h2 className=" text-warmRed font-medium text-base p-1">
                {item?.card?.info?.name} [
                {item?.card?.info?.itemAttribute?.vegClassifier == "VEG"
                  ? "🟢"
                  : "🔴"}
                ]
              </h2>
              <h4 className=" text-charcoal p-1 font-medium">
                ₹
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </h4>
              <h5 className=" text-charcoal p-1 line-clamp-4">
                {item?.card?.info?.description}
              </h5>
            </div>
          </div>
          <div>
            <div>
              <div className=" mt-4 w-[250px] h-[250px]  ">
                <img
                  className="  rounded-xl shadow-xl w-[150px] h-[150px]"
                  src={FOOD_URL + item?.card?.info?.imageId}
                />
                <button
                  className=" text-black font-serif font-semibold rounded-lg px-2 ml-10 bg-softBrown hover:border border-b-charcoal pt-1 my-2 "
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCard;
