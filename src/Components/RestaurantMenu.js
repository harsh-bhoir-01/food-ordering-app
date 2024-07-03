import { useParams } from "react-router-dom";
import ResName from "./ResName";
import { ShimmerMenu } from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import useFetchMenu from "../utils/useFetchMenu";
import useFetchResName from "../utils/useFetchResName";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuData = useFetchMenu(resId);
  const resName = useFetchResName(resId);
  const [showIndex, setShowIndex] = useState(null);

  const category = menuData?.filter(
    (c) =>
      c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
      c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return menuData?.length == 0 ? (
    <ShimmerMenu />
  ) : (
    <div className=" bg-softPeach h-full  w-full pt-24 ">
      <div className=" py-8">
        <ResName resData={resName} />
      </div>
      {category &&
        category?.map((c, index) => (
          <RestaurantCategory
            key={Math.random()}
            data={c?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
    </div>
  );
};

export default RestaurantMenu;
