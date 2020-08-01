import Axios from "axios";
import Cookie from "js-cookie";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CART_SAVE_SHIPPING,
} from "../constants/cartConstants";

const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get("/api/products/" + productId);
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data.id,
        name: data.name,
        image: data.image,
        price: data.price,
        stockCount: data.stockCount,
        qty,
      },
    });
    const {
      cart: { cartItems },
    } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
  } catch (error) {}
};

const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_CART, payload: productId });

  const {
    cart: { cartItems },
  } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
};

const saveShipping = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING, payload: data });
};

export { addToCart, removeFromCart, saveShipping };
