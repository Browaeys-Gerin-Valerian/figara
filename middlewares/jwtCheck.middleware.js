import jwt from "jsonwebtoken";
import { CONFIG } from "../config/config.js";
const { SECRET_KEY } = CONFIG;
import { createJwt } from "../utils/jwt.functions.js";
import { findUserPerId } from "../queries/users.query.js";

export const extractUserFromToken = async (req, res, next) => {
  const token = req.cookies.webapp;
  console.log("TOKKKEEEENNN----->", token);
  if (token) {
    try {
      const decodedToken = jwt.verify(token, SECRET_KEY);
      const user = await findUserPerId(decodedToken.user);
      
      console.log("TOKKKEEEENNN_USER----->", decodedToken.user);
      console.log("TOKKKEEEENNN_ISADMIN----->", decodedToken.isAdmin);

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
