import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { saveProduct, listProducts } from "../actions/productActions";

function ProductsScreen(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [stockCount, setStockCount] = useState("");

  const productList = useSelector((state) => state.productList);
  const { error } = productList;
  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
    return () => {
      // cleanup
    };
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        name,
        price,
        category,
        brand,
        description,
        image,
        stockCount,
      })
    );
  };

  return (
    <div className="content content-margined">
      <div>
        <div>
          <Link to="/" className="breadcrumb">
            Back to home
          </Link>
        </div>
      </div>
      <div className="product-header">
        <h3>Products</h3>
        <button>Create Product</button>
        {loadingSave ? (
          <div>loading...</div>
        ) : successSave ? (
          <div>Product save successfuly!</div>
        ) : errorSave ? (
          <div>{error}</div>
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
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="on"
                    onChange={(e) => setName(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    autoComplete="off"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="brand">Brand</label>
                  <input
                    type="type"
                    name="brand"
                    id="brand"
                    autoComplete="on"
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="image">Product Image</label>
                  <input
                    type="text"
                    name="image"
                    id="image"
                    autoComplete="on"
                    onChange={(e) => setImage(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="description">Description</label>
                  <textarea
                    type="type"
                    name="description"
                    id="description"
                    autoComplete="on"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </li>

                <li>
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    autoComplete="on"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </li>

                <li>
                  <label htmlFor="stockCount">Stock Count</label>
                  <input
                    type="text"
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
      <div className="product-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <th>{product._id}</th>
              <th>{product.name}</th>
              <th>{product.price}</th>
              <th>{product.category}</th>
              <th>{product.brand}</th> */}
              <th>
                <button>Edit</button>
                <button>Delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ProductsScreen;
