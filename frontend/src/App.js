import React from "react";
import "./style.css";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="index.html">Stall</a>
          <span>react-node version</span>
        </div>
        <div className="header-links">
          <a href="Cart">Cart</a>
          <a href="signin">Sign in</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="close-btn" onClick={closeMenu}>
          x
        </button>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="index.html">Shirt</a>
          </li>
        </ul>
      </aside>

      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="./images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Longsleeves</a>
                </div>
                <div className="product-brand">nike</div>
                <div className="product-price">$23</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="./images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Longsleeves</a>
                </div>
                <div className="product-brand">nike</div>
                <div className="product-price">$23</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="./images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Longsleeves</a>
                </div>
                <div className="product-brand">nike</div>
                <div className="product-price">$23</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="./images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Longsleeves</a>
                </div>
                <div className="product-brand">nike</div>
                <div className="product-price">$23</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="./images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Longsleeves</a>
                </div>
                <div className="product-brand">nike</div>
                <div className="product-price">$23</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">All right reserve. Stall eCommerce</footer>
    </div>
  );
}

export default App;
