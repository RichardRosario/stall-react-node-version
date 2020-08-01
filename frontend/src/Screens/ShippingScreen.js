import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveShipping } from "../actions/cartActions";
import CheckoutProcess from "../components/CheckoutProcess";

function ShippingScreen(props) {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping(address, city, postalCode, country));
    props.history.push("payment");
  };

  return (
    <div>
      <CheckoutProcess step1 step2 />
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Shipping</h2>
            </li>
            <li>
              <label htmlFor="address">Address</label>
              <input
                type="address"
                name="address"
                id="address"
                autoComplete="on"
                onChange={(e) => setAddress(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="city">City</label>
              <input
                type="city"
                name="city"
                id="city"
                autoComplete="on"
                onChange={(e) => setCity(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="country">Country</label>
              <input
                type="country"
                name="country"
                id="country"
                autoComplete="on"
                onChange={(e) => setCountry(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="postalCode">Postal Code</label>
              <input
                type="postalCode"
                name="postalCode"
                id="postalCode"
                autoComplete="on"
                onChange={(e) => setPostalCode(e.target.value)}
              />
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

export default ShippingScreen;
