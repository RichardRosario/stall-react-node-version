import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { savePayment } from "../actions/cartActions";
import CheckoutProcess from "../components/CheckoutProcess";

function PaymentScreen(props) {
  const [paymentMethod, setPaymentMethod] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push("placeorder");
  };

  return (
    <div>
      <CheckoutProcess step1 step2 step3 />
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Payment</h2>
            </li>
            <li>
              <input
                type="radio"
                name="paymentMethod"
                id="paymentMethod"
                autoComplete="on"
                value="paypal"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="paymentMethod">paypal</label>
            </li>

            <li>
              <button type="submit" className="btn primary">
                Continue
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default PaymentScreen;
