import { Users } from "../models/users/usersModel.js";

export const findUserPerMail = (mail) => {
  return Users.findOne({ mail }).exec();
};

export const findUserPerId = (id) => {
  return Users.findById(id);
};

