
import {
  getAllArticles,
  getOneArticleById,
  deleteArticleById,
  getLastArticles,
  getKeywordsInArticles
} from "../queries/articles.query.js";
import { getCategoriesFromArticle } from "../queries/categories.query.js"

export const homepage = async (req, res) => {
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


export const articleDelete = async () => {
  const { id } = req.params;
  try {
    const article = await deleteArticleById(id);
    res.json(article).end();
  } catch (error) { }
};

export const searchInArticles = async (req, res) => {
  const { body } = req
  const { search } = body
  const articles = await getKeywordsInArticles(search)
  res.render("main/layout", { template: "search", articles, search })
}