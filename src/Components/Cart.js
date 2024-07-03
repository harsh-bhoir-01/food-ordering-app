import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./MenuCard";
import { BsFillTrashFill } from "react-icons/bs";
import { clearCart } from "../utils/cartSlice";
import { BsCartXFill } from "react-icons/bs";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="bg-softPeach w-full min-h-screen pt-14">
      <div className="">
        <div className="pt-20 text-center font-serif font-semibold border-b-[1px] text-lg border-charcoal w-[60%] mx-auto pb-4">
          <div className=" text-2xl ">Cart</div>
          <button
            onClick={handleClearCart}
            className="p-2 border border-black rounded-lg shadow-xl flex flex-wrap ml-[650px] font-serif font-medium text-warmRed bg-softBrown mt-2 mb-2 hover:bg-warmRed hover:text-white "
          >
            Clear Cart <BsFillTrashFill className=" m-1" />
          </button>
        </div>
      </div>

      <div className="flex justify-center pt-2">
        {cartItems.length === 0 && (
          <h1 className=" py-20 text-2xl font-[poppins] font-medium ">
            Oops, your cart is empty! Time to add some mouth-watering dishes
            <BsCartXFill className="mx-80 mt-4 text-4xl" />
          </h1>
        )}
        <MenuCard items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
