import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function ProductsScreen(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [numReviews, setNumReviews] = useState("");
  const [stockCount, setStockCount] = useState("");

  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      // cleanup
    };
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        name,
        price,
        category,
        brand,
        description,
        rating,
        numReviews,
        image,
        stockCount,
      })
    );
  };

  return (
    <div>
      <div>
        <Link to="/" className="breadcrumb">
          Back to home
        </Link>
      </div>
      {loadingSave ? (
        <div>loading...</div>
      ) : successSave ? (
        <div>Product save successfuly!</div>
      ) : error ? (
        <div>{errorSave}</div>
      ) : (
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
              <li>
                <h2>Create New Product</h2>
              </li>
              <li>
                <label htmlFor="name">Name</label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  autoComplete="on"
                  onChange={(e) => setName(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="price">Price</label>
                <input
                  type="price"
                  name="price"
                  id="price"
                  autoComplete="off"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="brand">Brand</label>
                <input
                  type="brand"
                  name="brand"
                  id="brand"
                  autoComplete="on"
                  onChange={(e) => setBrand(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="image">Product Image</label>
                <input
                  type="image"
                  name="image"
                  id="image"
                  autoComplete="on"
                  onChange={(e) => setImage(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="description">Description</label>
                <input
                  type="description"
                  name="description"
                  id="description"
                  autoComplete="on"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="rating">Rating</label>
                <input
                  type="rating"
                  name="rating"
                  id="rating"
                  autoComplete="on"
                  onChange={(e) => setRating(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="category">Category</label>
                <input
                  type="category"
                  name="category"
                  id="category"
                  autoComplete="on"
                  onChange={(e) => setCategory(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="numReviews">Number of Reviews</label>
                <input
                  type="numReviews"
                  name="numReviews"
                  id="numReviews"
                  autoComplete="on"
                  onChange={(e) => setNumReviews(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="stockCount">Stock Count</label>
                <input
                  type="stockCount"
                  name="stockCount"
                  id="stockCount"
                  autoComplete="on"
                  onChange={(e) => setStockCount(e.target.value)}
                />
              </li>
              <li>
                <button type="submit" className="btn primary">
                  Create Product
                </button>
              </li>
            </ul>
          </form>
        </div>
      )}
    </div>
  );
}
export default ProductsScreen;
