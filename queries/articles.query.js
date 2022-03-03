import { Articles } from "../models/articles/articlesModel.js";
import { getCategoriesFromArticle } from "./categories.query.js"

export const getLastArticles = () => {
  return Articles.find().sort({ updatedAt: -1 }).limit(4);
};

export const getAllArticles = () => {
  return Articles.find().exec();
};

export const createNewArticle = async (body) => {
  const { title, content, categoryId, ...rest } = body;
  const newArticle = new Articles({
    title,
    content,
  });

  const categoryToArray = Object.keys(categoryId)
  const categoryInArticle = await getCategoriesFromArticle(categoryToArray)

  categoryInArticle.forEach(category => {
   console.log("CATEGORY--->", category)
    newArticle.categories.push({ _id: category._id, name: category.name });
  });

  // rest.quizzId && newArticle.quizzes.push(rest.quizzId);
  return newArticle.save();
};

export const getOneArticleById = (id) => {
  return Articles.findById(id).exec();
};

export const deleteArticleById = (id) => {
  return Articles.findByIdAndDelete(id).exec();
};