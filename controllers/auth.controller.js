import { findUserPerMail } from "../queries/users.query.js";


export const login = async (req, res, next) => {
  try {
    const { mail, password } = req.body;

    //First checking if user exist
    const user = await findUserPerMail(mail);

    if (!!user) {
      //Then checking if the provided password match with the password of the instance
      const match = await user.comparePassword(password);
      if (match) {
        req.login(user, user.isAdmin)
        res.status(200).end()
      } else {
        res.status(401).json("Veuillez verifier vos informations de connexion");
      }
    } else {
      res.status(401).json("Veuillez verifier vos informations de connexion");
    }
  } catch (e) {
    res.status(500).json("Une erreur s'est produite veuillez réessayer");
    throw e;
  }
};
