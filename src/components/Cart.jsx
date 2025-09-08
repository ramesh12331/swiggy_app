import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="p-4 m-4">
      <h1 className="text-2xl font-bold text-center ">Cart</h1>
      <div className="w-6/12 mx-auto">
        <div className="text-center">
          <button
          className="py-1 px-4 m-2 bg-green-900 text-shadow-2xs/100 shadow-2xl/100 font-bold text-white rounded-lg cursor-pointer"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        </div>
        {cartItems.length === 0 && (
          <h1 className="text-center">Cart is empty Add Items to the cart!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
