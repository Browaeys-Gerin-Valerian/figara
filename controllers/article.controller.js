import {
  getAllArticles,
  getOneArticleById,
  deleteArticleById,
  getLastArticles,
  createNewArticle,
} from "../queries/articles.query.js";

export const lastArticles = async (req, res) => {
  try {
    const lastArticleList = await getLastArticles();
    res.json(lastArticleList).end();
  } catch (error) {}
};

export const newArticle = async (req, res) => {
  const { body } = req;
  try {
    const newArticle = await createNewArticle(body);
    res.json(newArticle).end();
  } catch (error) {}
};

export const allArticles = async (req, res) => {
  try {
    const articlesList = await getAllArticles();
    res.json(articlesList).end();
  } catch (error) {}
};

export const articleDetail = async () => {
  const { id } = req.params;
  try {
    const article = await getOneArticleById(id);
    res.json(article).end();
  } catch (error) {}
};

export const articleDelete = async () => {
  const { id } = req.params;
  try {
    const article = await deleteArticleById(id);
    res.json(article).end();
  } catch (error) {}
};
