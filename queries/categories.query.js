import { Categories } from "../models/categories/categoriesModel.js";

export const getCategoriesFromArticle = (arrCategoryIds) => {
   return Categories.find().where('_id').in(arrCategoryIds).exec();
}



export const findAllCategories = () => {
   return Categories.find().exec()
}

export const findOneCategory = (id) => {
   return Categories.findById(id).exec()
}

