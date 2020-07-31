import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  saveProduct,
  listProducts,
  deleteProduct,
} from "../actions/productActions";

function ProductsScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [stockCount, setStockCount] = useState("");
  const [rating, setRating] = useState("");
  const [numReviews, setNumReviews] = useState("");

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;
  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;

  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listProducts());
    return () => {
      // cleanup
    };
  }, [dispatch, successSave, successDelete]);

  const openModal = (product) => {
    setModalVisible(true);
    setId(product._id);
    setName(product.name);
    setImage(product.image);
    setPrice(product.price);
    setCategory(product.category);
    setBrand(product.brand);
    setDescription(product.description);
    setStockCount(product.stockCount);
    setRating(product.rating);
    setNumReviews(product.numReviews);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        _id: id,
        name,
        price,
        category,
        brand,
        description,
        image,
        stockCount,
        rating,
        numReviews,
      })
    );
  };

  const deleteHandler = (product) => {
    dispatch(deleteProduct(product._id));
  };

  return (
    <div className="content content-margined">
      <Link to="/">Back to home</Link>
      <div className="product-header">
        <h3>Products</h3>
        <button className="btn" onClick={() => openModal({})}>
          Create Product
        </button>
      </div>
      {modalVisible && (
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
              <li>
                <h2>Create New Product</h2>
              </li>
              <li>
                {loadingSave && <div>loding...</div>}
                {errorSave && <div>{errorSave}</div>}
              </li>
              <li>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
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
                  value={price}
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
                  value={brand}
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
                  value={image}
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
                  value={description}
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
                  value={category}
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
                  value={stockCount}
                  autoComplete="on"
                  onChange={(e) => setStockCount(e.target.value)}
                />
              </li>
              <li>
                <button type="submit" className="btn primary">
                  {id ? "Update" : "Create Product"}
                </button>
                <button
                  onClick={() => setModalVisible(false)}
                  type="button"
                  className="btn secondary"
                >
                  Back
                </button>
              </li>
            </ul>
          </form>
        </div>
      )}
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
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <button className="btn" onClick={() => openModal(product)}>
                    Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => deleteHandler(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ProductsScreen;
