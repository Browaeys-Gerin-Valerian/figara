import { Users } from "../models/users/usersModel.js";
import { findUserPerMail } from "../queries/users.query.js"
import { checkPassword } from "../utils/functions.js"
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {

  if (req.method === "GET") {
    res.render("main/layout", { template: "register", error: "" });
  }

  if (req.method === "POST") {

    const { pseudo, password, mail } = req.body

    const user = await findUserPerMail(mail)
    if (user) {
      res.render("main/layout", { template: "register", error: "Cet email existe déja" });
      return;
    }

    const checkerPwd = checkPassword(password)
    if (!checkerPwd.isCorrect) {
      res.render("main/layout", { template: "register", error: checkerPwd.message });
    }
    bcrypt
      .hash(req.body.password, 10)
      .then((hash) => {
        Users.create({
          mail: req.body.mail,
          password: hash,
          pseudo: req.body.pseudo,
          isAdmin: false,
        })
          .then(() => res.redirect("login"))
          .catch((error) => {
            res.render("main/layout", { template: "register", error: "Erreur lors de la création" });
          });
      })
      .catch((error) => res.render("main/layout", { template: "register", error: "Une erreur est survenue" }));
  }
};

