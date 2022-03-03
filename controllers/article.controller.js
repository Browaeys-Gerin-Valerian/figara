import {
  getAllArticles,
  getOneArticleById,
  deleteArticleById,
  getLastArticles,
  createNewArticle,
} from "../queries/articles.query.js";
import { getCategoriesFromArticle } from "../queries/categories.query.js"

export const lastArticles = async (req, res) => {
  try {
    const lastArticleList = await getLastArticles();
    res.render("main/layout", { template: "homepage", articles: lastArticleList });

  } catch (error) { }
};



export const allArticles = async (req, res) => {
  try {
    const articles = await getAllArticles();

    

    res.render("main/layout", { template: "articles", articles });

  } catch (error) { }
};

export const articleDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await getOneArticleById(id);
    const articleCategories = await getCategoriesFromArticle(article?.categories)
    res.render("main/layout", { template: "auth/article", article, articleCategories });
  } catch (error) { }
};



export const newArticle = async (req, res) => {
  const { body } = req;
  try {
    const newArticle = await createNewArticle(body);
    res.json(newArticle).end();
  } catch (error) { }
};


export const articleDelete = async () => {
  const { id } = req.params;
  try {
    const article = await deleteArticleById(id);
    res.json(article).end();
  } catch (error) { }
};
