import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutProcess from "../components/CheckoutProcess";

function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems, shipping, payment } = cart;
  if (!shipping) {
    props.history.push("/shipping");
  }
  if (!payment) {
    props.history.push("/payment");
  }

  // const dispatch = useDispatch();

  useEffect(() => {}, []);

  // checkout handler
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <CheckoutProcess step1 step2 step3 step4 />
      <div className="placeorder">
        <div className="placeorder-info">
          <div>
            <h3>Shipping</h3>
            <div>
              {cart.shipping.address},{cart.shipping.city},
              {cart.shipping.postalCode},{cart.shipping.country}
            </div>
          </div>
          <div>
            <h3>payment</h3>
            <div>Payment Method: {cart.payment.paymentMethod}</div>
          </div>
          <div>
            <ul className="cart-list-container">
              <li>
                <h3>Shopping Cart</h3>
                <div>Price</div>
              </li>
              {cartItems.length === 0 ? (
                <div>Cart is empty</div>
              ) : (
                cartItems.map((item) => (
                  <li key={item.qty}>
                    <div className="cart-image">
                      <img src={item.image} alt="product" />
                    </div>

                    <div className="cart-name">
                      <div>
                        <Link to={"/product/" + item.product}>{item.name}</Link>
                      </div>
                      <div>Qty: {item.qty}</div>
                    </div>
                    <div className="cart-price">${item.price}</div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="placeorder-action">
          <h3>Your Purchase Total:</h3>
          <h4>
            Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
            {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
          </h4>
          <button
            className="btn primary full-width"
            disabed={(cartItems.length === 0).toString()}
            onClick={() => submitHandler()}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrderScreen;
