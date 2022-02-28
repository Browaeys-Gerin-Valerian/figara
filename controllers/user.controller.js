import { Users } from "../models/users/usersModel.js";
import  bcrypt  from "bcrypt";

export const createUser = async (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      Users.create({
        mail: req.body.mail,
        password: hash,
        pseudo: req.body.pseudo,
        isAdmin: false,
      })
        .then(() => res.status(201).json({ message: "Utilisateur créé" }))
        .catch((error) => {
          res.status(400).json({ error: "Requête incorrecte" });
        });
    })
    .catch((error) => res.status(500).json({ error }));
};
