import { Articles } from "../models/articles/articlesModel.js";

export const getLastArticles = ()=>{
  // return Articles
}

export const getAllArticles = () => {
  return Articles.find().exec();
};

export const createNewArticle = (body)=>{
//   const  {title, content, category, ...rest} = body
//   console.log("BODY--->",body);
//   res.end()
// const newArticle = new Articles({
//   title,
//   content,
  
  
  
// })
}

export const getOneArticleById = (id) => {
  return Articles.findById(id).exec();
};

export const deleteArticleById = (id) => {
  return Articles.findByIdAndDelete(id).exec();
};
