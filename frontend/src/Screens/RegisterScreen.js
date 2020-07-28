import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";

function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, registerInfo, error } = userRegister;
  const dispatch = useDispatch();

  useEffect(() => {
    if (registerInfo) {
      props.history.push("/");
    }
    return () => {
      // cleanup
    };
  }, [registerInfo, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password, rePassword));
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
                <h3>Register</h3>
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
                <label htmlFor="email">ReEnter Password</label>
                <input
                  type="rePassword"
                  name="rePassword"
                  id="rePassword"
                  autoComplete="off"
                  onChange={(e) => setRePassword(e.target.value)}
                />
              </li>
              <li>
                <button type="submit" className="btn primary">
                  Register
                </button>
              </li>
              <li>Have an account with Stall?</li>
              <li className="">
                <button className="btn secondary">
                  <Link to="/signin">Signin</Link>
                </button>
              </li>
            </ul>
          </form>
        </div>
      )}
    </div>
  );
}
export default RegisterScreen;
