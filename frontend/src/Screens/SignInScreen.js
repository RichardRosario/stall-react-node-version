import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";

function SigninScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      // cleanup
    };
  }, [userInfo, props.history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <div>
      <div>
        <Link to="/" className="breadcrumb">
          Back to home
        </Link>
      </div>
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
              <li>
                <h2>Signin</h2>
              </li>
              <li>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="on"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </li>
              <li>
                <button type="submit" className="btn primary">
                  Signin
                </button>
              </li>
              <li>New to Stall?</li>
              <li className="">
                <button className="btn secondary">
                  <Link
                    to={
                      redirect === "/"
                        ? "register"
                        : "register?redirect=" + redirect
                    }
                  >
                    Create your Stall account
                  </Link>
                </button>
              </li>
            </ul>
          </form>
        </div>
      )}
    </div>
  );
}
export default SigninScreen;
