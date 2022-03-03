import jwt from "jsonwebtoken";
import {CONFIG} from "../config/config.js"
const {SECRET_KEY} = CONFIG

export default (req, res, next) => {
    jwt.verify(req.session.token, SECRET_KEY, (err, decode) => {
        if (
            typeof decode === "undefined" ||
            (req.session.userId && req.session.userId !== decode.userId)
        ) {
            res.redirect("/auth/login");

            return;
        }
        next();
    });
};