import MenuCard from "./MenuCard";
import { useState } from "react";

const NestedCategory = ({ items, nestedShowItems, setNestedShowIndex }) => {
  const handleClick = () => {
    setNestedShowIndex();
  };

  return (
    <div className=" pb-1 cursor-pointer border-softBrown border-b-[1px]">
      <div
        className=" w-[840px] bg-offWhite p-4 mx-auto  rounded-xl  "
        onClick={handleClick}
      >
        <div className="flex justify-between ">
          <span className=" font-serif text-lg p-2  ">
            {items.title} (
            {items?.itemCards?.length || items?.categories?.length})
          </span>
          <span className=" p-2 ">▼</span>
        </div>
        {nestedShowItems && <MenuCard items={items} />}
      </div>
    </div>
  );
};

export default NestedCategory;
