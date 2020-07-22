import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";

function ProductScreen(props) {
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const prodId = props.match.params.id;

  useEffect(() => {
    dispatch(detailsProduct(prodId));
    return () => {
      // cleanup
    };
  }, [dispatch, prodId]);

  return (
    <div className="product-single">
      <div>
        <Link to="/" className="breadcrumb">
          Back to home
        </Link>
      </div>
      {/* check loading */}
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="details">
          <div className="details-image">
            <img src={product.image} alt="product" />
          </div>

          <div className="details-info">
            <ul>
              <li>
                <h4>{product.name}</h4>
              </li>
              <li>
                {product.rating} Stars ({product.numReviews} Reviews)
              </li>
              <li>${product.price}</li>
              <li>
                Description:
                {product.desc}
              </li>
            </ul>
          </div>
          <div className="details-action">
            <ul>
              <li>Price: ${product.price}</li>
              <li className="status">Status: {product.status}</li>
              <li>
                Qty:
                <select
                  value={qty}
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                >
                  {[...Array(product.stockCount).keys()].map((x) => (
                    <option value={x + 1}>{x + 1}</option>
                  ))}
                </select>
              </li>
              <li>
                <button className="btn">Add to cart</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductScreen;
