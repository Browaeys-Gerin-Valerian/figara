import {
  getAllArticles,
  getOneArticleById,
  deleteArticleById,
} from "../queries/articles.query.js";

// export const lastArticles = ()=>{
//   try {
//     const lastArticleList = await getLastArticles()
//   } catch (error) {
    
//   }
// }

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
