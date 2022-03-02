import { Users } from "../models/users/usersModel.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {

  if (req.method === "GET") {
    res.render("main/layout", { template: "signup" });
  }

  if (req.method === "POST") {
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
            res.render("main/layout", { template: "signup", error: "Erreur lors de la création" });
          });
      })
      .catch((error) => res.render("main/layout", { template: "signup", error: "Une erreur est survenue" }));
  }


};

export const getProfil = async (req, res) => {
  res.json(req.user)
}
