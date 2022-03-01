import { Articles } from "../models/articles/articlesModel.js";

export const getAllArticles = () => {
  return Articles.find().exec();
};

export const getOneArticleById = (id) => {
  return Articles.findById(id).exec();
};

export const deleteArticleById = (id) => {
  return Articles.findByIdAndDelete(id).exec();
};
