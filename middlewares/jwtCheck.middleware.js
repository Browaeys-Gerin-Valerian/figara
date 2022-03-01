import jwt from "jsonwebtoken";
import { CONFIG } from "../config/config.js";
const { SECRET_KEY } = CONFIG;
import { createJwt } from "../utils/jwt.functions.js";
import { findUserPerId } from "../queries/users.query.js";

export const extractUserFromToken = async (req, res, next) => {
  const token = req.cookies.webapp;
  if (token) {
    try {
      const decodedToken = jwt.verify(token, SECRET_KEY);
      const user = await findUserPerId(decodedToken.user);

      if (user) {
        req.user = user;
        req.isAuth = true;
        next();
      } else {
        res.clearCookie("webapp");
        req.user = null;
        req.isAuth = false;
      }
    } catch (e) {
      res.clearCookie("webapp");
      req.user = null;
      req.isAuth = false;
      next();
    }
  } else {
    next();
  }
};

export const jwtHelpers = (req, res, next) => {
  req.logout = () => {
    res.clearCookie("webapp");
    req.user = null;
    res.isAuth = false;
    res.redirect("/");
  };
  req.login = (user, isAdmin) => {
    const token = createJwt(user._id, isAdmin);
    req.user = user;
    req.isAuth = true;
    res.cookie("webapp", token);
  };
  next();
};

export const isAuthenticated = (req, res, next) => {
  if (req.isAuth) {
    next();
  } else {
    res.status(403).end();
  }
};

export const isAuthenticatedAsAdmin = (req, res, next)=>{
  if(req.isAuth && req.user.isAdmin){
    next()
  } else {
    res.status(403).end()
  }
}
