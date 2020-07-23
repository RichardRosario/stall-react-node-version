import Axios from "axios";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";

const addToCart = (productId, qty) => async (dispatch) => {
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
  } catch (error) {}
};

const removeFromCart = (productId) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART, payload: productId });
};

export { addToCart, removeFromCart };
