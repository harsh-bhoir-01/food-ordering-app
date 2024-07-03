import { AiFillStar } from "react-icons/ai";

const ResName = (props) => {
  const { resData } = props;
  const { name, avgRatingString, costForTwoMessage, cuisines } = resData;

  return (
    <div className=" border border-solid mx-auto  h-38 rounded-lg w-[860px] shadow-xl bg-offWhite  ">
      <div className=" flex justify-center ">
        <h1 className=" font-serif text-2xl text-warmRed text-center pt-5">
          {name}
        </h1>
      </div>
      <div>
        <h4 className=" font-serif ml-5 p-1 text-base font-normal">
          {costForTwoMessage}
        </h4>
        <h4 className=" font-serif ml-5  p-1 text-base font-normal flex flex-wrap">
          {<AiFillStar className="mt-[4.4px] mr-1 text-[#008000]" />}
          {avgRatingString}
        </h4>
        <h4 className=" font-serif ml-5  p-1 text-base font-normal">
          Cuisines: {cuisines?.join(", ")}
        </h4>
      </div>
    </div>
  );
};

export default ResName;
