import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./src/Components/Error";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import Footer from "./src/Components/Footer";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/Components/Cart";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className=" flex flex-wrap">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

const Grocery = lazy(() => import("./src/Components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
