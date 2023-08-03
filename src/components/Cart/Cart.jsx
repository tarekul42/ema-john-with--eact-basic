import React from "react";
import "./Cart.css";

const Cart = ({cart, handleClearCart, children}) => {
    // const cart = props.cart; //*option 1

    // const {cart} = props; //! option 2

    // console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
      // if(product.quantity === 0){
      //   product.quantity = 1;
      // }
      // product.quantity = product.quantity || 1;
      totalPrice = totalPrice + product.price * product.quantity;
      totalShipping = totalShipping + product.shipping * product.quantity;
      quantity = quantity + product.quantity;
    }

    const tax = totalPrice*7/100;

    const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h1>Cart</h1>
      <p>Selected Item: {quantity}</p>
      <p>Total Price: {totalPrice} </p>
      <p>Shipping: {totalShipping} </p>
      <p>Tax: {tax.toFixed(2)} </p>
      <h5>Grand Total: ${grandTotal.toFixed(2)} </h5>
      <button onClick={handleClearCart} className="btn-clear-cart">
        <span>Clear Cart</span>
      <svg className='delete-icon-cart'  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
      </button>
      {children}
    </div>
  );
};

export default Cart;
                                                                                                   