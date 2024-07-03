import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className=" bg-warmRed text-white font-serif font-semibold text-4xl h-screen p-9 pl-5">
      <h2>😫OOOPS!!!</h2>
      <h1>Something went Wrong</h1>
      <h3>
        {err.status} {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
