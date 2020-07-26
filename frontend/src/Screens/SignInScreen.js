import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { detailsUser } from "../actions/userActions";

function SignInScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      // cleanup
    };
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h3>Signin</h3>
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li>
            <button type="submit" className="btn primary">
              Signin
            </button>
          </li>
          <li>New to Stall?</li>
          <li>
            <Link to="/register" className="btn full-width">
              Create your Stall account
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}
export default SignInScreen;
