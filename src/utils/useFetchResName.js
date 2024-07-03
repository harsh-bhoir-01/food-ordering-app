import { MENU_API } from "./constant";
import { useEffect, useState } from "react";

const useFetchResName = (resId) => {
  const [resData, setResData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResData(json?.data?.cards[2]?.card?.card?.info);
  };
  return resData;
};

export default useFetchResName;
