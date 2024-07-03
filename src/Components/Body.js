import { useState, useEffect } from "react";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FcSearch } from "react-icons/fc";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
    // postFetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.907387933950282&lng=77.68339458154664&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    console.log("hello");
    const json = await data.json();

    console.log(json);

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const search = (searchText) => {
    setSearchText(searchText);
    const filteredSearch = listOfRestaurants?.filter((res) =>
      res?.info?.name.toUpperCase().includes(searchText.toUpperCase())
    );
    setFilteredRestaurants(filteredSearch);
  };

  // const postFetchData = async () => {
  //   try {
  //     console.log("hi");
  //     const data = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/update",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //
  //         },
  //       }
  //     );
  //     console.log(data);
  //     const json = await data.json();
  //     console.log(json);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleFilter = () => {
    const filteredList = listOfRestaurants?.filter(
      (res) => res?.info?.avgRatingString > "4"
    );

    setFilteredRestaurants(filteredList);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1 className=" bg-warmRed font-serif font-semibold text-2xl text-white">
        OOPS!! Something went wrong. Please check your internet connection☠
      </h1>
    );
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" bg-softPeach w-full pt-24 ">
      <div className=" flex ">
        <div className=" m-4 p-4 ml-28 flex justify-around">
          <input
            type="text"
            className="border-[1px] border-black w-[500px] rounded-md shadow-md hover:bg-softBrown font-serif p-1 ml-1 "
            placeholder="Savor Search"
            value={searchText}
            onChange={(e) => search(e.target.value)}
          />
          <span className="right-auto pt-[5px] text-2xl ml-1">
            <FcSearch />
          </span>
        </div>
        <div className=" flex items-center  mr-7 ">
          <button
            className=" w-52 bg-charcoal h-8 rounded-md text-white hover:bg-offWhite hover:text-black border hover:border-black shadow-md"
            onClick={handleFilter}
          >
            ⭐ Top rated Restaurant
          </button>
        </div>
      </div>
      <div className=" flex flex-wrap mx-28 ">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {restaurant?.info?.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
