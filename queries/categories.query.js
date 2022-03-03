import { Categories } from "../models/categories/categoriesModel.js";

export const getCategoriesFromArticle = (arrCategoryIds) => {
   return Categories.find().where('_id').in(arrCategoryIds).exec();
}

// export const getCategoriesFromArticles = (ListArticle) => {
//     return ListArticle[0].categories[0].find().populate("categories").exec()
// }