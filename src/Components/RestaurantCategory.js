import MenuCard from "./MenuCard";
import { useState } from "react";
import NestedCategory from "./NestedCategory";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const { title } = data;

  const [nestedShowIndex, setNestedShowIndex] = useState(null);

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className=" pb-1 cursor-pointer ">
      <div className="w-[860px] bg-offWhite shadow-lg my-4 p-2 mx-auto  rounded-xl ">
        <div className="flex justify-between" onClick={handleClick}>
          <span className=" font-serif text-base p-2">
            {title} ({data?.itemCards?.length || data?.categories?.length})
          </span>
          <span className=" p-2 ">▼</span>
        </div>

        {showItems &&
        data?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
          ? data?.categories?.map(
              (cat, index) =>
                showItems && (
                  <NestedCategory
                    items={cat}
                    key={Math.random()}
                    nestedShowItems={index === nestedShowIndex ? true : false}
                    setNestedShowIndex={() => setNestedShowIndex(index)}
                  />
                )
            )
          : showItems && <MenuCard items={data} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
