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

  // handle add to cart
  const handleAddToCart = () => {
    props.history.push("/cart/" + prodId + "?qty=" + qty);
  };

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
              <li className="status">
                Status:
                {product.stockCount <= 0 ? (
                  <span className="out-of-stock">Out of Stock</span>
                ) : (
                  <span className="inStock">
                    {product.stockCount + " items in stock!"}
                  </span>
                )}
              </li>
              <li>
                Qty:
                <select
                  value={qty}
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                >
                  {[...Array(product.stockCount).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                {product.stockCount > 0 && (
                  <button onClick={handleAddToCart} className="btn">
                    Add to cart
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductScreen;
