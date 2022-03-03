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
    //le lastarticleList te renvoie un array de 4 articles
    res.render("main/layout", { template: "homepage", articles: lastArticleList });

  } catch (error) { }
};



export const allArticles = async (req, res) => {
  try {
    const articlesList = await getAllArticles();
    res.render("main/layout", { template: "articles", articles: articlesList });

  } catch (error) { }
};

export const articleDetail = async () => {
  const { id } = req.params;
  try {
    const article = await getOneArticleById(id);
    res.render("main/layout", { template: "auth/article", article });

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
