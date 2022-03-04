import { Articles } from "../models/articles/articlesModel.js";
import { getCategoriesFromArticle } from "./categories.query.js"
import { getQuizzById } from "../queries/quizz.query.js";



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
    newArticle.categories.push({ _id: category._id, name: category.name });
  });

  if (rest.quizzId) {
    const quizz = await getQuizzById(rest.quizzId)
    newArticle.quizzes = quizz
  }

  return newArticle.save();
};

export const getOneArticleById = (id) => {
  return Articles.findById(id).exec();
};

export const deleteArticleById = (id) => {
  console.log("DELETE---->", id);
  return Articles.findByIdAndDelete(id).exec();
};

export const findArticleByCategory = (categoryId) => {
  return Articles.find({ "categories._id": categoryId }).exec()
}

export const findArticleByQuizz = (quizzId) => {
  return Articles.find({ quizzes: quizzId })
}
export const getKeywordsInArticles = (searchTerm) => {
  return Articles.find(
    { "content": { "$regex": searchTerm, "$options": "i" } }).exec()

}