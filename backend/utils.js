import jwt from "jsonwebtoken";
import config from "./config";

const getToken = (user) => {
  return jwt.sign({ payload: user }, config.JWT_SECRET, {
    expiresIn: "48h",
  });
};

const isAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const myToken = token.slice(7, token.length);
    jwt.verify(myToken, config.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ msg: "Invalid token" });
      }
      req.user = token;
      next();
      return;
    });
  }
  return res.status(401).send({ msg: "Token is not supplied" });
};

const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();
  }
  return res.status(401).send({ msg: "token is not valid" });
};

export { getToken, isAuth, isAdmin };
