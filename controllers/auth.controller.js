import jwt from "jsonwebtoken";
import { findUserPerMail } from "../queries/users.query.js";
import { getLastArticles } from "../queries/articles.query.js";
import { CONFIG } from "../config/config.js"
const { SECRET_KEY } = CONFIG
import { Users } from "../models/users/usersModel.js"


export const login = async (req, res, next) => {
    try {

        if (req.method === "GET") {
            res.render("main/layout", { template: "login", error: null });
        }

        if (req.method === "POST") {

            const { mail, password } = req.body;
            const user = await findUserPerMail(mail);
            if (!user) {
                res.render("main/layout", {
                    template: "login",
                    error: "no user with this mail",
                });
                return;
            }
            console.log("USER---->", user);

            const pwdChecked = await user.comparePassword(password, user.password);
            console.log("PWD---->", pwdChecked);

            if (pwdChecked) {
                console.log("PWD_CHECK");
                req.session.token = jwt.sign(
                    { userId: user._id },
                    SECRET_KEY,
                    { expiresIn: "24h" }
                );
                req.session.userId = user._id;
                req.session.pseudo = user.pseudo;
                console.log("PWD_CHECK_USER", req.session.userId);
                console.log("PWD_CHECK_PSEUDO", req.session.pseudo);

                const lastArticleList = await getLastArticles()
                res.render("main/layout", { template: "homepage", articles: lastArticleList })
                // res.redirect("register")

                return;
            }

            res.render("main/layout", {
                template: "login",
                error: "bad password",
            });
        }
    } catch (err) {
        throw err;
    }
};

export const logout = async (req, res) => {
    req.session.destroy();
    const lastArticleList = await getLastArticles()
    res.render("main/layout", { template: "homepage", articles: lastArticleList })

}
