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
        <button onClick={addToCart}>Add to Cart</button>
      ) : (
        <div>
          <div>
            {/* Counter with Increment and Decrement Buttons */}
            <button
              onClick={decrementQuantity}
              disabled={cartItem.quantity <= 1}
            >
              -
            </button>
            <span> {cartItem.quantity} </span>
            <button onClick={incrementQuantity}>+</button>
          </div>
          <button onClick={removeFromCart}>Remove from Cart</button>
        </div>
      )}
    </div>
  );
};

export default CartButton;
