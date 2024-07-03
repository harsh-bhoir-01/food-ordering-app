import { MENU_API } from "./constant";
import { useEffect, useState } from "react";

const useFetchMenu = (resId) => {
  const [menuInfo, setMenuInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    setMenuInfo(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );

    console.log(menuInfo);

    // setMenuInfo(
    //   json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     ?.card?.itemCards
    // );

    // setResData(json?.data?.cards[2]?.card?.card?.info);

    // const category =
    //   json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    //     (c) =>
    //       c.card?.["card"]?.["@type"] ===
    //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    //   );
  };

  return menuInfo;
};

export default useFetchMenu;
