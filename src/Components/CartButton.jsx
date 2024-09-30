import { FaTrash } from "react-icons/fa6";
import { Product } from "./Product";
import { useState } from "react";

// Sample product data

const CartButton = () => {
  const [cartItem, setCartItem] = useState(null); // Holds the cart item and quantity if added

  // Add item to cart (initial button click)
  const addToCart = () => {
    setCartItem({
      ...Product,
      quantity: 1,
    });
  };

  // Increment item quantity
  const incrementQuantity = () => {
    setCartItem((prevItem) => ({
      ...prevItem,
      quantity: prevItem.quantity + 1,
    }));
  };

  // Decrement item quantity
  const decrementQuantity = () => {
    setCartItem((prevItem) => {
      if (prevItem.quantity > 1) {
        return {
          ...prevItem,
          quantity: prevItem.quantity - 1,
        };
      } else {
        return prevItem; // Do nothing if quantity is already 1
      }
    });
  };

  // Remove item from cart
  const removeFromCart = () => {
    setCartItem(null); // Resets cart state
  };

  return (
    <div>
      {/* If item is not in cart, show Add to Cart button */}
      {!cartItem ? (
        <button className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md" onClick={addToCart}>Add to Cart</button>
      ) : (
        <div className="flex gap-4 items-center">
          <div>
            {/* Counter with Increment and Decrement Buttons */}
            <button
              onClick={decrementQuantity}
              disabled={cartItem.quantity <= 1}
              className="border-2 px-2 py-1"
            >
              -
            </button>
            <span> {cartItem.quantity} </span>
            <button className="border-2 px-2 py-1" onClick={incrementQuantity}>+</button>
          </div>
          <button className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md" onClick={removeFromCart}><FaTrash /></button>
        </div>
      )}
    </div>
  );
};

export default CartButton;
