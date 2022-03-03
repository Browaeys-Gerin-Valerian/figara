import { Users } from "../models/users/usersModel.js";
import { findUserPerMail } from "../queries/users.query.js"
import { checkPassword, checkEmail } from "../utils/functions.js"
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {

  if (req.method === "GET") {
    res.render("main/layout", { template: "register", error: "" });
  }

  if (req.method === "POST") {

    const { pseudo, password, mail } = req.body

    const checkerEmail = checkEmail(mail)
    if(!checkerEmail.isCorrect){
      res.render("main/layout", { template: "register", error: checkerEmail.message });
      return;
    }


    const user = await findUserPerMail(mail)
    if (user) {
      res.render("main/layout", { template: "register", error: "Cet email existe déja" });
      return;
    }

    const checkerPwd = checkPassword(password)
    if (!checkerPwd.isCorrect) {
      res.render("main/layout", { template: "register", error: checkerPwd.message });
      return
    }
    bcrypt
      .hash(password, 10)
      .then((hash) => {
        Users.create({
          mail: mail,
          password: hash,
          pseudo: pseudo,
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

