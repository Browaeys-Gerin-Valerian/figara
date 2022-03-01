import { Articles } from "../models/articles/articlesModel.js";

export const getLastArticles = () => {
  return Articles.find().sort({updatedAt: -1}).limit(4);
};

export const getAllArticles = () => {
  return Articles.find().exec();
};

export const createNewArticle = (body) => {
  const { title, content, ...rest } = body;
  const newArticle = new Articles({
    title,
    content,
  });
  newArticle.categories.push(rest.categoryId);
  rest.quizzId && newArticle.quizzes.push(rest.quizzId);
  return newArticle.save();
};

export const getOneArticleById = (id) => {
  return Articles.findById(id).exec();
};

export const deleteArticleById = (id) => {
  return Articles.findByIdAndDelete(id).exec();
};
